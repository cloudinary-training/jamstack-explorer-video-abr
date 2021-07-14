require("dotenv").config();
const cloudinary = require("cloudinary").v2;

/* This upload uses an "eager" transformation. This means that the original video will
be stored in Cloudinary as well as any derived videos created per the eager transformation
instructions.
The transformations necessary to transcode to create the hd profile m3u8 and ts files will
take time and therefore should be run asynchronously.  I'm including a webhook.site (free to
  obtain your own link) that will notify me when the derived videos are complete.

In this script I'm uploading a video into my cloud from the cloudinary-training cloud.
I include options to create the derived videos for hls as well as mp4.  Since the video I'm uploading
is mp4 this is not really necessary but included for completeness.
*/
const options = {
  public_id: "mountain",
  resource_type: "video",
  type: "upload",
  eager: [
    { streaming_profile: "full_hd", format: "m3u8" },
    {
      format: "mp4",
      transformation: [{ quality: "auto" }],
    },
  ],
  eager_async: true,
  eager_notification_url:
    "https://webhook.site/e22fcd34-dfb7-431d-88f6-a1db871b4adc",
};

// you may want to replace the video uploaded to use your own
// this can be a local or remote file
cloudinary.uploader
  .upload(
    "https://res.cloudinary.com/cloudinary-training/video/upload/v1626130641/mountain.mov",
    options
  )
  .then((result) => console.log(JSON.stringify(result, null, 2)))
  .catch((error) => console.log.log(error));
