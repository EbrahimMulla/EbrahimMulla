import { RiGithubFill, RiInstagramFill, RiLinkedinBoxFill } from "@remixicon/react";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-item", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, contactRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-16" id="contact" ref={contactRef}>
      <div className="px-4 text-center">
        <h2 className="mb-8 text-3xl font-medium lg:text-4xl contact-item">Contact</h2>
        <p className="mb-4 text-lg lg:text-xl contact-item">
          Feel free to reach out to me via email:{" "}
          <a href="mailto:mullaebrahim369@gmail.com" className="border-b">
            mullaebrahim369@gmail.com
          </a>
        </p>
        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/ebrahim-mulla-182489217?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon contact-item"
            aria-label="Visit my LinkedIn profile"
          >
            <RiLinkedinBoxFill className="text-3xl" />
          </a>

          <a
            href="https://github.com/EbrahimMulla" // Update with your GitHub link
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon contact-item"
            aria-label="Visit my GitHub profile"
          >
            <RiGithubFill className="text-3xl" />
          </a>

          <a
            href="https://www.instagram.com/ebkhan14/" // Update with your Instagram link
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon contact-item"
            aria-label="Visit my Instagram profile"
          >
            <RiInstagramFill className="text-3xl" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
