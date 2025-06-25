export function Puesto({ año, cargo, empresa, descripcion, tecnologias }) {
  return (
    <article className="flex flex-col md:flex-row gap-10 md:gap-20">
      <div>
        <time className="text-gray-500 font-medium ">{año}</time>
      </div>
      <div className="max-w-[600px] flex flex-col gap-3">
        <h3 className="text-lg font-semibold">
          {cargo} · {empresa}
        </h3>
        <p className="text-gray-300">{descripcion}</p>
        <ul className="flex flex-wrap gap-2">
          {tecnologias.map((tech) => (
            <li
              key={tech}
              className="bg-[#122b39] text-[#5eead4] px-4 py-1.5 rounded-3xl"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

// Valores por defecto (opcional)
Puesto.defaultProps = {
  año: "Año desconocido",
  cargo: "Cargo no especificado",
  empresa: "Empresa no especificada",
  descripcion: "Descripción no disponible.",
  tecnologias: [],
};
