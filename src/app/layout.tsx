import Preloader from "@/components/Preloader";
import Offcanvas from "@/components/Offcanvas";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rava - Premium Business & Finance Consulting",
  description: "Investments, advisory, strategy, and finance solutions by Rava.",
  icons: {
    icon: "/assets/img/favicon/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* CSS Stylesheets */}
        <link rel="stylesheet" href="/assets/css/bootstrap.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/swiper-bundle.css" />
        <link rel="stylesheet" href="/assets/css/slick.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/font-awesome-pro.css" />
        <link rel="stylesheet" href="/assets/css/ion.rangeSlider.min.css" />
        <link rel="stylesheet" href="/assets/css/spacing.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
      </head>
      <body>
        <Preloader />
        <Offcanvas />
        <div className="input-body-overlay"></div>
        {/* back-to-top */}
        <div className="back-to-top-wrapper">
          <button id="back_to_top" type="button" className="back-to-top-btn">
            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 6L6 1L1 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>               
          </button>
        </div>

        {children}

        {/* JS Scripts loaded sequentially */}
        <script src="/assets/js/vendor/jquery.js" defer></script>
        <script src="/assets/js/vendor/waypoints.js" defer></script>
        <script src="/assets/js/bootstrap-bundle.js" defer></script>
        <script src="/assets/js/swiper-bundle.js" defer></script>
        <script src="/assets/js/slick.js" defer></script>
        <script src="/assets/js/imagesloaded-pkgd.js" defer></script>
        <script src="/assets/js/magnific-popup.js" defer></script>
        <script src="/assets/js/nice-select.js" defer></script>
        <script src="/assets/js/purecounter.js" defer></script>
        <script src="/assets/js/wow.js" defer></script>
        <script src="/assets/js/parallax-scroll.js" defer></script>
        <script src="/assets/js/parallax.js" defer></script>
        <script src="/assets/js/onpage-menu.js" defer></script>
        <script src="/assets/js/jquery-knob.js" defer></script>
        <script src="/assets/js/jquery-appear.js" defer></script>
        <script src="/assets/js/ajax-form.js" defer></script>
        <script src="/assets/js/slider-init.js" defer></script>
        <script src="/assets/js/main.js" defer></script>
      </body>
    </html>
  );
}
