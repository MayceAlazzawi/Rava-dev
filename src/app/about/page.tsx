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
                     <div className="col-lg-6">
                        <div className="td-breadcrumb-title-wrap mb-20">
                           <h3 className="td-breadcrumb-title">Our Approach</h3>
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <div className="td-breadcrumb-list float-right mb-20">
                           <span><a href="/">Pages</a></span>
                           <span className="dvdr">/</span>
                           <span className="page"> About</span>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="td-breadcrumb-big-text pt-60" data-parallax='{"x": -100, "smoothness": 10}'>
                  <h2>Rava.Business</h2>
               </div>
            </div>
            {/* td-breadcrumb-area-end */}

            {/* td-team-area-start */}
            <div className="td-team-area pt-140 pb-60">
               <div className="container">

                  {/* td-approach-area-start */}
                  <div className="row mb-100 align-items-start">
                     <div className="col-lg-12 wow fadeInRight" data-wow-delay=".4s" data-wow-duration="1s">
                        <div className="td-about-content-wrap rava-about-approach-copy">
                           <p className="td-about-para rava-about-approach-lead">
                              <strong>RAVA Interiors</strong> is an internationally operating interior design firm dedicated to creating sophisticated, functional, and timeless spaces. With experience across residential, commercial, hospitality, and large-scale projects, we deliver comprehensive design and turnkey execution solutions tailored to each project’s identity and vision.
                           </p>
                           <div className="rava-about-approach-grid">
                              <p className="td-about-para">Driven by a strong commitment to design excellence, craftsmanship, and attention to detail, we collaborate closely with clients, consultants, architects, and global partners throughout every stage of the process. Our dynamic and young team combines creativity, fresh perspectives, and industry expertise to develop spaces that are both contemporary and enduring.</p>
                              <p className="td-about-para">Our approach combines creative thinking with technical precision, ensuring each project reflects both refined aesthetics and practical functionality. From concept development to final delivery, we manage every phase with professionalism, precision, and seamless coordination.</p>
                           </div>
                           <p className="td-about-para rava-about-approach-closing">The result is thoughtfully designed environments that balance atmosphere, quality, and long-term value while meeting international standards of design and execution.</p>
                        </div>
                     </div>
                  </div>
                  {/* td-approach-area-end */}

                  <div className="row justify-content-center">
                     <div className="col-lg col-md-4 col-sm-6 wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                        <div className="td-team-5-wrap mb-12">
                           <div className="td-team-5-thumb mb-40">
                              <img className="w-100" src="/assets/img/team/team5/man1.jpg" alt="team" />
                           </div>
                           <div className="td-team-5-content">
                              <h3 className="td-team-5-title"><a href="#">Miranda H. Halim</a></h3>
                              <span className="td-team-5-position">Founder</span>
                           </div>
                           <div className="td-team-5-social">
                              <span></span>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg col-md-4 col-sm-6 wow fadeInUp" data-wow-delay=".4s" data-wow-duration="1s">
                        <div className="td-team-5-wrap mb-12">
                           <div className="td-team-5-thumb mb-40">
                              <img className="w-100" src="/assets/img/team/team5/man2.jpg" alt="team" />
                           </div>
                           <div className="td-team-5-content">
                              <h3 className="td-team-5-title"><a href="#">Teresa L. Marion</a></h3>
                              <span className="td-team-5-position">Financial Officer</span>
                           </div>
                           <div className="td-team-5-social">
                              <span></span>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg col-md-4 col-sm-6 wow fadeInUp" data-wow-delay=".5s" data-wow-duration="1s">
                        <div className="td-team-5-wrap mb-12">
                           <div className="td-team-5-thumb mb-40">
                              <img className="w-100" src="/assets/img/team/team5/man3.jpg" alt="team" />
                           </div>
                           <div className="td-team-5-content">
                              <h3 className="td-team-5-title"><a href="#">Donna D. Dicken</a></h3>
                              <span className="td-team-5-position">Head of Customer Relations</span>
                           </div>
                           <div className="td-team-5-social">
                              <span></span>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg col-md-4 col-sm-6 wow fadeInUp" data-wow-delay=".6s" data-wow-duration="1s">
                        <div className="td-team-5-wrap mb-12">
                           <div className="td-team-5-thumb mb-40">
                              <img className="w-100" src="/assets/img/team/team5/man4.jpg" alt="team" />
                           </div>
                           <div className="td-team-5-content">
                              <h3 className="td-team-5-title"><a href="#">Rosalina D. Wil</a></h3>
                              <span className="td-team-5-position">Chief Executive Officer</span>
                           </div>
                           <div className="td-team-5-social">
                              <span></span>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg col-md-4 col-sm-6 wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                        <div className="td-team-5-wrap mb-12">
                           <div className="td-team-5-thumb mb-40">
                              <img className="w-100" src="/assets/img/team/team5/man5.jpg" alt="team" />
                           </div>
                           <div className="td-team-5-content">
                              <h3 className="td-team-5-title"><a href="#">Taylor Davis</a></h3>
                              <span className="td-team-5-position">Chief Technology Officer (CTO)</span>
                           </div>
                           <div className="td-team-5-social">
                              <span></span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* td-team-area-end */}

            {/* td-impressions-area-start */}
            <div className="td-impressions-area pt-120 pb-140">
               <div className="container">
                  <div className="row">
                     {/* Join Us card */}
                     <div className="col-12 mb-40">
                        <div className="rava-join-team-card wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                           <div className="row g-0 align-items-center">
                              <div className="col-lg-6">
                                 <div className="rava-join-team-content">
                                    <h2 className="rava-join-team-title">
                                       Be a part of this amazing <em>team?</em>
                                    </h2>
                                    <p className="rava-join-team-para">
                                       We are a big family with more than 40 architects and a total of 70 employees. Think you would be a good fit? Share your resume with us.
                                    </p>
                                    <button className="rava-join-team-btn" aria-label="Join our team">
                                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                          <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                       </svg>
                                    </button>
                                 </div>
                              </div>
                              <div className="col-lg-6">
                                 <div className="rava-join-team-img">
                                    <img src="/assets/img/about/team_join_us.png" alt="Rava team working together" />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* Stats card */}
                     <div className="col-12">
                        <div className="rava-stats-card wow fadeInUp" data-wow-delay=".4s" data-wow-duration="1s">
                           <div className="row text-center justify-content-center align-items-center">
                              <div className="col-md-4 mb-4 mb-md-0">
                                 <div className="rava-stat-item">
                                    <h2>120</h2>
                                    <p>Completed Project</p>
                                 </div>
                              </div>
                              <div className="col-md-4 mb-4 mb-md-0">
                                 <div className="rava-stat-item">
                                    <h2>15</h2>
                                    <p>Concept Design</p>
                                 </div>
                              </div>
                              <div className="col-md-4">
                                 <div className="rava-stat-item">
                                    <h2>62</h2>
                                    <p>Ongoing Project</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* td-impressions-area-end */}

         </main>
         <FooterPage />
      </>
   );
}
