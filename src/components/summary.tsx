import style from '@/styles/summary.module.scss';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function Summary(){
    const { t } = useTranslation();
    const skills = {
        hard: [
            { key: null, value: null, icon: null },
        ],
        soft: [
            { key: null, value: null, icon: null },
        ]
    };
    const experiences = [
        { key: null, title: null, value: null }
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
                        <p>{t('summary.about.text')}</p>
                    </div>
                    <div className={style.skills}>
                        <h2>{t('summary.skills.title')}</h2>
                        <div className={style.union}>
                            <div className={style.titleskills}>
                                <h3>{t('summary.skills.hard')}</h3>
                                <div className={style.hard}>
                                    {skills.hard.map((skill) => (
                                        <div className={style.card} key={skill.key}>
                                            {skill.icon}
                                            <p>{skill.value}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={style.titleskills}>
                                <h3>{t('summary.skills.soft.title')}</h3>
                                <div className={style.soft}>
                                    {skills.soft.map((skill) => (
                                        <div className={style.card} key={skill.key}>
                                            {skill.icon}
                                            <p>{skill.value}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className={style.union2}>
                            {experiences.map((exp) => (
                                <div className={style.card} key={exp.key}>
                                    <h3>{exp.title}</h3>
                                    <p>{exp.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}