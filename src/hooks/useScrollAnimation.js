// src/hooks/useScrollAnimation.js
import { useEffect } from "react";

export const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-20");
            entry.target.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(entry.target); // 👈 animar solo una vez
          }
        });
      },
      { threshold: 0.1 } // cuando al menos 10% esté visible
    );

    const elements = document.querySelectorAll("[id^='animate-']");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};
