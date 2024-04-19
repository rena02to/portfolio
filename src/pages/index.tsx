import Navbar from "@/components/navbar";
import Cookies from '@/components/cookies';
import Start from "@/components/start";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Cookies/>
      <main>
        <Start/>
      </main>
    </>
  );
}
