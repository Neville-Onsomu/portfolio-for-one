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



// export function Education() {
//   return (
//     <section id="education" className="py-24 bg-slate-50 scroll-mt-20">
//       <div className="max-w-7xl mx-auto px-6 md:px-12">
//         <div className="max-w-3xl mx-auto text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Education & Involvement</h2>
//           <p className="text-slate-600 text-lg">My academic journey and the communities I'm a part of.</p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
//           {/* University Degree */}
//           <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full">
//             <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
//               <BookOpen size={24} />
//             </div>
//             <h3 className="text-xl font-bold text-slate-900 mb-2">B.S. in Computer Science</h3>
//             <p className="text-lg text-blue-600 font-medium mb-6">State University</p>
            
//             <div className="space-y-3 text-slate-600 flex-grow">
//               <div className="flex items-center gap-3">
//                 <Calendar size={18} className="text-slate-400 shrink-0" />
//                 <span>Expected Graduation: May 2027</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <MapPin size={18} className="text-slate-400 shrink-0" />
//                 <span>San Francisco, CA</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <Award size={18} className="text-slate-400 shrink-0" />
//                 <span>GPA: 3.8/4.0 | Dean's List (2023-2025)</span>
//               </div>
//             </div>
            
//             <div className="mt-8 pt-8 border-t border-slate-100">
//               <h4 className="font-semibold text-slate-900 mb-3">Relevant Coursework</h4>
//               <div className="flex flex-wrap gap-2">
//                 {['Data Structures', 'Algorithms', 'Web Development', 'Databases', 'Software Engineering'].map(course => (
//                   <span key={course} className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-md">
//                     {course}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Organizations */}
//           <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full">
//             <h3 className="text-xl font-bold text-slate-900 mb-6">Campus Organizations</h3>
            
//             <div className="space-y-8 flex-grow">
//               <div className="relative pl-6 border-l-2 border-blue-200">
//                 <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-[7px] top-2"></div>
//                 <h4 className="font-bold text-slate-900 text-lg">Computer Science Club</h4>
//                 <p className="text-blue-600 font-medium text-sm mb-2">Vice President • 2024 - Present</p>
//                 <p className="text-slate-600 text-sm leading-relaxed">
//                   Organizing weekly workshops on modern web technologies, mentoring underclassmen in React and JavaScript, and coordinating the annual department hackathon with over 200 participants.
//                 </p>
//               </div>

//               <div className="relative pl-6 border-l-2 border-slate-200">
//                 <div className="absolute w-3 h-3 bg-slate-300 rounded-full -left-[7px] top-2"></div>
//                 <h4 className="font-bold text-slate-900 text-lg">Web Dev Society</h4>
//                 <p className="text-slate-500 font-medium text-sm mb-2">Member • 2023 - Present</p>
//                 <p className="text-slate-600 text-sm leading-relaxed">
//                   Collaborating with peers to build pro-bono websites for local non-profits. Learning best practices for accessibility and responsive design.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }