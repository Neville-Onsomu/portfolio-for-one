const contactLinks = [
    {
        name: "email",
        handle: "andre",
        href: "mailto:alex.johnson@email.com",
    },
    {
        name: "linkedIn",
        handle: "andre",
        href: "https://linkedin.com/in/alexjohnson",
    },
    {
        name: "gitHub",
        handle: "andre",
        href: "https://github.com/alexjohnson",
    },
    {
        name: "twitter",
        handle: "andre",
        href: "https://twitter.com/alexjohnsondev",
    },
]

export default function Contacts() {
    return (
    <section id="contact" className="bg-slate-500">
        <div className="mx-auto justify-items-center">
            <h2 className="text-center text-2xl font-semibold">Get In Touch</h2>
            <p className="mt-2 text-center">my handles</p>
            
            <div className="mt-8 grid gap-6 grid-cols-2 justify-items-center">
                {contactLinks.map((contact) => (
                    <a
                    key={contact.name}
                    href={contact.href}
                    target={contact.name !== "Email" ? "_blank" : undefined}
                    rel={contact.name !== "Email" ? "noopener noreferrer" : undefined}
                    className="justify-items-center border rounded-4xl p-4 w-full"
                    >
                        <p className="text-lg font-bold">[ {contact.name} ]</p>
                        <p className="text-lg">{contact.handle}</p>
                    </a>
                ))}
            </div>
        </div>
    </section>
  )
}