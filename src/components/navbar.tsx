import style from '@/styles/navbar.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineFileProtect } from 'react-icons/ai';
import { BiSolidMedal } from 'react-icons/bi';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { IoIosMenu } from 'react-icons/io';
import { IoCloseOutline, IoSettingsSharp } from 'react-icons/io5';
import { PiArrowUpRight } from 'react-icons/pi';
import { RiContactsBook2Fill, RiUserStarFill } from 'react-icons/ri';
import { SiApostrophe } from 'react-icons/si';
import { TiHome, TiInfo } from 'react-icons/ti';

export default function Navbar(){
    const { t } = useTranslation();
    const [ menuOpen, setMenuOpen ] = useState(false);
    const links = [
        {key: 1, value: t('navbar.menu.summary'), icon: <TiInfo/>, link: 'summary'},
        {key: 2, value: t('navbar.menu.skills'), icon: <SiApostrophe/>, link: 'skills'},
        {key: 3, value: t('navbar.menu.projects'), icon: <AiOutlineFileProtect/>, link: 'projects'},
        {key: 4, value: t('navbar.menu.experiences'), icon: <RiUserStarFill/>, link: 'experiences'},
        {key: 5, value: t('navbar.menu.certificates'), icon: <BiSolidMedal/>, link: 'certificates'},
        {key: 6, value: t('navbar.menu.contacts'), icon: <RiContactsBook2Fill/>, link: 'contact'},
    ];

    return(
        <nav className={style.nav}>
            <button type='button' className={style.menu} onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ?
                    <IoCloseOutline/>
                    :
                    <IoIosMenu/>
                }
            </button>
            <div className={style.interns}>
                {menuOpen ?
                    <div className={style.profile}>
                        <Image src='/images/foto.jpg' alt='Renato Alves Photo' width={75} height={75}/>
                        <div className={style.namedev}>
                            <p className={style.name}>Renato Alves</p>
                            <p className={style.dev}>{t('navbar.dev')}</p>
                        </div>
                    </div>
                    : null
                }
                <span className={style.line}/>
                <button type='button' className={style.home}>
                    <TiHome/>
                    {menuOpen ? <p>{t('navbar.home')}</p>: null}
                </button>
                <span className={style.line}/>
                <div className={style.navigation}>
                    {menuOpen ? <p className={style.navtitle}>{t('navbar.menu.title')}</p> : null}
                    {links.map((link) => (
                        <button className={style.link} key={link.key}>
                            {link.icon}
                            {menuOpen ? <p>{link.value}</p> : null}
                        </button>
                    ))}
                </div>
                {menuOpen ?
                    <>
                        <span className={style.line}/>
                        <div className={style.linkscontainer}>
                            <p className={style.linkstitle}>Links</p>
                            <div className={style.links}>
                                <a href='https://linkedin.com/in/renatosalves/'>
                                    <FaLinkedin/>
                                    <p>Linkedin</p>
                                    <PiArrowUpRight className={style.arrow}/>
                                </a>
                                <a href='https://github.com/rena02to/'>
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
                    {menuOpen ? <p className={style.settingstitle}>{t('navbar.settings')}</p> : null}
                    <Link href='/settings' className={style.settings}>
                        <IoSettingsSharp/>
                        {menuOpen ? <p>{t('navbar.settings')}</p> : null}
                    </Link>
                </div>
            </div>
        </nav>
    )
}