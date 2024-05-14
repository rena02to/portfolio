import style from '@/styles/settings.module.scss';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { TbArrowBackUpDouble } from 'react-icons/tb';

export default function Settings()
{
    const { t } = useTranslation();

    return(
        <div className={style.settings}>
            <Link href='/' className={style.back}><TbArrowBackUpDouble/><p>{t('policy.link')}</p></Link>
            <h3>{t('settings.title')}</h3>
            <div className={style.control}></div>
        </div>
    )
}