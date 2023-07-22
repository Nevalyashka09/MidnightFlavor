import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const checkUser = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("User info is wrong");
    } else {
      navigate("/generator");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = { email, password };

    try {
      const response = await axios.post(
        `http://localhost:4242/api/login`,
        body
      );
      console.info("Login Response:", response);

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        checkUser();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="registerCtn">
      <form onSubmit={(e) => handleSubmit(e)} className="formCtn">
        <h1>Aloha !</h1>
        <p>Please login to your account</p>
        <input
          className="input"
          type="text"
          placeholder="Email *"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input"
          type="text"
          placeholder="Password *"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="button" type="submit">
          Ok
        </button>
        <Link to="/">
          <p className="loginLink">First time ?</p>
        </Link>
      </form>
    </div>
  );
}

export default Login;
