import React from "react";

export default function FooterPage() {
  return (
    <footer>
      <div className="td-footer-area td-black-bg-2 pt-120">
        <div className="td-footer-3-top pb-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mb-50">
                <div className="td-footer-3-logo">
                  <a href="/">
                    <img src="/assets/img/logo/logo-white.svg" alt="Rava Logo" style={{ height: "45px" }} />
                  </a>
                </div>
              </div>
              <div className="col-lg-6 mb-50">
                <div className="td-footer-3-top-content">
                  <p>
                    Looking for collaboration? Send an email to <a href="mailto:info@ravainteriors.com">info@ravainteriors.com</a> for valuable enquiries and collaborations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="td-footer-3-wrap pb-65">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="td-footer-3-widget mt-45 mb-50">
                  <h2 className="td-footer-3-widget-big-title">
                    Let&apos;s work <span>together</span>
                  </h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-xl-6 col-lg-5 col-md-6 col-sm-5 mb-40">
                    <div className="td-footer-3-widget">
                      <h2 className="td-footer-3-widget-title mb-20">Menu</h2>
                      <ul>
                        <li>
                          <a href="/about" style={{ display: "block", marginBottom: "8px" }}>Company</a>
                          <a href="#" style={{ display: "block", marginBottom: "8px" }}>Careers</a>
                          <a href="#" style={{ display: "block", marginBottom: "8px" }}>Press Media</a>
                          <a href="#" style={{ display: "block", marginBottom: "8px" }}>Privacy Policy</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-7 col-md-6 col-sm-7 mb-40">
                    <div className="td-footer-3-widget mb-40">
                      <h2 className="td-footer-3-widget-title mb-20">Contact Us</h2>
                      <div className="td-footer-3-link">
                        <a href="mailto:info@ravainteriors.com">info@ravainteriors.com</a>
                        <a href="tel:5397804394">5397804394</a>
                      </div>
                    </div>
                    <div className="td-footer-3-widget">
                      <h2 className="td-footer-3-widget-title mb-20">Our Address</h2>
                      <div className="td-footer-3-link">
                        <a href="https://www.google.com/maps/search/?api=1&query=KAYABA%C5%9EI%20MAH.%20KAYA%C5%9EEH%C4%B0R%20BLV.%20N%C4%B0DAKULE%20NO%3A%2045%20%C4%B0%C3%87%20KAPI%20NO%3A%2097%20BA%C5%9EAK%C5%9EEH%C4%B0R%2F%20%C4%B0STANBUL" target="_blank" rel="noreferrer">
                          KAYABAŞI MAH. KAYAŞEHİR BLV. NİDAKULE NO: 45<br />
                          İÇ KAPI NO: 97 BAŞAKŞEHİR/ İSTANBUL
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="td-footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="td-footer-3-bottom-border td-footer-3-bottom-spacing">
                  <div className="row">
                    <div className="col-lg-6 col-sm-7 mb-15">
                      <div className="td-footer-3-bottom-copyright">
                        <p>© {new Date().getFullYear()} <a href="/">Rava</a>, All rights reserved.</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-5 mb-15">
                      <div className="td-footer-3-bottom-social text-right d-flex align-items-center justify-content-end gap-3 flex-wrap">
                        <span style={{ fontSize: "14px", fontWeight: "600", color: "#fff", textTransform: "uppercase", letterSpacing: "0.05em" }}>Follow us:</span>
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
