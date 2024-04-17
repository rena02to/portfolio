import style from '@/styles/cookies.module.scss';
import cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoCloseOutline } from "react-icons/io5";

export default function Cookies(){
    const { t } = useTranslation();
    const [cookiesOculted, setCookiesOculted] = useState(false);

    useEffect(() => {
        setCookiesOculted(cookies.get('cookiesAccepted') === 'true' || cookies.get('cookiesAccepted') === 'false');
    }, [setCookiesOculted]);

    const handleAceptCookies = (type: string) => {
        if(type === 'close'){
            setCookiesOculted(true);
        }else if(type === 'denied'){
            cookies.set('cookiesAccepted', 'false', { expires: undefined });
            setCookiesOculted(true);
        }else{
            cookies.set('cookiesAccepted', 'true', { expires: undefined });
            setCookiesOculted(true);
        }
    }

    return(
        <>
            {cookiesOculted === false ?
                <aside className={style.cookiesDiv}>
                    <button type='button' className={style.close} onClick={() => handleAceptCookies('close')}><IoCloseOutline /></button>
                    <p>{t('cookies.message.p1')}<span>{t('cookies.message.span')}</span>{t('cookies.message.p2')}</p>
                    <div className={style.buttons}>
                        <button type='button' className={style.acept} onClick={() => handleAceptCookies('acept')}>{t('cookies.acept')}</button>
                        <button type='button' className={style.denied} onClick={() => handleAceptCookies('denied')}>{t('cookies.denied')}</button>
                    </div>
                </aside>
                : null
            }
        </>
    );
}