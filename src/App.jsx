import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Transition from './components/Transition';
import Leadership from "./components/Leadership.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";
import TechStack from "./components/TechStack.jsx";

function App() {
    const [darkMode, setDarkMode] = useState(true);

    return (
        <div className={darkMode ? 'dark' : ''}>
            <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
                <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
                <Hero />
                <Transition />
                <TechStack />
                <Projects />
                <Leadership />
                <Footer />
            </main>
        </div>
    );
}

export default App;