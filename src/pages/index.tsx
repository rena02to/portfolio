import Navbar from "@/components/navbar";
import Cookies from '@/components/cookies';
import Start from "@/components/start";
import Summary from "@/components/summary";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Cookies/>
      <main>
        <Start/>
        <Summary/>
        <Projects/>
        <Contact/>
      </main>
      <Footer/>
    </>
  );
}
