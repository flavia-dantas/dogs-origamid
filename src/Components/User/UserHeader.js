import { UserHeaderNav } from "./UserHeaderNav";
import style from "./UserHeader.module.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const UserHeader = () => {
  const [title, setTitle] = useState("");
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case "/conta/publicar":
        setTitle("Poste sua foto");
        break;
      case "/conta/estatisticas":
        setTitle("Estatísticas");
        break;
      default:
        setTitle("Minha Conta");
    }
  }, [location]);

  return (
    <header className={style.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};
