import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (!username) {
      setError("O campo de e-mail não pode estar vazio.");
      return;
    }
    if (!validateEmail(username)) {
      setError("Por favor, insira um e-mail válido.");
      return;
    }
    if (!password) {
      setError("O campo de senha não pode estar vazio.");
      return;
    }
    if (password.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    setSuccess("Login realizado com sucesso!");
    console.log("Dados de Login:", { username, password });

    setUsername("");
    setPassword("");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Tela de login simples!</h1>

        {/* Exibir mensagem de erro */}
        {error && <p className="error-message">{error}</p>}

        {/* Exibir mensagem de sucesso */}
        {success && <p className="success-message">{success}</p>}

        <div className="input-field">
          <input
            type="text"
            placeholder="E-mail"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className="icon" />
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>

        <div className="recall-forget">
          <label>
            <input type="checkbox" />
            Lembre-se de mim!
          </label>
          <a href="#">Esqueceu sua senha?</a>
        </div>
        <button type="submit">Login</button>
        <div className="signup-link">
          <p>
            Não tem conta? <a href="#">Registre-se</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
