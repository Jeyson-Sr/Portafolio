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
    <div className="flex min-h-screen max-w-[1300px] flex-row mx-auto gap-50 mt-20 ">
        <div className="left sticky top-20 self-start">
          <div className="flex flex-col gap-3">
            <h1 className="text-5xl font-bold">Remigio Jayzon</h1>
            <p className="text-2xl">Frontend developers</p>
            <p className="w-96 font-medium text-[#6a7ca0]">
              Creo y optimizo experiencias digitales impactantes, accesibles y de
              alto nivel para la web.
            </p>
          </div>

          <nav className="nav hidden lg:block" aria-label="In-page jump links">
            <ul className="mt-16 w-max">
              <li>
                <a className="group flex items-center py-3" href="#about">
                  <span className={getIndicatorClasses("about")}></span>
                  <span className={getNavTextClasses("about")}>About</span>
                </a>
              </li>
              <li>
                <a className="group flex items-center py-3" href="#experience">
                  <span className={getIndicatorClasses("experience")}></span>
                  <span className={getNavTextClasses("experience")}>
                    Experience
                  </span>
                </a>
              </li>
              <li>
                <a className="group flex items-center py-3" href="#projects">
                  <span className={getIndicatorClasses("projects")}></span>
                  <span className={getNavTextClasses("projects")}>Projects</span>
                </a>
              </li>
            </ul>
          </nav>

        <div className="flex fixed bottom-20 self-end gap-4 mt-16"> 
          <a href="https://github.com/Jeyson-Sr" target="_blank">
            <GitHubIcon ancho={24} alto={24} color={"#6a7ca0"} />
          </a>
          <a href="https://www.linkedin.com/in/jeyson-sr" target="_blank">
            <LinkendinIcon ancho={24} alto={24} color={"#6a7ca0"} />
          </a>
          <a href="https://codepen.io/tu_usuario" target="_blank">
            <CodePenIcon ancho={24} alto={24} color={"#6a7ca0"} />
          </a>
          <a href="https://www.instagram.com/jhosep.js/" target="_blank">
            <InstagramIcon ancho={24} alto={24} color={"#6a7ca0"} />
          </a>
        </div>
      </div>

      <main className="right flex-1 flex flex-col gap-40">
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
