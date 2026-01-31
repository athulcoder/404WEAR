import Footer from "@/components/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import NewArrivals from "@/components/NewArrivals/NewArrivals";
import Trending from "@/components/Trending/Trending";
import Image from "next/image";

export default function Home() {
  return (
  <div className="">
    <Hero/>

    <NewArrivals/>
    {/* <WhyPage/> */}
    <Trending/>
    <Footer/>
  </div>
  )
}
