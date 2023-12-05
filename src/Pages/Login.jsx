import { useState } from "react";
import "../Pages/Login.css";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username.length === 0 || password.length === 0) {
      setError("Ошибка");
    } else {
      setError("Успешно");
      console.log("Username:", username, "Password:", password);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Заполните данные для входа</h1>
      <label>
        Логин:
        <input
          placeholder="Введите логин"
          value={username}
          onChange={handleUsernameChange}
        />
      </label>
      <label>
        Пароль:
        <input
          placeholder="Введите пароль"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <button type="submit" className="signInButton">
        Войти
      </button>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </form>
  );
}

export default Login;
