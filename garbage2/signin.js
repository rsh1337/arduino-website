import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react"

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const registerUser = async (email, password, e) => {
    e.preventDefault();
    const res = await fetch("/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    let data = await res.json();
    if (data.message) {
                setMessage(data.name);
    }
    if (data.message == "success") {
      let options = { redirect: false, email, password };
      const res = await signIn("credentials", options);
      return Router.push("/");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let options = { redirect: false, email, password };
    const res = await signIn("credentials", options);
    setMessage(null);
    if (res?.error) {
      setMessage(res.error);
      console.log("error", res.error);
    }
    return Router.push("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email address</label>
        <input
          type="email"
          name="email"
          className="form-control w-100"
          placeholder="email@example.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          className="form-control w-100"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Sign in with credential</button>
      <button onClick={(e) => registerUser(email, password, e)}>
        Register
      </button>
    </form>
  );
}
