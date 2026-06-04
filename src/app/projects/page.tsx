"use client";

import React, { useState } from "react";
import HeaderPage from "@/components/HeaderPage";
import FooterPage from "@/components/FooterPage";

interface ProjectItem {
  id: string;
  title: string;
  categories: string[];
  imgSrc: string;
}

export default function Page() {
  const [activeTab, setActiveTab] = useState<string>("Business");

  const tabs = ["Business", "Strategy", "Branding", "Marketing", "Planning"];

  const projects: Record<string, ProjectItem[]> = {
    Business: [
      { id: "p1", title: "Business Performance", categories: ["Finances", "Analysis"], imgSrc: "/assets/img/portfolio/12.jpg" },
      { id: "p2", title: "Vision & Direction", categories: ["Economy", "Investment"], imgSrc: "/assets/img/portfolio/13.jpg" },
      { id: "p3", title: "Customer Relations", categories: ["Research", "Corporate"], imgSrc: "/assets/img/portfolio/14.jpg" },
      { id: "p4", title: "Astro consultancy", categories: ["Research", "Corporate"], imgSrc: "/assets/img/portfolio/05.jpg" },
      { id: "p5", title: "ROI Business Growth", categories: ["Research", "Corporate"], imgSrc: "/assets/img/portfolio/06.jpg" },
      { id: "p6", title: "tomb finance solutions", categories: ["Research", "Corporate"], imgSrc: "/assets/img/portfolio/07.jpg" },
      { id: "p7", title: "quick solutions", categories: ["Research", "Corporate"], imgSrc: "/assets/img/portfolio/08.jpg" },
      { id: "p8", title: "Mobile Functions", categories: ["Research", "Corporate"], imgSrc: "/assets/img/portfolio/09.jpg" },
      { id: "p9", title: "Nelson Consultancy", categories: ["Research", "Corporate"], imgSrc: "/assets/img/portfolio/10.jpg" },
      { id: "p10", title: "Pakso Business Growth", categories: ["Research", "Corporate"], imgSrc: "/assets/img/portfolio/11.jpg" },
    ],
    Strategy: [
      { id: "p7", title: "quick solutions", categories: ["Research", "Corporate"], imgSrc: "/assets/img/portfolio/08.jpg" },
      { id: "p8", title: "Mobile Functions", categories: ["Research", "Corporate"], imgSrc: "/assets/img/portfolio/09.jpg" },
      { id: "p9", title: "Nelson Consultancy", categories: ["Research", "Corporate"], imgSrc: "/assets/img/portfolio/10.jpg" },
      { id: "p10", title: "Pakso Business Growth", categories: ["Research", "Corporate"], imgSrc: "/assets/img/portfolio/11.jpg" },
    ],
    Branding: [
      { id: "p3", title: "Customer Relations", categories: ["Research", "Corporate"], imgSrc: "/assets/img/portfolio/14.jpg" },
      { id: "p4", title: "Astro consultancy", categories: ["Research", "Corporate"], imgSrc: "/assets/img/portfolio/05.jpg" },
      { id: "p5", title: "ROI Business Growth", categories: ["Research", "Corporate"], imgSrc: "/assets/img/portfolio/06.jpg" },
      { id: "p6", title: "tomb finance solutions", categories: ["Research", "Corporate"], imgSrc: "/assets/img/portfolio/07.jpg" },
    ],
    Marketing: [
      { id: "p1", title: "Business Performance", categories: ["Finances", "Analysis"], imgSrc: "/assets/img/portfolio/12.jpg" },
      { id: "p2", title: "Vision & Direction", categories: ["Economy", "Investment", "Business"], imgSrc: "/assets/img/portfolio/13.jpg" },
      { id: "p3", title: "Customer Relations", categories: ["Research", "Corporate"], imgSrc: "/assets/img/portfolio/14.jpg" },
      { id: "p4", title: "Astro consultancy", categories: ["Research", "Corporate"], imgSrc: "/assets/img/portfolio/05.jpg" },
    ],
    Planning: [
      { id: "p5", title: "ROI Business Growth", categories: ["Research", "Corporate"], imgSrc: "/assets/img/portfolio/06.jpg" },
      { id: "p6", title: "tomb finance solutions", categories: ["Research", "Corporate"], imgSrc: "/assets/img/portfolio/07.jpg" },
      { id: "p7", title: "quick solutions", categories: ["Research", "Corporate"], imgSrc: "/assets/img/portfolio/08.jpg" },
      { id: "p8", title: "Mobile Functions", categories: ["Research", "Corporate"], imgSrc: "/assets/img/portfolio/09.jpg" },
    ],
  };

  return (
    <>
      <HeaderPage />
      <main>
        
         {/* td-breadcrumb-area-start */}
         <div className="td-breadcrumb-area td-breadcrumb-spacing fix bg-position" style={{ backgroundImage: "url(/assets/img/breadcrumb/bg.jpg)" }}>
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-lg-8">
                     <div className="td-breadcrumb-title-wrap mb-20">
                        <h3 className="td-breadcrumb-title">Our Projects</h3>
                     </div>
                  </div>
                  <div className="col-lg-4">
                     <div className="td-breadcrumb-list float-right mb-20">
                        <span><a href="/">Pages</a></span>
                        <span className="dvdr">/</span>
                        <span className="page"> Projects</span>
                     </div>
                  </div>
               </div>
            </div>
            <div className="td-breadcrumb-big-text pt-60" data-parallax='{"x": -100, "smoothness": 10}'>
               <h2>Rava.Business</h2>
            </div>
         </div>
         {/* td-breadcrumb-area-end */}

         {/* td-portfolio-area-start */}
         <div className="td-portfolio-area td-portfolio-space fix pt-140 pb-60">
            <div className="container">
               <div className="row">
                  <div className="col-lg-12 pb-45">
                     <div className="nav td-portfolio-tab-btn-list d-flex justify-content-center" role="tablist">
                        {tabs.map((tab) => (
                           <button
                              key={tab}
                              className={`td-portfolio-tab-btn nav-link mb-10 ${activeTab === tab ? "active" : ""}`}
                              type="button"
                              onClick={() => setActiveTab(tab)}
                           >
                              {tab}
                           </button>
                        ))}
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-lg-12">
                     <div className="td-banking-img-wrapper tab-content">
                        <div className="tab-pane fade show active" role="tabpanel">
                           <div className="row">
                              {projects[activeTab]?.map((project, idx) => (
                                 <div key={`${project.id}-${idx}`} className="col-lg-6 col-md-6 mb-70">
                                    <div className={`td-portfolio-wrap ${idx % 2 === 0 ? "mr-30" : "ml-30"}`}>
                                       <div className="td-poerfolio-thumb mb-30" style={{ height: "400px", position: "relative", overflow: "hidden" }}>
                                          <img className="w-100 h-100" src={project.imgSrc} alt={project.title} style={{ objectFit: "cover" }} />
                                       </div>
                                       <div className="td-portfolio-cetagory mb-20">
                                          {project.categories.map((cat, cIdx) => (
                                             <span key={cIdx} style={{ marginRight: "10px" }}>
                                                <a href="#">{cat}</a>
                                             </span>
                                          ))}
                                       </div>
                                       <h3 className="td-portfolio-title">
                                          <a href="#">{project.title}</a>
                                       </h3>
                                    </div>
                                 </div>
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* td-portfolio-area-end */}
         
      </main>
      <FooterPage />
    </>
  );
}
