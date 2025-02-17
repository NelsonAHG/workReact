import { useParams, useNavigate } from "react-router-dom";

const calibracoes = {
  Dimensional: ["Régua de Medição", "Blocos Padrão", "Máquinas CMM"],
  Massa: ["Balanças", "Pesos Padrão", "Células de Carga"],
  Pressão: ["Manômetros", "Transdutores de Pressão", "Barômetros"],
  Térmica: ["Termômetros", "Sensores de Temperatura", "Forno Industrial"],
  Elétrica: ["Fontes de Alimentação", "Trafos de Corrente", "Medidores de Energia"],
};

function EscolhaCalibracao() {
  const { servico } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h2>Escolha a Calibração para {servico}</h2>
      {calibracoes[servico].map((item) => (
        <button key={item} onClick={() => navigate("/pagamento")}>
          {item}
        </button>
      ))}
    </div>
  );
}

export default EscolhaCalibracao;
