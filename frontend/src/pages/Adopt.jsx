import { useState } from "react";

function Adopt() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(`Thank you, ${name}! Your adoption application has been submitted.`);

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <h1>Adopt a Pet 🐾</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />

        <br /><br />

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <br /><br />

        <textarea
          placeholder="Why would you like to adopt?"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
        />

        <br /><br />

        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
}

export default Adopt;