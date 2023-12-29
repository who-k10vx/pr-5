import React from 'react'

function Pick() {
  return (
<section className="py-100 py-99">
  <div className="threads">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 mb-5 d-flex flex-wrap justify-content-between">
          <div className="thread-title col-md-6 col-12">
            <h3 className=" display-6 text-dark fst-italic" style={{fontWeight: 900, letterSpacing: '-0.02rem'}}>PICK YOUR THREADS</h3>
          </div>
          <div className="vieww d-flex col-md-6 col-12 justify-content-md-end fs-8 align-items-center">
            <p className="fs-6 text-dark me-2">View all</p>
            <button className=" hovvv border-0 d-flex justify-content-center align-items-center rounded-circle" style={{width: 30, height: 30, backgroundColor: '#F2F2F2'}} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
              <svg role="presentation" focusable="false" width={8} height={6} className="icon icon-chevron-bottom-small" viewBox="0 0 8 6">
                <path d="m1 1.5 3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5">
                </path>
              </svg>
            </button>
          </div>
        </div>
        <div className="position-relative hide1">
          <div className=" col-12 d-flex  ps-2 " id="scr2" style={{overflow: 'scroll!important'}}>
            {/* thrad-box-1  */}
            <div className="col-lg-4 col-12 col-md-6 me-2">
              <div className="thread-box position-relative">
                <div className="thread-img ">
                  <img src="img/thread-1.webp" alt="just-dropped-1" className="img-fluid rounded-3" />
                </div>
                <div className="thread-content">
                  <h3 className="text-white  position-absolute fst-italic" style={{bottom: '10%', left: '10%', fontWeight: 900, letterSpacing: '-0.02rem'}}>
                    T-SHIRT</h3>
                </div>
                <div className="thread-icon py-2 px-3 rounded-circle position-absolute bg-white text-secondary fs-6 mb-1" style={{bottom: '20%', left: '10%', fontWeight: 700}}>&gt;</div>
              </div>
            </div>
            {/* thread-box-2  */}
            <div className="col-lg-4 col-12 col-md-6 mx-2">
              <div className="thread-box position-relative">
                <div className="thread-img ">
                  <img src="img/thread-2.webp" alt="just-dropped-1" className="img-fluid rounded-3" />
                </div>
                <div className="thread-content">
                  <h3 className="text-white  position-absolute fst-italic" style={{bottom: '10%', left: '10%', fontWeight: 900, letterSpacing: '-0.02rem'}}>
                    HODDIE</h3>
                </div>
                <div className="thread-icon py-2 px-3 rounded-circle position-absolute bg-white text-secondary fs-6 mb-1" style={{bottom: '20%', left: '10%', fontWeight: 700}}>&gt;</div>
              </div>
            </div>
            {/* thread-box-3  */}
            <div className="col-lg-4 col-12 col-md-6 mx-2 ">
              <div className="thread-box position-relative">
                <div className="thread-img ">
                  <img src="img/thread-3.webp" alt="just-dropped-1" className="img-fluid rounded-3" />
                </div>
                <div className="thread-content">
                  <h3 className="text-white  position-absolute fst-italic" style={{bottom: '10%', left: '10%', fontWeight: 900, letterSpacing: '-0.02rem'}}>
                    JUMPERS</h3>
                </div>
                <div className="thread-icon py-2 px-3 rounded-circle position-absolute bg-white text-secondary fs-6 mb-1" style={{bottom: '20%', left: '10%', fontWeight: 700}}>&gt;</div>
              </div>
            </div>
            {/* thread-box-4  */}
            <div className="col-lg-4 col-12 col-md-6 mx-2">
              <div className="thread-box position-relative">
                <div className="thread-img ">
                  <img src="img/thread-1.webp" alt="just-dropped-1" className="img-fluid rounded-3" />
                </div>
                <div className="thread-content">
                  <h3 className="text-white  position-absolute fst-italic" style={{bottom: '10%', left: '10%', fontWeight: 900, letterSpacing: '-0.02rem'}}>
                    JUMPERS</h3>
                </div>
                <div className="thread-icon py-2 px-3 rounded-circle position-absolute bg-white text-secondary fs-6 mb-1" style={{bottom: '20%', left: '10%', fontWeight: 700}}>&gt;</div>
              </div>
            </div>
            {/* thread-box-5 */}
            <div className="col-lg-4 col-12 col-md-6 mx-2">
              <div className="thread-box position-relative">
                <div className="thread-img ">
                  <img src="img/thread-2.webp" alt="just-dropped-1" className="img-fluid rounded-3" />
                </div>
                <div className="thread-content">
                  <h3 className="text-white  position-absolute fst-italic" style={{bottom: '10%', left: '10%', fontWeight: 900, letterSpacing: '-0.02rem'}}>
                    JUMPERS</h3>
                </div>
                <div className="thread-icon py-2 px-3 rounded-circle position-absolute bg-white text-secondary fs-6 mb-1" style={{bottom: '20%', left: '10%', fontWeight: 700}}>&gt;</div>
              </div>
            </div>
          </div>
          <div className="position-absolute col-12  px-5 mx-auto justify-content-between top-50 show1" style={{transform: 'translateY(-50%)', transition: 'all 0.5s', display: 'none'}}>
            <button type="button" className="btn btn-light rounded-circle  text-center" onclick="
              (() => {
                      var scr2 = document.getElementById('scr2');
                      scr2.scrollLeft -=200;
              })()
              ">
              <i className="bi bi-arrow-left text-black fw-bold fs-5" />
            </button>
            <button type="button" className="btn btn-light rounded-circle  text-center " onclick="
                      (() => {
                              var scr2 = document.getElementById('scr2');
                              scr2.scrollLeft +=200;
                      })()
                  ">
              <i className="bi bi-arrow-right text-black fw-bold fs-5" /></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Pick