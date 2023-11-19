import { useState } from "react";
import "./ThoughtForm.css";

export const ThoughtForm = () => {
  const [newThought, setNewThought] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const apiurl = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

  const handleInput = (e) => {
    setNewThought(e.target.value);
    setErrorMessage(null);
  }

  const handleSubmit = (e) => {

    e.preventDefault();

    if(newThought.length < 5) {
      setErrorMessage("Your message is too short, it needs at least 5 letters");
      return
    }
    if(newThought.length > 140){
      setErrorMessage("Your message is too long");
      return
    }

    fetch(apiurl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({message: newThought}),
    })
    .then((response) => response.json())
    .then((newThought) => {
      console.log("New thought: ", newThought);
      window.location.reload();
    })
    .catch((error) => {
      console.error("Error when posting thought: ", error);
    })
  }

  return (
    <div className="form-div">
      <h2>What is making you happy right now?</h2>
      <textarea className="input" 
        minLength="5"
        placeholder="'The giving of love is an education in itself' - Eleanor Roosevelt"
        value={newThought}
        onChange={handleInput}
      >
      </textarea>
      <span className="error-message">{errorMessage}</span>
      <button className="submit-btn" 
        type="submit" 
        onClick={handleSubmit}>❤️ Send Happy Thought ❤️
        </button>
    </div>
  )
}
