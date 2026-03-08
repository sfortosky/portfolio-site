import { Cpu, Database, Layout, Globe } from 'lucide-react';

export const projectList = [
    {
        id: "ai-tutor",
        title: "AI Tutoring Ecosystem",
        description: "A RAG-powered tutoring application integrated with an LMS. Generates file-specific study tools using vector embeddings and custom pipelines.",
        tech: ["React", "FastAPI", "Haystack", "ChromaDB", "SQLite"],
        codeLink: "https://github.com/your-repo",
        demoLink: "https://your-demo.com",
        icon: Cpu
    },
    {
        id: "sports-stats",
        title: "Stat-Track League Manager",
        description: "A data-driven administration tool for sports leagues. Handles player stats, clinic scheduling, and automated reporting.",
        tech: ["C#", "ASP.NET", "SQL Server", "Tailwind"],
        codeLink: "https://github.com/your-repo",
        demoLink: "https://your-demo.com",
        icon: Database
    }
];