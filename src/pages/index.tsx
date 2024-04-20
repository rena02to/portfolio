import style from '@/styles/index.module.scss';
import Navbar from "@/components/navbar";
import Cookies from '@/components/cookies';
import Start from "@/components/start";
import { useContexts } from '@/context/context';
import { useEffect, useState } from 'react';

export default function Home() {
  const { menuOpen } = useContexts();
  const [qSCroll, setQScroll ] = useState(0);

  useEffect(() => {
    if(!menuOpen){
      window.scrollTo({ top: qSCroll, behavior: 'instant' });
    }

    function handleScroll(){
      {menuOpen ? null : setQScroll(window.scrollY)}
    }
    
    window.addEventListener('scroll', handleScroll)
    return() => {window.removeEventListener('scroll', handleScroll)}
  }, [ menuOpen ]);

  return (
    <>
      <Navbar/>
      <div className={menuOpen ? style.mainOpenMenu : style.main} id='intern'>
        <Cookies/>
        <main>
          <Start/>
        </main>
      </div>
    </>
  );
}
