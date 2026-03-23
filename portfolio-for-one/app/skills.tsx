const skillCategories = [
    {
        name: "languages (all placeholders)",
        skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"],
    },
    {
        name: "frontend (all placeholders)",
        skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS", "Redux"],
    },
    {
        name: "backend (all placeholders)",
        skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
    },
    {
        name: "tools & other (all placeholders)",
        skills: ["Git", "Docker", "AWS", "Figma", "Linux", "Agile"],
    },
]

export default function Skills() {
    return (
    <section id="skills" className="bg-slate-600">
        <div className="mx-auto justify-items-center">
            <h2 className="text-center text-2xl font-semibold">Skills</h2>
            <p className="mt-2 text-center">Technologies and tools I work with</p>
            
            <div className="mt-8">
                {skillCategories.map((category) => (
                    <div key={category.name}>
                        <h3 className="text-start text-lg font-bold">
                            [ {category.name} ]
                        </h3>
                        <div className="flex flex-wrap mb-2 gap-2 justify-start items-center">
                            {category.skills.map((skill) => (
                                <p key={skill} className="px-3 bg-slate-700 rounded-4xl">
                                    {skill}
                                </p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
    )
}