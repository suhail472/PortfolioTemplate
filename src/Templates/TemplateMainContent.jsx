import { useEffect, useState } from "react";
import profile from "../Images/Template/profileImg.png";

function TemplateMainData() {
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

    return () => clearTimeout(timeoutId);
  }, [text, index, isDeleting]);

  return (
    <>
      <section
        id="home"
        className="flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-br from-slate-900 to-slate-800 text-white px-4"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-2 animate-fade-in">
          {text} ❤️
        </h1>
        <h2 className="text-2xl sm:text-3xl font-medium mb-4 inline-block px-4 py-2 rounded-lg bg-slate-500/10 animate-pulse">
          <span className="animate-none text-sky-500">Full Stack Developer</span>
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
        className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white flex flex-col items-center justify-center px-6 py-16"
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
        className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white flex flex-col items-center justify-center px-6 py-16"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-10 text-center">
          About <span className="text-sky-400">Me</span>
        </h2>
        <div className="max-w-4xl w-full bg-slate-800/50 border border-slate-700 rounded-2xl shadow-xl p-8 sm:p-10 backdrop-blur-md animate-fade-in-up flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <img
              src={profile}
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
        className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white flex flex-col items-center justify-center px-6 py-16"
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
    </>
  );
}

export default TemplateMainData;
