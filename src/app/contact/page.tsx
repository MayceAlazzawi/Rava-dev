import React from "react";
import HeaderPage from "@/components/HeaderPage";
import FooterPage from "@/components/FooterPage";

export default function Page() {
   return (
      <>
         <HeaderPage />
         <main>

            {/* td-breadcrumb-area-start */}
            <div className="td-breadcrumb-area td-breadcrumb-spacing fix  bg-position"
               style={{ backgroundImage: "url(/assets/img/breadcrumb/bg.jpg)" }}>
               <div className="container">
                  <div className="row align-items-center">
                     <div className="col-lg-8">
                        <div className="td-breadcrumb-title-wrap mb-20">
                           <h3 className="td-breadcrumb-title">Get In Touch</h3>
                        </div>
                     </div>
                     <div className="col-lg-4">
                        <div className="td-breadcrumb-list float-right mb-20">
                           <span><a href="/">Pages</a></span>
                           <span className="dvdr">/</span>
                           <span className="page">Contact</span>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="td-breadcrumb-big-text pt-60" data-parallax='{"x": -100, "smoothness": 10}'>
                  <h2>Rava.Business</h2>
               </div>
            </div>
            {/* td-breadcrumb-area-end */}

            {/* map area start  */}
            <div className="td-map-area fix">
               <div className="container-fluid p-0">
                  <div className="row">
                     <div className="col-lg-12">
                        <div className="td-contact-map-box p-relative">
                           <iframe
                              src="https://maps.google.com/maps?q=KAYABA%C5%9EI%20MAH.%20KAYA%C5%9EEH%C4%B0R%20BLV.%20N%C4%B0DAKULE%20NO%3A%2045%20%C4%B0%C3%87%20KAPI%20NO%3A%2097%20BA%C5%9EAK%C5%9EEH%C4%B0R%2F%20%C4%B0STANBUL&output=embed"
                              width="600" height="450" style={{ border: 0 }} allowFullScreen={true} loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"></iframe>
                           <div className="td-contact-map-logo">
                              <h3>Rava</h3>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* map area end  */}

            {/* contact-area-start */}
            <div className="td-contact-area pt-140 pb-105">
               <div className="container">
                  <div className="row">
                     <div className="col-12">
                        <div className="row">
                           <div className="col-xl-6 col-lg-7">
                              <div className="row">
                                 <div className="col-12 mb-40">
                                    <div className="row align-items-center">
                                       <div className="col-xl-7 col-lg-6 col-md-6 col-sm-5">
                                          <div className="td-contact-4-thumb">
                                             <img className="w-100" src="/assets/img/contact/contact4/bg.jpg" alt="" />
                                          </div>
                                       </div>
                                       <div className="col-xl-5 col-lg-6 col-md-6 col-sm-7">
                                          <div className="td-contact-4-content">
                                             <h3 className="td-contact-4-title mb-30">RAVA Interiors</h3>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="col-12 mb-40">
                                    <div className="row align-items-center">
                                       <div className="col-xl-7 col-lg-6 col-md-6 col-sm-5">
                                          <div className="td-contact-4-thumb">
                                             <img className="w-100" src="/assets/img/contact/contact4/bg2.jpg" alt="" />
                                          </div>
                                       </div>
                                       <div className="col-xl-5 col-lg-6 col-md-6 col-sm-7">
                                          <div className="td-contact-4-content">
                                             <h3 className="td-contact-4-title mb-30">Istanbul Office</h3>
                                             <ul>
                                                <li><a className="td-contact-4-email"
                                                   href="mailto:info@ravainteriors.com">info@ravainteriors.com</a></li>
                                                <li className="mb-10"><a className="td-contact-4-phone"
                                                   href="tel:5397804394">5397804394</a></li>
                                                <li><a className="td-contact-4-addres"
                                                   href="https://www.google.com/maps/search/?api=1&query=KAYABA%C5%9EI%20MAH.%20KAYA%C5%9EEH%C4%B0R%20BLV.%20N%C4%B0DAKULE%20NO%3A%2045%20%C4%B0%C3%87%20KAPI%20NO%3A%2097%20BA%C5%9EAK%C5%9EEH%C4%B0R%2F%20%C4%B0STANBUL"
                                                   target="_blank">KAYABAŞI MAH. KAYAŞEHİR BLV. NİDAKULE NO: 45 İÇ KAPI NO: 97 BAŞAKŞEHİR/ İSTANBUL</a>
                                                </li>
                                             </ul>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-xl-6 col-lg-5">
                              <div className="td-contact-4-form ml-100">
                                 <div className="td-chose-title-wrap mb-40">
                                    <span className="td-section-title-pre mb-10">Contact</span>
                                    <h2 className="td-section-title">Let’s Explore Your Project Together
                                    </h2>
                                 </div>
                                 <div className="td-contact-form-wrap-2">
                                    <div className="td-contact-form">
                                       <form id="contact-form" action="assets/mail.php" method="POST">
                                          <input className="mb-10" type="text" name="name" placeholder="Your name" />
                                          <input className="mb-10" type="email" name="email" placeholder="Your email" />
                                          <textarea className="mb-30" name="message" placeholder="Massage"></textarea>
                                          <button type="submit">Send Messages</button>
                                          <p className="ajax-response pt-20"></p>
                                       </form>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* contact-area-end */}


         </main>
         <FooterPage />
      </>
   );
}
