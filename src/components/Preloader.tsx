"use client";

import React, { useEffect, useState } from "react";

export default function Preloader() {
  const [show, setShow] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setFadeOut(true);
      const timeout = setTimeout(() => {
        setShow(false);
      }, 300);
      return timeout;
    };

    let timeoutId: NodeJS.Timeout;

    if (document.readyState === "complete") {
      timeoutId = handleLoad();
    } else {
      const onLoad = () => {
        timeoutId = handleLoad();
      };
      window.addEventListener("load", onLoad);
      // Fallback in case load event already fired or is delayed
      const fallbackId = setTimeout(() => {
        timeoutId = handleLoad();
      }, 800);

      return () => {
        window.removeEventListener("load", onLoad);
        clearTimeout(fallbackId);
        if (timeoutId) clearTimeout(timeoutId);
      };
    }
  }, []);

  if (!show) return null;

  return (
    <div
      id="preloader"
      style={{
        transition: "opacity 0.3s ease, visibility 0.3s ease",
        opacity: fadeOut ? 0 : 1,
        visibility: fadeOut ? "hidden" : "visible",
      }}
    >
      <div id="loader"></div>
    </div>
  );
}

