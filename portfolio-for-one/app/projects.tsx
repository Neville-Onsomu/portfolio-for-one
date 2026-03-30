const projects = [
    {
        title: "panic !",
        description: "A full-stack task management application with real-time collaboration, drag-and-drop boards, and team workspaces.",
        tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
        github: "https://github.com",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Anonymous_emblem.svg/1280px-Anonymous_emblem.svg.png"
    },
    {
        title: "AI Study Buddy",
        description: "An AI-powered study assistant that generates flashcards, quizzes, and summaries from uploaded notes using OpenAI.",
        tech: ["React", "Python", "FastAPI", "OpenAI API"],
        github: "https://github.com",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Anonymous_emblem.svg/1280px-Anonymous_emblem.svg.png"
    },
    {
        title: "Campus Connect",
        description: "A mobile-first social platform for university students to find study groups, events, and connect with peers.",
        tech: ["React Native", "Node.js", "MongoDB", "Socket.io"],
        github: "https://github.com",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Anonymous_emblem.svg/1280px-Anonymous_emblem.svg.png"
    },
    {
        title: "Budget Tracker",
        description: "A personal finance app with expense categorization, visual analytics, and budget goal tracking.",
        tech: ["Vue.js", "Express", "Chart.js", "MySQL"],
        github: "https://github.com",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Anonymous_emblem.svg/1280px-Anonymous_emblem.svg.png"
    },
]

export default function Projects() {
    return (
    <section id="projects" className="bg-slate-500/70 py-24">
        <div className="mx-auto">
            <h2 className="text-center text-5xl font-extrabold">projects</h2>
            <p className="mt-2 text-lg text-center">a selection of my recent work</p>

            <div className="mt-8 grid gap-6 md:grid-cols-2 justify-items-center">
                {projects.map((project) => (
                    <div key={project.title} className="w-[85%] bg-slate-600 rounded-4xl p-4 space-y-2">
                        <div className="h-48 overflow-hidden bg-slate-100">
                            <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover rounded-4xl"
                            />
                        </div>
                        <div>
                            <div className="text-3xl font-bold">[ {project.title} ]</div>
                            <div className="text-lg leading-tight">
                                {project.description}
                            </div>
                        </div>
                        <div className="mt-auto space-y-2">
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech) => (
                                    <div key={tech} className="px-2 py-1 text-slate-100 bg-slate-700 text-md font-semibold rounded-3xl">
                                        {tech}
                                    </div>
                                ))}
                            </div>
                            <div className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-md font-semibold rounded-3xl hover:scale-110 active:scale-95 duration-300">
                                <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                    ~github link
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