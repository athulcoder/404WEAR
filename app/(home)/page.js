import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import NewArrivals from "@/components/NewArrivals";
import Image from "next/image";

export default function Home() {
  return (
  <div className="">
    <Hero/>

    <NewArrivals/>
  </div>
  )
}
