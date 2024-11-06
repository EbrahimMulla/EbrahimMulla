import React, { useEffect, useRef } from "react"; // Added React and useEffect import
import { EDUCATION } from "../constants"; // Assuming EDUCATION is an array of education objects
import { gsap } from "gsap"; // Import GSAP
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

const Education = () => {
  const educationRef = useRef(null); // Create a reference for the education section

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".education-item", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: educationRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, educationRef); // Set context for GSAP animations

    return () => ctx.revert(); // Cleanup function
  }, []);

  return (
    <section className="py-16" id="education" ref={educationRef}>
      <div className="mx-auto max-w-full px-4">
        <h2 className="mb-8 text-center text-3xl font-medium lg:text-4xl">
          Education & Certifications
        </h2>
        <div className="flex flex-col space-y-8">
          {EDUCATION.map((edu) => (
            <div key={edu.id} className="education-item rounded-xl border border-purple-300/20 p-6">
              <h3 className="mb-2 text-lg lg:text-2xl">{edu.degree}</h3>
              <h4 className="text-lg font-medium lg:text-xl">{edu.institution}</h4>
              <p className="text-sm lg:text-base">{edu.duration}</p>
              <p className="mt-4">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
