import React, { useEffect, useState } from "react";
import {
  InstagramIcon,
  LinkendinIcon,
  CodePenIcon,
  GitHubIcon,
} from "./assets/Icon";
import Puestos from "./pages/Puestos";
import Proyectos from "./pages/Proyectos";
import Home from "./pages/Home";

function App() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observerOptions = {
      root: null,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
  const getIndicatorClasses = (sectionId) =>
    `mr-4 h-px transition-all ${
      activeSection === sectionId ? "w-16 bg-slate-200" : "w-8 bg-slate-600"
    } group-hover:w-16 group-hover:bg-slate-200`;

  const getNavTextClasses = (sectionId) =>
    `nav-text text-xs font-bold uppercase tracking-widest ${
      activeSection === sectionId ? "text-slate-200" : "text-slate-500"
    } group-hover:text-slate-200`;

  return (
    <div className="flex flex-col lg:flex-row min-h-screen max-w-[1300px] mx-auto gap-8 lg:gap-50 mt-8 lg:mt-20 px-4 sm:px-8">
      {/* Sidebar / Topbar */}
      <div className="left w-full lg:w-auto lg:sticky lg:top-20 self-start flex flex-col lg:gap-0 gap-8">
        <div className="flex flex-col gap-3 items-center lg:items-start text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Remigio Jayzon</h1>
          <p className="text-lg sm:text-xl lg:text-2xl">Frontend developers</p>
          <p className="w-full max-w-xs lg:w-96 font-medium text-[#6a7ca0]">
            Creo y optimizo experiencias digitales impactantes, accesibles y de alto nivel para la web.
          </p>
        </div>

        {/* Navigation */}
        <nav className="nav w-full flex justify-center lg:block" aria-label="In-page jump links">
          <ul className="mt-8 lg:mt-16 w-max flex flex-row lg:flex-col gap-2 lg:gap-0">
            <li>
              <a className="group flex items-center py-2 lg:py-3" href="#about">
                <span className={getIndicatorClasses("about")}></span>
                <span className={getNavTextClasses("about")}>About</span>
              </a>
            </li>
            <li>
              <a className="group flex items-center py-2 lg:py-3" href="#experience">
                <span className={getIndicatorClasses("experience")}></span>
                <span className={getNavTextClasses("experience")}>Experience</span>
              </a>
            </li>
            <li>
              <a className="group flex items-center py-2 lg:py-3" href="#projects">
                <span className={getIndicatorClasses("projects")}></span>
                <span className={getNavTextClasses("projects")}>Projects</span>
              </a>
            </li>
          </ul>
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center lg:justify-start gap-4 mt-8 lg:mt-16 mb-4 lg:mb-0">
          <a href="https://github.com/Jeyson-Sr" target="_blank" rel="noopener noreferrer">
            <GitHubIcon ancho={24} alto={24} color={"#6a7ca0"} />
          </a>
          <a href="https://www.linkedin.com/in/jeyson-sr" target="_blank" rel="noopener noreferrer">
            <LinkendinIcon ancho={24} alto={24} color={"#6a7ca0"} />
          </a>
          <a href="https://codepen.io/tu_usuario" target="_blank" rel="noopener noreferrer">
            <CodePenIcon ancho={24} alto={24} color={"#6a7ca0"} />
          </a>
          <a href="https://www.instagram.com/jhosep.js/" target="_blank" rel="noopener noreferrer">
            <InstagramIcon ancho={24} alto={24} color={"#6a7ca0"} />
          </a>
        </div>
      </div>

      {/* Main Content */}
      <main className="right flex-1 flex flex-col gap-24 lg:gap-40 mx-auto">
        {/* scroll-mt-20 compensa el espacio del sticky */}
        <section
          id="about"
          className="scroll-mt-20 transition-all duration-500"
        >
          <Home />
        </section>
        <section
          id="experience"
          className="scroll-mt-20 transition-all duration-500 "
        >
          <Puestos />
        </section>
        <section
          id="projects"
          className="scroll-mt-20  transition-all duration-500"
        >
          <Proyectos />
        </section>
      </main>
    </div>
  );
}

export default App;
