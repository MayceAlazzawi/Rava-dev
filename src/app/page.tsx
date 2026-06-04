import React from "react";
import HeaderMain from "@/components/HeaderMain";
import FooterMain from "@/components/FooterMain";
import { SwiperWrapper } from "@/components/SwiperWrapper";
export default function Page() {
   const awards = [
      {
         year: "2024",
         title: "TradingTech Insight Award",
         location: "Boston, Massachusetts",
         delay: ".3s",
      },
      {
         year: "2023",
         title: "InvestmentNews Award",
         location: "World wide",
         delay: ".4s",
      },
      {
         year: "2022",
         title: "Micro Business Award",
         location: "Brooklyn, NY",
         delay: ".5s",
      },
      {
         year: "2021",
         title: "Business Innovation Award",
         location: "Los Angeles, CA",
         delay: ".6s",
      },
      {
         year: "2020",
         title: "Economic Times Award",
         location: "Worldwide",
         delay: ".7s",
      },
      {
         year: "2019",
         title: "Entrepreneur Of The Year",
         location: "Barlin, Germany",
         delay: ".8s",
      },
   ];

   return (
      <>
         <HeaderMain />
         <main>
            {/* td-hero-area-start */}
            <div className="td-hero-area td-hero-spacing bg-position" style={{ backgroundImage: "url(/assets/img/hero/bg.jpg)" }}>
               <div className="td-hero-text-slider mb-70">
                  <SwiperWrapper
                     className="td-hero-text-slider-active"
                     autoplay={true}
                     autoplayDelay={0}
                     speed={15000}
                     loop={true}
                     slidesPerView="auto"
                     spaceBetween={50}
                     allowTouchMove={false}
                  >
                     <div className="td-hero-text-slider-content text-center">
                        <h4 className="td-hero-text-slider-title">Business</h4>
                     </div>
                     <div className="td-hero-text-slider-content text-center">
                        <h4 className="td-hero-text-slider-title">Agency</h4>
                     </div>
                     <div className="td-hero-text-slider-content text-center">
                        <h4 className="td-hero-text-slider-title">Business</h4>
                     </div>
                     <div className="td-hero-text-slider-content text-center">
                        <h4 className="td-hero-text-slider-title">Agency</h4>
                     </div>
                     <div className="td-hero-text-slider-content text-center">
                        <h4 className="td-hero-text-slider-title">Business</h4>
                     </div>
                     <div className="td-hero-text-slider-content text-center">
                        <h4 className="td-hero-text-slider-title">Agency</h4>
                     </div>
                  </SwiperWrapper></div>
               <div className="td-hero-bottom">
                  <div className="container">
                     <div className="row">
                        <div className="col-lg-9 mb-30">
                           <div className="td-hero-achive  wow fadeInLeft" data-wow-delay=".4s" data-wow-duration="1s">
                              <h3 className="td-hero-achive-title">Achieve<br />
                                 <a className="td-left-right" href="/contact">
                                    <span className="td-arrow-angle">
                                       <svg className="td-arrow-svg-top-right td-bg-none" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M7.57921 1.97755L33.1403 1.558L32.7208 27.1191M1.71022 32.9818L33.1372 1.55486" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                          <path d="M7.57921 1.97755L33.1403 1.558L32.7208 27.1191M1.71022 32.9818L33.1372 1.55486" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                       </svg>
                                    </span>
                                 </a>
                                 results with<br /> <span className="td-title-border">modern idea</span></h3>
                           </div>
                        </div>
                        <div className="col-lg-3  d-flex justify-content-end align-items-end mb-50">
                           <div className="td-hero-expertise d-flex align-items-center  wow fadeInRight" data-wow-delay=".4s" data-wow-duration="1s">
                              <i className="fa-sharp fa-light fa-globe"></i>
                              <h5>Expertise advice for<br />
                                 your business plans</h5>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* td-hero-area-end */}

            {/* td-about-area-start */}
            <div className="td-about-area fix pt-145 pb-120">
               <div className="container">
                  <div className="row">
                     <div className="col-xl-6 col-lg-7 col-md-12 mb-30">
                        <div className="row-custom-wrapper  wow fadeInLeft" data-wow-delay=".4s" data-wow-duration="1s">
                           <div className="row-custom">
                              <div className="col-custom">
                                 <div className="td-panel-item">
                                    <div className="td-panel-content">
                                       <span>01.</span>
                                       <h4 className="td-panel-title child-one">HR Researches</h4>
                                    </div>
                                 </div>
                                 <div className="td-panel-item-2">
                                    <div className="td-panel-content-2">
                                       <div className="td-panel-thumb">
                                          <img className="w-100" src="/assets/img/about/01.jpg" alt="thumb" />
                                       </div>
                                       <div className="td-panel-content-inner fix p-relative">
                                          <span className="td-panel-shape">01</span>
                                          <h4 className="td-panel-title-2 mb-10"><a href="/about">Unique & modern business tips for our clients.</a></h4>
                                          <p className="mb-160">Elevate your experience with our premium services tailored to your needs.</p>
                                          <div className="td-panel-btn">
                                             <a className="td-btn td-left-right" href="/about">Read More
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
                              <div className="col-custom">
                                 <div className="td-panel-item">
                                    <div className="td-panel-content">
                                       <span>02.</span>
                                       <h4 className="td-panel-title child-two">Data Analysis</h4>
                                    </div>
                                 </div>
                                 <div className="td-panel-item-2">
                                    <div className="td-panel-content-2">
                                       <div className="td-panel-thumb">
                                          <img className="w-100" src="/assets/img/about/02.jpg" alt="thumb" />
                                       </div>
                                       <div className="td-panel-content-inner fix p-relative">
                                          <span className="td-panel-shape">02</span>
                                          <h4 className="td-panel-title-2 mb-10"><a href="/about">Unique & modern business tips for our clients.</a></h4>
                                          <p className="mb-160">Elevate your experience with our premium services tailored to your needs.</p>
                                          <div className="td-panel-btn">
                                             <a className="td-btn td-left-right" href="/about">Read More
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
                              <div className="col-custom active">
                                 <div className="td-panel-item">
                                    <div className="td-panel-content">
                                       <span>03.</span>
                                       <h4 className="td-panel-title child-three">Unique & modern </h4>
                                    </div>
                                 </div>
                                 <div className="td-panel-item-2">
                                    <div className="td-panel-content-2">
                                       <div className="td-panel-thumb">
                                          <img className="w-100" src="/assets/img/about/03.jpg" alt="thumb" />
                                       </div>
                                       <div className="td-panel-content-inner fix p-relative">
                                          <span className="td-panel-shape">03</span>
                                          <h4 className="td-panel-title-2 mb-10"><a href="/about">Unique & modern business tips for our clients.</a></h4>
                                          <p className="mb-160">Elevate your experience with our premium services tailored to your needs.</p>
                                          <div className="td-panel-btn">
                                             <a className="td-btn td-left-right" href="/about">Read More
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
                     <div className="col-xl-6  col-lg-5 mb-30">
                        <div className="td-about-content-wrap p-relative ml-45 wow fadeInRight" data-wow-delay=".4s" data-wow-duration="1s">
                           <img className="td-about-text-big d-none d-xl-block" src="/assets/img/about/a.png" alt="a" />
                           <span className="td-section-title-pre mb-10">Our Services</span>
                           <h2 className="td-section-title td-about-right-space">Fields of expertise that our great team excels in</h2>
                           <p className="td-about-para pr-10">Elevate your experience with our premium services tailored to your needs. From expert consultations to seamless solutions, we’re here to exceed your expectations let us handle the details.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* td-about-area-end */}

            {/* td-service-area-start */}
            <div className="td-service-area fix bg-position mb-130 p-relative">
               <div className="container-fluid g-0">
                  <div className="service__slider-8">
                     <div id="service-bg-img" className="service-img-2">
                        <div className="service-bg service-img-1" style={{ backgroundImage: "url(/assets/img/service/bg2.jpg)" }}></div>
                        <div className="service-bg service-img-2" style={{ backgroundImage: "url(/assets/img/service/bg.jpg)" }}></div>
                        <div className="service-bg service-img-3" style={{ backgroundImage: "url(/assets/img/service/bg3.jpg)" }}></div>
                        <div className="service-bg service-img-4" style={{ backgroundImage: "url(/assets/img/service/bg4.jpg)" }}></div>
                        <div className="service-bg service-img-5" style={{ backgroundImage: "url(/assets/img/service/bg5.jpg)" }}></div>
                     </div>
                  </div>
                  <div className="row gx-0 row-cols-xl-5 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1">
                     <div className="col td-service-border service__item-8" rel="service-img-1">
                        <div className="td-service-wrap p-relative">
                           <span className="td-service-cetagory">Business</span>
                           <h2 className="td-service-number">01</h2>
                           <div className="td-service-content">
                              <h4 className="td-service-title"><a href="/expertise">Investments</a></h4>
                              <div className="td-service-content-inner">
                                 <p className="td-service-content-para mb-45">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                 <div className="td-service-btn">
                                    <a className="td-btn td-btn-2 td-left-right" href="/expertise">Read More
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
                     <div className="col td-service-border service__item-8" rel="service-img-2">
                        <div className="td-service-wrap p-relative">
                           <span className="td-service-cetagory td-service-cetagory-2">Finance</span>
                           <h2 className="td-service-number">02</h2>
                           <div className="td-service-content">
                              <h4 className="td-service-title"><a href="/expertise">Online Business</a></h4>
                              <div className="td-service-content-inner">
                                 <p className="td-service-content-para mb-45">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                 <div className="td-service-btn">
                                    <a className="td-btn td-btn-2 td-left-right" href="/expertise">Read More
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
                     <div className="col td-service-border service__item-8" rel="service-img-3">
                        <div className="td-service-wrap p-relative">
                           <span className="td-service-cetagory td-service-cetagory-3">Investment</span>
                           <h2 className="td-service-number">03</h2>
                           <div className="td-service-content">
                              <h4 className="td-service-title"><a href="/expertise">Cryptocurrency</a></h4>
                              <div className="td-service-content-inner">
                                 <p className="td-service-content-para mb-45">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                 <div className="td-service-btn">
                                    <a className="td-btn td-btn-2 td-left-right" href="/expertise">Read More
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
                     <div className="col td-service-border service__item-8" rel="service-img-4">
                        <div className="td-service-wrap p-relative">
                           <span className="td-service-cetagory td-service-cetagory-4">Digital Marketing</span>
                           <h2 className="td-service-number">04</h2>
                           <div className="td-service-content">
                              <h4 className="td-service-title"><a href="/expertise">Marketing</a></h4>
                              <div className="td-service-content-inner">
                                 <p className="td-service-content-para mb-45">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                 <div className="td-service-btn">
                                    <a className="td-btn td-btn-2 td-left-right" href="/expertise">Read More
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
                     <div className="col td-service-border service__item-8" rel="service-img-5">
                        <div className="td-service-wrap p-relative">
                           <span className="td-service-cetagory td-service-cetagory-5">Tax Advising</span>
                           <h2 className="td-service-number">05</h2>
                           <div className="td-service-content">
                              <h4 className="td-service-title"><a href="/expertise">Business & Finance</a></h4>
                              <div className="td-service-content-inner">
                                 <p className="td-service-content-para mb-45">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                 <div className="td-service-btn">
                                    <a className="td-btn td-btn-2 td-left-right" href="/expertise">Read More
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
            {/* td-service-area-end */}

            {/* td-awards-area-start */}
            <div className="td-awards-area">
               <div className="container">
                  <div className="row">
                     <div className="col-12">
                        <div className="td-awards-title-wrap mb-60 text-center  wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                           <span className="td-section-title-pre mb-10">Awards</span>
                           <h2 className="td-section-title">Awards & recognition</h2>
                        </div>
                     </div>
                     <div className="col-12">
                        <div className="row">
                           {awards.map((award) => (
                              <div className="col-lg-12" key={award.year}>
                                 <div className="td-awards-wrapper p-relative wow fadeInUp" data-wow-delay={award.delay} data-wow-duration="1s">
                                    <div className="td-awards-thumb">
                                       <a href="#">
                                          <img className="layer w-100" src="/assets/img/awards/01.png" alt="awards" />
                                       </a>
                                    </div>
                                    <div className="row align-items-center">
                                       <div className="col-lg-8 col-md-8 mb-20">
                                          <div className="td-awards-content d-flex align-items-center">
                                             <span>{award.year}</span>
                                             <h4 className="td-awards-title"><a href="#">{award.title}</a></h4>
                                          </div>
                                       </div>
                                       <div className="col-lg-4 col-md-4 mb-20">
                                          <div className="td-awards-meta d-flex justify-content-between">
                                             <span><i className="fa-sharp fa-regular fa-location-dot"></i>{award.location}</span>
                                             <a className="td-awards-btn" href="#">
                                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                   <path d="M2.66732 21.6667L0.333984 19.3333L16.334 3.33333H2.00065V0H22.0006V20H18.6673V5.66667L2.66732 21.6667Z" fill="currentColor" />
                                                </svg>
                                             </a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* td-awards-area-end */}

            {/* td-testimonial-area-start */}
            <div className="td-testimonial-area td-grey-bg pb-140 p-relative">
               <div className="td-testimonial-qoute-wrap">
                  <div className="td-testimonial-qoute-thumb p-relative">
                     <img className="td-testimonial-qoute" src="/assets/img/testimonial/logo.png" alt="logo" />
                     <img className="td-testimonial-qoute-2" src="/assets/img/testimonial/qoute.png" alt="qoute" />
                  </div>
               </div>
               <div className="container-fluid d-none d-md-block">
                  <div className="col-12">
                     <div className="td-testimonial-bg-text text-center">
                        <h2>Feedback</h2>
                     </div>
                  </div>
               </div>
               <div className="td-testimonial-main td-testimonial-transparet">
                  <div className="container">
                     <div className="row justify-content-center">
                        <div className="col-xxl-12">
                           <div className="testimonial__slider-9 p-relative">
                              <div className="row justify-content-center">
                                 <div className="col-xxl-6 col-xl-7 col-lg-7">
                                    <div className="testimonial__slider-active-9">
                                       <div className="testimonial__item-9">
                                          <div className="td-testimonial-content text-center">
                                             <div className="td-testimonial-avatar mb-35">
                                                <h4 className="td-testimonial-avatar-title m-0">Sarah N. Newman</h4>
                                                <span className="td-testimonial-avatar-designation">Founder, Newman</span>
                                             </div>
                                             <p>“Our focus is on delivering superior value to our clients for company modification. Providing sustainable strategies that will upgrade their business. From strategy to delivery, we are here to make sure your business succeeds. Thinking, writing and planning with brand for more than 50 years.”</p>
                                          </div>
                                       </div>
                                       <div className="testimonial__item-9">
                                          <div className="td-testimonial-content text-center">
                                             <div className="td-testimonial-avatar mb-35">
                                                <h4 className="td-testimonial-avatar-title m-0">Fatiha Laauich</h4>
                                                <span className="td-testimonial-avatar-designation">Strategic Marketing</span>
                                             </div>
                                             <p>“Our focus is on delivering superior value to our clients for company modification. Providing sustainable strategies that will upgrade their business. From strategy to delivery, we are here to make sure your business succeeds. Thinking, writing and planning with brand for more than 50 years.”</p>
                                          </div>
                                       </div>
                                       <div className="testimonial__item-9">
                                          <div className="td-testimonial-content text-center">
                                             <div className="td-testimonial-avatar mb-35">
                                                <h4 className="td-testimonial-avatar-title m-0">Jake Weary</h4>
                                                <span className="td-testimonial-avatar-designation">Head of Technology</span>
                                             </div>
                                             <p>“Our focus is on delivering superior value to our clients for company modification. Providing sustainable strategies that will upgrade their business. From strategy to delivery, we are here to make sure your business succeeds. Thinking, writing and planning with brand for more than 50 years.”</p>
                                          </div>
                                       </div>
                                       <div className="testimonial__item-9">
                                          <div className="td-testimonial-content text-center">
                                             <div className="td-testimonial-avatar mb-35">
                                                <h4 className="td-testimonial-avatar-title m-0">Hery Marky</h4>
                                                <span className="td-testimonial-avatar-designation">Head of Technology</span>
                                             </div>
                                             <p>“Our focus is on delivering superior value to our clients for company modification. Providing sustainable strategies that will upgrade their business. From strategy to delivery, we are here to make sure your business succeeds. Thinking, writing and planning with brand for more than 50 years.”</p>
                                          </div>
                                       </div>
                                       <div className="testimonial__item-9">
                                          <div className="td-testimonial-content text-center">
                                             <div className="td-testimonial-avatar mb-35">
                                                <h4 className="td-testimonial-avatar-title m-0">Steaven Smit</h4>
                                                <span className="td-testimonial-avatar-designation">Head of Technology</span>
                                             </div>
                                             <p>“Our focus is on delivering superior value to our clients for company modification. Providing sustainable strategies that will upgrade their business. From strategy to delivery, we are here to make sure your business succeeds. Thinking, writing and planning with brand for more than 50 years.”</p>
                                          </div>
                                       </div>
                                       <div className="testimonial__item-9">
                                          <div className="td-testimonial-content text-center">
                                             <div className="td-testimonial-avatar mb-35">
                                                <h4 className="td-testimonial-avatar-title m-0">Sarah N. Newman</h4>
                                                <span className="td-testimonial-avatar-designation">Founder, Newman</span>
                                             </div>
                                             <p>“Our focus is on delivering superior value to our clients for company modification. Providing sustainable strategies that will upgrade their business. From strategy to delivery, we are here to make sure your business succeeds. Thinking, writing and planning with brand for more than 50 years.”</p>
                                          </div>
                                       </div>
                                       <div className="testimonial__item-9">
                                          <div className="td-testimonial-content text-center">
                                             <div className="td-testimonial-avatar mb-35">
                                                <h4 className="td-testimonial-avatar-title m-0">Fatiha Laauich</h4>
                                                <span className="td-testimonial-avatar-designation">Strategic Marketing</span>
                                             </div>
                                             <p>“Our focus is on delivering superior value to our clients for company modification. Providing sustainable strategies that will upgrade their business. From strategy to delivery, we are here to make sure your business succeeds. Thinking, writing and planning with brand for more than 50 years.”</p>
                                          </div>
                                       </div>
                                       <div className="testimonial__item-9">
                                          <div className="td-testimonial-content text-center">
                                             <div className="td-testimonial-avatar mb-35">
                                                <h4 className="td-testimonial-avatar-title m-0">Jake Weary</h4>
                                                <span className="td-testimonial-avatar-designation">Head of Technology</span>
                                             </div>
                                             <p>“Our focus is on delivering superior value to our clients for company modification. Providing sustainable strategies that will upgrade their business. From strategy to delivery, we are here to make sure your business succeeds. Thinking, writing and planning with brand for more than 50 years.”</p>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="row justify-content-center">
                                 <div className="col-xxl-7 col-xl-6 col-lg-7 col-md-10 col-sm-10">
                                    <div className="testimonial__slider-nav-9 ml-15 mr-15 pt-30">
                                       <div className="testimonial__slider-9-thumb-nav">
                                          <div className="tp-border-loader">
                                             <svg width="116" height="116" viewBox="0 0 116 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="58" cy="58" r="56.5" strokeWidth="0"></circle>
                                                <circle cx="58" cy="58" r="56.5" strokeWidth="3" strokeLinecap="round" style={{ strokeDashoffset: "-356px", strokeDasharray: "0px, 366px" }}></circle>
                                             </svg>
                                          </div>
                                          <img src="/assets/img/testimonial/01.png" alt="" />
                                       </div>
                                       <div className="testimonial__slider-9-thumb-nav mt-35">
                                          <div className="tp-border-loader">
                                             <svg width="116" height="116" viewBox="0 0 116 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="58" cy="58" r="56.5" strokeWidth="0"></circle>
                                                <circle cx="58" cy="58" r="56.5" strokeWidth="3" strokeLinecap="round" style={{ strokeDashoffset: "-356px", strokeDasharray: "0px, 366px" }}></circle>
                                             </svg>
                                          </div>
                                          <img src="/assets/img/testimonial/02.png" alt="" />
                                       </div>
                                       <div className="testimonial__slider-9-thumb-nav">
                                          <div className="tp-border-loader">
                                             <svg width="116" height="116" viewBox="0 0 116 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="58" cy="58" r="56.5" strokeWidth="0"></circle>
                                                <circle cx="58" cy="58" r="56.5" strokeWidth="3" strokeLinecap="round" style={{ strokeDashoffset: "-356px", strokeDasharray: "0px, 366px" }}></circle>
                                             </svg>
                                          </div>
                                          <img src="/assets/img/testimonial/03.png" alt="" />
                                       </div>
                                       <div className="testimonial__slider-9-thumb-nav mt-35">
                                          <div className="tp-border-loader">
                                             <svg width="116" height="116" viewBox="0 0 116 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="58" cy="58" r="56.5" strokeWidth="0"></circle>
                                                <circle cx="58" cy="58" r="56.5" strokeWidth="3" strokeLinecap="round" style={{ strokeDashoffset: "-356px", strokeDasharray: "0px, 366px" }}></circle>
                                             </svg>
                                          </div>
                                          <img src="/assets/img/testimonial/04.png" alt="" />
                                       </div>
                                       <div className="testimonial__slider-9-thumb-nav">
                                          <div className="tp-border-loader">
                                             <svg width="116" height="116" viewBox="0 0 116 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="58" cy="58" r="56.5" strokeWidth="0"></circle>
                                                <circle cx="58" cy="58" r="56.5" strokeWidth="3" strokeLinecap="round" style={{ strokeDashoffset: "-356px", strokeDasharray: "0px, 366px" }}></circle>
                                             </svg>
                                          </div>
                                          <img src="/assets/img/testimonial/05.png" alt="" />
                                       </div>
                                       <div className="testimonial__slider-9-thumb-nav mt-35">
                                          <div className="tp-border-loader">
                                             <svg width="116" height="116" viewBox="0 0 116 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="58" cy="58" r="56.5" strokeWidth="0"></circle>
                                                <circle cx="58" cy="58" r="56.5" strokeWidth="3" strokeLinecap="round" style={{ strokeDashoffset: "-356px", strokeDasharray: "0px, 366px" }}></circle>
                                             </svg>
                                          </div>
                                          <img src="/assets/img/testimonial/06.png" alt="" />
                                       </div>
                                       <div className="testimonial__slider-9-thumb-nav">
                                          <div className="tp-border-loader">
                                             <svg width="116" height="116" viewBox="0 0 116 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="58" cy="58" r="56.5" strokeWidth="0"></circle>
                                                <circle cx="58" cy="58" r="56.5" strokeWidth="3" strokeLinecap="round" style={{ strokeDashoffset: "-356px", strokeDasharray: "0px, 366px" }}></circle>
                                             </svg>
                                          </div>
                                          <img src="/assets/img/testimonial/07.png" alt="" />
                                       </div>
                                       <div className="testimonial__slider-9-thumb-nav mt-35">
                                          <div className="tp-border-loader">
                                             <svg width="116" height="116" viewBox="0 0 116 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="58" cy="58" r="56.5" strokeWidth="0"></circle>
                                                <circle cx="58" cy="58" r="56.5" strokeWidth="3" strokeLinecap="round" style={{ strokeDashoffset: "-356px", strokeDasharray: "0px, 366px" }}></circle>
                                             </svg>
                                          </div>
                                          <img src="/assets/img/testimonial/02.png" alt="" />
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* Hire Us Row */}
                     <div className="row align-items-center rava-home-hire-row">
                        <div className="col-lg-8 col-md-8">
                           <div className="td-testimonial-4-bottom-content pt-30">
                              <h4 className="td-testimonial-4-title rava-home-hire-title">Hire us for your next project.</h4>
                           </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                           <div className="td-testimonial-4-bottom-btn td-hero-4-btn d-flex justify-content-end pt-30">
                              <a className="td-btn td-btn-7 td-left-right" href="/contact">Let’s Started
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
            {/* td-testimonial-area-end */}

            {/* td-brands-area-start */}
            <div className="td-brands-area td-grey-bg pb-50">
               <div className="container-fluid">
                  <div className="row gx-0">
                     <div className="col-12">
                        <div className="td-brands-wrap company-logo-slider-full">
                           <SwiperWrapper
                              className="td-brand-slide"
                              spaceBetween={60}
                              loop={true}
                              freeMode={true}
                              slidesPerView="auto"
                              autoplay={true}
                              autoplayDelay={4000}
                              breakpoints={{
                                 768: { spaceBetween: 30 },
                                 576: { spaceBetween: 20 },
                                 0: { spaceBetween: 20 }
                              }}
                           >
                              <div className="td-brand-single-logo text-center">
                                 <a href="#"><img src="/assets/img/brands/01.png" alt="brands" /></a>
                              </div>
                              <div className="td-brand-single-logo text-center">
                                 <a href="#"><img src="/assets/img/brands/02.png" alt="brands" /></a>
                              </div>
                              <div className="td-brand-single-logo text-center">
                                 <a href="#"><img src="/assets/img/brands/03.png" alt="brands" /></a>
                              </div>
                              <div className="td-brand-single-logo text-center">
                                 <a href="#"><img src="/assets/img/brands/04.png" alt="brands" /></a>
                              </div>
                              <div className="td-brand-single-logo text-center">
                                 <a href="#"><img src="/assets/img/brands/05.png" alt="brands" /></a>
                              </div>
                              <div className="td-brand-single-logo text-center">
                                 <a href="#"><img src="/assets/img/brands/02.png" alt="brands" /></a>
                              </div>
                              <div className="td-brand-single-logo text-center">
                                 <a href="#"><img src="/assets/img/brands/03.png" alt="brands" /></a>
                              </div>
                           </SwiperWrapper>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* td-brands-area-end */}

   {/* td-video-area-start */ }
   <div className="td-video-area pb-140 pt-150 fix">
      <div className="container-fluid g-0">
         <div className="row gx-0">
            <div className="col-12">
               <div className="td-video-wrapper p-relative">
                  <h2 className="td-video-title">
                     <span className="td-video-title-spacing wow fadeInRight" data-wow-delay=".4s" data-wow-duration="1s">Get amazing</span><br />
                     <b className="wow fadeInLeft" data-wow-delay=".4s" data-wow-duration="1s">
                        <span className="td-video-title-border">experience</span>
                        <span>with us</span>
                     </b>
                  </h2>
                  <div className="td-video-thumb p-relative">
                     <img className="w-100" src="/assets/img/video/bg.jpg" alt="video" />
                     <div className="td-video-popup">
                        <a className="td-video-play popup-video td-pulse-border" href="https://www.youtube.com/watch?v=sY2bdbsy3rg">
                           <span className="p-relative z-index-11">
                              <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M14 10L0 20V0L14 10Z" fill="currentColor" />
                              </svg>
                           </span>
                        </a>
                     </div>
                  </div>
                  <div className="td-video-page-icon">
                     <a className="td-left-right" href="/contact">
                        <span className="td-arrow-angle">
                           <svg className="td-arrow-svg-top-right td-bg-none" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.57921 1.97755L33.1403 1.558L32.7208 27.1191M1.71022 32.9818L33.1372 1.55486" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M7.57921 1.97755L33.1403 1.558L32.7208 27.1191M1.71022 32.9818L33.1372 1.55486" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                           </svg>
                        </span>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   {/* td-video-area-end */ }

   {/* td-counter-area-start */ }
   <div className="td-counter-area fix p-relative">
      <img className="td-counter-map" src="/assets/img/counter/map.png" alt="map" />
      <div className="container-fluid g-0">
         <div className="row gx-0">
            <div className="col-xl-4 col-lg-6">
               <div className="td-counter-thumb p-relative">
                  <img className="w-100" src="/assets/img/counter/bg.jpg" alt="thumb" />
                  <div className="td-counter-logo d-none d-sm-block td-pulse-border">
                     <h3>E.</h3>
                  </div>
               </div>
            </div>
            <div className="col-xl-5 col-lg-6 mb-40">
               <div className="td-counter-content ml-110 mr-150">
                  <p className="mb-45">Our focus is on delivering superior value to our clients for company modification. Providing sustainable <span>strategies</span> that will upgrade their business. From strategy to delivery, we are here to make sure your <span>business</span> succeeds. Thinking, writing and planning with brand for more than <span>50 years.</span></p>
                  <p className="mb-35">We are constantly rethinking the future by creating the next generation of products, brands and services from a hybrid perspective. The <span>unthinkable</span> today becomes inevitable.</p>
                  <div className="td-counter-btn">
                     <a className="td-btn td-btn-3 td-left-right" href="/contact">Get In Touch
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
            <div className="col-xl-3 col-lg-6 mb-40">
               <div className="td-counter-count-wrap">
                  <div className="td-counter-single td-counter-single-border mb-35">
                     <h2 className="td-counter-count"><span data-purecounter-duration="1" data-purecounter-end="95" className="purecounter">0</span>%</h2>
                     <span className="td-counter-count-para">Clients Satisfied and <br /> Repeating</span>
                  </div>
                  <div className="td-counter-single">
                     <h2 className="td-counter-count"><span data-purecounter-duration="1" data-purecounter-end="125" className="purecounter">0</span>k</h2>
                     <span className="td-counter-count-para">Projects Done</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   {/* td-counter-area-end */ }

   {/* td-team-area-start */ }
   <div className="td-team-area td-grey-bg pt-140 pb-100">
      <div className="container">
         <div className="row">
            <div className="col-12">
               <div className="td-team-title-wrap text-center mb-95 wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                  <span className="td-section-title-pre mb-10">Our Team</span>
                  <h2 className="td-section-title">Meet our legends</h2>
               </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 mb-35">
               <div className="td-team-wrapper wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                  <div className="td-team-thumb mb-35 p-relative">
                     <img className="w-100" src="/assets/img/team/01.png" alt="thumb" />
                     <div className="td-team-social">
                        <ul>
                           <li><a href="#"><i className="fa-sharp fa-regular fa-globe"></i></a></li>
                           <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                           <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg></a></li>
                           <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                           <li><a href="#"><i className="fa-brands fa-behance"></i></a></li>
                        </ul>
                     </div>
                  </div>
                  <div className="td-team-content text-center">
                     <h3 className="td-team-title"><a href="#">Alson P. Paladin</a></h3>
                     <span className="td-team-designation">Alson P. Paladin</span>
                  </div>
               </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 mb-35">
               <div className="td-team-wrapper  wow fadeInUp" data-wow-delay=".4s" data-wow-duration="1s">
                  <div className="td-team-thumb mb-35 p-relative">
                     <img className="w-100" src="/assets/img/team/02.png" alt="thumb" />
                     <div className="td-team-social">
                        <ul>
                           <li><a href="#"><i className="fa-sharp fa-regular fa-globe"></i></a></li>
                           <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                           <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg></a></li>
                           <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                           <li><a href="#"><i className="fa-brands fa-behance"></i></a></li>
                        </ul>
                     </div>
                  </div>
                  <div className="td-team-content text-center">
                     <h3 className="td-team-title"><a href="#">Teresa L. Marion</a></h3>
                     <span className="td-team-designation">Hr Specialist</span>
                  </div>
               </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 mb-35">
               <div className="td-team-wrapper  wow fadeInUp" data-wow-delay=".5s" data-wow-duration="1s">
                  <div className="td-team-thumb mb-35 p-relative">
                     <img className="w-100" src="/assets/img/team/03.png" alt="thumb" />
                     <div className="td-team-social">
                        <ul>
                           <li><a href="#"><i className="fa-sharp fa-regular fa-globe"></i></a></li>
                           <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                           <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg></a></li>
                           <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                           <li><a href="#"><i className="fa-brands fa-behance"></i></a></li>
                        </ul>
                     </div>
                  </div>
                  <div className="td-team-content text-center">
                     <h3 className="td-team-title"><a href="#">Donna D. Dicken</a></h3>
                     <span className="td-team-designation">Economy Manager</span>
                  </div>
               </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 mb-35">
               <div className="td-team-wrapper  wow fadeInUp" data-wow-delay=".6s" data-wow-duration="1s">
                  <div className="td-team-thumb mb-35 p-relative">
                     <img className="w-100" src="/assets/img/team/04.png" alt="thumb" />
                     <div className="td-team-social">
                        <ul>
                           <li><a href="#"><i className="fa-sharp fa-regular fa-globe"></i></a></li>
                           <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                           <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg></a></li>
                           <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                           <li><a href="#"><i className="fa-brands fa-behance"></i></a></li>
                        </ul>
                     </div>
                  </div>
                  <div className="td-team-content text-center">
                     <h3 className="td-team-title"><a href="#">Dianne M. Mason</a></h3>
                     <span className="td-team-designation">Legal Officer</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   {/* td-team-area-end */ }
         </main >
      <FooterMain />
      </>
   );
}
