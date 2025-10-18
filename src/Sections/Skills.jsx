function Skills()
{

    return(<>

     <section
        id="skills"
        className="min-h-screen w-full bg-gradient-to-br from-slate-900 to-slate-800 text-white flex flex-col items-center justify-center px-6 py-16 box-border"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-10 text-center">
          My <span className="text-sky-400">Skills</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl w-full">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Git & GitHub",
            "Tailwind CSS",
            "Bootstrap",
            "REST APIs",
            "Responsive Design",
          ].map((skill) => (
            <div
              key={skill}
              className="bg-slate-700/50 hover:bg-slate-700 backdrop-blur-md border border-slate-600 rounded-xl p-4 sm:p-5 text-center text-base sm:text-lg font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md hover:shadow-sky-500/20"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

    </>)
}
export default Skills