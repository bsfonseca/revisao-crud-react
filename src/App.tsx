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

    const [id, setId] = useState(-1);

    function adicionarFilme(event: any) {
        event.preventDefault();

        if (!nome || !genero) {
            alert("Preencha todos os campos");
            return;
        }

        if (id >= 0) {
            salvarFilme(id, nome, genero);
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
        setId(id);
    }

    function excluirFilme(id: number) {
        const filmesAtualizados = filmes.filter((item) => item.id != id);

        setFilmes(filmesAtualizados);
    }

    function atualizarFilme(id: number) {
        const filme = filmes.find((item) => item.id == id);

        if (!filme) {
            alert("Filme inválido");
            return;
        }
        setNome(filme.nome);
        setGenero(filme.genero);
        setId(id);
    }

    function salvarFilme(id: number, nome: string, genero: string) {
        const indice = filmes.findIndex((item) => item.id == id);

        if (indice < 0) {
            alert("Filme não encontrado");
            return;
        }
        filmes[indice].nome = nome;
        filmes[indice].genero = genero;

        setFilmes(filmes);

        setNome("");
        setGenero("");
        setId(-1);
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
                    <th>Atualizar</th>
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
                            <td>
                                <button onClick={() => atualizarFilme(item.id)}>Atualizar</button>
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
