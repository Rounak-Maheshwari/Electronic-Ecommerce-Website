import { useContext } from "react";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import TopBrand from "../components/TopBrand";
import Features from "../components/Features";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Services />
      <TopBrand />
      <Footer />
    </>
  );
}

export default Home;
