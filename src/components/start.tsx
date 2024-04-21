import style from './../styles/start.module.scss';
import { useTranslation } from 'react-i18next';

export default function Start(){
    const { t } = useTranslation();
    const cards = [
        { value: <p className={style.seo}>{t('start.seo')}</p> },
        { value: <p className={style.responsive}>{t('start.responsive')}</p> },
        { value: <p className={style.innovation}>{t('start.innovation')}</p> },
        { value: <p className={style.next}>Next.js</p> },
        { value: <p className={style.uix}>UI & UX</p> },
    ];

    return(
        <section className={style.home} id='start'>
            <h1 className={style.name}>Renato Alves</h1>
            <div className={style.text}>
                <h1>{t('start.dev.1')}<br/>{t('start.dev.2')}</h1>
                <h2 className={style.portfolio}>PORTFOLIO</h2>
                <p className={style.phrase}>{t("start.phrase")}</p>
                {cards.map((card) => (
                    <>{card.value}</>
                ))}
            </div>
        </section>
    );
}