import gsap from "gsap";
import { setPreloaderTimestamp } from "../setPreloaderTimestamp";


const mobileLanding = (tl) => {
  window.innerWidth < 763 &&
    tl.from(".textContainer", {
      duration: 1,
      delay: 0,
      opacity: 0,
      y: 0,
      ease: "expo.easeOut",
    });
};

// Preloader Animation
export const preLoaderAnim = () => {
  // Declare a general timeline to use in all the animation functions.
  const tl = gsap.timeline();

  tl.to("body", {
    duration: 0,
    css: { overflowY: "hidden" },
    ease: "power3.inOut",
  })
    .to(".textContainer", {
      duration: 0,
      opacity: 1,
      ease: "Power3.easeOut",
    })
    .from(".textContainer span.text", {
      duration: 1.5,
      delay: 0.5,
      y: 70,
      skewY: 10,
      stagger: 0.5,
      ease: "Power3.easeOut",
    })
    .to(".textContainer span.text", {
      duration: 1.5,
      y: 70,
      skewY: -20,
      stagger: 0.2,
      ease: "Power3.easeOut",
    })
    .to("body", {
      duration: 1,
      css: { overflowY: "scroll" },
      ease: "power3.inOut",
    })
    .to(
      ".preloader",
      {
        duration: 1,
        height: "0vh",
        ease: "power3.inOut",
        onComplete: () => {
          mobileLanding(tl);
          // Set preloader time after animation end
          setPreloaderTimestamp();
        },
      },
      "-=2"
    )
    .to(".preloader", {
      duration: .5,
      css: { display: "none" },
    });
};
