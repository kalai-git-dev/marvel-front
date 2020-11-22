import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://marvel-api-amine.herokuapp.com/user/sigup",
        {
          email: email,
          password: password,
        }
      );
      console.log(response.data);

      // il manque de faire la route singup cote backend et modifier le http://localhost:3001/user/sigup"
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email"> Your Email</label>
      <input
        value={email}
        type="email"
        placeholder="Your Email"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <label htmlFor="password"> Your Password</label>
      <input
        value={password}
        type="Password"
        placeholder="Your Password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <input type="submit" value="Connexion" />
    </form>
  );
}

export default Signup;
