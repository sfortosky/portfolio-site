import React from 'react';
import { ChevronDown, FileText, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col justify-center items-center px-6 pt-16 bg-white dark:bg-slate-950 transition-colors duration-300">
            <div className="text-center max-w-4xl">
                {/* Subtle badge */}
                <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent text-xs font-mono mb-6 border border-accent/20">
          Full-Stack Developer & Educator
        </span>

                {/* Main Headline */}
                <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
                    Bridging the gap between <br />
                    <span className="bg-gradient-to-r from-accent to-blue-500 bg-clip-text text-transparent">
            human & machine logic.
          </span>
                </h1>

                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                    I'm Sean, a software engineer with a foundation in education. I build
                    intelligent, scalable systems that solve complex problems.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        to="projects"
                        smooth={true}
                        className="px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-950 rounded-full font-semibold hover:scale-105 transition-transform cursor-pointer"
                    >
                        View My Work
                    </Link>

                    <a
                        href="/resume.pdf"
                        target="_blank"
                        className="flex items-center gap-2 px-8 py-3 border border-slate-200 dark:border-slate-800 dark:text-white rounded-full font-semibold hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
                    >
                        <FileText size={18} />
                        Resume
                    </a>
                </div>

                {/* Social Links */}
                <div className="flex gap-6 mt-12 justify-center text-slate-400">
                    <a href="https://github.com" className="hover:text-accent transition-colors"><Github size={24} /></a>
                    <a href="https://linkedin.com" className="hover:text-accent transition-colors"><Linkedin size={24} /></a>
                </div>
            </div>

            {/* Animated Scroll Indicator */}
            <div className="absolute bottom-10 animate-bounce text-slate-300 dark:text-slate-700">
                <ChevronDown size={32} />
            </div>
        </section>
    );
};

export default Hero;