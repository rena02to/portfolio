import { RiLinkedinLine } from 'react-icons/ri';
import style from './../styles/start.module.scss';
import { useTranslation } from 'react-i18next';
import { SlSocialGithub } from 'react-icons/sl';
import { HiOutlineDocumentText, HiOutlineExternalLink } from 'react-icons/hi';
import Select from 'react-select';
import { useEffect, useState } from 'react';
import cookies from 'js-cookie';
import Image from 'next/image';

export default function Start(){
    const { t, i18n } = useTranslation();
    const languages = [
        { value: 'pt', label: <div className={style.option}><Image src='/images/br.png' width={20} height={20} alt='Brazil image'/> {t('start.pt')}</div> },
        { value: 'en', label: <div className={style.option}><Image src='/images/us.png' width={20} height={20} alt='United States image'/> {t('start.en')}</div>},
        { value: 'es', label: <div className={style.option}><Image src='/images/es.png' width={20} height={20} alt='Spanish image'/> {t('start.es')}</div> }
    ];
    const [language, setLanguage] = useState('pt');

    useEffect(() => {
        if(cookies.get('cookiesAccepted') === 'true'){
            let languageCookie = cookies.get('language');
            if(languageCookie !== undefined){
                setLanguage(languageCookie);
                i18n.changeLanguage(languageCookie);
            }else{
                cookies.set('language', language, { expires: undefined })
            }
        }
    }, [setLanguage, language, i18n]);

    const handleChange = (selectedOption : any) => {
        setLanguage(selectedOption.value);
        i18n.changeLanguage(selectedOption.value);
        if(cookies.get('cookiesAccepted') === 'true'){
            cookies.set('language', selectedOption.value, { expires: undefined })
        }
    }

    return(
        <section className={style.home} id='start'>
            <h1 className={style.name}>Renato Alves</h1>
            <div className={style.languages}>
                <label htmlFor="languages">{t('start.language')}</label>
                <Select className={style.select} id='languages' name="languages" options={languages} isClearable={false} isSearchable={false} value={language === 'pt' ? languages[0] : (language === 'en' ? languages[1] : languages[2])} onChange={handleChange}/>
            </div>
            <div className={style.text}>
                <h2 className={style.portfolio}>PORTFOLIO</h2>
                <h1>{t('start.dev.1')}<br/>{t('start.dev.2')}</h1>
                <p className={style.phrase}>{t("start.phrase")}</p>
            </div>
            <div className={style.links}>
                <a href='https://linkedin.com/in/renatosalves' target="_blank" className={style.linkedin}>
                    <RiLinkedinLine className={style.icon}/>
                    <p>Linkedin</p>
                    <HiOutlineExternalLink className={style.external}/>
                </a>
                <a href='https://github.com/rena02to' target="_blank" className={style.github}>
                    <SlSocialGithub className={style.icon}/>
                    <p>GitHub</p>
                    <HiOutlineExternalLink className={style.external}/>
                </a>
                <a href='https://www.canva.com/design/DAGEZQSdrtU/dXnzCxVkg9YH_sWCOwpHPQ/edit?utm_content=DAGEZQSdrtU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' target="_blank" className={style.curriculum}>
                    <HiOutlineDocumentText className={style.icon}/>
                    <p>CV</p>
                    <HiOutlineExternalLink className={style.external}/>
                </a>
            </div>
        </section>
    );
}