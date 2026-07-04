import Benefits from "@/components/Home/Benefits";
import BestSeller from "@/components/Home/BestSeller";
import CallToAction from "@/components/Home/CallToAction";
import Contact from "@/components/Home/Contact";
import Featured from "@/components/Home/Featured";
import Hero from "@/components/Home/Hero";
import Image from "next/image";

const Home=()=> {
  return (
<>

<Hero />
      <Benefits />
      <CallToAction />
      <Featured />
      <BestSeller />
      <Contact />
</>
       
  );
}

export default Home