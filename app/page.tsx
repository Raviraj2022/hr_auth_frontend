import { ThemeToggle } from "@/app/components/common/theme-toggle";
import { CTA } from "@/app/components/landing/CTA";
import { Features } from "@/app/components/landing/Features";
import { Footer } from "@/app/components/landing/Footer";
import { Hero } from "@/app/components/landing/Hero";
import { Navbar } from "@/app/components/landing/Navbar";
import { Stats } from "@/app/components/landing/Stats";
import { Testimonials } from "@/app/components/landing/Testimonials";
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
