import React, { Suspense, useRef, useState, useEffect } from "react";
import PortfolioCarousel from "@/components/Carousel";
import Loading from "@/components/loading";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import HomePage from "./homepage";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import ProfilePage from "./profilepage";

export default function Home() {
  const [isVisible, setVisible] = useState(true);
  // const containerRef = useRef(null);
  const domRef = useRef(null);

  useEffect(() => {
    const currentRef = domRef.current;
    if (currentRef) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => setVisible(entry.isIntersecting));
      });

      observer.observe(currentRef);

      return () => observer.unobserve(currentRef);
    }
  }, []);

  return (
    <>
      <main>
        <ErrorBoundary>
          <div>
            <HomePage />
            {/* <PortfolioCarousel /> */}

            <div
              ref={domRef}
              className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
            >
              <ProfilePage />
            </div>
          </div>
        </ErrorBoundary>
      </main>
    </>
  );
}
