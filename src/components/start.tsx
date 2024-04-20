import style from './../styles/start.module.scss';
import { useTranslation } from 'react-i18next';

export default function Start(){
    const { t } = useTranslation();

    return(
        <section className={style.home} id='start'>
            <h1 className={style.name}>Renato Alves</h1>
            <div className={style.text}>
                <h1>{t('start.dev.1')}<br/>{t('start.dev.2')}</h1>
                <p>PORTFOLIO</p>
            </div>
        </section>
    );
}