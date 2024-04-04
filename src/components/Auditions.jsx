import noteworthy from "/noteworthy.jpg";

const Auditions = () => {
  return (
    <div className="absolute top-0 left-0 h-screen w-screen -z-50 flex justify-center items-center gap-20 bg-base-200 hero">
      <div className="fade-in hero-content flex-col lg:flex-row px-[15%]">
        <div className="block w-[50%]">
          <h1 className="text-5xl font-bold">Auditions</h1>
          <h2 className="text-2xl font-semibold mt-2">Opening Fall 2024</h2>
          <p>
            Our next round of auditions will take place in fall 2024. We are
            looking for lower voices (alto, tenors, baritones, and basses) as
            well as vocal percussionists.
          </p>
          <p>
            All genders are welcome. Don’t be reluctant if you haven’t had a lot
            of experience with singing. We have seen many of our members grow
            greatly as singers during their time in the group.
          </p>
          <p>Please email us at noteworthy@ucchoral.berkeley.edu.</p>
        </div>
        <img
          src={noteworthy}
          className="max-w-sm rounded-lg shadow-2xl md:hidden lg:block"
          alt="Noteworthy"
        />
      </div>
    </div>
  );
};

export default Auditions;
