export function Proyecto({ imagen, titulo, descripcion, tecnologias, enlace }) {
  return (
    <article className="flex flex-col md:flex-row gap-10 ">
      {/* Imagen */}
      <div>
        <a
          href={enlace}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block overflow-hidden rounded-3xl"
        >
          <img
            src={imagen}
            alt={titulo || `Vista previa del proyecto: ${titulo}`}
            className="w-40 h-40  object-cover hover:scale-105 transition-transform"
          />
        </a>
      </div>

      {/* Contenido */}
      <div className="max-w-[500px] flex flex-col gap-3">
        <h3 className="text-lg font-semibold">{titulo}</h3>
        <p className="text-gray-300">{descripcion}</p>

        {/* Lista de tecnologías */}
        {tecnologias?.length > 0 && (
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
        )}

        {/* Enlace solo si existe */}
        {enlace && (
          <a
            href={enlace}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8accc2] hover:underline"
          >
            Ver proyecto
          </a>
        )}
      </div>
    </article>
  );
}

// Valores por defecto (opcional)
Proyecto.defaultProps = {
  imagen: "https://via.placeholder.com/150",
  titulo: "Título no especificado",
  descripcion: "Descripción no disponible.",
  tecnologias: [],
  enlace: "", // Ahora no se renderiza el <a> si no hay enlace
};
