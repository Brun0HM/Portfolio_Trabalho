import { useEffect } from "react";

export const useScrollAnimation = () => {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".scroll-animation");

      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("animate-in");
        } else {
          element.classList.remove("animate-in");
        }
      });
    };

    // Animar elementos visíveis na primeira carga
    animateOnScroll();

    // Adicionar listener de scroll
    window.addEventListener("scroll", animateOnScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", animateOnScroll);
    };
  }, []);
};
