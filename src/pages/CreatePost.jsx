import { useEffect, useState } from "react";
import "./CreatePost.css";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);

  const handleCreatePost = async (e) => {
    e.preventDefault();
    if (!title || !body) alert("Preencha todos os campos");
    await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        body,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    navigate("/");
  };

  return (
    <main>
      <h1>Criar</h1>

      <form onSubmit={handleCreatePost}>
        <div>
          <label htmlFor="title">Título</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            id="title"
            placeholder="Insira o título do post"
          />
        </div>
        <div>
          <label htmlFor="body">Conteúdo</label>
          <textarea
            rows={8}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            type="text"
            id="body"
            placeholder="Insira o conteúdo do post"
          />
        </div>

        <button>Inserir</button>
      </form>
    </main>
  );
}
