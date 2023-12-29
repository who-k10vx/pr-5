import React from 'react'

function Dropped() {
  return (
<section>
  <div className="just-dropped py-100 py-99">
    <div className="container-fluid">
      <div className="row">
        <div className="title col-12 mb-5">
          <h3 className=" display-6 text-dark fst-italic" style={{fontWeight: 900, letterSpacing: '-0.02rem'}}>JUST DROPPED</h3>
        </div>
        {/* DROPP-BOX-1  */}
        <div className="col-lg-4 col-12 col-md-6 py-3 py-lg-0">
          <div className="dropped-box position-relative rounded-3">
            <div className="drop-img justify-content-center d-flex">
              <img src="img/just-dropped-1.webp" alt="just-dropped-1" className="img-fluid rounded-3" />
            </div>
            <div className="drop-content">
              <h3 className="text-white  position-absolute fst-italic" style={{bottom: '10%', left: '10%', fontWeight: 900, letterSpacing: '-0.02rem'}}>
                SEINFELD</h3>
            </div>
            <div className="thread-icon py-2 px-3 rounded-circle position-absolute bg-white text-secondary fs-6 mb-1" style={{bottom: '20%', left: '10%', fontWeight: 700}}>&gt;</div>
          </div>
        </div>
        {/* DROPP-BOX-2  */}
        <div className="col-lg-4 col-12 col-md-6 py-3 py-lg-0">
          <div className="dropped-box position-relative rounded-3">
            <div className="drop-img justify-content-center d-flex">
              <img src="img/just-dropped-2.webp" alt="just-dropped-1" className="img-fluid rounded-3" />
            </div>
            <div className="drop-content">
              <h3 className="text-white  position-absolute fst-italic" style={{bottom: '10%', left: '10%', fontWeight: 900, letterSpacing: '-0.02rem'}}>
                CHRISTMAS</h3>
            </div>
            <div className="thread-icon py-2 px-3 rounded-circle position-absolute bg-white text-secondary fs-6 mb-1" style={{bottom: '20%', left: '10%', fontWeight: 700}}>&gt;</div>
          </div>
        </div>
        {/* DROPP-BOX-3  */}
        <div className="col-lg-4 col-12 col-md-6 py-3 py-lg-0">
          <div className="dropped-box position-relative rounded-3">
            <div className="drop-img justify-content-center d-flex">
              <img src="img/just-dropped-3.webp" alt="just-dropped-1" className="img-fluid rounded-3" />
            </div>
            <div className="drop-content">
              <h3 className="text-white  position-absolute fst-italic" style={{bottom: '10%', left: '10%', fontWeight: 900, letterSpacing: '-0.02rem'}}>
                DESIGN </h3>
            </div>
            <div className="thread-icon py-2 px-3 rounded-circle position-absolute bg-white text-secondary fs-6 mb-1" style={{bottom: '20%', left: '10%', fontWeight: 700}}>&gt;</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Dropped