import { useEffect, useState } from "react";
import "./ThoughtList.css";
import { Hearts } from "./Hearts";


export const ThoughtList = () => {

  const [thoughts, setThoughts] = useState([]);

  const apiurl = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

  useEffect(() => {
    fetch(apiurl)
    .then((response) => response.json())
    .then((data) => setThoughts(data));
  }, []);

  return (
    <div className="thought-list">
      <div>
        {thoughts.map((thought) => (
          <>
          <li key={thought._id} className="thought">
            <p>{thought.message}</p>
            <Hearts thought={thought} />
          </li>
          </>
        )
        )}
      </div>
    </div>
  )
}
