import { useEffect, useState } from "react";
import "./List.css";
import { Link } from "react-router-dom";
import { Pagination } from "../components/Pagination";

export default function ListPosts() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  }, []);

  const handleDeletePost = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    });
    setPosts(posts.filter((post) => post.id !== id));
  };

  const handlePageChange = (page) => {
    setPage(page);
  };

  const postsByPage = posts.slice((page - 1) * 3, (page - 1) * 3 + 3);

  return (
    <main>
      <h1>Listar</h1>

      <div className="post-lists">
        {postsByPage.map((post) => (
          <div className="post" key={post.id}>
            <div className="post-header">
              <Link to={`/post/${post.id}/edit`}>Editar</Link>
              <button onClick={() => handleDeletePost(post.id)}>Remover</button>
            </div>
            <p className="post-title">{post.title}</p>
            <p className="post-body">{post.body}</p>
          </div>
        ))}

        <Pagination
          totalCountOfRegisters={posts.length}
          onPageChange={handlePageChange}
          currentPage={page}
          registersPerPages={3}
        />
      </div>
    </main>
  );
}
