import style from '@/styles/navbar.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BsInfoCircle } from 'react-icons/bs';
import { CiLinkedin } from 'react-icons/ci';
import { HiOutlineExternalLink, HiOutlineMenuAlt2 } from 'react-icons/hi';
import { IoArrowDown, IoCloseOutline, IoHomeOutline, IoSettingsOutline } from 'react-icons/io5';
import { LuContact } from 'react-icons/lu';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { SlSocialGithub } from 'react-icons/sl';


export default function Navbar(){
    const { t } = useTranslation();
    const [ menuOpen, setMenuOpen ] = useState(false);
    const [ topHabilited, setTopHabilited ] = useState(false);
    const [ activated, setActiveted ] = useState('start');
    const menulinks = [
        {key: 1, value: t('navbar.home'), icon: <IoHomeOutline/>, link: 'start'},
        {key: 2, value: t('navbar.menu.summary'), icon: <BsInfoCircle/>, link: 'summary'},
        {key: 3, value: t('navbar.menu.projects'), icon: <MdOutlineSpaceDashboard/>, link: 'projects'},
        {key: 4, value: t('navbar.menu.contacts'), icon: <LuContact/>, link: 'contact'},
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
            <button type='button' title='Menu' className={!menuOpen ? style.menu : style.close} onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <IoCloseOutline/> : <HiOutlineMenuAlt2/>}
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
                        <CiLinkedin/>
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
            <Link href='/settings' className={style.settings} title={t('navbar.settings')}>
                <IoSettingsOutline/>
                {menuOpen ? <p>{t('navbar.settings')}</p> : null}
            </Link>
            {topHabilited ? 
                <button type='button' className={style.top} onClick={() => handleClickButton('start')}>
                    <IoArrowDown/>
                </button>
                : null
            }
        </header>
    )
}