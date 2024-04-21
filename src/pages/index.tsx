import Navbar from "@/components/navbar";
import Cookies from '@/components/cookies';
import Start from "@/components/start";
import Summary from "@/components/summary";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Cookies/>
      <main>
        <Start/>
        <Summary/>
      </main>
    </>
  );
}
