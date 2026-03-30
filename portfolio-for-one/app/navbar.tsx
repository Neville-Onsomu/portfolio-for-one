export default function NavBar() {
    return(
        <div className="z-10 sticky top-2 h-[10vh] min-w-[40vw] m-[1vh] place-self-center grid grid-cols-6 place-items-center bg-white/25 backdrop-blur-md rounded-4xl p-1 text-slate-900 font-semibold">
            <a href="#intro" className="text-xl duration-300 hover:scale-110 active:scale-95">home</a>
            <a href="#education" className="text-xl duration-300 hover:scale-110 active:scale-95">education</a>
            <a href="#skills" className="text-xl duration-300 hover:scale-110 active:scale-95">skills</a>
            <a href="#projects" className="text-xl duration-300 hover:scale-110 active:scale-95">projects</a>
            <a href="#contact" className="text-xl duration-300 hover:scale-110 active:scale-95">contact</a>
            <a href="" className="text-xl duration-300 hover:scale-110 active:scale-95">resume</a>
        </div>
    )
}