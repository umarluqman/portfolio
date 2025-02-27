# Video Integration with Mux and Next.js Video

This project uses [Mux](https://mux.com/) for video hosting and [Next.js Video](https://next-video.dev/) for integration.

## Project Structure

The videos directory contains:

1. Individual JSON files for each video (e.g., `satsigner-utxo-bubbles.json`)
2. A combined `projects.json` file that contains all project data

## How to Add or Update Videos

### Option 1: Update Individual Files and Regenerate projects.json

1. Upload your video to the Mux dashboard
2. Get the Playback ID for the video from the Mux dashboard
3. Create or update the corresponding JSON file in the `videos` directory:

```json
{
  "provider": "mux",
  "title": "Your Video Title",
  "description": "Your video description",
  "muxPlaybackId": "YOUR_MUX_PLAYBACK_ID_HERE",
  "blurDataURL": "",
  "aspectRatio": "16:9"
}
```

4. Run the update script to regenerate the projects.json file:

```bash
node scripts/update-projects.js
```

### Option 2: Directly Edit projects.json

You can also directly edit the `projects.json` file to add or update projects:

```json
{
  "projects": [
    {
      "name": "Your Project Name",
      "description": "Your project description",
      "link": "https://your-project-link.com",
      "video": "/videos/your-video-id.mp4",
      "id": "your-video-id",
      "muxPlaybackId": "YOUR_MUX_PLAYBACK_ID_HERE"
    }
  ]
}
```

## Environment Variables

Make sure you have the following environment variables set in your `.env.local` file:

```
MUX_TOKEN_ID=your_mux_token_id
MUX_TOKEN_SECRET=your_mux_token_secret
```

These are used by Next.js Video to communicate with the Mux API.
