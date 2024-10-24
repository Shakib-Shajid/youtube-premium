import Navbar from "../app/components/Navbar"
import Banner from "./components/Banner";
import Offer from "./components/Offer";
import Price from "./components/Price";
export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Offer />
      <Price />
    </>
  );
}
