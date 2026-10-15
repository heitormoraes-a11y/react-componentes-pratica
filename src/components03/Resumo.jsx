function Resumo({ total, concluidos, emDesenvolvimento }) {
  return (
    <div>
      <p>Total de projetos: {total}</p>
      <p>Concluídos: {concluidos}</p>
      <p>Em desenvolvimento: {emDesenvolvimento}</p>
    </div>
  );
}

export default Resumo;
