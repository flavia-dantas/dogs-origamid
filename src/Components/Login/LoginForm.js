import { useContext } from "react";
import { Link } from "react-router-dom";
// import { GET_USER, TOKEN_POST } from "../../api";
import { useForm } from "../../Hooks/useForm";
import { UserContext } from "../../UserContext";
import { Button } from "../Forms/Button";
import { Input } from "../Forms/Input";
import { Error } from "../Helper/Error";
import styles from "./LoginForm.module.css";
import stylesBtn from "../Forms/Button.module.css";
import { Head } from "../Helper/Head";

export const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading } = useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Login" />
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error && "Email / Senha incorreto."} />
      </form>
      <Link className={styles.forgotPassword} to="/login/esqueceu">Esqueceu a Senha?</Link>
      <div className={styles.register}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
      </div>
      <Link className={stylesBtn.button} to="/login/criar">Cadastro</Link>
    </section>
  );
};
