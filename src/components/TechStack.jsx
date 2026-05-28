import React from 'react';

const SkillGroup = ({ title, skills }) => (
    <div className="space-y-4">
        <h3 className="text-sm font-mono text-accent uppercase tracking-tighter">{title}</h3>
        <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
                <div
                    key={skill}
                    className="px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-slate-300 text-sm font-medium hover:scale-110 hover:border-accent hover:shadow-[0_0_15px_rgba(56,189,248,0.2)] transition-all cursor-default"
                >
                    {skill}
                </div>
            ))}
        </div>
    </div>
);

const TechStack = () => {
    const stack = {
        Languages: ["Python", "Javascript", "C#", "HTML", "CSS"],
        Frontend: ["React", "Tailwind"],
        Backend: ["FastAPI", "Node.js"],
        Testing: ["Cypress (E2E)"],
        Data: ["SQLite", "ChromaDB"],
        VersionControl: ["Git"]
    };

    return (
        <section id="stack" className="py-24 px-6 bg-white dark:bg-slate-950">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold dark:text-white mb-4">Tech <span className="text-accent">Stack</span></h2>
                <p className="text-slate-500 mb-12">Some of the tools and technologies I've been using.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {Object.entries(stack).map(([category, skills]) => (
                        <SkillGroup key={category} title={category === "VersionControl" ? "Version Control" : category} skills={skills} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;