import React from "react";

export default function Offcanvas() {
  return (
    <>
      <div className="tdoffcanvas-area">
        <div className="tdoffcanvas">
          <div className="tdoffcanvas__close-btn">
            <button className="close-btn">
              <i className="fal fa-times"></i>
            </button>
          </div>
          <div className="tdoffcanvas__logo">
            <a href="/">
              <img src="/assets/img/logo/logoRava.svg" alt="Rava Logo" style={{ height: "40px" }} />
            </a>
          </div>
          <div className="td-main-menu-mobile d-lg-none"></div>
          <div className="tdoffcanvas__contact-info">
            <div className="tdoffcanvas__contact-title">
              <h5>Contact us</h5>
              <p style={{ marginTop: "10px" }}>
                <a href="mailto:info@ravainteriors.com">info@ravainteriors.com</a>
              </p>
            </div>
          </div>
          <div className="tdoffcanvas__social">
            <div className="social-icon">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: "12px", height: "12px", fill: "currentColor" }}>
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
              </a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="body-overlay"></div>
    </>
  );
}
