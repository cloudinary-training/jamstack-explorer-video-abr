import { useEffect } from "react";
import { Cloudinary } from "cloudinary-core";
import "cloudinary-video-player/dist/cld-video-player.min.js";
import "cloudinary-video-player/dist/cld-video-player.min.css";

const VideoPlayer = (props) => {
  const cld = new Cloudinary({ cloud_name: props.params.cloudName });

  // Using this hook will guarantee that we won't try to access
  // the video DOM element until it is rendered. 
  
  // Specify 2 source types: hls will give us ABR, but 
  // if that is not supported we can fallback to downloading
  // the mp4
  useEffect(() => {
    const options = {
      sourceTypes: ["hls", "mp4"],
      muted: true,
      controls: true,
      width: 500,
      sourceTransformation: {
        "hls": [{ streaming_profile: "full_hd" }],
        "mp4": [{ quality: "auto" }],
      },
      // this is an options that will allow the user to select
      // the playback speed
      // there are many options available to the video player
      // https://cloudinary.com/documentation/video_player_api_reference
      playbackRates: [0.5, 1, 1.5, 2],
    };
    // attach to DOM element
    const videoPlayer = cld.videoPlayer("cld-video-player", options);
    // provide public id as source/can also be added as an option
    videoPlayer.source(props.params.publicId);
  });

  // rendering the video to the DOM
  return <video id="cld-video-player" />;
};
export default VideoPlayer;
