import { useEffect, useState } from "react";

function Home() {
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
    </>
  );
}
export default Home;
