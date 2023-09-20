import { Html, Head, Main, NextScript } from "next/document";
import NavAppBar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
          <NavAppBar  />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
}
