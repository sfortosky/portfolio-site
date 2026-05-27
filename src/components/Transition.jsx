import React from 'react';
import {BookOpen, ChevronDown, Code2, GraduationCap, Laptop} from 'lucide-react';
import {Link} from "react-scroll";

const Transition = () => {
    const milestones = [
        {
            year: "2018 - 2024",
            title: "Educator",
            desc: "Six years of full-time teaching in Saskatoon. Served as school technology lead. ",
            icon: <BookOpen className="text-accent" />,
        },
        {
            year: "2024 - 2026",
            title: "Student",
            desc: "Attended the Computer Systems Technology program at Saskatchewan Polytechnic. " +
                "Deployed multiple projects and developed proficiency in software, web, and app development.",
            icon: <GraduationCap className="text-accent" />,
        },
        {
            year: "Present",
            title: "Developer",
            desc: "Working as a freelance developer. Continuing to learn through work on contracts and passion projects.",
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