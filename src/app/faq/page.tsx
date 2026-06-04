import React from "react";
import HeaderPage from "@/components/HeaderPage";
import FooterPage from "@/components/FooterPage";

export default function Page() {
  return (
    <>
      <HeaderPage />
      <main>
        
         {/* td-breadcrumb-area-start */}
         <div className="td-breadcrumb-area td-breadcrumb-spacing fix  bg-position" style={{ backgroundImage: "url(/assets/img/breadcrumb/bg.jpg)" }}>
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-lg-8">
                     <div className="td-breadcrumb-title-wrap mb-20">
                        <h3 className="td-breadcrumb-title">FAQ Page</h3>
                     </div>
                  </div>
                  <div className="col-lg-4">
                     <div className="td-breadcrumb-list float-right mb-20">
                        <span><a href="/">Pages</a></span>
                        <span className="dvdr">/</span>
                        <span className="page">FAQ</span>
                     </div>
                  </div>
               </div>
            </div>
            <div className="td-breadcrumb-big-text pt-60" data-parallax='{"x": -100, "smoothness": 10}'>
               <h2>Rava.Business</h2>
            </div>
         </div>
         {/* td-breadcrumb-area-end */}

         {/* td-faq-area-start */}
         <div className="td-faq-area pt-140 pb-80">
            <div className="container">
               <div className="row">
                  <div className="col-lg-8 mb-60">
                     <div className="accordion td-service-details-accordion" id="faqaccordion_image">
                        <div className="accordion-item td-service-details-accordion-item">
                           <h2 className="accordion-header" id="cancel">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsecancel" aria-expanded="true" aria-controls="collapsecancel">
                                 How do consultants understand client challenges?
                                 <span className="accordion-btn"></span>
                              </button>
                           </h2>
                           <div id="collapsecancel" className="accordion-collapse collapse show" aria-labelledby="cancel" data-bs-parent="#faqaccordion_image">
                              <div className="accordion-body">
                                 <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                       <div className="td-faq-thumb mb-30">
                                          <img className="w-100" src="/assets/img/faq/details/thumb.jpg" alt="faq" />
                                       </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                       <div className="td-faq-thumb mb-30">
                                          <img className="w-100" src="/assets/img/faq/details/thumb2.jpg" alt="faq" />
                                       </div>
                                    </div>
                                 </div>
                                 <p>Business consultants employ a variety of problem-solving methods tailored to client needs and the nature of the issue. These include root cause analysis to address underlying problems, SWOT analysis for identifying strengths, weaknesses, opportunities, and threats, benchmarking against industry standards, data analysis for uncovering patterns and trends, process optimization to enhance efficiency, change management strategies to navigate organizational transitions, innovation workshops.</p>
                              </div>
                           </div>
                        </div>
                        <div className="accordion-item  td-service-details-accordion-item">
                           <h2 className="accordion-header" id="happen">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsehappen" aria-expanded="false" aria-controls="collapsehappen">
                                 What methods do they use for problem-solving?
                                 <span className="accordion-btn"></span>
                              </button>
                           </h2>
                           <div id="collapsehappen" className="accordion-collapse collapse" aria-labelledby="happen" data-bs-parent="#faqaccordion_image">
                              <div className="accordion-body">
                                 <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                       <div className="td-faq-thumb mb-30">
                                          <img className="w-100" src="/assets/img/faq/details/thumb3.jpg" alt="faq" />
                                       </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                       <div className="td-faq-thumb mb-30">
                                          <img className="w-100" src="/assets/img/faq/details/thumb4.jpg" alt="faq" />
                                       </div>
                                    </div>
                                 </div>
                                 <p>Business consultants employ a variety of problem-solving methods tailored to client needs and the nature of the issue. These include root cause analysis to address underlying problems, SWOT analysis for identifying strengths, weaknesses, opportunities, and threats, benchmarking against industry standards, data analysis for uncovering patterns and trends, process optimization to enhance efficiency, change management strategies to navigate organizational transitions, innovation workshops.</p>
                              </div>
                           </div>
                        </div>
                        <div className="accordion-item  td-service-details-accordion-item">
                           <h2 className="accordion-header" id="have">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsehave" aria-expanded="false" aria-controls="collapsehave">
                                 How do they measure project success?
                                 <span className="accordion-btn"></span>
                              </button>
                           </h2>
                           <div id="collapsehave" className="accordion-collapse collapse" aria-labelledby="have" data-bs-parent="#faqaccordion_image">
                              <div className="accordion-body">
                                 <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                       <div className="td-faq-thumb mb-30">
                                          <img className="w-100" src="/assets/img/faq/details/thumb5.jpg" alt="faq" />
                                       </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                       <div className="td-faq-thumb mb-30">
                                          <img className="w-100" src="/assets/img/faq/details/thumb6.jpg" alt="faq" />
                                       </div>
                                    </div>
                                 </div>
                                 <p>Business consultants employ a variety of problem-solving methods tailored to client needs and the nature of the issue. These include root cause analysis to address underlying problems, SWOT analysis for identifying strengths, weaknesses, opportunities, and threats, benchmarking against industry standards, data analysis for uncovering patterns and trends, process optimization to enhance efficiency, change management strategies to navigate organizational transitions, innovation workshops.</p>
                              </div>
                           </div>
                        </div>
                        <div className="accordion-item  td-service-details-accordion-item">
                           <h2 className="accordion-header" id="four">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                 What’s the role of data analysis in their work?
                                 <span className="accordion-btn"></span>
                              </button>
                           </h2>
                           <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="four" data-bs-parent="#faqaccordion_image">
                              <div className="accordion-body">
                                 <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                       <div className="td-faq-thumb mb-30">
                                          <img className="w-100" src="/assets/img/faq/details/thumb.jpg" alt="faq" />
                                       </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                       <div className="td-faq-thumb mb-30">
                                          <img className="w-100" src="/assets/img/faq/details/thumb2.jpg" alt="faq" />
                                       </div>
                                    </div>
                                 </div>
                                 <p>Business consultants employ a variety of problem-solving methods tailored to client needs and the nature of the issue. These include root cause analysis to address underlying problems, SWOT analysis for identifying strengths, weaknesses, opportunities, and threats, benchmarking against industry standards, data analysis for uncovering patterns and trends, process optimization to enhance efficiency, change management strategies to navigate organizational transitions, innovation workshops.</p>
                              </div>
                           </div>
                        </div>
                        <div className="accordion-item  td-service-details-accordion-item">
                           <h2 className="accordion-header" id="five">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
                                 How do consultants adapt for different business sizes?
                                 <span className="accordion-btn"></span>
                              </button>
                           </h2>
                           <div id="collapsefive" className="accordion-collapse collapse" aria-labelledby="five" data-bs-parent="#faqaccordion_image">
                              <div className="accordion-body">
                                 <div className="row">
                                    <div className="col-lg-6">
                                       <div className="td-faq-thumb mb-30">
                                          <img className="w-100" src="/assets/img/faq/details/thumb3.jpg" alt="faq" />
                                       </div>
                                    </div>
                                    <div className="col-lg-6">
                                       <div className="td-faq-thumb mb-30">
                                          <img className="w-100" src="/assets/img/faq/details/thumb4.jpg" alt="faq" />
                                       </div>
                                    </div>
                                 </div>
                                 <p>Business consultants employ a variety of problem-solving methods tailored to client needs and the nature of the issue. These include root cause analysis to address underlying problems, SWOT analysis for identifying strengths, weaknesses, opportunities, and threats, benchmarking against industry standards, data analysis for uncovering patterns and trends, process optimization to enhance efficiency, change management strategies to navigate organizational transitions, innovation workshops.</p>
                              </div>
                           </div>
                        </div>
                        <div className="accordion-item  td-service-details-accordion-item">
                           <h2 className="accordion-header" id="six">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
                                 What challenges do businesses face during change?
                                 <span className="accordion-btn"></span>
                              </button>
                           </h2>
                           <div id="collapsesix" className="accordion-collapse collapse" aria-labelledby="six" data-bs-parent="#faqaccordion_image">
                              <div className="accordion-body">
                                 <div className="row">
                                    <div className="col-lg-6">
                                       <div className="td-faq-thumb mb-30">
                                          <img className="w-100" src="/assets/img/faq/details/thumb5.jpg" alt="faq" />
                                       </div>
                                    </div>
                                    <div className="col-lg-6">
                                       <div className="td-faq-thumb mb-30">
                                          <img className="w-100" src="/assets/img/faq/details/thumb6.jpg" alt="faq" />
                                       </div>
                                    </div>
                                 </div>
                                 <p>Business consultants employ a variety of problem-solving methods tailored to client needs and the nature of the issue. These include root cause analysis to address underlying problems, SWOT analysis for identifying strengths, weaknesses, opportunities, and threats, benchmarking against industry standards, data analysis for uncovering patterns and trends, process optimization to enhance efficiency, change management strategies to navigate organizational transitions, innovation workshops.</p>
                              </div>
                           </div>
                        </div>
                        <div className="accordion-item  td-service-details-accordion-item">
                           <h2 className="accordion-header" id="saven">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesaven" aria-expanded="false" aria-controls="collapsesaven">
                                 How do consultants stay updated on trends?
                                 <span className="accordion-btn"></span>
                              </button>
                           </h2>
                           <div id="collapsesaven" className="accordion-collapse collapse" aria-labelledby="saven" data-bs-parent="#faqaccordion_image">
                              <div className="accordion-body">
                                 <div className="row">
                                    <div className="col-lg-6">
                                       <div className="td-faq-thumb mb-30">
                                          <img className="w-100" src="/assets/img/faq/details/thumb.jpg" alt="faq" />
                                       </div>
                                    </div>
                                    <div className="col-lg-6">
                                       <div className="td-faq-thumb mb-30">
                                          <img className="w-100" src="/assets/img/faq/details/thumb2.jpg" alt="faq" />
                                       </div>
                                    </div>
                                 </div>
                                 <p>Business consultants employ a variety of problem-solving methods tailored to client needs and the nature of the issue. These include root cause analysis to address underlying problems, SWOT analysis for identifying strengths, weaknesses, opportunities, and threats, benchmarking against industry standards, data analysis for uncovering patterns and trends, process optimization to enhance efficiency, change management strategies to navigate organizational transitions, innovation workshops.</p>
                              </div>
                           </div>
                        </div>
                        <div className="accordion-item  td-service-details-accordion-item">
                           <h2 className="accordion-header" id="eight">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseeight" aria-expanded="false" aria-controls="collapseeight">
                                 What ethical rules do they follow?
                                 <span className="accordion-btn"></span>
                              </button>
                           </h2>
                           <div id="collapseeight" className="accordion-collapse collapse" aria-labelledby="eight" data-bs-parent="#faqaccordion_image">
                              <div className="accordion-body">
                                 <div className="row">
                                    <div className="col-lg-6">
                                       <div className="td-faq-thumb mb-30">
                                          <img className="w-100" src="/assets/img/faq/details/thumb3.jpg" alt="faq" />
                                       </div>
                                    </div>
                                    <div className="col-lg-6">
                                       <div className="td-faq-thumb mb-30">
                                          <img className="w-100" src="/assets/img/faq/details/thumb4.jpg" alt="faq" />
                                       </div>
                                    </div>
                                 </div>
                                 <p>Business consultants employ a variety of problem-solving methods tailored to client needs and the nature of the issue. These include root cause analysis to address underlying problems, SWOT analysis for identifying strengths, weaknesses, opportunities, and threats, benchmarking against industry standards, data analysis for uncovering patterns and trends, process optimization to enhance efficiency, change management strategies to navigate organizational transitions, innovation workshops.</p>
                              </div>
                           </div>
                        </div>
                        <div className="accordion-item  td-service-details-accordion-item">
                           <h2 className="accordion-header" id="nine">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsenine" aria-expanded="false" aria-controls="collapsenine">
                                 What are the risks of using consultancy services?
                                 <span className="accordion-btn"></span>
                              </button>
                           </h2>
                           <div id="collapsenine" className="accordion-collapse collapse" aria-labelledby="nine" data-bs-parent="#faqaccordion_image">
                              <div className="accordion-body">
                                 <div className="row">
                                    <div className="col-lg-6">
                                       <div className="td-faq-thumb mb-30">
                                          <img className="w-100" src="/assets/img/faq/details/thumb5.jpg" alt="faq" />
                                       </div>
                                    </div>
                                    <div className="col-lg-6">
                                       <div className="td-faq-thumb mb-30">
                                          <img className="w-100" src="/assets/img/faq/details/thumb6.jpg" alt="faq" />
                                       </div>
                                    </div>
                                 </div>
                                 <p>Business consultants employ a variety of problem-solving methods tailored to client needs and the nature of the issue. These include root cause analysis to address underlying problems, SWOT analysis for identifying strengths, weaknesses, opportunities, and threats, benchmarking against industry standards, data analysis for uncovering patterns and trends, process optimization to enhance efficiency, change management strategies to navigate organizational transitions, innovation workshops.</p>
                              </div>
                           </div>
                        </div>
                        <div className="accordion-item  td-service-details-accordion-item">
                           <h2 className="accordion-header" id="teen">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseteen" aria-expanded="false" aria-controls="collapseteen">
                                 Can you share a recent successful project?
                                 <span className="accordion-btn"></span>
                              </button>
                           </h2>
                           <div id="collapseteen" className="accordion-collapse collapse" aria-labelledby="teen" data-bs-parent="#faqaccordion_image">
                              <div className="accordion-body">
                                 <div className="row">
                                    <div className="col-lg-6">
                                       <div className="td-faq-thumb mb-30">
                                          <img className="w-100" src="/assets/img/faq/details/thumb.jpg" alt="faq" />
                                       </div>
                                    </div>
                                    <div className="col-lg-6">
                                       <div className="td-faq-thumb mb-30">
                                          <img className="w-100" src="/assets/img/faq/details/thumb2.jpg" alt="faq" />
                                       </div>
                                    </div>
                                 </div>
                                 <p>Business consultants employ a variety of problem-solving methods tailored to client needs and the nature of the issue. These include root cause analysis to address underlying problems, SWOT analysis for identifying strengths, weaknesses, opportunities, and threats, benchmarking against industry standards, data analysis for uncovering patterns and trends, process optimization to enhance efficiency, change management strategies to navigate organizational transitions, innovation workshops.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4 mb-20">
                     <div className="td-service-details-right ml-50">
                        <div className="td-service-widget-item mb-30">
                           <h3 className="td-service-widget-title">Our Services</h3>
                           <ul>
                              <li>
                                 <a href="#">Investments
                                    <i className="fa-regular fa-arrow-right-long"></i>
                                 </a>
                              </li>
                              <li>
                                 <a href="#">Online Business
                                    <i className="fa-regular fa-arrow-right-long"></i>
                                 </a>
                              </li>
                              <li>
                                 <a href="#">Tax & Declaration
                                    <i className="fa-regular fa-arrow-right-long"></i>
                                 </a>
                              </li>
                              <li>
                                 <a href="#">Customer Strategy
                                    <i className="fa-regular fa-arrow-right-long"></i>
                                 </a>
                              </li>
                              <li>
                                 <a href="#">Private Equality
                                    <i className="fa-regular fa-arrow-right-long"></i>
                                 </a>
                              </li>
                              <li>
                                 <a href="#">Corporate Solution
                                    <i className="fa-regular fa-arrow-right-long"></i>
                                 </a>
                              </li>
                           </ul>
                        </div>
                        <div className="td-service-widget-pdf mb-30">
                           <ul>
                              <li>
                                 <a href="#">
                                    <i className="fa-sharp fa-solid fa-file-lines"></i>
                                    Investments  
                                 </a>
                                 <span> <i className="fa-regular fa-arrow-right-long"></i></span>
                              </li>
                              <li>
                                 <a href="#">
                                    <i className="fa-sharp fa-solid fa-file"></i>
                                    Online Business
                                 </a>
                                 <span> <i className="fa-regular fa-arrow-right-long"></i></span>
                              </li>
                           </ul>
                        </div>
                        <div className="td-service-widget-item mb-30">
                           <h3 className="td-service-widget-title td-service-widget-title-2">How can we help you?</h3>
                           <form action="#">
                              <div className="td-service-widget-input mb-15">
                                 <input type="text" id="name" placeholder="Your name" />
                                 <label htmlFor="name"><i className="fa-regular fa-user"></i></label>
                              </div>
                              <div className="td-service-widget-input mb-15">
                                 <input type="email" id="email" placeholder="Email address" />
                                 <label htmlFor="email"><i className="fa-regular fa-envelope-open"></i></label>
                              </div>
                              <div className="td-service-widget-textarea mb-15">
                                 <textarea id="textarea" placeholder="Message"></textarea>
                                 <label htmlFor="textarea"><i className="fa-sharp fa-light fa-pen"></i></label>
                              </div>
                              <div className="td-service-widget-form-btn">
                                 <button type="button" className="td-btn td-left-right">Get In Touch
                                    <span className="td-arrow-angle ml-10"> 
                                       <svg className="td-arrow-svg-top-right" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10.00 10.00">
                                          <path d="M1.018 10.009 0 8.991l7.569-7.582H1.723L1.737 0h8.26v8.274H8.574l.013-5.847Z" />
                                          <path d="M1.018 10.009 0 8.991l7.569-7.582H1.723L1.737 0h8.26v8.274H8.574l.013-5.847Z" />
                                       </svg> 
                                    </span>
                                 </button>
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* td-faq-area-end */}
         

      
      </main>
      <FooterPage />
    </>
  );
}
