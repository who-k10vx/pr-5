import React from 'react'

function Popular() {
  return (
<section className="py-100 py-99 mt-5 ">
  <div className="popular">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 mb-5 d-flex flex-wrap justify-content-between">
          <div className="popular-title col-md-6 col-12">
            <h3 className=" display-6 text-dark fst-italic" style={{fontWeight: 900, letterSpacing: '-0.02rem'}}>POPULAR NOW</h3>
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
          <div className=" col-12 d-flex  ps-2 " id="scr" style={{overflow: 'scroll!important'}}>
            <div className="col-lg-3 col-md-6 col-sm-7 col-10  px-lg-2  px-1 ">
              <div className="col-12 rounded-3 hovbut border  border-1 position-relative">
                <img src="img/product-2.webp" className="img-fluid rounded-3"  />
                <div className="first-icon position-absolute" style={{top: '5%', left: '5%'}}>
                  <p className=" text-white rounded-4 py-1 fw-bold fs-8 px-2 d-inline-block d-flex align-items-center " style={{backgroundColor: '#8e75f5'}}>
                    New</p>
                </div>
                <a href="#" className="rounded-3 btn btn-light position-absolute bottom-0 end-0 d-lg-none m-3 p-2 rounded-circle " style={{width: 40, height: 40}} data-bs-toggle="offcanvas" data-bs-target="#quickadd" aria-controls="offcanvasRight"><i className="bi bi-basket2" /></a> <button type="button" className="rounded-3 btn btn-primary position-absolute bottom-0 end-0 d-none m-3 p-2 rounded-3" style={{fontSize: 13, backgroundColor: '#8e75f5'}} data-bs-toggle="offcanvas" data-bs-target="#quickadd" aria-controls="offcanvasRight">+ Quick add</button>
              </div>
              <div className="col-12">
                <h6 className="fw-bold pt-4">JFC T-Shirt</h6>
                <p className="text-secondary fw-semibold mb-2">
                  $45.00
                </p>
                <div>
                  <div className="d-flex gap-1 gap-lg-2  pt-0">
                    <button className="rounded-circle  bg-white" style={{border: '2px solid black', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-warning rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                    <button className="rounded-circle bg-white" style={{border: 'none', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-danger rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                    <button className="rounded-circle bg-white" style={{border: 'none', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-black rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                    <button className="rounded-circle p-1 bg-white d-none d-lg-block" style={{border: 'none', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-success rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                    <button className="rounded-circle bg-white" style={{border: 'none', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-dark rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-7 col-10  px-lg-2  px-1 ">
              <div className="col-12 rounded-3 hovbut border  border-1 position-relative">
                <img src="img/product-2.webp" className="img-fluid rounded-3"  />
                <div className="first-icon position-absolute" style={{top: '5%', left: '5%'}}>
                  <p className=" text-white rounded-4 py-1 fw-bold fs-8 px-2 d-inline-block d-flex align-items-center " style={{backgroundColor: '#8e75f5'}}>
                    New</p>
                </div>
                <a href="#" className="rounded-3 btn btn-light position-absolute bottom-0 end-0 d-lg-none m-3 p-2 rounded-circle " style={{width: 40, height: 40}} data-bs-toggle="offcanvas" data-bs-target="#quickadd" aria-controls="offcanvasRight"><i className="bi bi-basket2" /></a> <button type="button" className="rounded-3 btn btn-primary position-absolute bottom-0 end-0 d-none m-3 p-2 rounded-3" style={{fontSize: 13, backgroundColor: '#8e75f5'}} data-bs-toggle="offcanvas" data-bs-target="#quickadd" aria-controls="offcanvasRight">+ Quick add</button>
              </div>
              <div className="col-12">
                <h6 className="fw-bold pt-4">JFC T-Shirt</h6>
                <p className="text-secondary fw-semibold mb-2">
                  $45.00
                </p>
                <div>
                  <div className="d-flex gap-1 gap-lg-2  pt-0">
                    <button className="rounded-circle  bg-white" style={{border: '2px solid black', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-warning rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                    <button className="rounded-circle bg-white" style={{border: 'none', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-danger rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                    <button className="rounded-circle bg-white" style={{border: 'none', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-black rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                    <button className="rounded-circle p-1 bg-white d-none d-lg-block" style={{border: 'none', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-success rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                    <button className="rounded-circle bg-white" style={{border: 'none', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-dark rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-7 col-10  px-lg-2  px-1 ">
              <div className="col-12 rounded-3 hovbut border  border-1 position-relative">
                <img src="img/product-2.webp" className="img-fluid rounded-3"  />
                <div className="first-icon position-absolute" style={{top: '5%', left: '5%'}}>
                  <p className=" text-white rounded-4 py-1 fw-bold fs-8 px-2 d-inline-block d-flex align-items-center " style={{backgroundColor: '#8e75f5'}}>
                    New</p>
                </div>
                <a href="#" className="rounded-3 btn btn-light position-absolute bottom-0 end-0 d-lg-none m-3 p-2 rounded-circle " style={{width: 40, height: 40}} data-bs-toggle="offcanvas" data-bs-target="#quickadd" aria-controls="offcanvasRight"><i className="bi bi-basket2" /></a> <button type="button" className="rounded-3 btn btn-primary position-absolute bottom-0 end-0 d-none m-3 p-2 rounded-3" style={{fontSize: 13, backgroundColor: '#8e75f5'}} data-bs-toggle="offcanvas" data-bs-target="#quickadd" aria-controls="offcanvasRight">+ Quick add</button>
              </div>
              <div className="col-12">
                <h6 className="fw-bold pt-4">JFC T-Shirt</h6>
                <p className="text-secondary fw-semibold mb-2">
                  $45.00
                </p>
                <div>
                  <div className="d-flex gap-1 gap-lg-2  pt-0">
                    <button className="rounded-circle  bg-white" style={{border: '2px solid black', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-warning rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                    <button className="rounded-circle bg-white" style={{border: 'none', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-danger rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                    <button className="rounded-circle bg-white" style={{border: 'none', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-black rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                    <button className="rounded-circle p-1 bg-white d-none d-lg-block" style={{border: 'none', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-success rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                    <button className="rounded-circle bg-white" style={{border: 'none', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-dark rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-7 col-10  px-lg-2  px-1 ">
              <div className="col-12 rounded-3 hovbut border  border-1 position-relative">
                <img src="img/product-2.webp" className="img-fluid rounded-3"  />
                <div className="first-icon position-absolute" style={{top: '5%', left: '5%'}}>
                  <p className=" text-white rounded-4 py-1 fw-bold fs-8 px-2 d-inline-block d-flex align-items-center " style={{backgroundColor: '#8e75f5'}}>
                    New</p>
                </div>
                <a href="#" className="rounded-3 btn btn-light position-absolute bottom-0 end-0 d-lg-none m-3 p-2 rounded-circle " style={{width: 40, height: 40}} data-bs-toggle="offcanvas" data-bs-target="#quickadd" aria-controls="offcanvasRight"><i className="bi bi-basket2" /></a> <button type="button" className="rounded-3 btn btn-primary position-absolute bottom-0 end-0 d-none m-3 p-2 rounded-3" style={{fontSize: 13, backgroundColor: '#8e75f5'}} data-bs-toggle="offcanvas" data-bs-target="#quickadd" aria-controls="offcanvasRight">+ Quick add</button>
              </div>
              <div className="col-12">
                <h6 className="fw-bold pt-4">JFC T-Shirt</h6>
                <p className="text-secondary fw-semibold mb-2">
                  $45.00
                </p>
                <div>
                  <div className="d-flex gap-1 gap-lg-2  pt-0">
                    <button className="rounded-circle  bg-white" style={{border: '2px solid black', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-warning rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                    <button className="rounded-circle bg-white" style={{border: 'none', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-danger rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                    <button className="rounded-circle bg-white" style={{border: 'none', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-black rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                    <button className="rounded-circle p-1 bg-white d-none d-lg-block" style={{border: 'none', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-success rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                    <button className="rounded-circle bg-white" style={{border: 'none', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-dark rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-7 col-10  px-lg-2  px-1 ">
              <div className="col-12 rounded-3 hovbut border  border-1 position-relative">
                <img src="img/product-2.webp" className="img-fluid rounded-3"  />
                <div className="first-icon position-absolute" style={{top: '5%', left: '5%'}}>
                  <p className=" text-white rounded-4 py-1 fw-bold fs-8 px-2 d-inline-block d-flex align-items-center " style={{backgroundColor: '#8e75f5'}}>
                    New</p>
                </div>
                <a href="#" className="rounded-3 btn btn-light position-absolute bottom-0 end-0 d-lg-none m-3 p-2 rounded-circle " style={{width: 40, height: 40}} data-bs-toggle="offcanvas" data-bs-target="#quickadd" aria-controls="offcanvasRight"><i className="bi bi-basket2" /></a> <button type="button" className="rounded-3 btn btn-primary position-absolute bottom-0 end-0 d-none m-3 p-2 rounded-3" style={{fontSize: 13, backgroundColor: '#8e75f5'}} data-bs-toggle="offcanvas" data-bs-target="#quickadd" aria-controls="offcanvasRight">+ Quick add</button>
              </div>
              <div className="col-12">
                <h6 className="fw-bold pt-4">JFC T-Shirt</h6>
                <p className="text-secondary fw-semibold mb-2">
                  $45.00
                </p>
                <div>
                  <div className="d-flex gap-1 gap-lg-2  pt-0">
                    <button className="rounded-circle  bg-white" style={{border: '2px solid black', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-warning rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                    <button className="rounded-circle bg-white" style={{border: 'none', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-danger rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                    <button className="rounded-circle bg-white" style={{border: 'none', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-black rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                    <button className="rounded-circle p-1 bg-white d-none d-lg-block" style={{border: 'none', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-success rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                    <button className="rounded-circle bg-white" style={{border: 'none', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-dark rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-7 col-10  px-lg-2  px-1 ">
              <div className="col-12 rounded-3 hovbut border  border-1 position-relative">
                <img src="img/product-2.webp" className="img-fluid rounded-3"  />
                <div className="first-icon position-absolute" style={{top: '5%', left: '5%'}}>
                  <p className=" text-white rounded-4 py-1 fw-bold fs-8 px-2 d-inline-block d-flex align-items-center " style={{backgroundColor: '#8e75f5'}}>
                    New</p>
                </div>
                <a href="#" className="rounded-3 btn btn-light position-absolute bottom-0 end-0 d-lg-none m-3 p-2 rounded-circle " style={{width: 40, height: 40}} data-bs-toggle="offcanvas" data-bs-target="#quickadd" aria-controls="offcanvasRight"><i className="bi bi-basket2" /></a> <button type="button" className="rounded-3 btn btn-primary position-absolute bottom-0 end-0 d-none m-3 p-2 rounded-3" style={{fontSize: 13, backgroundColor: '#8e75f5'}} data-bs-toggle="offcanvas" data-bs-target="#quickadd" aria-controls="offcanvasRight">+ Quick add</button>
              </div>
              <div className="col-12">
                <h6 className="fw-bold pt-4">JFC T-Shirt</h6>
                <p className="text-secondary fw-semibold mb-2">
                  $45.00
                </p>
                <div>
                  <div className="d-flex gap-1 gap-lg-2  pt-0">
                    <button className="rounded-circle  bg-white" style={{border: '2px solid black', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-warning rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                    <button className="rounded-circle bg-white" style={{border: 'none', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-danger rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                    <button className="rounded-circle bg-white" style={{border: 'none', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-black rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                    <button className="rounded-circle p-1 bg-white d-none d-lg-block" style={{border: 'none', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-success rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                    <button className="rounded-circle bg-white" style={{border: 'none', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-dark rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-7 col-10  px-lg-2  px-1 ">
              <div className="col-12 rounded-3 hovbut border  border-1 position-relative">
                <img src="img/product-2.webp" className="img-fluid rounded-3"  />
                <div className="first-icon position-absolute" style={{top: '5%', left: '5%'}}>
                  <p className=" text-white rounded-4 py-1 fw-bold fs-8 px-2 d-inline-block d-flex align-items-center " style={{backgroundColor: '#8e75f5'}}>
                    New</p>
                </div>
                <a href="#" className="rounded-3 btn btn-light position-absolute bottom-0 end-0 d-lg-none m-3 p-2 rounded-circle " style={{width: 40, height: 40}} data-bs-toggle="offcanvas" data-bs-target="#quickadd" aria-controls="offcanvasRight"><i className="bi bi-basket2" /></a> <button type="button" className="rounded-3 btn btn-primary position-absolute bottom-0 end-0 d-none m-3 p-2 rounded-3" style={{fontSize: 13, backgroundColor: '#8e75f5'}} data-bs-toggle="offcanvas" data-bs-target="#quickadd" aria-controls="offcanvasRight">+ Quick add</button>
              </div>
              <div className="col-12">
                <h6 className="fw-bold pt-4">JFC T-Shirt</h6>
                <p className="text-secondary fw-semibold mb-2">
                  $45.00
                </p>
                <div>
                  <div className="d-flex gap-1 gap-lg-2  pt-0">
                    <button className="rounded-circle  bg-white" style={{border: '2px solid black', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-warning rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                    <button className="rounded-circle bg-white" style={{border: 'none', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-danger rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                    <button className="rounded-circle bg-white" style={{border: 'none', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-black rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                    <button className="rounded-circle p-1 bg-white d-none d-lg-block" style={{border: 'none', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-success rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                    <button className="rounded-circle bg-white" style={{border: 'none', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-dark rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-7 col-10  px-lg-2  px-1 ">
              <div className="col-12 rounded-3 hovbut border  border-1 position-relative">
                <img src="img/product-2.webp" className="img-fluid rounded-3"  />
                <div className="first-icon position-absolute" style={{top: '5%', left: '5%'}}>
                  <p className=" text-white rounded-4 py-1 fw-bold fs-8 px-2 d-inline-block d-flex align-items-center " style={{backgroundColor: '#8e75f5'}}>
                    New</p>
                </div>
                <a href="#" className="rounded-3 btn btn-light position-absolute bottom-0 end-0 d-lg-none m-3 p-2 rounded-circle " style={{width: 40, height: 40}} data-bs-toggle="offcanvas" data-bs-target="#quickadd" aria-controls="offcanvasRight"><i className="bi bi-basket2" /></a> <button type="button" className="rounded-3 btn btn-primary position-absolute bottom-0 end-0 d-none m-3 p-2 rounded-3" style={{fontSize: 13, backgroundColor: '#8e75f5'}} data-bs-toggle="offcanvas" data-bs-target="#quickadd" aria-controls="offcanvasRight">+ Quick add</button>
              </div>
              <div className="col-12">
                <h6 className="fw-bold pt-4">JFC T-Shirt</h6>
                <p className="text-secondary fw-semibold mb-2">
                  $45.00
                </p>
                <div>
                  <div className="d-flex gap-1 gap-lg-2  pt-0">
                    <button className="rounded-circle  bg-white" style={{border: '2px solid black', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-warning rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                    <button className="rounded-circle bg-white" style={{border: 'none', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-danger rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                    <button className="rounded-circle bg-white" style={{border: 'none', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-black rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                    <button className="rounded-circle p-1 bg-white d-none d-lg-block" style={{border: 'none', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-success rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                    <button className="rounded-circle bg-white" style={{border: 'none', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-dark rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-7 col-10  px-lg-2  px-1 ">
              <div className="col-12 rounded-3 hovbut border  border-1 position-relative">
                <img src="img/product-2.webp" className="img-fluid rounded-3"  />
                <div className="first-icon position-absolute" style={{top: '5%', left: '5%'}}>
                  <p className=" text-white rounded-4 py-1 fw-bold fs-8 px-2 d-inline-block d-flex align-items-center " style={{backgroundColor: '#8e75f5'}}>
                    New</p>
                </div>
                <a href="#" className="rounded-3 btn btn-light position-absolute bottom-0 end-0 d-lg-none m-3 p-2 rounded-circle " style={{width: 40, height: 40}} data-bs-toggle="offcanvas" data-bs-target="#quickadd" aria-controls="offcanvasRight"><i className="bi bi-basket2" /></a> <button type="button" className="rounded-3 btn btn-primary position-absolute bottom-0 end-0 d-none m-3 p-2 rounded-3" style={{fontSize: 13, backgroundColor: '#8e75f5'}} data-bs-toggle="offcanvas" data-bs-target="#quickadd" aria-controls="offcanvasRight">+ Quick add</button>
              </div>
              <div className="col-12">
                <h6 className="fw-bold pt-4">JFC T-Shirt</h6>
                <p className="text-secondary fw-semibold mb-2">
                  $45.00
                </p>
                <div>
                  <div className="d-flex gap-1 gap-lg-2  pt-0">
                    <button className="rounded-circle  bg-white" style={{border: '2px solid black', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-warning rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                    <button className="rounded-circle bg-white" style={{border: 'none', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-danger rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                    <button className="rounded-circle bg-white" style={{border: 'none', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-black rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                    <button className="rounded-circle p-1 bg-white d-none d-lg-block" style={{border: 'none', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-success rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                    <button className="rounded-circle bg-white" style={{border: 'none', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-dark rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-7 col-10  px-lg-2  px-1 ">
              <div className="col-12 rounded-3 hovbut border  border-1 position-relative">
                <img src="img/product-2.webp" className="img-fluid rounded-3"  />
                <div className="first-icon position-absolute" style={{top: '5%', left: '5%'}}>
                  <p className=" text-white rounded-4 py-1 fw-bold fs-8 px-2 d-inline-block d-flex align-items-center " style={{backgroundColor: '#8e75f5'}}>
                    New</p>
                </div>
                <a href="#" className="rounded-3 btn btn-light position-absolute bottom-0 end-0 d-lg-none m-3 p-2 rounded-circle " style={{width: 40, height: 40}} data-bs-toggle="offcanvas" data-bs-target="#quickadd" aria-controls="offcanvasRight"><i className="bi bi-basket2" /></a> <button type="button" className="rounded-3 btn btn-primary position-absolute bottom-0 end-0 d-none m-3 p-2 rounded-3" style={{fontSize: 13, backgroundColor: '#8e75f5'}} data-bs-toggle="offcanvas" data-bs-target="#quickadd" aria-controls="offcanvasRight">+ Quick add</button>
              </div>
              <div className="col-12">
                <h6 className="fw-bold pt-4">JFC T-Shirt</h6>
                <p className="text-secondary fw-semibold mb-2">
                  $45.00
                </p>
                <div>
                  <div className="d-flex gap-1 gap-lg-2  pt-0">
                    <button className="rounded-circle  bg-white" style={{border: '2px solid black', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-warning rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                    <button className="rounded-circle bg-white" style={{border: 'none', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-danger rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                    <button className="rounded-circle bg-white" style={{border: 'none', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-black rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                    <button className="rounded-circle p-1 bg-white d-none d-lg-block" style={{border: 'none', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-success rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                    <button className="rounded-circle bg-white" style={{border: 'none', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-dark rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-7 col-10  px-lg-2  px-1 ">
              <div className="col-12 rounded-3 hovbut border  border-1 position-relative">
                <img src="img/product-2.webp" className="img-fluid rounded-3"  />
                <div className="first-icon position-absolute" style={{top: '5%', left: '5%'}}>
                  <p className=" text-white rounded-4 py-1 fw-bold fs-8 px-2 d-inline-block d-flex align-items-center " style={{backgroundColor: '#8e75f5'}}>
                    New</p>
                </div>
                <a href="#" className="rounded-3 btn btn-light position-absolute bottom-0 end-0 d-lg-none m-3 p-2 rounded-circle " style={{width: 40, height: 40}} data-bs-toggle="offcanvas" data-bs-target="#quickadd" aria-controls="offcanvasRight"><i className="bi bi-basket2" /></a> <button type="button" className="rounded-3 btn btn-primary position-absolute bottom-0 end-0 d-none m-3 p-2 rounded-3" style={{fontSize: 13, backgroundColor: '#8e75f5'}} data-bs-toggle="offcanvas" data-bs-target="#quickadd" aria-controls="offcanvasRight">+ Quick add</button>
              </div>
              <div className="col-12">
                <h6 className="fw-bold pt-4">JFC T-Shirt</h6>
                <p className="text-secondary fw-semibold mb-2">
                  $45.00
                </p>
                <div>
                  <div className="d-flex gap-1 gap-lg-2  pt-0">
                    <button className="rounded-circle  bg-white" style={{border: '2px solid black', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-warning rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                    <button className="rounded-circle bg-white" style={{border: 'none', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-danger rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                    <button className="rounded-circle bg-white" style={{border: 'none', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-black rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                    <button className="rounded-circle p-1 bg-white d-none d-lg-block" style={{border: 'none', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-success rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                    <button className="rounded-circle bg-white" style={{border: 'none', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-dark rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-10  px-lg-2  px-1 ">
              <div className="col-12 rounded-3 hovbut border  border-1 position-relative">
                <img src="img/product-2.webp" className="img-fluid rounded-3"  />
                <div className="first-icon position-absolute" style={{top: '5%', left: '5%'}}>
                  <p className=" text-white rounded-4 py-1 fw-bold fs-8 px-2 d-inline-block d-flex align-items-center " style={{backgroundColor: '#8e75f5'}}>
                    New</p>
                </div>
                <a href="#" className="rounded-3 btn btn-light position-absolute bottom-0 end-0 d-lg-none m-3 p-2 rounded-circle " style={{width: 40, height: 40}} data-bs-toggle="offcanvas" data-bs-target="#quickadd" aria-controls="offcanvasRight"><i className="bi bi-basket2" /></a> <button type="button" className="rounded-3 btn btn-primary position-absolute bottom-0 end-0 d-none m-3 p-2 rounded-3" style={{fontSize: 13, backgroundColor: '#8e75f5'}} data-bs-toggle="offcanvas" data-bs-target="#quickadd" aria-controls="offcanvasRight">+ Quick add</button>
              </div>
              <div className="col-12">
                <h6 className="fw-bold pt-4">JFC T-Shirt</h6>
                <p className="text-secondary fw-semibold mb-2">
                  $45.00
                </p>
                <div>
                  <div className="d-flex gap-1 gap-lg-2  pt-0">
                    <button className="rounded-circle  bg-white" style={{border: '2px solid black', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-warning rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                    <button className="rounded-circle bg-white" style={{border: 'none', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-danger rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                    <button className="rounded-circle bg-white" style={{border: 'none', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-black rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                    <button className="rounded-circle p-1 bg-white d-none d-lg-block" style={{border: 'none', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-success rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                    <button className="rounded-circle bg-white" style={{border: 'none', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-dark rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-7 col-10  px-lg-2  px-1 ">
              <div className="col-12 rounded-3 hovbut border  border-1 position-relative">
                <img src="img/product-2.webp" className="img-fluid rounded-3"  />
                <div className="first-icon position-absolute" style={{top: '5%', left: '5%'}}>
                  <p className=" text-white rounded-4 py-1 fw-bold fs-8 px-2 d-inline-block d-flex align-items-center " style={{backgroundColor: '#8e75f5'}}>
                    New</p>
                </div>
                <a href="#" className="rounded-3 btn btn-light position-absolute bottom-0 end-0 d-lg-none m-3 p-2 rounded-circle " style={{width: 40, height: 40}} data-bs-toggle="offcanvas" data-bs-target="#quickadd" aria-controls="offcanvasRight"><i className="bi bi-basket2" /></a> <button type="button" className="rounded-3 btn btn-primary position-absolute bottom-0 end-0 d-none m-3 p-2 rounded-3" style={{fontSize: 13, backgroundColor: '#8e75f5'}} data-bs-toggle="offcanvas" data-bs-target="#quickadd" aria-controls="offcanvasRight">+ Quick add</button>
              </div>
              <div className="col-12">
                <h6 className="fw-bold pt-4">JFC T-Shirt</h6>
                <p className="text-secondary fw-semibold mb-2">
                  $45.00
                </p>
                <div>
                  <div className="d-flex gap-1 gap-lg-2  pt-0">
                    <button className="rounded-circle  bg-white" style={{border: '2px solid black', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-warning rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                    <button className="rounded-circle bg-white" style={{border: 'none', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-danger rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                    <button className="rounded-circle bg-white" style={{border: 'none', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-black rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                    <button className="rounded-circle p-1 bg-white d-none d-lg-block" style={{border: 'none', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-success rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                    <button className="rounded-circle bg-white" style={{border: 'none', padding: '2px!important'}} onclick="return borderDark(this)">
                      <div className="bg-dark rounded-circle border border-1" style={{width: 15, height: 15}} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="position-absolute col-12  px-5 mx-auto justify-content-between top-50 show1" style={{transform: 'translateY(-50%)', transition: 'all 0.5s', display: 'none'}}>
            <button type="button" className="btn btn-light rounded-circle  text-center" onclick="
          (() => {
                  var scr = document.getElementById('scr');
                  scr.scrollLeft -=200;
          })()
          ">
              <i className="bi bi-arrow-left text-black fw-bold fs-5" />
            </button>
            <button type="button" className="btn btn-light rounded-circle  text-center " onclick="
                  (() => {
                          var scr = document.getElementById('scr');
                          scr.scrollLeft +=200;
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

export default Popular