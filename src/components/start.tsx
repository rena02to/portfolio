import style from './../styles/start.module.scss';
import { useTranslation } from 'react-i18next';

export default function Start(){
    const { t } = useTranslation();
    const cards = [
        { key: 1, value: <p className={style.seo}>{t('start.seo')}</p> },
        { key: 2, value: <p className={style.responsive}>{t('start.responsive')}</p> },
        { key: 3, value: <p className={style.innovation}>{t('start.innovation')}</p> },
        { key: 4, value: <p className={style.next}>Next.js</p> },
        { key: 5, value: <p className={style.uix}>UI & UX</p> },
    ];

    return(
        <section className={style.home} id='start'>
            <h1 className={style.name}>Renato Alves</h1>
            <div className={style.text}>
                <h1>{t('start.dev.1')}<br/>{t('start.dev.2')}</h1>
                <p className={style.portfolio}>PORTFOLIO</p>
                <p className={style.phrase}>{t("start.phrase")}</p>
                {cards.map((card) => (
                    <>{card.value}</>
                ))}
            </div>
        </section>
    );
}