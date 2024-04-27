import style from '@/styles/summary.module.scss';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function Summary(){
    const { t } = useTranslation();
    const skills = [
        { key: 1, value: "HTML + CSS" },
        { key: 2, value: "Next.js" },
        { key: 3, value: "JavaScript" },
        { key: 4, value: "Sass" },
        { key: 5, value: "SEO" },
        { key: 6, value: "UI + UX" },
        { key: 7, value: t('summary.skills.responsive') },
        { key: 8, value: "Git + GitHub" },
    ];
    const experiences = [
        { key: null, title: null, value: null },
        { key: null, title: null, value: null },
        { key: null, title: null, value: null },
        { key: null, title: null, value: null },
        { key: null, title: null, value: null },
        { key: null, title: null, value: null },
        { key: null, title: null, value: null },
    ];

    return(
        <section className={style.summary} id='summary'>
            <div className={style.profile}>
                <div className={style.image}/>
                <div className={style.infos}>
                    <Image src='/images/foto.jpg' alt='Renato Alves Photo' width={150} height={150}/>
                    <h1 className={style.name}>Renato Alves</h1>
                    <h1 className={style.dev}>{t('summary.dev')}</h1>
                    <div className={style.about}>
                        <h2>{t('summary.about.title')}</h2>
                        <div className={style.text}>
                            <p>{t('summary.about.text1')}</p>
                            <p>{t('summary.about.text2')}</p>
                            <p>{t('summary.about.text3')}</p>
                            <p>{t('summary.about.text4')}</p>
                        </div>
                    </div>
                    <div className={style.skills}>
                        <h2>{t('summary.skills.title')}</h2>
                        <ul>
                            {skills.map((skill) => (
                                <li key={skill.key}>{skill.value}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}