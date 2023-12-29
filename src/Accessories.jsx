import React from 'react'

function Accessories() {
  return (
<section className="py-100 py-99">
  <div className="accessory">
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 mb-5 d-flex flex-wrap justify-content-between ">
          <div className="accessory-title  col-md-6 col-12">
            <h3 className=" display-6 text-dark fst-italic " style={{fontWeight: 900, letterSpacing: '-0.02rem'}}>ACCESSORIES</h3>
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
        <div className="col-12 maingrid">
          <div className="b1">
            <div className="accessory-box position-relative rounded-3">
              <div className="accessory-img">
                <img src="img/accessory-1.webp" alt="just-dropped-1" className="img-fluid" />
              </div>
              <div className="accessory-content">
                <h3 className="text-white  position-absolute fst-italic ki" style={{bottom: '5%', left: '7%', fontWeight: 900, letterSpacing: '-0.02rem'}}>
                  JUMPERS</h3>
              </div>
            </div>
          </div>
          <div className="b2">
            <div className="accessory-box position-relative rounded-3">
              <div className="accessory-img ">
                <img src="img/accessory-2.webp" alt="just-dropped-1" className="img-fluid" />
              </div>
              <div className="accessory-content">
                <h3 className="text-white  position-absolute fst-italic ki" style={{bottom: '5%', left: '7%', fontWeight: 900, letterSpacing: '-0.02rem'}}>
                  PINS</h3>
              </div>
            </div>
          </div>
          <div className="b3">
            <div className="accessory-box position-relative rounded-3">
              <div className="accessory-img ">
                <img src="img/accessory-2.webp" alt="just-dropped-1" className="img-fluid" />
              </div>
              <div className="accessory-content">
                <h3 className="text-white  position-absolute fst-italic ki" style={{bottom: '5%', left: '7%', fontWeight: 900, letterSpacing: '-0.02rem'}}>
                  SOCKS</h3>
              </div>
            </div>
          </div>
          <div className="b4">
            <div className="accessory-box position-relative rounded-3">
              <div className="accessory-img ">
                <img src="img/accessory-4.webp" alt="just-dropped-1" className="img-fluid" />
              </div>
              <div className="accessory-content">
                <h3 className="text-white  position-absolute fst-italic ki" style={{bottom: '5%', left: '7%', fontWeight: 900, letterSpacing: '-0.02rem'}}>
                  MUGS</h3>
              </div>
            </div>
          </div>
          <div className="b5">
            <div className="accessory-box position-relative rounded-3">
              <div className="accessory-img ">
                <img src="img/accessory-5.webp" alt="just-dropped-1" className="img-fluid" />
              </div>
              <div className="accessory-content">
                <h3 className="text-white  position-absolute fst-italic ki" style={{bottom: '5%', left: '7%', fontWeight: 900, letterSpacing: '-0.02rem'}}>
                  RUGS</h3>
              </div>
            </div>
          </div>
          <div className="b6">
            <div className="accessory-box position-relative rounded-3">
              <div className="accessory-img ">
                <img src="img/accessory-6.webp" alt="just-dropped-1" className="img-fluid" />
              </div>
              <div className="accessory-content">
                <h3 className="text-white  position-absolute fst-italic ki" style={{bottom: '5%', left: '7%', fontWeight: 900, letterSpacing: '-0.02rem'}}>
                  JUMPERS</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Accessories