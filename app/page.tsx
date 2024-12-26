import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div>
      <h2>
        Portfolio
      </h2>
      <FloatingNav navItems={[
        {name:'Home',link:'/',icon:<FaHome/>}
      ]}/>
      <Hero/>
      </div>
    </main>
  );
}
