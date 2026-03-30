export default function NavBar() {
    return(
        <div className="sticky top-2 h-[10vh] min-w-[40vw] m-[1vh] place-self-center grid grid-cols-5 place-items-center bg-white/50 backdrop-blur-xs rounded-4xl p-1">
            <a href="" className="text-xl duration-300 hover:scale-110 active:scale-95">Home</a>
            <a href="" className="text-xl duration-300 hover:scale-110 active:scale-95">Education</a>
            <a href="" className="text-xl duration-300 hover:scale-110 active:scale-95">Skills</a>
            <a href="" className="text-xl duration-300 hover:scale-110 active:scale-95">Projects</a>
            <a href="" className="text-xl duration-300 hover:scale-110 active:scale-95">Contact</a>
        </div>
    )
}