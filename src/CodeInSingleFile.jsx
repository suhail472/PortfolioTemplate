import { useEffect, useState } from "react";
import Profile from "../Images/Template/profileImg.png";

function TemplateMainData() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const textArray = ["Hello", "I'm Suhail Hilal"];

  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentText = textArray[index];
    let timeoutId;

    if (isDeleting) {
      timeoutId = setTimeout(() => {
        setText(currentText.substring(0, text.length - 1));
      }, 100);
    } else {
      timeoutId = setTimeout(() => {
        setText(currentText.substring(0, text.length + 1));
      }, 100);
    }

    if (!isDeleting && text === currentText) {
      setTimeout(() => setDeleting(true), 500);
    } else if (isDeleting && text === "") {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % textArray.length);
    }

    // header

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

    return () => clearTimeout(timeoutId);
  }, [text, index, isDeleting]);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>

          <header className="w-screen bg-slate-900/80 backdrop-blur-md fixed top-0 z-50 shadow-md border-b-2 border-sky-400 box-border">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-20 px-6 sm:px-10">
        <div className="text-2xl font-bold text-sky-400 animate-pulse">Suhail</div>

        <ul className="hidden md:flex gap-10 text-white font-medium">
          {navItems.map((item) => (
            <li key={item.id} className="relative cursor-pointer group">
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


      <section
        id="home"
        className="flex flex-col items-center justify-center min-h-screen text-center mt-5 gap-5 bg-gradient-to-br from-slate-900 to-slate-800 text-white px-4 w-full box-border"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-2 animate-fade-in">
          {text} ❤️
        </h1>
        <h2 className="text-2xl sm:text-3xl font-medium mb-4 inline-block px-4 py-2 rounded-lg bg-slate-500/10 animate-pulse">
          <span className="animate-none text-sky-500">
            Full Stack Developer
          </span>
        </h2>
        <p className="text-lg text-slate-300 mb-6 max-w-md">
          I build modern, responsive, and user-focused web applications.
        </p>
        <button className="px-6 py-3 bg-sky-400 text-slate-900 font-semibold rounded-full hover:bg-sky-500 transition-transform transform hover:scale-105 animate-bounce">
          View My Work
        </button>
      </section>

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

      <section
        id="about"
        className="min-h-screen w-full bg-gradient-to-br from-slate-900 to-slate-800 text-white flex flex-col items-center justify-center px-6 py-16 box-border"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-10 text-center">
          About <span className="text-sky-400">Me</span>
        </h2>
        <div className="max-w-4xl w-full bg-slate-800/50 border border-slate-700 rounded-2xl shadow-xl p-8 sm:p-10 backdrop-blur-md animate-fade-in-up flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <img
              src={Profile}
              alt="Suhail"
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-sky-400 shadow-lg object-cover mt-2"
            />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-sky-400">
              Hi, I'm Suhail 👋
            </h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              I'm a passionate{" "}
              <span className="font-semibold text-white">
                Full Stack Developer
              </span>
              with a strong focus on building clean, modern, and scalable web
              applications. I love turning complex problems into elegant
              solutions using the latest web technologies.
            </p>
            <p className="text-slate-400 leading-relaxed mb-6">
              My toolkit includes{" "}
              <span className="text-sky-300 font-medium">
                React, Node.js, Express, and MongoDB
              </span>
              . I’m always eager to learn, experiment, and grow as a developer
              while contributing to real-world projects.
            </p>
            <button className="px-6 py-3 bg-sky-400 text-slate-900 font-semibold rounded-full hover:bg-sky-500 transition-transform transform hover:scale-105">
              Download Resume
            </button>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="min-h-screen w-full bg-gradient-to-br from-slate-900 to-slate-800 text-white flex flex-col items-center justify-center px-6 py-16 box-border"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-10 text-center">
          Contact <span className="text-sky-400">Me</span>
        </h2>
        <div className="w-full max-w-3xl bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-2xl shadow-xl p-8 sm:p-10 animate-fade-in-up">
          <p className="text-center text-slate-300 mb-8">
            Got a project in mind or just want to say hi? Fill out the form
            below and I’ll get back to you as soon as possible!
          </p>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
            ></textarea>
            <button
              type="submit"
              className="px-6 py-3 bg-sky-400 text-slate-900 font-semibold rounded-full hover:bg-sky-500 transition-transform transform hover:scale-105 mt-2"
            >
              Send Message
            </button>
          </form>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8 text-slate-300">
            <p>
              Email:{" "}
              <span className="text-sky-400">suhailhilal92@gmail.com</span>
            </p>
            <p>
              Phone: <span className="text-sky-400">+91 9797935307</span>
            </p>
            <p>
              Location: <span className="text-sky-400">Srinagar, Kashmir</span>
            </p>
          </div>
        </div>
      </section>

      <footer className="w-full bg-gradient-to-br from-slate-900 to-slate-800/90 backdrop-blur-md border-t-2 border-sky-400 text-white py-8 box-border">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold text-sky-400 animate-pulse">
            Suhail Hilal
          </div>

          <ul className="flex flex-wrap justify-center gap-6 text-white font-medium">
            {["home", "about", "skills", "contact"].map((item) => (
              <li key={item} className="relative group cursor-pointer">
                <a
                  href={`#${item}`}
                  className="hover:text-sky-400 transition-colors"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
                <span className="absolute left-0 -bottom-1 h-0.5 bg-sky-400 w-0 group-hover:w-full transition-all duration-300"></span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap justify-center gap-6 text-slate-300">
            <a
              href="mailto:suhailhilal92@gmail.com"
              className="hover:text-sky-400 transition-colors"
            >
              Email
            </a>
            <a
              href="tel:+919797935307"
              className="hover:text-sky-400 transition-colors"
            >
              Phone
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              className="hover:text-sky-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              className="hover:text-sky-400 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <p className="text-center text-slate-400 mt-6 text-sm">
          © {new Date().getFullYear()} Suhail Hilal. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default TemplateMainData;
