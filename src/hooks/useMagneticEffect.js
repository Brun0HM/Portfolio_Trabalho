import { useEffect } from "react";

export const useMagneticEffect = () => {
  useEffect(() => {
    const magneticElements = document.querySelectorAll(".magnetic");

    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const distance = Math.sqrt(x * x + y * y);
      const maxDistance = 100;

      if (distance < maxDistance) {
        const force = (maxDistance - distance) / maxDistance;
        const translateX = x * force * 0.3;
        const translateY = y * force * 0.3;

        e.currentTarget.style.transform = `translate(${translateX}px, ${translateY}px)`;
      }
    };

    const handleMouseLeave = (e) => {
      e.currentTarget.style.transform = "translate(0px, 0px)";
    };

    magneticElements.forEach((element) => {
      element.addEventListener("mousemove", handleMouseMove);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      magneticElements.forEach((element) => {
        element.removeEventListener("mousemove", handleMouseMove);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);
};

export default useMagneticEffect;
