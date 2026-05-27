import React from 'react';
import { Link } from 'react-scroll';
import { Sun, Moon, Terminal } from 'lucide-react';

const Navbar = ({ darkMode, setDarkMode }) => {
    const navLinks = [
        { name: 'About', target: 'about' },
        { name: 'Stack', target: 'stack'},
        { name: 'Projects', target: 'projects' },
        { name: 'Community', target: 'community' },
        { name: 'Contact', target: 'contact' },
    ];

    return (
        <nav className="fixed w-full top-0 z-50 bg-white/70 dark:bg-slate-950/70 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">

                {/* Logo / Brand */}
                <Link to="home" smooth={true} duration={500} offset={-70}>
                    <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white cursor-pointer">
                        <Terminal size={20} className="text-accent" />
                        <span className="tracking-tight">
                            Sean <span className="text-accent">Fortosky</span>
                        </span>
                    </div>
                </Link>

                {/* Navigation Links */}
                <div className="flex items-center gap-8">
                    <ul className="hidden md:flex gap-6">
                        {navLinks.map((link) => (
                            <li key={link.target}>
                                <Link
                                    to={link.target}
                                    smooth={true}
                                    spy={true}
                                    offset={-70}
                                    duration={500}
                                    className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-accent cursor-pointer transition-colors"
                                    activeClass="text-accent dark:text-accent"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Vertical Divider */}
                    <div className="hidden md:block w-px h-6 bg-slate-200 dark:bg-slate-800" />

                    {/* Dark Mode Toggle */}
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-yellow-400 hover:ring-2 hover:ring-accent/50 transition-all"
                        aria-label="Toggle Dark Mode"
                    >
                        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;