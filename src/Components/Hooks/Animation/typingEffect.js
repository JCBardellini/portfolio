import { useEffect, useRef, useState } from "react";

const typingEffect = (textToType, interKeyStrokeDurationInMs) => {
  const [isTyping, setIsTyping] = useState(0);
  const typingRef = useRef(0)

  useEffect(() => {
    const intervalID = setInterval(() => {
      // console.log("word");
      setIsTyping((value) => value + 1);
      typingRef.current += 1
      if (typingRef.current > textToType.length) {
        clearInterval(intervalID);
      }
    }, interKeyStrokeDurationInMs);
    return () => {
      clearInterval(intervalID);
      typingRef.current = 0
      setIsTyping(0)
    };
  }, [interKeyStrokeDurationInMs, textToType]);

  return textToType.substring(0, isTyping);
};

export default typingEffect;

