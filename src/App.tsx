import { useState } from "react";
import "./App.css";

interface Filme {
    id: number;
    nome: string;
    genero: string;
    urlImagem: string;
}

function App() {
    const [filmes, setFilmes] = useState<Filme[]>([
        {
            id: 1,
            nome: "A fantastica fábrica de chocolate",
            genero: "Drama",
            urlImagem: "teste",
        },
        {
            id: 2,
            nome: "As branquelas",
            genero: "Comédia",
            urlImagem: "teste2",
        },
    ]);

    const [nome, setNome] = useState("");

    const [genero, setGenero] = useState("");

    function adicionarFilme(event: any) {
        event.preventDefault();

        if (!nome || !genero) {
            alert("Preencha todos os campos");
            return;
        }

        const novoFilme = {
            id: filmes.length + 1,
            nome,
            genero,
            urlImagem: "",
        };

        setFilmes([...filmes, novoFilme]);

        setNome("");
        setGenero("");
    }

    function excluirFilme(id: number) {
        const filmesAtualizados = filmes.filter((item) => item.id != id);

        setFilmes(filmesAtualizados);
    }

    return (
        <div>
            <h1>Locadora da Bruna</h1>
            <hr />
            <table>
                <tr>
                    <th>Nome:</th>
                    <th>Gênero:</th>
                    <th>Id:</th>
                    <th>Excluir</th>
                </tr>
                {filmes.map((item) => {
                    return (
                        <tr>
                            <td>{item.nome} </td>
                            <td>{item.genero}</td>
                            <td>{item.id}</td>
                            <td>
                                <button onClick={() => excluirFilme(item.id)}>Excluir</button>
                            </td>
                        </tr>
                    );
                })}
            </table>
            <hr />

            <form onSubmit={adicionarFilme}>
                <h3>Adicione um novo filme</h3>
                <div>
                    <label>Nome:</label>
                    <input type="text" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                </div>
                <div>
                    <label>Gênero:</label>
                    <input type="text" name="genero" value={genero} onChange={(e) => setGenero(e.target.value)} />
                </div>

                <button>Adicionar</button>
            </form>
        </div>
    );
}

export default App;
