const skillCategories = [
    {
        name: "languages",
        skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"],
    },
    {
        name: "frontend",
        skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS", "Redux"],
    },
    {
        name: "backend",
        skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
    },
    {
        name: "tools & other",
        skills: ["Git", "Docker", "AWS", "Figma", "Linux", "Agile"],
    },
]

export default function Skills() {
    return (
    <section id="skills" className="bg-slate-600/70 py-24">
        <div className="mx-auto justify-items-center">
            <h2 className="text-center text-5xl font-extrabold">skills</h2>
            <p className="mt-2 text-lg text-center">techy and tools i work with</p>
            
            <div className="mt-8">
                {skillCategories.map((category) => (
                    <div key={category.name}>
                        <h3 className="text-center text-3xl font-bold pb-2">
                            [ {category.name} ]
                        </h3>
                        <div className="flex flex-wrap mb-10 gap-2 justify-start items-center">
                            {category.skills.map((skill) => (
                                <p key={skill} className="px-3 py-2 bg-slate-700 text-slate-100 text-2xl font-semibold rounded-3xl">
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