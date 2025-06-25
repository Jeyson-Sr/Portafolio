import { motion } from "framer-motion";

// Subcomponente para texto destacado
function StrongHighlight({ children }) {
  return (
    <motion.strong
      whileHover={{ scale: 1.1, color: "#14b8a6" }}
      className="font-medium text-white"
    >
      {children}
    </motion.strong>
  );
}

function Home() {
  return (
    <div className="max-w-[750px] text-[#6a7ca0]">
  <p className="mb-4">
    ¡Hola! Soy <StrongHighlight>Jayzon</StrongHighlight>, un desarrollador full stack con enfoque en frontend, 
    dedicado a crear aplicaciones web claras, funcionales y de alto rendimiento. Me apasiona ofrecer experiencias 
    de usuario intuitivas mediante el uso de buenas prácticas y tecnologías modernas.
  </p>

  <p className="mb-4">
    Tengo alrededor de 1 año de experiencia desarrollando soluciones para academias, colegios y pequeñas empresas. 
    Trabajo principalmente con{" "}
    <StrongHighlight>React</StrongHighlight>,{" "}
    <StrongHighlight>Node.js</StrongHighlight> y{" "}
    <StrongHighlight>TypeScript</StrongHighlight>, integrando el frontend con el backend para construir productos 
    útiles, mantenibles y adaptables a las necesidades del usuario.
  </p>

  <p className="mb-4">
    He participado en el desarrollo de una{" "}
    <StrongHighlight>plataforma de gestión académica</StrongHighlight> para una academia de karate, una{" "}
    <StrongHighlight>tienda online</StrongHighlight> para un negocio textil, y un{" "}
    <StrongHighlight>sistema de control de inventario escolar</StrongHighlight>. 
    Estos proyectos incluyeron el uso de tecnologías como{" "}
    <StrongHighlight>React</StrongHighlight>,{" "}
    <StrongHighlight>Tailwind</StrongHighlight>,{" "}
    <StrongHighlight>Node.js</StrongHighlight>,{" "}
    <StrongHighlight>Express</StrongHighlight>,{" "}
    <StrongHighlight>MySQL</StrongHighlight> y{" "}
    <StrongHighlight>MongoDB</StrongHighlight>.
  </p>

  <p className="mb-4">
    Actualmente me encuentro explorando y aprendiendo nuevas tecnologías como{" "}
    <StrongHighlight>Laravel</StrongHighlight> y{" "}
    <StrongHighlight>CodeIgniter</StrongHighlight> para ampliar mis capacidades en el desarrollo backend 
    con PHP. Me interesa integrar distintas herramientas según las necesidades del proyecto y mantenerme actualizado 
    con las tendencias del ecosistema web.
  </p>

  <p className="mb-4">
    Busco ser parte de un equipo donde pueda seguir creciendo, aportar con lo que ya sé y colaborar en el desarrollo 
    de productos con impacto real. Mi motivación es mejorar continuamente y enfrentar nuevos desafíos con una 
    mentalidad abierta, técnica y enfocada en el usuario final.
  </p>

  <p>
    Cuando no estoy programando, disfruto fortalecer mi inglés, aprender sobre{" "}
    <StrongHighlight>arquitectura de software</StrongHighlight> y experimentar con nuevas tecnologías que 
    contribuyan a mi crecimiento como desarrollador.
  </p>
</div>


  );
}

export default Home;
