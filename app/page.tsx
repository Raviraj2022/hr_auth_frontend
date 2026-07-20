import { ThemeToggle } from "@/src/components/common/theme-toggle";
import { CTA } from "@/src/components/landing/CTA";
import { Features } from "@/src/components/landing/Features";
import { Footer } from "@/src/components/landing/Footer";
import { Hero } from "@/src/components/landing/Hero";
import { Navbar } from "@/src/components/landing/Navbar";
import { Stats } from "@/src/components/landing/Stats";
import { Testimonials } from "@/src/components/landing/Testimonials";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {/* <main className="flex min-h-screen items-center justify-center"> */}
      {/* <p className="font-bold"> */}
        {/* HRMS */}
        {/* <ThemeToggle /> */}
        <Navbar/>
        <Hero/>
        <Stats/>
        <Features/>
        <Testimonials/>
        <CTA/>
        <Footer/>
      
    {/* </main> */}
    </div>
  );
}
