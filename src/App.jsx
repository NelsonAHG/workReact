import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import EscolhaServico from "./pages/EscolhaServico";
import EscolhaCalibracao from "./pages/EscolhaCalibracao";
import Pagamento from "./pages/Pagamento";
import Confirmacao from "./pages/Confirmacao";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/servicos" element={<EscolhaServico />} />
        <Route path="/calibracao/:servico" element={<EscolhaCalibracao />} />
        <Route path="/pagamento" element={<Pagamento />} />
        <Route path="/confirmacao" element={<Confirmacao />} />
      </Routes>
    </Router>
  );
}

export default App;

