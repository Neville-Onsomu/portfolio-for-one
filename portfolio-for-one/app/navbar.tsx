export default function NavBar() {
    return(
        <div className="sticky top-2 h-[10vh] w-[40vw] m-[1vh] place-self-center grid grid-cols-5 place-items-center bg-red-900 rounded-4xl p-0">
            <a href="" className="duration-300 ease-in-out hover:scale-110">Home</a>
            <a href="" className="duration-300 ease-in-out hover:scale-110">Education</a>
            <a href="" className="duration-300 ease-in-out hover:scale-110">Skills</a>
            <a href="" className="duration-300 ease-in-out hover:scale-110">Projects</a>
            <a href="" className="duration-300 ease-in-out hover:scale-110">Contact</a>
        </div>
    )
}