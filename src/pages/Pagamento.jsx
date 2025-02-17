import { useNavigate } from "react-router-dom";

function Pagamento() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Escolha um Método de Pagamento</h2>
      <button onClick={() => navigate("/confirmacao")}>PIX</button>
      <button onClick={() => navigate("/confirmacao")}>Cartão de Crédito</button>
    </div>
  );
}

export default Pagamento;
