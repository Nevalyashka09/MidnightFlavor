import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = { name, email, password };

    try {
      const response = await axios.post(
        `http://localhost:4242/api/users`,
        body
      );

      if (response.status === 201) {
        console.info("User registered !");
        navigate("/login");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="registerCtn">
      <form onSubmit={(e) => handleSubmit(e)} className="formCtn">
        <h1>Aloha !</h1>
        <p>Please create your account</p>
        <input
          className="input"
          type="text"
          placeholder="Name *"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <Link to="/login">
          <p className="loginLink">Already have an account ?</p>
        </Link>
      </form>
    </div>
  );
}

export default Register;
