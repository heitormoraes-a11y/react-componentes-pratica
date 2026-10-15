function Produto({ nome, descricao, preco, disponivel }) {
  return (
    <div style={{ 
      border: '1px solid #ccc', 
      padding: '16px', 
      borderRadius: '8px',
      width: '220px',
      margin: '10px'
    }}>
      <h3>{nome}</h3>
      <p>{descricao}</p>
      <p><strong>R$ {preco}</strong></p>
      <p>{disponivel ? "Disponível" : "Indisponível"}</p>
      <button>Comprar</button>
    </div>
  );
}

export default Produto;
