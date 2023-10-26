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

    return (
        <div>
            <h1>Locadora da Bruna</h1>
            <hr />
            <table>
                <tr>
                    <th>Nome:</th>
                    <th>Gênero:</th>
                    <th>Id:</th>
                </tr>
                {filmes.map((item) => {
                    return (
                        <tr>
                            <td>{item.nome} </td>
                            <td>{item.genero}</td>
                            <td>{item.id}</td>
                        </tr>
                    );
                })}
            </table>
        </div>
    );
}

export default App;
