import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import './home.css';

export default function Home() {
    const [atendimento, setAtendimentos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("/api/atendimento")
            .then(r => r.json())
            .then(setAtendimentos);
    }, []);

    const handleRegistrarPaciente = () => {
        navigate("/novopaciente");
    };

    const handleNovoAtendimento = () => {
        navigate("/novoatendimento");
    };

    return (
        <div>
            <h1>Tela Inicial</h1>

            <button onClick={handleRegistrarPaciente}>
                Cadastrar Novo Paciente
            </button>

            <button onClick={handleNovoAtendimento}>
                Cadastrar Novo Atendimento
            </button>

            <h2>Fila De Espera Para Triagem</h2>

            <table>
                <thead>
                    <tr>
                        <th>
                            Número
                        </th>
                        <th>
                            Nome
                        </th>
                        <th>
                            Ação
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {atendimento.map(({ id, numeroSequencial, paciente: { nome } }, index) => (
                        <tr key={id}>
                            <td>{numeroSequencial}</td>
                            <td>{nome}</td>
                            <td>
                                {index === 0 && (
                                    <button type="button" onClick={() => navigate(`/novatriagem/${id}`)}>
                                        Criar Triagem
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}