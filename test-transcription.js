#!/usr/bin/env node

// Test script for the new AssemblyAI transcription system
const fetch = require('node-fetch');

async function testTranscription() {
  console.log('🧪 Testing AssemblyAI Transcription System...\n');

  // Test 1: Start transcription
  console.log('1️⃣ Testing transcription start...');
  try {
    const startResponse = await fetch('http://localhost:3000/api/assemblyai/start', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        videoId: 'TG6XSFeOT3g' // A test video ID
      }),
    });

    const startData = await startResponse.json();
    console.log('Start Response:', startResponse.status, startData);

    if (startResponse.ok && startData.ok) {
      console.log('✅ Transcription started successfully!');
      console.log(`   Mode: ${startData.mode}`);
      console.log(`   Job ID: ${startData.jobId}`);
      
      if (startData.mode === 'drive-fallback') {
        console.log(`   Drive File ID: ${startData.fileId}`);
      }

      // Test 2: Poll status
      console.log('\n2️⃣ Testing status polling...');
      const jobId = startData.jobId;
      
      // Poll for status (max 30 seconds)
      for (let i = 0; i < 12; i++) {
        await new Promise(resolve => setTimeout(resolve, 2500));
        
        const statusResponse = await fetch(`http://localhost:3000/api/assemblyai/status?jobId=${jobId}`);
        const statusData = await statusResponse.json();
        
        console.log(`   Poll ${i + 1}: ${statusData.status} (${statusData.wordsProcessed || 0} words)`);
        
        if (statusData.status === 'completed') {
          console.log('✅ Transcription completed!');
          console.log(`   Text length: ${statusData.text?.length || 0} chars`);
          console.log(`   Segments: ${statusData.segments?.length || 0}`);
          break;
        } else if (statusData.status === 'error') {
          console.log('❌ Transcription failed:', statusData.error);
          break;
        }
      }
      
    } else {
      console.log('❌ Failed to start transcription:', startData.error);
    }
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

if (require.main === module) {
  testTranscription();
}

module.exports = { testTranscription };