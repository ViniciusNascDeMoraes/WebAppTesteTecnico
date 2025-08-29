import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NovoPaciente() {
    const [paciente, setPaciente] = useState({ nome: "", telefone: "", sexo: "", email: "", nomeMae : "" });
    const navigate = useNavigate();

    const save = async () => {
        await fetch("/api/paciente", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(paciente),
        });

        navigate("/");
    };

    return (
        <div>
            <h2>
                Cadastro de Paciente
            </h2>
            <button type="button" onClick={() => (window.history.length > 1 ? navigate(-1) : navigate("/"))}>
                Voltar
            </button>
            <label>
                Nome
                <input
                    value={paciente.nome}
                    onChange={(e) => setPaciente({ ...paciente, nome: e.target.value })}
                />
            </label>
            <label>
                Telefone
                <input
                    value={paciente.telefone}
                    onChange={(e) => setPaciente({ ...paciente, telefone: e.target.value })}
                />
            </label>
            <label>
                Sexo
                <select
                    value={paciente.sexo}
                    onChange={(e) => setPaciente({ ...paciente, sexo: e.target.value })}
                >
                    <option value="">Selecione...</option>
                    <option value="M">Masculino</option>
                    <option value="F">Feminino</option>
                </select>
            </label>
            <label>
                Email
                <input
                    value={paciente.email}
                    onChange={(e) => setPaciente({ ...paciente, email: e.target.value })}
                />
            </label>
            <label>
                Nome da Mãe
                <input
                    value={paciente.nomeMae}
                    onChange={(e) => setPaciente({ ...paciente, nomeMae: e.target.value })}
                />
            </label>
            <button type="button" onClick={() => save()}>
                Salvar
            </button>
        </div>
    );
}
