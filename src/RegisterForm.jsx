import { useState } from "react";

export default function MyForm() {
  const [userState, setUserState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent((prevState) => !prevState);
  };

  return (
    <>
      <h2>Register Form</h2>
      {isSent ? (
        <p>User registered successfully</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
            />
          </div>
          <input type="submit" value="Send" />
        </form>
      )}
    </>
  );
}
