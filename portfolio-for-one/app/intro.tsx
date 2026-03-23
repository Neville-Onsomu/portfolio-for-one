import Image from "next/image"

export default function Intro() {
    return(
        <div className="h-[80vh] max-h-[80vh] grid grid-cols-2 place-items-center">
            <div className="h-full grid grid-rows-[60%_40%]">
                <div className="place-self-center text-[5vw]">About Andre</div>
                <div className="place-self-center text-[1.5vw]">Your desired description</div>
            </div>
            <div className="h-full">
                {/*placeholder. wil come back to the dimensions and stuff*/}
            </div>
        </div>
    )
}