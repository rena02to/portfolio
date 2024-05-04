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
            {projects.map((project) => (
                <div className={style.cardproject} key={project.key}>
                </div>
            ))}
        </section>
    );
}