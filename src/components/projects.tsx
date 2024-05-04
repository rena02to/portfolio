import style from '@/styles/projects.module.scss';
import { useTranslation } from 'react-i18next';

export default function Projects(){
    const { t } = useTranslation();
    const projects = [
        {
            key: null,
            name: null,
            desc: null,
            stack: [
                {
                    key: null,
                    name: null
                },
                {
                    key: null,
                    name: null
                }
            ],
            github: null,
            link: null,
            image: null,
            status: null,
            pinned: null
        },
        {
            key: null,
            name: null,
            desc: null,
            stack: [
                {
                    key: null,
                    name: null
                },
                {
                    key: null,
                    name: null
                }
            ],
            github: null,
            link: null,
            image: null,
            status: null,
            pinned: null
        }
    ]

    return(
        <section id="projects" className={style.projects}>
            <div className={style.projectscontainer}>
                {projects.map((project) => (
                    <div className={style.cardproject} key={project.key}>
                        {project.image}
                        {project.name}
                        {project.desc}
                        {project.stack.map((stack) => (
                            <div key={stack.key} className={style.stack}>
                                {stack.name}
                            </div>
                        ))}
                        {project.github}
                        {project.link}
                        {project.pinned ? <p>icon</p> : null}
                        {project.status}
                    </div>
                ))}
            </div>
        </section>
    );
}