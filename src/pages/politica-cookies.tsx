import style from '@/styles/policy.module.scss';
import Image from 'next/image';
import { LiaCookieBiteSolid } from 'react-icons/lia';

export default function Policy(){
    return(
        <div className={style.cookiespolicy}>
            <Image src='/images/cookies.png' alt='Imagem de cookies' width={100} height={100}/>
            <div className={style.intern}>
                <p>Bem-vindo à nossa política de cookies! Aqui, queremos informá-lo sobre como usamos cookies em nosso site para melhorar sua experiência de navegação.</p>
                <h3><LiaCookieBiteSolid/>O que são cookies?<LiaCookieBiteSolid/></h3>
                <p>Cookies são pequenos arquivos de texto armazenados no seu navegador quando você visita nosso site, e eles têm como objetivo melhorar sua experiência de navegação.</p>
                <h3><LiaCookieBiteSolid/>Cookies essenciais<LiaCookieBiteSolid/></h3>
                <p>Os cookies essenciais são fundamentais para o funcionamento do nosso site. Eles são utilizados apenas para lembrar se você aceitou ou negou o uso dos cookies opcionais. Esses cookies não coletam informações pessoais e não podem ser desativados.</p>
                <h3><LiaCookieBiteSolid/>Cookies opcionais<LiaCookieBiteSolid/></h3>
                <p>Os cookies opcionais nos ajudam a melhorar sua experiência no site ao lembrar suas preferências, como o idioma escolhido. Eles não são essenciais, mas permitem personalizar o conteúdo para atender às suas preferências. Você pode escolher permitir ou recusar esses cookies.</p>
            </div>
        </div>
    );
}