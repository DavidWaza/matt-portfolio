import Image from "next/image";
import { Inter } from "next/font/google";
import NavAppBar from "@/components/Navbar";
import PortfolioCarousel from "@/components/Carousel";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <NavAppBar />
      <PortfolioCarousel />
    </main>
  );
}
