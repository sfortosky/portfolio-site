import React from 'react';
import { Mail, Github, Linkedin, MapPin, ArrowUp } from 'lucide-react';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contact" className="relative bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-24 pb-12 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">

                    {/* Left Side: Call to Action */}
                    <div>
                        <h2 className="text-4xl font-bold dark:text-white mb-6">
                            Looking for
                            <span className="text-accent"> work.</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-sm mb-8">
                            If you think I'd be a good fit for your organization,
                            please don't hesitate to reach out!
                        </p>
                        <a
                            href="mailto:your-email@example.com"
                            className="inline-flex items-center gap-3 px-6 py-3 bg-accent text-white rounded-full font-semibold hover:bg-accent/90 transition-all shadow-lg shadow-accent/20"
                        >
                            <Mail size={18} />
                            Say Hello
                        </a>
                    </div>

                    {/* Right Side: Links & Context */}
                    <div className="flex flex-col md:items-end justify-between">
                        <div className="flex gap-6 mb-8">
                            <a href="https://github.com/sfortosky" className="p-3 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-accent transition-colors">
                                <Github size={24} />
                            </a>
                            <a href="https://www.linkedin.com/in/sean-fortosky-b632333a8" className="p-3 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-accent transition-colors">
                                <Linkedin size={24} />
                            </a>
                        </div>

                        <div className="text-left md:text-right space-y-2">
                            <div className="flex items-center md:justify-end gap-2 text-slate-500 dark:text-slate-500">
                                <MapPin size={16} />
                                <span className="text-sm">Saskatoon, SK (CST)</span>
                            </div>
                            <p className="text-xs text-slate-400 font-mono tracking-widest uppercase">
                                Available for Remote or Relocation
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-100 dark:border-slate-900 gap-4">
                    <p className="text-xs text-slate-400">
                        © {currentYear} Sean Fortosky. Built with React & Tailwind v4.
                    </p>

                    <button
                        onClick={() => scroll.scrollToTop()}
                        className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-accent transition-colors"
                    >
                        Back to top
                        <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;