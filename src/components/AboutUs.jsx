import noteworthy from "/noteworthy.jpg";

const AboutUs = () => {
  return (
    <div className="absolute top-0 left-0 h-screen w-screen -z-50 flex justify-center items-center gap-20 bg-base-200 hero">
      <div className="fade-in hero-content flex-col lg:flex-row-reverse px-[15%] gap-20">
        <img
          src={noteworthy}
          className="max-w-sm rounded-lg shadow-2xl md:hidden lg:block"
          alt="Noteworthy"
        />
        <div>
          <h1>Noteworthy</h1>
          <h2>In-vest-ed in A Cappella</h2>
          <p>
            We're a lower-voices a cappella group known for our fun performances
            and fresh takes on popular songs! It always feels sunny when we
            perform, and not just because of our golden vests!
          </p>
          <p>
            Since our founding in 2000, we've gone million-view-viral on YouTube
            multiple times, released an album entirely composed of original
            songs, and performed at the 2022 UC Berkeley commencement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
