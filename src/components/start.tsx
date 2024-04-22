import style from './../styles/start.module.scss';
import { useTranslation } from 'react-i18next';

export default function Start(){
    const { t } = useTranslation();
    const cards = [
        { key: 1, value: t('start.seo'), style: style.seo },
        { key: 2, value: t('start.responsive'), style: style.responsive },
        { key: 3, value: t('start.innovation'), style: style.innovation },
        { key: 4, value: 'Next.js', style: style.next },
        { key: 5, value: 'UI & UX', style: style.uix },
    ];

    return(
        <section className={style.home} id='start'>
            <h1 className={style.name}>Renato Alves</h1>
            <div className={style.text}>
                <h1>{t('start.dev.1')}<br/>{t('start.dev.2')}</h1>
                <h2 className={style.portfolio}>PORTFOLIO</h2>
                <p className={style.phrase}>{t("start.phrase")}</p>
                {cards.map((card) => (
                    <p className={card.style} key={card.key}>{card.value}</p>
                ))}
            </div>
        </section>
    );
}