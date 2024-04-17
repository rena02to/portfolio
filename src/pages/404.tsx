import Image from "next/image";
import style from './../styles/404.module.scss';
import Link from "next/link";
import { GoArrowUpLeft } from "react-icons/go";

export default function NotFound(){
    return(
        <aside className={style.notfound}>
            <p className={style.error}>Erro <span>404</span></p>
            <p className={style.texto}>Oops! Parece que você acessou uma página inválida.</p>
            <p className={style.texto}>Que tal acessar meu portfolio e conhecer melhor meus projetos?</p>
            <Image src='/images/404.png' alt="Imagem de 404" width={250} height={250}/>
            <p className={style.click}>Clique no botão abaixo para ser redirecionado para meu portfolio:</p>
            <Link href='/'>
                <button type='button'>
                    <GoArrowUpLeft/>
                    <p>Conhecer portfolio</p>
                </button>
            </Link>
        </aside>
    );
}