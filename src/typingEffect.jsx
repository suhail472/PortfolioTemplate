import { useEffect, useState } from "react";

function typingEffect() {
  let textArray = ["Hello", "I'm Suhail Hilal"];

  const [index, setIndex] = useState(0);
  const [text, setText] = useState(textArray[index]);
  const [isDeleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentText = textArray[index];
    let timeoutId;
    if (isDeleting) {
      console.log("deleting");
      timeoutId = setTimeout(() => {
        console.log("timeout executed deltion part")
        setText(currentText.substring(0, text.length - 1));
      }, 60);
    } else {
        console.log("timeout executed insertion part")
      console.log("inserting");
      timeoutId = setTimeout(() => {
        setText(currentText.substring(0, text.length + 1));
      }, 60);
    }

    if (!isDeleting && text == currentText) {
      console.log("Changed SetDeleting to true");
      setTimeout(()=>{
        setDeleting(true);
      },500)
      
    } else if (isDeleting && text === "") {
      console.log("Changed SetDeleting to false");
        setTimeout(()=>{
            setDeleting(false);
        })
      setIndex((pre) => (pre + 1) % textArray.length);
    }
    return(()=>{clearTimeout(timeoutId)});
  }, [text, index, isDeleting, textArray]);

  return (
    <>
      <h1 className="">{text}</h1>
    </>
  );
}
export default typingEffect;
