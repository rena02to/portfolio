import style from '@/styles/cookies.module.scss';
import cookies from 'js-cookie';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoCloseOutline } from "react-icons/io5";
import { LiaCookieBiteSolid } from 'react-icons/lia';

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
                    <div className={style.cookiestitle}>
                        <LiaCookieBiteSolid/>
                        <p>{t('cookies.title')}</p>
                        <LiaCookieBiteSolid/>
                    </div>
                    <p className={style.cookiesmessage}>{t('cookies.message.p1')}<span>{t('cookies.message.span1')}</span>{t('cookies.message.p2')}<span>&quot;{t('cookies.message.span2')}&quot;</span>{t('cookies.message.p3')}<Link href="/politica-cookies">{t('cookies.message.link')}</Link>.</p>
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