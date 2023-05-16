import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EditPost.css";

export default function EditPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((response) => response.json())
      .then((post) => {
        setTitle(post.title);
        setBody(post.body);
      });
  }, []);

  const handleEditPost = async (e) => {
    e.preventDefault();
    if (!title || !body) alert("Preencha todos os campos");
    await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`, {
      method: "PUT",
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
    <div>
      <h1>Editar</h1>

      <form onSubmit={handleEditPost}>
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
    </div>
  );
}
