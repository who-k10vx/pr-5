import React from 'react'

function Header() {
  return (
<header className="position-sticky w-100 top-0 left-0 d-block" style={{top: '-50px!important', zIndex: '599!important'}}>
  <div className="top-bar py-3 justify-content-center d-flex">
    <div className="top-contant d-flex justify-content-center align-items-center carousel slide col-lg-6 col-12 col-md-8" id="carouselExample">
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <i className="bi bi-chevron-right" />
        <span className="visually-hidden">Next</span>
      </button>
      <div className="carousel-inner text-center">
        <p className="carousel-item active fs-7 fw-bold px-5 text-white">Free shipping for orders over $80 😎
        </p>
        <p className="carousel-item fs-7 fw-bold px-5 text-white">⭐️⭐️⭐️⭐️⭐️ Over 200,000 happy customers</p>
        <p className="carousel-item fs-7 fw-bold px-5 text-white">60-day free returns</p>
        <p className="carousel-item fs-7 fw-bold px-5 text-white">Made-to-order in Australia 🇦🇺</p>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <i className="bi bi-chevron-left" />
        <span className="visually-hidden">Previous</span>
      </button>
    </div>
  </div>
  <div className="header px-lg-5 px-md-3 px-sm-2 position-absolute w-100" id="headColor">
    <div className="col-12 d-flex align-items-center py-3">
      <div className="d-lg-none col-1 d-flex px-2 pt-1 justify-content-center align-items-center">
        <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
          <i className="bi bi-list fs-5 fw-bold reswhite" />
        </a>
        <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel" />
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
          </div>
          <div className="offcanvas-body d-flex flex-wrap">
            <ul className="col-12">
              <li className="d-flex justify-content-between align-items-center">
                <a href="#" style={{fontWeight: 800}} className="fs-5 fst-italic px-1 py-1">
                  ADULTS
                </a>
                <i className="bi bi-chevron-right " />
              </li>
              <li className="d-flex justify-content-between align-items-center">
                <a href="#" style={{fontWeight: 800}} className="fs-5 fst-italic px-1 py-1">
                  KIDS
                </a>
                <i className="bi bi-chevron-right " />
              </li>
              <li className="d-flex justify-content-between align-items-center">
                <a href="#" style={{fontWeight: 800}} className="fs-5 fst-italic px-1 py-1">
                  ACCESSORIES
                </a>
                <i className="bi bi-chevron-right " />
              </li>
              <li className="d-flex justify-content-between align-items-center">
                <a href="#" style={{fontWeight: 800}} className="fs-5 fst-italic px-1 py-1">
                  COLLABS
                </a>
                <i className="bi bi-chevron-right " />
              </li>
              <li className="d-flex justify-content-between align-items-center">
                <a href="#" style={{fontWeight: 800}} className="fs-5 fst-italic px-1 py-1">
                  THEMES
                </a>
                <i className="bi bi-chevron-right " />
              </li>
              <li className="d-flex justify-content-between align-items-center">
                <a href="#" style={{fontWeight: 800}} className="fs-5 fst-italic px-1 py-1">
                  WHAT'S NEW?
                </a>
                <i className="bi bi-chevron-right " />
              </li>
              <li className="d-flex justify-content-between align-items-center">
                <a href="#" style={{fontWeight: 800}} className="fs-5 fst-italic px-1 py-1">
                  ON SALE
                </a>
                <i className="bi bi-chevron-right " />
              </li>
              <li className="d-flex justify-content-between align-items-center">
                <a href="#" style={{fontWeight: 800}} className="fs-5 fst-italic px-1 py-1">
                  CUSTOM
                </a>
                <i className="bi bi-chevron-right " />
              </li>
            </ul>
            <div className="footer-laset-icon d-flex col-12">
              <a href="#" className="nav-link me-3"><i className="bi bi-facebook fs-4" /></a>
              <a href="#" className="nav-link me-3"><i className="bi bi-instagram fs-4" /></a>
              <a href="#" className="nav-link me-3"><i className="bi bi-tiktok fs-4" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-5 col-lg-2 col-md-3">
        <a className="navbar-brand" href="#"><img src="img/logoW.avif"  className="img-fluid fl w-75" id="logoImg" /></a>
      </div>
      <nav className="col-8 col-xl-7 py-4 d-none d-lg-block">
        <ul className="d-flex gap-xxl-4 gap-xl-3 gap-lg-2">
          <li>
            <a className="fw-semibold fs-6 reswhite" onclick="show(1)">
              Threads
              <i className="bi bi-chevron-down ps-1 fs-7  fw-bold reswhite" />
            </a>
            <div id="mdrop1" className="  border-top col-12 position-absolute start-0 mt-4 bg-white border-bottom dropp" style={{zIndex: 100, display: 'none'}}>
              <div className="container">
                <div className="row">
                  <ul className="col-12 d-flex py-5 justify-content-center">
                    <li className="col-2">
                      <h4 className="fw-bold fst-italic" style={{letterSpacing: '-0.02rem'}}>SHIRTS
                      </h4>
                      <ul>
                        <li className="text-secondary fs-8 py-2">Classic Tees</li>
                        <li className="text-secondary fs-8 py-2">Long Sleeves</li>
                        <li className="text-secondary fs-8 py-2">Stonewash Tees</li>
                        <li className="text-secondary fs-8 py-2">Crop Tees</li>
                        <li className="text-secondary fs-8 py-2">Tanks</li>
                        <li className="text-secondary fs-8 py-2">New Arrivals</li>
                        <li className="text-secondary fs-8 py-2">Popular Now</li>
                        <li className="text-secondary fs-8 py-2">Shop All Shirts</li>
                      </ul>
                    </li>
                    <li className="col-2">
                      <h4 className="fw-bold fst-italic" style={{letterSpacing: '-0.02rem'}}>JUMPERS
                      </h4>
                      <ul>
                        <li className="text-secondary fs-8 py-2">Classic Tees</li>
                        <li className="text-secondary fs-8 py-2">Long Sleeves</li>
                        <li className="text-secondary fs-8 py-2">Stonewash Tees</li>
                        <li className="text-secondary fs-8 py-2">Crop Tees</li>
                        <li className="text-secondary fs-8 py-2">Tanks</li>
                      </ul>
                    </li>
                    <li className="col-2">
                      <h4 className="fw-bold fst-italic" style={{letterSpacing: '-0.02rem'}}>KIDS
                      </h4>
                      <ul>
                        <li className="text-secondary fs-8 py-2">Classic Tees</li>
                        <li className="text-secondary fs-8 py-2">Long Sleeves</li>
                        <li className="text-secondary fs-8 py-2">Stonewash Tees</li>
                        <li className="text-secondary fs-8 py-2">Crop Tees</li>
                      </ul>
                    </li>
                    <li className="col-2">
                      <img src="img/mega-menu-1.webp" alt="..." className="img-fluid" />
                      <h5 className="mt-3  text-center fw-bold">Front and Back</h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a className="fw-semibold fs-6  mdrop reswhite" onclick="show(2)">
              Themes
              <i className="bi bi-chevron-down ps-1 fs-7  fw-bold reswhite" />
            </a>
            <div id="mdrop2" className="  border-top col-12 position-absolute start-0 mt-4 bg-white border-bottom dropp" style={{zIndex: 100, display: 'none'}}>
              <div className="container">
                <div className="row">
                  <ul className="col-12 d-flex py-5 justify-content-center">
                    <li className="col-2">
                      <h4 className="fw-bold fst-italic" style={{letterSpacing: '-0.02rem'}}>SHIRTS
                      </h4>
                      <ul>
                        <li className="text-secondary fs-8 py-2">Classic Tees</li>
                        <li className="text-secondary fs-8 py-2">Long Sleeves</li>
                        <li className="text-secondary fs-8 py-2">Stonewash Tees</li>
                        <li className="text-secondary fs-8 py-2">Crop Tees</li>
                        <li className="text-secondary fs-8 py-2">Tanks</li>
                        <li className="text-secondary fs-8 py-2">New Arrivals</li>
                        <li className="text-secondary fs-8 py-2">Popular Now</li>
                        <li className="text-secondary fs-8 py-2">Shop All Shirts</li>
                      </ul>
                    </li>
                    <li className="col-2">
                      <h4 className="fw-bold fst-italic" style={{letterSpacing: '-0.02rem'}}>JUMPERS
                      </h4>
                      <ul>
                        <li className="text-secondary fs-8 py-2">Classic Tees</li>
                        <li className="text-secondary fs-8 py-2">Long Sleeves</li>
                        <li className="text-secondary fs-8 py-2">Stonewash Tees</li>
                        <li className="text-secondary fs-8 py-2">Crop Tees</li>
                        <li className="text-secondary fs-8 py-2">Tanks</li>
                      </ul>
                    </li>
                    <li className="col-2">
                      <h4 className="fw-bold fst-italic" style={{letterSpacing: '-0.02rem'}}>KIDS
                      </h4>
                      <ul>
                        <li className="text-secondary fs-8 py-2">Classic Tees</li>
                        <li className="text-secondary fs-8 py-2">Long Sleeves</li>
                        <li className="text-secondary fs-8 py-2">Stonewash Tees</li>
                        <li className="text-secondary fs-8 py-2">Crop Tees</li>
                      </ul>
                    </li>
                    <li className="col-2">
                      <h4 className="fw-bold fst-italic" style={{letterSpacing: '-0.02rem'}}>SHIRTS
                      </h4>
                      <ul>
                        <li className="text-secondary fs-8 py-2">Classic Tees</li>
                        <li className="text-secondary fs-8 py-2">Long Sleeves</li>
                        <li className="text-secondary fs-8 py-2">Stonewash Tees</li>
                        <li className="text-secondary fs-8 py-2">Crop Tees</li>
                        <li className="text-secondary fs-8 py-2">Tanks</li>
                        <li className="text-secondary fs-8 py-2">New Arrivals</li>
                        <li className="text-secondary fs-8 py-2">Popular Now</li>
                        <li className="text-secondary fs-8 py-2">Shop All Shirts</li>
                      </ul>
                    </li>
                    <li className="col-2">
                      <img src="img/mega-menu-1.webp" alt="..." className="img-fluid" />
                      <h5 className="mt-3  text-center fw-bold">Front and Back</h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a className="fw-semibold fs-6 mdrop reswhite" onclick="show(3)">
              Accessories
              <i className="bi bi-chevron-down ps-1 fs-7  fw-bold reswhite" />
            </a>
            <div id="mdrop3" className=" border-top col-12 position-absolute start-0 mt-4 bg-white border-bottom dropp" style={{zIndex: 100, display: 'none'}}>
              <div className="container">
                <div className="row">
                  <ul className="col-12 d-flex py-5 justify-content-center">
                    <li className="col-2">
                      <h4 className="fw-bold fst-italic" style={{letterSpacing: '-0.02rem'}}>SHIRTS
                      </h4>
                      <ul>
                        <li className="text-secondary fs-8 py-2">Classic Tees</li>
                        <li className="text-secondary fs-8 py-2">Long Sleeves</li>
                        <li className="text-secondary fs-8 py-2">Stonewash Tees</li>
                        <li className="text-secondary fs-8 py-2">Crop Tees</li>
                        <li className="text-secondary fs-8 py-2">Tanks</li>
                        <li className="text-secondary fs-8 py-2">New Arrivals</li>
                        <li className="text-secondary fs-8 py-2">Popular Now</li>
                        <li className="text-secondary fs-8 py-2">Shop All Shirts</li>
                      </ul>
                    </li>
                    <li className="col-2">
                      <h4 className="fw-bold fst-italic" style={{letterSpacing: '-0.02rem'}}>JUMPERS
                      </h4>
                      <ul>
                        <li className="text-secondary fs-8 py-2">Classic Tees</li>
                        <li className="text-secondary fs-8 py-2">Long Sleeves</li>
                        <li className="text-secondary fs-8 py-2">Stonewash Tees</li>
                        <li className="text-secondary fs-8 py-2">Crop Tees</li>
                        <li className="text-secondary fs-8 py-2">Tanks</li>
                      </ul>
                    </li>
                    <li className="col-2">
                      <h4 className="fw-bold fst-italic" style={{letterSpacing: '-0.02rem'}}>KIDS
                      </h4>
                      <ul>
                        <li className="text-secondary fs-8 py-2">Classic Tees</li>
                        <li className="text-secondary fs-8 py-2">Long Sleeves</li>
                        <li className="text-secondary fs-8 py-2">Stonewash Tees</li>
                        <li className="text-secondary fs-8 py-2">Crop Tees</li>
                      </ul>
                    </li>
                    <li className="col-2 pe-2">
                      <img src="img/mega-menu-1.webp" alt="..." className="img-fluid" />
                      <h5 className="mt-3  text-center fw-bold">Front and Back</h5>
                    </li>
                    <li className="col-2 ps-2">
                      <img src="img/mega-menu-1.webp" alt="..." className="img-fluid" />
                      <h5 className="mt-3  text-center fw-bold">Front and Back</h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a className="fw-semibold fs-6  mdrop reswhite" onclick="show(4)">
              Collabs
              <i className="bi bi-chevron-down ps-1 fs-7  fw-bold reswhite" />
            </a>
            <div id="mdrop4" className="  border-top col-12 position-absolute start-0 mt-4 bg-white border-bottom dropp" style={{zIndex: 100, display: 'none'}}>
              <div className="container">
                <div className="row">
                  <ul className="col-12 d-flex py-5 justify-content-center">
                    <li className="col-2">
                      <h4 className="fw-bold fst-italic" style={{letterSpacing: '-0.02rem'}}>SHIRTS
                      </h4>
                      <ul>
                        <li className="text-secondary fs-8 py-2">Classic Tees</li>
                        <li className="text-secondary fs-8 py-2">Long Sleeves</li>
                        <li className="text-secondary fs-8 py-2">Stonewash Tees</li>
                        <li className="text-secondary fs-8 py-2">Crop Tees</li>
                        <li className="text-secondary fs-8 py-2">Tanks</li>
                        <li className="text-secondary fs-8 py-2">New Arrivals</li>
                        <li className="text-secondary fs-8 py-2">Popular Now</li>
                        <li className="text-secondary fs-8 py-2">Shop All Shirts</li>
                      </ul>
                    </li>
                    <li className="col-2">
                      <h4 className="fw-bold fst-italic" style={{letterSpacing: '-0.02rem'}}>JUMPERS
                      </h4>
                      <ul>
                        <li className="text-secondary fs-8 py-2">Classic Tees</li>
                        <li className="text-secondary fs-8 py-2">Long Sleeves</li>
                        <li className="text-secondary fs-8 py-2">Stonewash Tees</li>
                        <li className="text-secondary fs-8 py-2">Crop Tees</li>
                        <li className="text-secondary fs-8 py-2">Tanks</li>
                      </ul>
                    </li>
                    <li className="col-2">
                      <h4 className="fw-bold fst-italic" style={{letterSpacing: '-0.02rem'}}>KIDS
                      </h4>
                      <ul>
                        <li className="text-secondary fs-8 py-2">Classic Tees</li>
                        <li className="text-secondary fs-8 py-2">Long Sleeves</li>
                        <li className="text-secondary fs-8 py-2">Stonewash Tees</li>
                        <li className="text-secondary fs-8 py-2">Crop Tees</li>
                      </ul>
                    </li>
                    <li className="col-2">
                      <h4 className="fw-bold fst-italic" style={{letterSpacing: '-0.02rem'}}>SHIRTS
                      </h4>
                      <ul>
                        <li className="text-secondary fs-8 py-2">Classic Tees</li>
                        <li className="text-secondary fs-8 py-2">Long Sleeves</li>
                        <li className="text-secondary fs-8 py-2">Stonewash Tees</li>
                        <li className="text-secondary fs-8 py-2">Crop Tees</li>
                        <li className="text-secondary fs-8 py-2">Tanks</li>
                        <li className="text-secondary fs-8 py-2">New Arrivals</li>
                        <li className="text-secondary fs-8 py-2">Popular Now</li>
                        <li className="text-secondary fs-8 py-2">Shop All Shirts</li>
                      </ul>
                    </li>
                    <li className="col-2">
                      <img src="img/mega-menu-1.webp" alt="..." className="img-fluid" />
                      <h5 className="mt-3  text-center fw-bold">Front and Back</h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a className="fw-semibold fs-6  mdrop reswhite" onclick="show(5)">
              What's New?
              <i className="bi bi-chevron-down ps-1 fs-7  fw-bold reswhite" />
            </a>
            <div id="mdrop5" className="  border-top col-12 position-absolute start-0 mt-4 bg-white border-bottom dropp" style={{zIndex: 100, display: 'none'}}>
              <div className="container">
                <div className="row">
                  <ul className="col-12 d-flex py-5 justify-content-center">
                    <li className="col-2">
                      <h4 className="fw-bold fst-italic" style={{letterSpacing: '-0.02rem'}}>SHIRTS
                      </h4>
                      <ul>
                        <li className="text-secondary fs-8 py-2">Classic Tees</li>
                        <li className="text-secondary fs-8 py-2">Long Sleeves</li>
                        <li className="text-secondary fs-8 py-2">Stonewash Tees</li>
                        <li className="text-secondary fs-8 py-2">Crop Tees</li>
                        <li className="text-secondary fs-8 py-2">Tanks</li>
                        <li className="text-secondary fs-8 py-2">New Arrivals</li>
                        <li className="text-secondary fs-8 py-2">Popular Now</li>
                        <li className="text-secondary fs-8 py-2">Shop All Shirts</li>
                      </ul>
                    </li>
                    <li className="col-2">
                      <h4 className="fw-bold fst-italic" style={{letterSpacing: '-0.02rem'}}>JUMPERS
                      </h4>
                      <ul>
                        <li className="text-secondary fs-8 py-2">Classic Tees</li>
                        <li className="text-secondary fs-8 py-2">Long Sleeves</li>
                        <li className="text-secondary fs-8 py-2">Stonewash Tees</li>
                        <li className="text-secondary fs-8 py-2">Crop Tees</li>
                        <li className="text-secondary fs-8 py-2">Tanks</li>
                      </ul>
                    </li>
                    <li className="col-2">
                      <h4 className="fw-bold fst-italic" style={{letterSpacing: '-0.02rem'}}>KIDS
                      </h4>
                      <ul>
                        <li className="text-secondary fs-8 py-2">Classic Tees</li>
                        <li className="text-secondary fs-8 py-2">Long Sleeves</li>
                        <li className="text-secondary fs-8 py-2">Stonewash Tees</li>
                        <li className="text-secondary fs-8 py-2">Crop Tees</li>
                      </ul>
                    </li>
                    <li className="col-2 pe-2">
                      <img src="img/mega-menu-1.webp" alt="..." className="img-fluid" />
                      <h5 className="mt-3  text-center fw-bold">Front and Back</h5>
                    </li>
                    <li className="col-2 ps-2">
                      <img src="img/mega-menu-1.webp" alt="..." className="img-fluid" />
                      <h5 className="mt-3  text-center fw-bold">Front and Back</h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a href="#" className="fw-semibold fs-6  reswhite">
              Custom
            </a>
          </li>
        </ul>
      </nav>
      <div className="icons col-6 col-md-8 col-lg-2 col-xl-3">
        <div className="header-part-3 d-flex text-white align-items-center justify-content-end text-black">
          {/* austraila accordian  */}
          <p className="me-4 reswhite d-xl-block d-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRigh" aria-controls="offcanvasRight fs-7" style={{cursor: 'pointer', fontWeight: '600!important'}}><i className="bi bi-globe-asia-australia me-2 reswhite" />AUD $</p>
          {/* second search  */}
          <a href="#" className="me-4 text-black nav-link" data-bs-toggle="offcanvas" data-bs-target="#searchcanva" aria-controls="offcanvasRight" style={{cursor: 'pointer', fontWeight: '900!important'}}><i className="bi bi-search  fs-5 fw-bold reswhite" /></a>
          <a href="#" className="me-4 text-black nav-link" data-bs-toggle="offcanvas" data-bs-target="#user-canva" aria-controls="offcanvasRight" style={{fontWeight: '900!important'}}> <i className="bi bi-person fs-5 fw-bold reswhite" /></a>
          <a href="#" className="me-4 text-black nav-link" data-bs-toggle="offcanvas" data-bs-target="#add-to-cart" aria-controls="offcanvasRight" style={{fontWeight: '900!important'}}><i className="bi bi-bag  fs-5 fw-bold reswhite" /></a>
        </div>
      </div>
    </div>
  </div>
</header>

  )
}

export default Header