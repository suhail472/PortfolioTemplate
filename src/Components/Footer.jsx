export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-slate-900 to-slate-800/90 backdrop-blur-md border-t-2 border-sky-400 text-white py-8 box-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col md:flex-row justify-between items-center gap-6">

        <div className="text-2xl font-bold text-sky-400 animate-pulse">
          Suhail Hilal
        </div>

        <ul className="flex flex-wrap justify-center gap-6 text-white font-medium">
          {["home", "about", "skills", "contact"].map((item) => (
            <li key={item} className="relative group cursor-pointer">
              <a href={`#${item}`} className="hover:text-sky-400 transition-colors">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
              <span className="absolute left-0 -bottom-1 h-0.5 bg-sky-400 w-0 group-hover:w-full transition-all duration-300"></span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap justify-center gap-6 text-slate-300">
          <a href="mailto:suhailhilal92@gmail.com" className="hover:text-sky-400 transition-colors">Email</a>
          <a href="tel:+919797935307" className="hover:text-sky-400 transition-colors">Phone</a>
          <a href="https://github.com/" target="_blank" className="hover:text-sky-400 transition-colors">GitHub</a>
          <a href="https://linkedin.com/" target="_blank" className="hover:text-sky-400 transition-colors">LinkedIn</a>
        </div>
      </div>

      <p className="text-center text-slate-400 mt-6 text-sm">
        © {new Date().getFullYear()} Suhail Hilal. All rights reserved.
      </p>
    </footer>
  );
}
