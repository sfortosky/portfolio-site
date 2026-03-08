import React from 'react';
import { projectList } from '../data/projects';
import ProjectCard from './ProjectCard';

const Projects = () => {
    return (
        <section id="projects" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold dark:text-white mb-12">Technical <span className="text-accent">Projects</span></h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectList.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;