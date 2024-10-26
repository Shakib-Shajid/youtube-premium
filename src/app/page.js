import Navbar from "../app/components/Navbar"
import AdFree from "./components/AdFree";
import Another from "./components/Another";
import Banner from "./components/Banner";
import Offer from "./components/Offer";
import Premium from "./components/Premium";
import Price from "./components/Price";
import FAQ from "./components/FAQ";
export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Offer />
      <Price />
      <AdFree />
      <Another />
      <Premium />
      <FAQ />
    </>
  );
}
