import { Puesto } from "../components/Puesto";

function Puestos() {
  return (
    <div className="flex flex-col gap-10">

<Puesto
  año="2025/02 — 2025/06"
  cargo="Desarrollador Web"
  empresa="Evoxlab"
  descripcion="Diseñé y desarrollé plataformas web.<Br/>
              • Construí el backend con PHP sobre CodeIgniter4, definiendo rutas, controladores y modelos para gestionar usuarios, clases, pagos e
                inscripciones.<Br/>
              • Implementé el frontend con HTML, TailwindCSS y JavaScript, creando interfaces responsivas e interactivas.<Br/>
              • Integré pasarelas de pago como Stripe, configurando webhooks y asegurando transacciones seguras y fluidas.<Br/>
              • Desarrollé sistemas de autenticación y validación de datos, y optimicé consultas a la base de datos para garantizar rendimiento y seguridad.<Br/>
              • Colaboré con el equipo de diseño para mejorar la experiencia de usuario, logrando una navegación fluida y tiempos de carga reducidos"
  tecnologias={["HTML", "PHP", "JavaScript", "Tailwind", "CodeIgniter4"]}
/>
<Puesto
  año="2024/08 — 2024/11"
  cargo="Desarrollador Frontend Freelance"
  empresa="Ternos Sancer"
  descripcion="Diseño y desarrollo de la interfaz visual de una tienda online. <Br/>
               • Colaboración con un equipo multidisciplinario en el diseño y optimización de la interfaz."
  tecnologias={["HTML", "CSS", "JavaScript", "Tailwind", "React"]}
/>

      <Puesto
  año="2024/02 — 2024/07"
  cargo="Desarrollador Full Stack"
  empresa='Academia de Karate "Jhire"'
  descripcion="Desarrollo de una plataforma para gestionar inscripciones, clases y pagos de alumnos. <Br/>
               • Creación de interfaces limpias y fáciles de usar, optimizando la experiencia del usuario.<Br/>
               • Implementación de autenticación básica y estructuración de rutas REST."
  tecnologias={["React", "Node.js", "MySQL"]}
/>

<Puesto
  año="2023/02 — 2023/07"
  cargo="Desarrollador de Software (Prácticas Preprofesionales)"
  empresa="IE 20827 Mercedes Indacochea Lozano"
  descripcion="Desarrollé un sistema de gestión de almacenamiento de materiales para una institución educativa. <Br/>
               • Implementé funcionalidades interactivas en React y conexión con base de datos en MongoDB."
  tecnologias={["React", "MongoDB", "Node.js", "Express"]}
/>

<Puesto
  año="2023/07 — 2023/11"
  cargo="Desarrollador Frontend"
  empresa="Inova"
  descripcion="Desarrollé una interfaz en JavaScript para gestionar preguntas de mantenimiento para distintas máquinas. <Br/>
               • Implementé funcionalidades dinámicas para agregar y eliminar preguntas.<Br/>
               • Diseñé e implementé una interfaz sencilla y funcional en React."
  tecnologias={["JavaScript", "React"]}
/>

    </div>
  );
}
export default Puestos;
