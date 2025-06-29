import { Proyecto } from "../components/Proyecto";
import ToDoImage from "../assets/To-Do-Lists.png"; // ruta correcta según dónde esté
import FinazasPersonales from "../assets/Finazas-Personales.png"; // ruta correcta según dónde esté




function Proyectos() {
  return (
    <div className="flex flex-col gap-10 ">
      <Proyecto
        imagen={ToDoImage}
        titulo="To-Do Lists"
        descripcion="App web para crear, marcar, eliminar y filtrar tareas con una interfaz minimalista e intuitiva. Ideal para organizar tu día de manera rápida y sin complicaciones."
        tecnologias={[
          "React",
          "TypeScript",
          "Tailwind",
          "Lucide Icons"
        ]}
        enlace="https://to-do-list-self-kappa-76.vercel.app/"
      />
      <Proyecto
        imagen={FinazasPersonales}
        titulo="Finanzas Personales"
        descripcion="Aplicación web para gestionar ingresos y gastos, visualizar balance en gráficos, recibir alertas por exceso de gastos y organizar transacciones. Interfaz clara y adaptable a móviles."
        tecnologias={[
          "React",
          "TypeScript",
          "Tailwind",
          "Sonner ",
        ]}
        enlace="https://finanzas-personales-ten.vercel.app/"
      />
      
      
    </div>
  );
}

export default Proyectos;
