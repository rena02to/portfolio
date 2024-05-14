import style from '@/styles/policy.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { LiaCookieBiteSolid } from 'react-icons/lia';
import { TbArrowBackUpDouble } from 'react-icons/tb';

export default function Policy(){
    const { t } = useTranslation();

    return(
        <div className={style.cookiespolicy}>
            <Link href='/'><TbArrowBackUpDouble/><p>{t('policy.link')}</p></Link>
            <Image src='/images/cookies.png' alt='Policy Cookies Image' width={100} height={100}/>
            <div className={style.intern}>
                <p>{t('policy.welcome')}</p>
                <h3><LiaCookieBiteSolid/>{t('policy.what')}<LiaCookieBiteSolid/></h3>
                <p>{t('policy.responsewhat')}</p>
                <h3><LiaCookieBiteSolid/>{t('policy.essentials')}<LiaCookieBiteSolid/></h3>
                <p>{t('policy.responseessentials')}</p>
                <h3><LiaCookieBiteSolid/>{t('policy.optionals')}<LiaCookieBiteSolid/></h3>
                <p>{t('policy.responseoptionals')}</p>
            </div>
        </div>
    );
}