import style from '@/styles/summary.module.scss';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { BiSolidMobileVibration } from 'react-icons/bi';
import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5 } from 'react-icons/fa6';
import { MdTouchApp } from 'react-icons/md';
import { PiUserFocus } from 'react-icons/pi';
import { RiJavascriptFill } from 'react-icons/ri';
import { SiDjango, SiNextdotjs, SiSass, SiSearxng } from 'react-icons/si';

export default function Summary(){
    const { t } = useTranslation();
    const skills = [
        { key: 1, value: "HTML", icon: <FaHtml5/> },
        { key: 2, value: "CSS", icon: <FaCss3Alt/> },
        { key: 3, value: "Next.js", icon: <SiNextdotjs/> },
        { key: 4, value: "Django", icon: <SiDjango/> },
        { key: 5, value: "JavaScript", icon: <RiJavascriptFill/> },
        { key: 6, value: "Sass", icon: <SiSass/> },
        { key: 7, value: "SEO", icon: <SiSearxng/> },
        { key: 8, value: "UI", icon: <MdTouchApp/> },
        { key: 9, value: "UX", icon: <PiUserFocus/> },
        { key: 10, value: t('summary.skills.responsive'), icon: <BiSolidMobileVibration/> },
        { key: 11, value: "Git", icon: <FaGitAlt/> },
        { key: 12, value: "GitHub", icon: <FaGithub/> }
    ];
    const desc = [
        { key: 1, title: t('summary.skills.desc.front.title'), value: t('summary.skills.desc.front.desc') },
        { key: 2, title: t('summary.skills.desc.seo.title'), value: t('summary.skills.desc.seo.desc') },
        { key: 3, title: t('summary.skills.desc.uix.title'), value: t('summary.skills.desc.uix.desc') },
        { key: 4, title: t('summary.skills.desc.responsive.title'), value: t('summary.skills.desc.responsive.desc') },
    ];

    return(
        <section className={style.summary} id='summary'>
            <h2>{t('navbar.menu.summary')}</h2>
            <div className={style.profile}>
                <div className={style.image}/>
                <div className={style.infos}>
                    <Image src='/images/foto.jpg' alt='Renato Alves Photo' width={150} height={150}/>
                    <h1 className={style.name}>Renato Alves</h1>
                    <h1 className={style.dev}>{t('summary.dev')}</h1>
                    <div className={style.about}>
                        <h3>{t('summary.about.title')}</h3>
                        <div className={style.text}>
                            <p>{t('summary.about.text1')}</p>
                            <p>{t('summary.about.text2')}</p>
                            <p>{t('summary.about.text3')}</p>
                        </div>
                    </div>
                    <div className={style.skills}>
                        <h3>{t('summary.skills.title')}</h3>
                        <ul>
                            {skills.map((skill) => (
                                <li key={skill.key}>{skill.icon}{skill.value}</li>
                            ))}
                        </ul>
                        {desc.map((describe) => (
                            <div className={style.desc} key={describe.key}>
                                <h4>{describe.title}</h4>
                                <p>{describe.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}