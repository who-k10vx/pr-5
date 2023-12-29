import React from 'react'

function Service() {
  return (
<section className="py-100 py-99">
  <div className="services ">
    <div className="container-fluid  rounded-5" style={{backgroundColor: '#8e75f5'}}>
      <div className="row">
        <div className="col-12 d-flex flex-wrap justify-content-center align-items-center py-5  ">
          {/* services-box-1  */}
          <div className="col-lg-3 col-6 d-flex justify-content-center align-items-center">
            <div className="service-box ">
              <div className="box-upper d-flex justify-content-center">
                <img src="img/stack1.png" alt="services-1" className="img-fluid" />
              </div>
              <div className="box-text text-center mt-4">
                <p className="fs-5 text-white fw-bold fst-italic" style={{letterSpacing: '-0.02rem'}}>
                  PRINTED BY US </p>
              </div>
            </div>
          </div>
          {/* services box-2  */}
          <div className="col-lg-3 col-6 d-flex justify-content-center align-items-center">
            <div className="service-box">
              <div className="box-upper d-flex justify-content-center">
                <img src="img/stack2.png" alt="services-1" className="img-fluid" />
              </div>
              <div className="box-text text-center mt-4">
                <p className=" fs-5 text-white fw-bold fst-italic" style={{letterSpacing: '-0.02rem'}}>FREE SHIPPING </p>
              </div>
            </div>
          </div>
          {/* services -box -3  */}
          <div className="col-lg-3 col-6 d-flex justify-content-center align-items-center">
            <div className="service-box ">
              <div className="box-upper d-flex justify-content-center">
                <img src="img/stack3.png" alt="services-1" className="img-fluid" />
              </div>
              <div className="box-text text-center mt-4">
                <p className="fs-5 text-white fw-bold fst-italic" style={{letterSpacing: '-0.02rem'}}>
                  FREE RETURNS</p>
              </div>
            </div>
          </div>
          {/* services-box-4  */}
          <div className="col-lg-3 col-6 d-flex justify-content-center align-items-center">
            <div className="service-box ">
              <div className="box-upper d-flex justify-content-center">
                <img src="img/stack4.png" alt="services-1" className="img-fluid" />
              </div>
              <div className="box-text text-center mt-4">
                <p className="fs-5 text-white fw-bold fst-italic" style={{letterSpacing: '-0.02rem'}}>
                  MADE-TO-ORDER</p>
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

export default Service