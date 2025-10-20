import { useEffect, useState } from "react";
import ShinyText from "../Components/ShinyText/ShinyText";
import RotatingText from "../Components/RotatingText/RotatingText";
import TextType from "../Components/TextTyping/TextTyping";

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
      
      <div className="flex flex-col items-center justify-evenly  h-screen">
        <div className="mt-10 flex flex-col gap-3">
        <h1 className="text-4xl sm:text-5xl font-bold mb-2  h-[2.4rem]">
         {text}
        </h1>
        <h2 className="text-2xl  sm:text-3xl font-medium mb-4 inline-block px-4 py-2 bg-slate-800 rounded-lg animate-pulse transition-all">
          <RotatingText
            texts={["Full Stack Developer", "UI Designer", "Responsive Design"]}
            mainClassName="px-2 sm:px-2 md:px-3 bg-slate-800 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </h2>

       <p className="text-2xl">
        <TextType
          text={["I build modern and scalable web applications", "I design responsive layouts that adapt beautifully", "I focus on delivering seamless, user-focused experiences"]}
          typingSpeed={35}
          pauseDuration={550}
          showCursor={true}
          cursorCharacter="|"
        />
        </p> 
        </div>
        <div className="">
        <button className="cursor-target  px-6 py-3  bg-sky-400 text-slate-900 font-semibold rounded-full hover:bg-sky-500 transition-transform transform hover:scale-105 animate-bounce">
          View My Work
        </button>
        </div>
      </div>
      </section>
    </>
  );
}
export default Home;
