import style from '@/styles/navbar.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineFileProtect } from 'react-icons/ai';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { IoIosMenu } from 'react-icons/io';
import { IoArrowDown, IoCloseOutline, IoSettingsSharp } from 'react-icons/io5';
import { PiArrowUpRight } from 'react-icons/pi';
import { RiContactsBook2Fill } from 'react-icons/ri';
import { TiHome, TiInfo } from 'react-icons/ti';


export default function Navbar(){
    const { t } = useTranslation();
    const [ menuOpen, setMenuOpen ] = useState(false);
    const [ topHabilited, setTopHabilited ] = useState(false);
    const [ activated, setActiveted ] = useState('start');
    const links = [
        {key: 1, value: t('navbar.menu.summary'), icon: <TiInfo/>, link: 'summary'},
        {key: 2, value: t('navbar.menu.projects'), icon: <AiOutlineFileProtect/>, link: 'projects'},
        {key: 3, value: t('navbar.menu.contacts'), icon: <RiContactsBook2Fill/>, link: 'contact'},
    ];

    useEffect(() => {
        function handleScroll() {
            const sections = document.querySelectorAll('section');

            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom >= 100) {
                    setActiveted(section.id);
                }
            });

            if (window.scrollY >= 300) {
              setTopHabilited(true);
            } else {
                setTopHabilited(false);
            }
        }
        
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [ setActiveted ]);

    const handleClickButton = (id : string) => {
        if(id === 'start'){
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }else{
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return(
        <header className={style.nav}>
            <button type='button' className={style.menu} onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <IoCloseOutline/> : <IoIosMenu/>}
            </button>
            <nav className={style.interns}>
                {menuOpen ?
                    <div className={style.profile}>
                        <Image src='/images/foto.jpg' width={75} height={75} alt='Renato Alves photo'/>
                        <div className={style.namedev}>
                            <p className={style.name}>Renato Alves</p>
                            <p className={style.dev}>{t('navbar.dev')}</p>
                        </div>
                    </div>
                    : null
                }
                <span className={style.line}/>
                <button type='button' className={activated === 'start' ? style.homeactivated : style.home} onClick={() => handleClickButton('start')}>
                    <TiHome/>
                    {menuOpen ? <p>{t('navbar.home')}</p>: null}
                </button>
                <span className={style.line}/>
                <div className={style.navigation}>
                    {menuOpen ? <p className={style.title}>{t('navbar.menu.title')}</p> : null}
                    {links.map((link) => (
                        <button className={activated === link.link ? style.linkactivated : style.link} key={link.key} onClick={() => handleClickButton(link.link)}>
                            {link.icon}
                            {menuOpen ? <p>{link.value}</p> : null}
                        </button>
                    ))}
                </div>
                {menuOpen ?
                    <>
                        <span className={style.line}/>
                        <div className={style.linkscontainer}>
                            {menuOpen ? <p className={style.title}>Links</p> : null}
                            <div className={style.links}>
                                <a href='https://linkedin.com/in/renatosalves/' target="_blank">
                                    <FaLinkedin/>
                                    <p>Linkedin</p>
                                    <PiArrowUpRight className={style.arrow}/>
                                </a>
                                <a href='https://github.com/rena02to/' target="_blank">
                                    <FaGithub/>
                                    <p>Github</p>
                                    <PiArrowUpRight className={style.arrow}/>
                                </a>
                            </div>
                        </div>
                    </>
                    : null
                }
                <span className={style.line}/>
                <div className={style.settingscontainer}>
                    {menuOpen ? <p className={style.title}>{t('navbar.settings')}</p> : null}
                    <Link href='/settings' className={style.settings}>
                        <IoSettingsSharp/>
                        {menuOpen ? <p>{t('navbar.settings')}</p> : null}
                    </Link>
                </div>
            </nav>
            {topHabilited ? 
                <button type='button' className={style.top} onClick={() => handleClickButton('start')}>
                    <IoArrowDown/>
                </button>
                : null
            }
        </header>
    )
}