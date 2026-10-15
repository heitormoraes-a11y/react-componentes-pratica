import StatusBadge from "./StatusBadge";
import TecnologiaTag from "./TecnologiaTag";

function ProjetoCard({ titulo, descricao, responsavel, status, tecnologias, destaque, nota }) {
  return (
    <article>
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <p>Responsável: {responsavel}</p>
      <StatusBadge status={status} />
      <div>
        {tecnologias.map((tecnologia) => (
          <TecnologiaTag key={tecnologia} nome={tecnologia} />
        ))}
      </div>
      {destaque && <strong>Projeto em destaque</strong>}
      <p>Nota: {nota}</p>
      {nota >= 7 && <strong>Projeto aprovado</strong>}
      <hr />
    </article>
  );
}

export default ProjetoCard;
