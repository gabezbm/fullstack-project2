import Video from "./Video";

const Videos = () => {
  return (
    <div className="absolute top-0 left-0 h-screen w-screen -z-50 flex justify-center items-center">
      <Video
        src={"https://www.youtube.com/embed/cDjY-1WuB3o?si=6dhcsOiT04JeIJ-x"}
      />
    </div>
  );
};

export default Videos;
