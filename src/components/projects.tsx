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
            name: <h3>Portfolio</h3>,
            desc: <p className={style.desc}>{t('projects.1.desc')}</p>,
            stack: [
                {
                    key: 1,
                    name: 'Next.js'
                },
                {
                    key: 2,
                    name: 'Sass'
                },
                {
                    key: 3,
                    name: 'TypeScript'
                },
                {
                    key: 4,
                    name: 'HTML'
                }
            ],
            github: 'https://github.com/rena02to/portfolio',
            link: 'https://renatoalves.site',
            image: <Image src='/images/portfolio.svg' className={style.image} alt="Project image" width={350} height={250}/>,
            status: <p className={style.finish}>{t('projects.1.status')}</p>,
            favorite: true
        },
        {
            key: 2,
            name: <h3>TecnoBurguer</h3>,
            desc: <p className={style.desc}>{t('projects.2.desc')}</p>,
            stack: [
                {
                    key: 1,
                    name: 'Next.js'
                },
                {
                    key: 2,
                    name: 'Sass'
                },
                {
                    key: 3,
                    name: 'Django'
                },
                {
                    key: 4,
                    name: 'TypeScript'
                },
                {
                    key: 5,
                    name: 'HTML'
                }
            ],
            github: 'https://github.com/rena02to/TecnoBurguer',
            link: 'https://tecnoburguer.renatoalves.site',
            image: <Image src='/images/TecnoBurguer_Arte.png' className={style.image} alt="Project image" width={350} height={250}/>,
            status: <p className={style.development}>{t('projects.2.status')}</p>,
            favorite: true
        },
        {
            key: 3,
            name: <h3>RSA Google Calendar (API)</h3>,
            desc: <p className={style.desc}>{t('projects.3.desc')}</p>,
            stack: [
                {
                    key: 1,
                    name: 'Django'
                },
            ],
            github: 'https://github.com/rena02to/tasks-google-calendar',
            link: 'https://github.com/rena02to/tasks-google-calendar',
            image: <Image src='/images/RSA_GC_Arte.png' className={style.image} alt="Project image" width={350} height={250}/>,
            status: <p className={style.finish}>{t('projects.3.status')}</p>,
            favorite: false
        }
    ]

    return(
        <section id="projects" className={style.projects}>
            <h2>{t('navbar.menu.projects')}</h2>
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
                                <a href={project.link} target='_blank'><FaLink className={style.icon}/>{t('projects.project')}<HiOutlineExternalLink className={style.external}/></a>
                                <a href={project.github} target='_blank'><FaGithub className={style.icon}/>{t('projects.code')}<HiOutlineExternalLink className={style.external}/></a>
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