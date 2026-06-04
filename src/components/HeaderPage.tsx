import React from "react";

interface HeaderPageProps {
  logoSrc?: string;
  logoWidth?: string;
  logoHeight?: string;
}

export default function HeaderPage({
  logoSrc = "/assets/img/logo/logoRava.svg",
  logoWidth = "102px",
  logoHeight = "28px"
}: HeaderPageProps) {
  return (
    <header>
      {/* header-area-start */}
      <div className="td-header-area td-transparent">
        <div className="td-header-3-top td-black-bg-2">
          <div className="container container-1730">
            <div className="row">
              <div className="col-12">
                <div className="td-header-3-content">
                  <p>Welcome To Our <a href="/">Rava Consulting</a> Firm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="td-header-2-bottom td-header-sticky-black" id="header-sticky">
          <div className="container container-1730">
            <div className="row">
              <div className="col-12">
                <div className="td-header-mobile-space">
                  <div className="row align-items-center">
                    <div className="col-xl-1 col-lg-2 col-6">
                      <div className="td-header-logo mr-90">
                        <a href="/">
                          <img src={logoSrc} alt="Rava Logo" style={{ width: logoWidth, height: logoHeight }} />
                        </a>
                      </div>
                    </div>
                    <div className="col-xl-8 col-lg-8 col-6">
                      <div className="td-main-menu td-main-menu-3 d-none d-lg-block">
                        <nav className="td-main-menu-content">
                          <ul>
                            <li><a href="/">HOME</a></li>
                            <li><a href="/expertise">EXPERTISE</a></li>
                            <li><a href="/about">ABOUT</a></li>
                            <li><a href="/projects">PROJECTS</a></li>
                            <li><a href="/contact">CONTACT US</a></li>
                          </ul>
                        </nav>
                      </div>
                      <div className="td-header-bar td-header-bar-white d-block d-lg-none text-right">
                        <button className="td-offcanvas-open-btn td-menu-bar">
                          <span></span>
                          <span></span>
                          <span></span>
                        </button>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-2 d-none d-lg-block">
                      <div className="td-header-3-btn text-right">
                        <a className="td-btn td-btn-7 td-left-right" href="/contact">Let’s Talk
                          <span className="td-arrow-angle ml-10">
                            <svg className="td-arrow-svg-top-right" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10.00 10.00">
                              <path d="M1.018 10.009 0 8.991l7.569-7.582H1.723L1.737 0h8.26v8.274H8.574l.013-5.847Z" />
                              <path d="M1.018 10.009 0 8.991l7.569-7.582H1.723L1.737 0h8.26v8.274H8.574l.013-5.847Z" />
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* header-area-end */}
    </header>
  );
}
