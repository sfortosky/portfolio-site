import React from 'react';
import { BookOpen, Globe, Award, Zap } from 'lucide-react';

const FactCard = ({ icon: Icon, title, detail }) => (
    <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-accent/50 transition-colors">
        <div className="flex items-center gap-4">
            <div className="p-2 rounded-lg bg-accent/10 text-accent">
                <Icon size={30} />
            </div>
            <div>
                <h4 className="text-sm font-mono uppercase tracking-widest text-slate-500">{title}</h4>
                <p className="text-lg font-bold dark:text-white">{detail}</p>
            </div>
        </div>
    </div>
);

const QuickFacts = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
            <FactCard icon={BookOpen} title="Experience" detail="6 Years Teaching" />
            <FactCard icon={Award} title="Education" detail="B.Sc. & B.Ed." />
            <FactCard icon={Zap} title="Current Focus" detail="Machine Learning" />
            <FactCard icon={Globe} title="Athletics" detail="Team Canada Athlete" />
        </div>
    );
};

export default QuickFacts;