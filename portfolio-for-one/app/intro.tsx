export default function Intro() {
    return (
    <section id="intro" className="min-h-screen flex items-center pb-24 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-24">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full">

            {/* Text Content */}
            <div className="flex-1 space-y-6 text-center md:text-left">
                <h1 className="text-5xl md:text-7xl font-extrabold text-slate-100 tracking-tight leading-tight">
                    wagwan, it's <span className="text-slate-900">andre.</span><br/>
                    i do stuff.
                </h1>
                <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto md:mx-0 leading-relaxed">
                    this is basically your description. 
                    writing a bunch of irrelevant stuff to fill up the space, 
                    hope you come up with something.
                </p>
            </div>
            
            {/* Image */}
            <div className="flex-1 flex justify-center md:justify-end">
                <div className="relative w-64 h-64 md:w-96 md:h-96">
                    <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Anonymous_emblem.svg/1280px-Anonymous_emblem.svg.png" 
                    alt="andre's potrait" 
                    className="relative w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    </section>
    );
}