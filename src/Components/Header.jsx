import { useState, useEffect } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      const sections = ["home", "about", "skills", "contact"];

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="w-screen bg-slate-900/80 backdrop-blur-md fixed top-0 z-50 shadow-md border-2 border-sky-400">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-20 px-6 sm:px-10">
        <div className="text-2xl font-bold text-sky-400 animate-pulse">Suhail</div>

        <ul className="hidden md:flex gap-10 text-white font-medium">
          {navItems.map((item) => (
            <li key={item.id} className="relative cursor-pointer">
              <a
                href={`#${item.id}`}
                className={`transition-colors ${
                  activeSection === item.id ? "text-sky-400" : "hover:text-sky-400"
                }`}
              >
                {item.label}
              </a>

              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-sky-400 transition-all duration-300 ${
                  activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </li>
          ))}
        </ul>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-800/90 backdrop-blur-md w-full py-6 flex flex-col items-center gap-6 text-white font-medium text-lg">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setIsOpen(false)}
              className={`transition-colors ${
                activeSection === item.id ? "text-sky-400" : "hover:text-sky-400"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
