import React, { Suspense, useRef } from "react";
import NavAppBar from "@/components/Navbar";
import PortfolioCarousel from "@/components/Carousel";
import Loading from "@/components/loading";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import HomePage from "./homepage";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import ProfilePage from "./profilepage";

export default function Home() {
  const containerRef = useRef(null);

  return (
    <>
      <main>
        <ErrorBoundary>
          <div>
            <NavAppBar />
            <HomePage />
            {/* <PortfolioCarousel /> */}
            <ProfilePage />
          </div>
        </ErrorBoundary>
      </main>
    </>
  );
}
