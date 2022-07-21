import { useEffect } from "react";
import { Link } from "react-router-dom";
import { GET_USER, TOKEN_POST } from "../../api";
import { useForm } from "../../Hooks/useForm";
import { Button } from "../Forms/Button";
import { Input } from "../Forms/Input";

export const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  // console.log(username.value);
  // console.log(password.value);

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      getUser(token);
    }
  }, []);

  async function getUser(token) {
    const { url, options } = GET_USER(token);
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      });

      const response = await fetch(url, options);
      const json = await response.json();
      console.log(json);
      window.localStorage.setItem("token", json.token);
      getUser(json.token);
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};
