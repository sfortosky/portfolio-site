import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ title, description, tech, codeLink, demoLink, icon: Icon }) => {
    return (
        <div className="group flex flex-col p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-accent hover:shadow-xl hover:shadow-accent/5 transition-all duration-300">
            {/* Icon & Title */}
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-accent/10 text-accent group-hover:scale-110 transition-transform">
                    <Icon size={20} />
                </div>
                <h3 className="text-xl font-bold dark:text-white group-hover:text-accent transition-colors">{title}</h3>
            </div>

            {/* Description */}
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                {description}
            </p>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
                {tech.map((item) => (
                    <span
                        key={item}
                        className="px-2 py-1 text-[10px] font-mono font-medium uppercase tracking-tight bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-md border border-slate-200 dark:border-slate-700"
                    >
            {item}
          </span>
                ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-auto">
                <a
                    href={codeLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg border border-slate-200 dark:border-slate-700 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                    <Github size={16} />
                    View Code
                </a>
                <a
                    href={demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
                >
                    <ExternalLink size={16} />
                    Live Demo
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;