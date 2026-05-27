import React from 'react';
import { Users, Trophy, Globe, Medal } from 'lucide-react';

const Leadership = () => {
    const roles = [
        {
            title: "Team Canada Athlete",
            org: "Ultimate Canada",
            desc: "Represented Team Canada at World Championship events in the sport of ultimate frisbee.",
            icon: <Globe className="text-accent" />
        },
        {
            title: "Coach/Clinician",
            org: "Saskatoon Ultimate Disc-sport Society",
            desc: "Offered learn-to-play and competitive ultimate frisbee programming for adult and junior athletes.",
            icon: <Users className="text-accent" />
        },
        {
            title: "League Administrator",
            org: "Saskatoon Ultimate Disc-sport Society",
            desc: "Co-creator and commissioner of local stats-based ultimate frisbee league.",
            icon: <Trophy className="text-accent" />
        }
    ];

    return (
        <section id="community" className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50 transition-colors">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold dark:text-white mb-12">Community & <span className="text-accent">Leadership</span></h2>

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