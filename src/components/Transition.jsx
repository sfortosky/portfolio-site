import React from 'react';
import { BookOpen, Code2, GraduationCap, Laptop } from 'lucide-react';

const Transition = () => {
    const milestones = [
        {
            year: "2018 - 2024",
            title: "The Educator Era",
            desc: "Six years of full-time teaching. Mastering complex system communication and pedagogical logic.",
            icon: <BookOpen className="text-accent" />,
        },
        {
            year: "2024 - 2026",
            title: "Systems Transition",
            desc: "Deep-diving into Computer Systems Technology. Bridging the gap between human and machine logic.",
            icon: <GraduationCap className="text-accent" />,
        },
        {
            year: "Present",
            title: "Full-Stack Engineer",
            desc: "Building AI-integrated solutions (RAG pipelines, SQLite, FastAPI) with a focus on education tech.",
            icon: <Laptop className="text-accent" />,
        }
    ];

    return (
        <section id="about" className="py-24 px-6 bg-slate-50 dark:bg-slate-950 transition-colors">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 dark:text-white">The <span className="text-accent">Pivot</span></h2>

                <div className="space-y-12">
                    {milestones.map((item, index) => (
                        <div key={index} className="flex gap-6 group">
                            <div className="flex flex-col items-center">
                                <div className="p-3 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm group-hover:border-accent transition-colors">
                                    {item.icon}
                                </div>
                                {index !== milestones.length - 1 && (
                                    <div className="w-px h-full bg-slate-200 dark:bg-slate-800 mt-4" />
                                )}
                            </div>
                            <div className="pb-8">
                                <span className="text-sm font-mono text-accent uppercase tracking-widest">{item.year}</span>
                                <h3 className="text-xl font-bold dark:text-white mt-1">{item.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Transition;