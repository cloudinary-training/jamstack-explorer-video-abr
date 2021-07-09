require("dotenv").config();
const cloudinary = require("cloudinary").v2;

const options = {
  public_id: "climbing",
  resource_type: "video",
  type: "upload",
  eager: [
    { streaming_profile: "hd", format: "m3u8" },
    {
      format: "mp4",
      transformation: [{ quality: "auto" }],
    },
  ],
  eager_async: true,
  eager_notification_url:
    "https://webhook.site/e22fcd34-dfb7-431d-88f6-a1db871b4adc",
};
cloudinary.uploader
  .upload(
    "https://res.cloudinary.com/cloudinary-training/video/upload/v1625797745/climbing.mp4",
    options
  )
  .then((result) => console.log(JSON.stringify(result, null, 2)))
  .catch((error) => console.log.log(error));
