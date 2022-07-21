import { Link } from "react-router-dom";
import { useForm } from "../../Hooks/useForm";
import { Button } from "../Forms/Button";
import { Input } from "../Forms/Input";

export const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  console.log(username.value);
  console.log(password.value);


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
