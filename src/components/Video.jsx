const Video = ({ src }) => {
  return (
    <>
      <div className="h-[60%] rounded-lg overflow-hidden w-[60%] shadow-2xl">
        <div className="container h-full">
          <iframe
            className="w-full h-full"
            src={src}
            title="YouTube video player"
            border="0px"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Video;
