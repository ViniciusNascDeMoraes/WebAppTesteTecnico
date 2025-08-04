import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';

const NovoPaciente = lazy(() => import("./pages/novopaciente.jsx"));
const NovoAtendimento = lazy(() => import("./pages/novoatendimento.jsx"));
const NovaTriagem = lazy(() => import("./pages/novatriagem.jsx"));
const Home = lazy(() => import("./pages/home.jsx"));

export default function App() {
    return (
        <Suspense fallback={<div>Carregando…</div>}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/novopaciente" element={<NovoPaciente />} />
                <Route path="/novoatendimento" element={<NovoAtendimento />} />
                <Route path="/novatriagem/:id" element={<NovaTriagem />} />
                <Route path="*" element={<div>Página Não Encontrada</div>} />
            </Routes>
        </Suspense>
    );
}