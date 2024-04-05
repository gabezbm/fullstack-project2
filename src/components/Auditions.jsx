import auditions from "/auditions.png";

const Auditions = () => {
  return (
    <div className="absolute top-0 left-0 h-screen w-screen -z-50 flex justify-center items-center gap-20 bg-base-200 hero">
      <div className="fade-in hero-content flex-col lg:flex-row-reverse px-[10%] gap-20">
        <div className="block w-[50%]">
          <h1>Auditions</h1>
          <h2>Opening Fall 2024</h2>
          <p>
            Our next round of auditions will take place in fall 2024. We are
            looking for lower voices (alto, tenors, baritones, and basses) as
            well as vocal percussionists. All genders are welcome.
          </p>
          <p>
            Don’t be reluctant if you haven’t had a lot of experience with
            singing. We have seen many of our members grow greatly as singers
            during their time in the group.
          </p>
          <p>
            Please email us at{" "}
            <span className="link link-info">
              noteworthy@ucchoral.berkeley.edu.
            </span>
          </p>
        </div>
        <img
          src={auditions}
          className="max-w-sm rounded-lg shadow-2xl md:hidden lg:block"
          alt="Noteworthy"
        />
      </div>
    </div>
  );
};

export default Auditions;
