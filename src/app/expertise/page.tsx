import React from "react";
import HeaderPage from "@/components/HeaderPage";
import FooterPage from "@/components/FooterPage";

type ExpertiseItem = {
  id: string;
  group: "DESIGN" | "EXECUTION";
  title: string;
  body: string[];
};

const expertiseItems: ExpertiseItem[] = [
  {
    id: "approach",
    group: "DESIGN",
    title: "Our Approach",
    body: [
      "At RAVA Interiors, we believe every space should tell a story through balance, atmosphere, and detail. Our design process begins with understanding the identity of the project, the lifestyle of its users, and the experience the space is meant to create. We design environments that feel timeless, refined, and naturally connected to their purpose.",
    ],
  },
  {
    id: "concept",
    group: "DESIGN",
    title: "Concept Development",
    body: [
      "Every concept is developed through careful exploration of form, function, materials, and spatial flow. We combine creativity with technical understanding to create interiors that are visually distinctive, functional, and built around the unique vision of each project.",
    ],
  },
  {
    id: "materials",
    group: "DESIGN",
    title: "Material & Detail Selection",
    body: [
      "We approach materials as an essential part of the design language. Every surface, texture, finish, and custom detail is selected to achieve harmony between aesthetics, durability, and practicality. Our attention to detail allows us to transform ideas into elegant and realistic spaces.",
    ],
  },
  {
    id: "collaboration",
    group: "DESIGN",
    title: "Collaborative Design Process",
    body: [
      "Design at RAVA Interiors is shaped through collaboration, precision, and continuous communication. From the first concept sketches to the final design package, our team works closely across every stage to ensure clarity, consistency, and a seamless creative process.",
    ],
  },
  {
    id: "turnkey",
    group: "EXECUTION",
    title: "Turnkey Project Execution",
    body: [
      "At RAVA Interiors, execution is where design becomes reality. We manage every phase of the implementation process with professionalism, technical expertise, and attention to detail, delivering turnkey interior solutions tailored to each project’s requirements.",
      "We oversee all stages of the project through organized planning, clear coordination, and controlled workflows. By managing suppliers, contractors, schedules, and technical processes, we ensure smooth project delivery with high execution standards.",
    ],
  },
  {
    id: "site-supervision",
    group: "EXECUTION",
    title: "Site Supervision",
    body: [
      "Our experienced site and implementation teams actively monitor every stage of construction and fit-out works to maintain quality, precision, and consistency. Continuous on-site coordination allows us to align design intent with flawless execution.",
    ],
  },
  {
    id: "built-to-last",
    group: "EXECUTION",
    title: "Built to Last",
    body: [
      "We believe successful spaces are built through the balance of functionality, aesthetics, and long-term performance. Every project is delivered with careful attention to quality, durability, and user experience — creating interiors designed to endure over time.",
    ],
  },
];

export default function Page() {
  return (
    <>
      <HeaderPage />
      <main>
        {/* td-breadcrumb-area-start */}
        <div
          className="td-breadcrumb-area td-breadcrumb-spacing fix bg-position"
          style={{ backgroundImage: "url(/assets/img/breadcrumb/bg.jpg)" }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <div className="td-breadcrumb-title-wrap mb-20">
                  <h3 className="td-breadcrumb-title">EXPERTISE</h3>
                  <p className="rava-expertise-breadcrumb-subtitle">
                    Designed with intention. Built with feeling.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="td-breadcrumb-list float-right mb-20">
                  <span><a href="/">Pages</a></span>
                  <span className="dvdr">/</span>
                  <span className="page"> Expertise</span>
                </div>
              </div>
            </div>
          </div>
          <div className="td-breadcrumb-big-text pt-60" data-parallax='{"x": -100, "smoothness": 10}'>
            <h2>RAVA.Interiors</h2>
          </div>
        </div>
        {/* td-breadcrumb-area-end */}

        {/* td-faq-area-start */}
        <div className="td-faq-area rava-expertise-faq pt-140 pb-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 mb-60">
                <div className="accordion td-service-details-accordion" id="expertiseaccordion">
                  {expertiseItems.map((item, index) => {
                    const headingId = `${item.id}-heading`;
                    const collapseId = `${item.id}-collapse`;
                    const isOpen = index === 0;

                    return (
                      <div className="accordion-item td-service-details-accordion-item" key={item.id}>
                        <h2 className="accordion-header" id={headingId}>
                          <button
                            className={`accordion-button${isOpen ? "" : " collapsed"}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#${collapseId}`}
                            aria-expanded={isOpen ? "true" : "false"}
                            aria-controls={collapseId}
                          >
                            {item.title}
                            <span className="accordion-btn"></span>
                          </button>
                        </h2>
                        <div
                          id={collapseId}
                          className={`accordion-collapse collapse${isOpen ? " show" : ""}`}
                          aria-labelledby={headingId}
                          data-bs-parent="#expertiseaccordion"
                        >
                          <div className="accordion-body rava-expertise-accordion-body">
                            <span className="rava-expertise-kicker">{item.group}</span>
                            {item.body.map((paragraph) => (
                              <p key={paragraph}>{paragraph}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
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
