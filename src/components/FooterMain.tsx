import React from "react";

export default function FooterMain() {
  return (
    <footer>
      <div className="td-footer-area td-grey-bg">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4">
              <div className="td-footer-widget td-footer-col pt-120 pb-100">
                <div className="td-footer-widget-content">
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/expertise">Expertise</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/contact">Contact</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 col-md-8 col-sm-8">
              <div className="td-footer-widget h-100 td-footer-col-2 pb-100 text-center pt-120">
                <div className="td-footer-logo mb-45">
                  <a href="/">
                    <img src="/assets/img/logo/logo.svg" alt="Rava Logo" style={{ height: "45px" }} />
                  </a>
                </div>
                <div className="td-footer-widget-content">
                  <p className="td-footer-widget-para mb-30">
                    Make your business boom<br /> with Rava.
                  </p>
                  <div className="td-footer-btn">
                    <a className="td-btn td-left-right" href="/contact">
                      Let’s Chat
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
            <div className="col-xl-2 col-lg-3 col-md-6">
              <div className="td-footer-widget td-footer-col-3 pt-120 pb-100">
                <h4 className="td-footer-widget-title mb-40">Essential</h4>
                <div className="td-footer-widget-content-2">
                  <ul>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Cookie Policy</a></li>
                    <li><a href="#">Careers</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="td-footer-bottom pt-35 td-footer-bottom-border">
          <div className="container">
            <div className="row">
              <div className="col-xxl-6 col-xl-5 col-lg-4 col-md-4 mb-35">
                <div className="td-footer-bottom-social">
                  <div className="d-flex align-items-center gap-3 flex-wrap mb-45">
                    <span style={{ fontSize: "14px", fontWeight: "600", color: "#111", textTransform: "uppercase", letterSpacing: "0.05em" }}>Follow us:</span>
                    <ul className="d-inline-flex mb-0 align-items-center" style={{ gap: "15px" }}>
                      <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                      <li>
                        <a href="#">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: "12px", height: "12px", verticalAlign: "middle" }}>
                            <path fill="currentColor" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                          </svg>
                        </a>
                      </li>
                      <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                    </ul>
                  </div>
                  <div className="td-footer-bottom-copyright">
                    <p>© {new Date().getFullYear()} <a href="/">Rava</a>, All rights reserved.</p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-8">
                <div className="row">
                  <div className="col-lg-7 col-md-6">
                    <div className="td-footer-bottom-location pt-5 mb-35 ml-100">
                      <h5 className="td-footer-bottom-title mb-15">Contact</h5>
                      <a href="mailto:info@ravainteriors.com">info@ravainteriors.com</a>
                      <span>Phone: <a className="td-footer-bottom-phone" href="tel:5397804394">5397804394</a></span>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-6">
                    <div className="td-footer-bottom-location mb-35 ml-20 pt-5">
                      <h5 className="td-footer-bottom-title mb-15">Address</h5>
                      <a href="https://www.google.com/maps/search/?api=1&query=KAYABA%C5%9EI%20MAH.%20KAYA%C5%9EEH%C4%B0R%20BLV.%20N%C4%B0DAKULE%20NO%3A%2045%20%C4%B0%C3%87%20KAPI%20NO%3A%2097%20BA%C5%9EAK%C5%9EEH%C4%B0R%2F%20%C4%B0STANBUL" target="_blank" rel="noreferrer">
                        KAYABAŞI MAH. KAYAŞEHİR BLV. NİDAKULE NO: 45 İÇ KAPI NO: 97 BAŞAKŞEHİR/ İSTANBUL
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
