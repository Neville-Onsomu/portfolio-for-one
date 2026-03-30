const contactLinks = [
    {
        name: "email",
        handle: "your handle/link",
        href: "mailto:alex.johnson@email.com",
    },
    {
        name: "linkedin",
        handle: "your handle/link",
        href: "https://linkedin.com/in/alexjohnson",
    },
    {
        name: "github",
        handle: "your handle/link",
        href: "https://github.com/alexjohnson",
    },
    {
        name: "twitter",
        handle: "your handle/link",
        href: "https://twitter.com/alexjohnsondev",
    },
]

export default function Contacts() {
    return (
    <section id="contact" className="bg-slate-600/70 py-24">
        <div className="mx-auto justify-items-center">
            <h2 className="text-center text-5xl font-extrabold">get in touch</h2>
            <p className="mt-2 text-lg text-center">my handles</p>
            
            <div className="mt-8 grid gap-6 grid-cols-2 justify-items-center">
                {contactLinks.map((contact) => (
                    <a
                    key={contact.name}
                    href={contact.href}
                    target={contact.name !== "Email" ? "_blank" : undefined}
                    rel={contact.name !== "Email" ? "noopener noreferrer" : undefined}
                    className="justify-items-center bg-slate-600 rounded-4xl p-4 w-full hover:scale-110 duration-300"
                    >
                        <p className="text-3xl font-bold">[ {contact.name} ]</p>
                        <p className="text-xl">{contact.handle}</p>
                    </a>
                ))}
            </div>
        </div>
    </section>
  )
}