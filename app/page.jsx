export default function Home() {
  return (
    <>
      <h1 class="title">
        <div class="top">Paste Fericit!</div>
        <div class="bottom" aria-hidden="true">
          Paste Fericit!
        </div>
      </h1>

      <div className="canvas">
        {/* EARS */}

        {/* HEAD */}
        <div className="head">
          <div className="ear left">
            <div className="ear-inner"></div>
          </div>

          <div className="ear right">
            <div className="ear-inner"></div>
          </div>

          <div className="eye left"></div>

          <div className="eye right"></div>

          <div className="nose"></div>
        </div>

        {/* BODY */}
        <div className="body">
          <div className="egg">
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
          </div>

          <div className="paw left">
            <span className="finger"></span>
            <span className="finger"></span>
            <span className="finger"></span>
          </div>

          <div className="paw right">
            <span className="finger"></span>
            <span className="finger"></span>
            <span className="finger"></span>
          </div>

          <div className="foot left">
            <span className="finger"></span>
            <span className="finger"></span>
            <span className="finger"></span>
            <div className="sole left"></div>
          </div>

          <div className="foot right">
            <span className="finger"></span>
            <span className="finger"></span>
            <span className="finger"></span>
            <div className="sole right"></div>
          </div>
        </div>
      </div>
    </>
  );
}
