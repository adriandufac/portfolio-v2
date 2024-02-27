import { gsap } from "gsap";
import { useLayoutEffect } from "react";
import SplitType from "split-type";


export const setUpAnimation = (cardDisplayed : string) => {
    useLayoutEffect(() => {
    const title = SplitType.create("h2."+cardDisplayed, { types: "chars" })
     
    gsap.fromTo(
        title.chars,
    {
        y: 100,
        opacity: 0,
    },
    {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 2,
        ease: "power4.out",
    })
    const paragraph =  document.querySelectorAll("p."+cardDisplayed);
    console.log(paragraph)

        // gsap.to triggers animations
        gsap.fromTo(
          // The array of letters
          paragraph,
          // Animation duration in seconds
        {
            x: 100,
            opacity: 0,
        },
        {
            x: 0,
            opacity: 1,
            stagger: 0.05,
            duration: 2,
            ease: "power2.inOut",
        }
        )

     }, [{cardDisplayed}]
    )
}

