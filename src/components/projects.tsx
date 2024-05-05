import style from '@/styles/projects.module.scss';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLink, FaStar } from 'react-icons/fa6';
import { HiOutlineExternalLink } from 'react-icons/hi';

export default function Projects(){
    const { t } = useTranslation();
    const projects = [
        {
            key: 1,
            name: <h3>Teste</h3>,
            desc: <p className={style.desc}>Sou um desenvolvedor front-end apaixonado por tecnologia, design e tudo o que está relacionado ao universo digital. Atualmente, sou bacharelando em Ciência da Computação, e encontro-me aprimorando minhas habilidades em desenvolvimento front-end, estudando mais aprofundadamente os conceitos do design responsivo, UI, UX e SEO. Sou um desenvolvedor front-end apaixonado por tecnologia, design e tudo o que está relacionado ao universo digital. Atualmente, sou bacharelando em Ciência da Computação, e encontro-me aprimorando minhas habilidades em desenvolvimento front-end, estudando mais aprofundadamente os conceitos do design responsivo, UI, UX e SEO.</p>,
            stack: [
                {
                    key: 1,
                    name: 'Teste'
                },
                {
                    key: 2,
                    name: 'teste teste'
                },
            ],
            github: 'https://github.com/rena02to',
            link: 'https://renatoalves.site',
            image: <Image className={style.image} src='/images/foto.jpg' alt="Project image" width={250} height={300}/>,
            status: <p className={style.development}>Em desenvolvimento</p>,
            favorite: true
        }
    ]

    return(
        <section id="projects" className={style.projects}>
            <div className={style.projectscontainer}>
                {projects.map((project) => (
                    <div className={style.cardproject} key={project.key}>
                        {project.image}
                        <div className={style.projectinfos}>
                            {project.name}
                            {project.desc}
                            <ul className={style.stackcontainer}>
                                {project.stack.map((stack) => (
                                    <li key={stack.key}>{stack.name}</li>
                                ))}
                            </ul>
                            <div className={style.links}>
                                <a href={project.link}><FaLink className={style.icon}/>Site<HiOutlineExternalLink className={style.external}/></a>
                                <a href={project.github}><FaGithub className={style.icon}/>Código<HiOutlineExternalLink className={style.external}/></a>
                            </div>
                        </div>
                        {project.favorite ? <FaStar className={style.favorite}/> : null}
                        {project.status}
                    </div>
                ))}
            </div>
        </section>
    );
}