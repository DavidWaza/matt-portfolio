import React, { Suspense } from "react";
import NavAppBar from "@/components/Navbar";
import PortfolioCarousel from "@/components/Carousel";
import Loading from "@/components/loading";
import { ErrorBoundary } from "@/components/ErrorBoundary";


export default function Home() {
  return (
    <main>
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <NavAppBar />
          <PortfolioCarousel />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
