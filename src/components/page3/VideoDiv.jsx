import React from "react";

const VideoDiv = (props) => {
  return (
    <div className="w-[30vw] h-full bg-red-500 flex-shrink-0">
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        src={props.url}
      ></video>
    </div>
  );
};

export default VideoDiv;
