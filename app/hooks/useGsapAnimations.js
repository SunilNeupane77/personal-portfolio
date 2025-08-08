"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useGsapAnimations() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    // Reveal-up animations
    const revealUps = gsap.utils.toArray(".reveal-up");
    revealUps.forEach((el) => {
      gsap.fromTo(
        el,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Generic reveal (fade only)
    const reveals = gsap.utils.toArray(".reveal");
    reveals.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: "power1.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    });

    // Parallax backgrounds
    const parallaxEls = gsap.utils.toArray("[data-parallax]");
    parallaxEls.forEach((el) => {
      const amount = parseFloat(el.getAttribute("data-parallax")) || 20;
      gsap.to(el, {
        y: amount,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          scrub: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
}
