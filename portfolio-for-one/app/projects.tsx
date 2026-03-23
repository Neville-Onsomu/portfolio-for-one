const projects = [
    {
        title: "panic !",
        description: "A full-stack task management application with real-time collaboration, drag-and-drop boards, and team workspaces.",
        tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
        github: "https://github.com",
    },
    {
        title: "AI Study Buddy",
        description: "An AI-powered study assistant that generates flashcards, quizzes, and summaries from uploaded notes using OpenAI.",
        tech: ["React", "Python", "FastAPI", "OpenAI API"],
        github: "https://github.com",
    },
    {
        title: "Campus Connect",
        description: "A mobile-first social platform for university students to find study groups, events, and connect with peers.",
        tech: ["React Native", "Node.js", "MongoDB", "Socket.io"],
        github: "https://github.com",
    },
    {
        title: "Budget Tracker",
        description: "A personal finance app with expense categorization, visual analytics, and budget goal tracking.",
        tech: ["Vue.js", "Express", "Chart.js", "MySQL"],
        github: "https://github.com",
    },
]

export default function Projects() {
    return (
    <section id="projects" className="bg-slate-800">
        <div className="mx-auto">
            <h2 className="text-center text-2xl font-semibold">Projects</h2>
            <p className="mt-2 text-center">A selection of my recent work</p>

            <div className="mt-8 grid gap-6 grid-cols-2 justify-items-center">
                {projects.map((project) => (
                    <div key={project.title} className="w-[80%] border rounded-4xl p-4">
                        <div>
                            <div className="text-lg font-bold">[ {project.title} ]</div>
                            <div className="text-sm">
                                {project.description}
                            </div>
                        </div>
                        <div className="mt-auto">
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech) => (
                                    <div key={tech} className="text-xs px-3 bg-slate-700 rounded-4xl">
                                        {tech}
                                    </div>
                                ))}
                            </div>
                            <div className="flex gap-2 px-3 bg-slate-700 rounded-4xl">
                                <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                    Code
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
    )
}