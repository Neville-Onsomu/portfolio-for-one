const organizations = [
  {
    name: "National Society of Black Engineers (NSBE)",
    role: "President",
  },
  {
    name: "ColorStack",
    role: "Member",
  },
]

export default function Education() {
  return (
    <section id="education" className="bg-slate-500/70 py-24">
        <div className="mx-auto">
            <h2 className="text-center text-5xl font-extrabold">education</h2>
            <p className="mt-2 text-lg text-center">my academic journey and affiliations</p>

            <div className="mt-8 grid md:grid-cols-2 gap-6 justify-items-center">
                <div className="bg-slate-900/50 w-[85%] rounded-4xl p-4 space-y-4">
                    <div className="flex flex-row items-center gap-4">
                        <h3 className="text-3xl font-bold">[ university ]</h3>
                    </div>
                    <div className="space-y-2 border-b pb-2 border-slate-300">
                        <p className="text-2xl font-semibold">b.s. in computer engineering</p>
                        <p className="text-xl">University of Southern Mississippi</p>
                        <p className="text-xl">Expected: <strong className="text-yellow-400">May 2027</strong></p>
                    </div>
                    <div className="space-y-2">
                        <p className="text-xl font-semibold">relevant coursework/ focus areas:</p>
                        <div className="flex flex-wrap gap-2">
                            {['Data Structures', 'Algorithms', 'Web Development', 'Databases', 'Software Engineering', 'whatever'].map(course => (
                                <span key={course} className="px-2 py-1 bg-slate-100 text-slate-700 text-md font-semibold rounded-3xl">
                                    {course}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="bg-slate-900/50 w-[85%] rounded-4xl p-4 space-y-4">
                    <div className="flex flex-row items-center gap-4">
                        <h3 className="text-3xl font-bold pb-2">[ affiliations ]</h3>
                    </div>
                    <div>
                        <ul className="space-y-3">
                            {organizations.map((org) => (
                                <li key={org.name} className="flex items-center justify-between space-y-2">
                                    <span className="text-2xl">{org.name}</span>
                                    <div className="text-xl px-2 py-1 bg-slate-100 text-slate-700 text-md font-semibold rounded-3xl">{org.role}</div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}