import style from '@/styles/footer.module.scss';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

export default function Footer(){
    const year = new Date().getFullYear();

    return(
        <footer className={style.footer}>
            <div className={style.links}>
                <a className={style.linkedin} href='https://linkedin.com/in/renatosalves/' target="_blank">
                    <FaLinkedin/>
                </a>
                <a href='https://github.com/rena02to/' target="_blank">
                    <FaGithub/>
                </a>
            </div>
            <p>&copy; {year} Renato Alves | Todos os direitos reservados</p>
        </footer>
    );
}