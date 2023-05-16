import { Link, Outlet } from "react-router-dom";
import "./Layout.css";

export default function Layout() {
  return (
    <main>
      <h1>CRUD com REST</h1>

      <div className="nav">
        <Link to="/create">Criar</Link>
        <Link to="/">Listar</Link>
      </div>

      <Outlet />
    </main>
  );
}
