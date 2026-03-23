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
    <section id="education" className="bg-slate-700">
        <div className="mx-auto">
            <h2 className="text-center text-2xl font-semibold">Education</h2>
            <p className="mt-2 text-center">My Academic Journey and Affiliations</p>

            <div className="mt-12 grid gap-6 grid-cols-2 justify-items-center">
                <div className="w-[80%] border rounded-4xl p-4">
                    <div className="flex flex-row items-center gap-4">
                        <h3 className="text-lg font-bold">[ university ]</h3>
                    </div>
                    <div className="">
                        <p className="text-lg">University of Southern Mississippi</p>
                        <p className="text-sm">B.S. in Computer Engineering</p>
                        <span>Expected: <strong>May 2027</strong></span>
                        <p className="text-sm text-muted-foreground">Focus areas: whatever</p>
                    </div>
                </div>

                <div className="w-[80%] border rounded-4xl p-4">
                    <div className="flex flex-row items-center gap-4">
                        <h3 className="text-lg font-bold">[ affiliations ]</h3>
                    </div>
                    <div>
                        <ul className="space-y-3">
                            {organizations.map((org) => (
                                <li key={org.name} className="flex items-center justify-between">
                                    <span className="text-lg">{org.name}</span>
                                    <div className="text-sm">{org.role}</div>
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