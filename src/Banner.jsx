import React from 'react'

function Banner() {
  return (
<section>
  <div id="carouselExampleCaptions" className="carousel slide">
    <div className="carousel-indicators justify-content-end d-flex mx-5">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="img/b1.webp" className="d-block heig col-md-12" alt="..." />
        <div className="carousel-caption d-none d-lg-flex flex-column justify-content-center h-100 text-start" style={{left: '5%!important', width: '90%!important'}}>
          <p className="fw-bold">IT'S SPOOKY SZN 🍿</p>
          <h1 className="display-5 fst-italic col-7" style={{fontWeight: 900, letterSpacing: '-0.02rem'}}>
            HORROR TEES SO GOOD THEY'LL MAKE YOU SCREAM</h1>
          <div>
            <button className="btn btn-light fw-bold rounded-4 px-4 py-3">SHOP HALLOWEEN</button>
          </div>
        </div>
        <div className="carousel-caption d-flex flex-column justify-content-end d-lg-none text-center h-100 text-start" style={{left: '5%!important', width: '90%!important'}}>
          <p className="fw-bold fs-8">IT'S SPOOKY SZN 🍿</p>
          <h1 className="fs-5 fst-italic col-lg-8  col-xl-7 col-12" style={{fontWeight: 900, letterSpacing: '-0.02rem'}}>HORROR TEES SO GOOD THEY'LL MAKE YOU
            SCREAM</h1>
          <div>
            <button className="btn btn-light fw-bold rounded-4 px-3 py-2 fs-7">SHOP HALLOWEEN</button>
          </div>
        </div>
      </div>
      <div className="carousel-item ">
        <img src="img/banner-1.webp" className="d-block col-md-12 heig" alt="b2" />
      </div>
      <div className="carousel-item">
        <img src="img/b3.webp" className="d-block col-md-12 heig" alt="..." />
      </div>
    </div>
    <button className="carousel-control-prev" style={{width: '5%!important'}} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" style={{width: '5%!important'}} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</section>

  )
}

export default Banner