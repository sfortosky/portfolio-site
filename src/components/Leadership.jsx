import React from 'react';
import { Users, Trophy, Globe, Medal } from 'lucide-react';

const Leadership = () => {
    const roles = [
        {
            title: "Team Canada Athlete",
            org: "Ultimate Canada",
            desc: "Represented Canada in international competition, requiring peak discipline, team synergy, and performance under pressure.",
            icon: <Globe className="text-accent" />
        },
        {
            title: "League Administrator",
            org: "Local Sports Club",
            desc: "Managing a stats-based league and overseeing operations for youth and adult clinics.",
            icon: <Users className="text-accent" />
        },
        {
            title: "Performance Coach",
            org: "Youth & Adult Clinics",
            desc: "Leveraging my background in Kinesiology and Education to develop technical skills and team culture.",
            icon: <Trophy className="text-accent" />
        }
    ];

    return (
        <section id="leadership" className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50 transition-colors">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold dark:text-white mb-12">Leadership & <span className="text-accent">Community</span></h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {roles.map((role, index) => (
                        <div key={index} className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                            <div className="mb-4">{role.icon}</div>
                            <h3 className="text-xl font-bold dark:text-white">{role.title}</h3>
                            <p className="text-sm text-accent font-mono mb-4">{role.org}</p>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                {role.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Leadership;