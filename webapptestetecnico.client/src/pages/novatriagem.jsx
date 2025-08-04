import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

export default function NovaTriagem() {
    const { id } = useParams();
    const atendimentoId = Number(id);
    const [atendimentos, setAtendimentos] = useState([]);
    const [triagem, setTriagem] = useState({ atendimentoId, sintomas: "", pressaoArterial: "", peso: "", altura: "" });

    const navigate = useNavigate();

    useEffect(() => {
        fetch("/api/atendimento")
            .then(r => r.json())
            .then(setAtendimentos);
    }, []);

    const save = async () => {
        await fetch("/api/triagem", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(triagem),
        });

        navigate("/");
    };

    return (
        <div>
            <h2>
                Cadastro De Triagem
            </h2>
            <button type="button" onClick={() => (window.history.length > 1 ? navigate(-1) : navigate("/"))}>
                Voltar
            </button>
            <label>
                Atendimento - {id}
            </label>
            <label>
                Sintoma
                <input
                    value={triagem.sintomas}
                    onChange={(e) => setTriagem({ ...triagem, sintomas: e.target.value })}
                />
            </label>
            <label>
                Pressão Arterial
                <input
                    value={triagem.pressaoArterial}
                    onChange={(e) => setTriagem({ ...triagem, pressaoArterial: e.target.value })}
                />
            </label>
            <label>
                Peso
                <input
                    value={triagem.peso}
                    onChange={(e) => setTriagem({ ...triagem, peso: e.target.value })}
                />
            </label>
            <label>
                Altura
                <input
                    value={triagem.altura}
                    onChange={(e) => setTriagem({ ...triagem, altura: e.target.value })}
                />
            </label>
            <button type="button" onClick={() => save()}>
                Salvar
            </button>
        </div>
    );
}
