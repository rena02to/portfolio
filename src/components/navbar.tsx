import style from '@/styles/navbar.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaRegAddressCard } from 'react-icons/fa6';
import { HiOutlineExternalLink, HiOutlineMenuAlt2 } from 'react-icons/hi';
import { IoArrowDown, IoHomeOutline, IoSettingsOutline } from 'react-icons/io5';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { PiLinkedinLogo } from 'react-icons/pi';
import { RiContactsBook3Line } from 'react-icons/ri';
import { SlSocialGithub } from 'react-icons/sl';


export default function Navbar(){
    const { t } = useTranslation();
    const [ menuOpen, setMenuOpen ] = useState(false);
    const [ topHabilited, setTopHabilited ] = useState(false);
    const [ activated, setActiveted ] = useState('start');
    const menuRef = useRef<HTMLDivElement>(null);
    const menulinks = [
        {key: 1, value: t('navbar.home'), icon: <IoHomeOutline/>, link: 'start'},
        {key: 2, value: t('navbar.menu.summary'), icon: <FaRegAddressCard/>, link: 'summary'},
        {key: 3, value: t('navbar.menu.projects'), icon: <MdOutlineSpaceDashboard/>, link: 'projects'},
        {key: 4, value: t('navbar.menu.contacts'), icon: <RiContactsBook3Line/>, link: 'contact'},
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

        const handleClickOutside = (event: MouseEvent) => {
            if (menuOpen && menuRef.current && !menuRef.current.contains(event.target as Node)){
                setMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('click', handleClickOutside);
        };
    }, [ setActiveted, menuOpen ]);

    const handleClickButton = (id : string) => {
        if(id === 'start'){
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }else{
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }
        setMenuOpen(false);
    }

    return(
        <>
            <header className={style.nav} ref={menuRef}>
                <button type='button' title='Menu' className={style.menu} onClick={() => setMenuOpen(!menuOpen)}>
                    <HiOutlineMenuAlt2/>
                </button>
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
                {menulinks.map((menulink) => (
                    <button title={menulink.value} className={activated === menulink.link ? style.menulinkactivated : style.menulink} key={menulink.key} onClick={() => handleClickButton(menulink.link)}>
                        {menulink.icon}
                        {menuOpen ? <p>{menulink.value}</p> : null}
                    </button>
                ))}
                {menuOpen ?
                    <>
                        <a className={style.link} href='https://linkedin.com/in/renatosalves/' target="_blank">
                            <PiLinkedinLogo/>
                            <p>Linkedin</p>
                            <HiOutlineExternalLink className={style.arrow}/>
                        </a>
                        <a className={style.link} href='https://github.com/rena02to/' target="_blank">
                            <SlSocialGithub/>
                            <p>Github</p>
                            <HiOutlineExternalLink className={style.arrow}/>
                        </a>
                    </>
                    : null
                }
                <Link href='/configuracoes' className={style.settings} title={t('navbar.settings')} onClick={() => setMenuOpen(false)}>
                    <IoSettingsOutline/>
                    {menuOpen ? <p>{t('navbar.settings')}</p> : null}
                </Link>
            </header>
            {topHabilited ? 
                <button type='button' className={style.top} onClick={() => handleClickButton('start')}>
                    <IoArrowDown/>
                </button>
                : null
            }
            {menuOpen ? <div className={style.background}/> : null}
        </>
    )
}