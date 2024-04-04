import Video from "./Video";
import { useState } from "react";
import ArrowButton from "./ArrowButton";

const Videos = () => {
  const videoSrcs = [
    "https://www.youtube.com/embed/cDjY-1WuB3o?si=6dhcsOiT04JeIJ-x",
    "https://www.youtube.com/embed/oNoCPGvcCdI?si=xCDuvqB68EP-NYqw",
    "https://www.youtube.com/embed/voVSDvohLEI?si=qbYlYMn1x7gIEA2t",
    "https://www.youtube.com/embed/ETvw2stZg_Q?si=xdo6eaCUMEGiM9bH",
    "https://www.youtube.com/embed/hwRBc91foag?si=uzAhJEVcDN0wf_ed",
    "https://www.youtube.com/embed/7cUgZIO7iKY?si=kL-8eQJk-PS-ALIN",
    "https://www.youtube.com/embed/QHqUXFsKwZQ?si=6-KMtbaVlfbqbj8d",
  ];
  let [videoId, setVideoId] = useState(0);
  return (
    <>
      <div className="fade-in absolute top-0 left-0 h-screen w-screen -z-50 flex justify-center items-center bg-base-200 gap-20">
        {videoId > 0 ? (
          <ArrowButton
            direction={"left"}
            onClick={() => {
              setVideoId(videoId - 1);
            }}
            remaining={videoId}
          />
        ) : (
          <ArrowButton />
        )}
        <Video src={videoSrcs[videoId]} />
        {videoId + 1 < videoSrcs.length ? (
          <ArrowButton
            direction={"right"}
            onClick={() => {
              setVideoId(videoId + 1);
            }}
            remaining={videoSrcs.length - videoId - 1}
          />
        ) : (
          <ArrowButton />
        )}
      </div>
    </>
  );
};

export default Videos;
