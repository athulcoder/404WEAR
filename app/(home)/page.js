import Footer from "@/components/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar";
import NewArrivals from "@/components/NewArrivals";
import Trending from "@/components/Trending";
import WhyPage from "@/components/WhyPage";
import Image from "next/image";

export default function Home() {
  return (
  <div className="">
    <Hero/>

    <NewArrivals/>
    <WhyPage/>
    <Trending/>
    <Footer/>
  </div>
  )
}
