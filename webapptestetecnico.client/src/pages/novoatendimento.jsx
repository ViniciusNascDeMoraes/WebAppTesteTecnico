import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NovoAtendimento() {
    const [pacientes, setPacientes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("/api/paciente")
            .then(r => r.json())
            .then(setPacientes);
    }, []);

    const save = async (pacienteId) => {
        await fetch("/api/atendimento", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ pacienteId: pacienteId }),
        });

        navigate("/");
    };

    return (
        <div>
            <h2>
                Pacientes
            </h2>
            <button type="button" onClick={() => (window.history.length > 1 ? navigate(-1) : navigate("/"))}>
                Voltar
            </button>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Sexo</th>
                        <th>Email</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {pacientes.map(({ id, nome, telefone, sexo, email }) => {
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{nome}</td>
                                <td>{telefone}</td>
                                <td>{sexo}</td>
                                <td>{email}</td>
                                <td>
                                    <button type="button" onClick={() => save(id)}>
                                        Criar Atendimento
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
