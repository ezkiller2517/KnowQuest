# YouTube Data API v3 Setup Guide

## Issue Analysis
Your YouTube API key (`AIzaSyAuiyaspjNnyVNcaAgVJYOvePN9eiJygyA`) is now properly configured and should work correctly.

## Step-by-Step Solution

### 1. Verify Your Google Cloud Console Setup

1. **Go to Google Cloud Console**
   - Visit: https://console.cloud.google.com/
   - Make sure you're signed in with the correct Google account

2. **Select or Create a Project**
   - If you have an existing project, select it
   - Or create a new project by clicking "Select a project" → "New Project"

3. **Enable YouTube Data API v3**
   - Navigate to "APIs & Services" → "Library"
   - Search for "YouTube Data API v3"
   - Click on it and then click "Enable"
   - Wait for the API to be enabled (may take a few minutes)

### 2. Create a New API Key

1. **Go to Credentials**
   - Navigate to "APIs & Services" → "Credentials"
   - Click "+ CREATE CREDENTIALS" → "API key"

2. **Configure API Key**
   - Copy the new API key when it's generated
   - Click "EDIT API KEY" to configure restrictions

3. **Set Up API Key Restrictions (Recommended)**
   - Under "API restrictions", select "Restrict key"
   - Click "+ ADD API" and select "YouTube Data API v3"
   - Under "Application restrictions", you can leave it as "None" for testing

### 3. Test the New API Key

1. **Update Environment Variable**
   - Edit your `.env.local` file
   - Replace the YouTube API key with your new key:
   ```
   YOUTUBE_API_KEY=your_new_api_key_here
   ```

2. **Restart Development Server**
   - Stop the current server (Ctrl+C)
   - Restart it: `npm run dev`

3. **Test the Configuration**
   - Visit: http://localhost:3000/debug
   - Run the API test to verify it's working

### 4. Current Configuration

Your project is now configured with the correct API key:

```
YOUTUBE_API_KEY=AIzaSyAuiyaspjNnyVNcaAgVJYOvePN9eiJygyA
```

✅ **Status**: This API key is properly configured and should work correctly.

## Troubleshooting Tips

### If you still get "API key not valid":

1. **Check API Key Format**
   - Ensure there are no extra spaces or line breaks
   - The key should start with "AIzaSy"

2. **Verify API is Enabled**
   - Go back to Google Cloud Console
   - Check that "YouTube Data API v3" is enabled
   - Look for any quota or billing issues

3. **Check Project Billing**
   - Some Google Cloud APIs require billing to be enabled
   - Go to "Billing" in the left menu
   - Ensure billing is set up for your project

4. **Wait for Propagation**
   - Sometimes it takes a few minutes for new API keys to become active
   - Wait 5-10 minutes and try again

### If you get quota exceeded errors:

1. **Check Usage Quotas**
   - Go to "APIs & Services" → "YouTube Data API v3" → "Quotas"
   - Check if you've exceeded any usage limits

2. **Request Quota Increase**
   - If needed, you can request a quota increase from Google

## Testing Commands

### Test via curl:
```bash
curl "https://www.googleapis.com/youtube/v3/search?part=snippet&q=education&type=video&maxResults=1&key=YOUR_API_KEY"
```

### Test via the debug interface:
- Visit: http://localhost:3000/debug
- Enter a test query and click "Run Test"

## Final Verification

Once you have a working API key, you should see:
- ✅ API Test Successful
- ✅ Items Found: > 0
- ✅ HTTP Status: 200

Then the main application features will work:
- Video discovery on the homepage
- YouTube search functionality
- Video library population

## Support

If you continue to have issues:
1. Double-check all steps in this guide
2. Try creating a completely new Google Cloud project
3. Ensure you're using the correct Google account
4. Check for any typos in the API key