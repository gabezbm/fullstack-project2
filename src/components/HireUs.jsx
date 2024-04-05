const HireUs = () => {
  return (
    <>
      <div className="absolute top-0 left-0 h-screen w-screen -z-50 flex justify-center items-center gap-20 bg-base-200 hero">
        <div className="fade-in w-[50%]">
          <h1>Hire Us</h1>
          <h2>How to Hire Us</h2>
          <p>
            Please e-mail our business manager at
            noteworthy@ucchoral.berkeley.edu and fill out this form. Then we’ll
            respond to you with a quote as soon as possible. In your email, let
            us know:
          </p>
          <ul>
            <li>Who you are</li>
            <li>The details of the event (where and when it’ll be)</li>
            <li>
              What kind of songs you’d like us to perform and how long the
              performance should be
            </li>
          </ul>

          <h2>We take song requests</h2>
          <p>
            Check out our current repertoire for a sample of the songs we
            perform. If the song you want isn’t listed there, ask us about it —
            we might have it arranged already. With enough advance notice, we
            can perform anything from our archive, which is large and always
            growing.
          </p>

          <h2>Times and locations</h2>
          <p>
            We’re available to perform throughout the academic year and can
            travel anywhere in the Bay Area. Traveling beyond the Bay Area may
            require extra planning and travel costs.
          </p>

          <h2>UC Berkeley charity events</h2>
          <p>
            If you are a subsidiary of UC Berkeley, and you’re organizing a
            charity event on campus, we are happy to give you a reduced rate.
          </p>
        </div>
      </div>
    </>
  );
};

export default HireUs;
