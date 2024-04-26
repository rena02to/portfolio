import { RiLinkedinLine } from 'react-icons/ri';
import style from './../styles/start.module.scss';
import { useTranslation } from 'react-i18next';
import { SlSocialGithub } from 'react-icons/sl';
import { HiOutlineDocumentText, HiOutlineExternalLink } from 'react-icons/hi';

export default function Start(){
    const { t } = useTranslation();
    const cards = [
        { key: 1, value: t('start.seo') },
        { key: 2, value: t('start.responsive') },
        { key: 3, value: t('start.innovation') },
        { key: 4, value: 'Next.js' },
        { key: 5, value: 'UI & UX' },
    ];

    return(
        <section className={style.home} id='start'>
            <h1 className={style.name}>Renato Alves</h1>
            <div className={style.textslider}>
                <ul>
                    {cards.map((card) => (
                        <li key={card.key}>{card.value}</li>
                    ))}
                </ul>
                <ul>
                    {cards.map((card) => (
                        <li key={card.key}>{card.value}</li>
                    ))}
                </ul>
            </div>
            <div className={style.text}>
                <h2 className={style.portfolio}>PORTFOLIO</h2>
                <h1>{t('start.dev.1')}<br/>{t('start.dev.2')}</h1>
                <p className={style.phrase}>{t("start.phrase")}</p>
            </div>
            <div className={style.links}>
                <a href='https://linkedin.com/in/renatosalves' target="_blank" className={style.linkedin}>
                    <RiLinkedinLine className={style.icon}/>
                    <p>Linkedin</p>
                    <HiOutlineExternalLink className={style.external}/>
                </a>
                <a href='https://github.com/rena02to' target="_blank" className={style.github}>
                    <SlSocialGithub className={style.icon}/>
                    <p>GitHub</p>
                    <HiOutlineExternalLink className={style.external}/>
                </a>
                <a href='https://www.canva.com/design/DAFtx-3KHsg/js_-0M_Nu7iDI5Rw_qaQkA/edit?utm_content=DAFtx-3KHsg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' target="_blank" className={style.curriculum}>
                    <HiOutlineDocumentText className={style.icon}/>
                    <p>CV</p>
                    <HiOutlineExternalLink className={style.external}/>
                </a>
            </div>
        </section>
    );
}