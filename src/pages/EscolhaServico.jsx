import { useNavigate } from "react-router-dom";

const servicos = ["Dimensional", "Massa", "Pressão", "Térmica", "Elétrica"];

function EscolhaServico() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Escolha um Serviço</h2>
      {servicos.map((servico) => (
        <button key={servico} onClick={() => navigate(`/calibracao/${servico}`)}>
          {servico}
        </button>
      ))}
    </div>
  );
}

export default EscolhaServico;
