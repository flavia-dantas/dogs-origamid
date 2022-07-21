import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { LoginCreate } from "./LoginCreate";
import { LoginForm } from "./LoginForm";
import { LoginPasswordLost } from "./LoginPasswordLost";
import { LoginPasswordReset } from "./LoginPasswordReset";

export const Login = () => {
  const { login } = useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
        <Route path="recuperar" element={<LoginPasswordLost />} />
        <Route path="senha" element={<LoginPasswordReset />} />
      </Routes>
    </div>
  );
};
