import { useEffect, useState } from "react"

export const Hearts = ({thought}) => {
const [hearts, setHearts] = useState(thought.hearts);

const apiurl = `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thought._id}/like`;

const addHeart = () => {
  fetch (apiurl, {
    method: "POST",}
  )
  .then((response) => response.json())
  .then((data) => {
    setHearts(data.hearts);
  })
  .catch((error) => {
    console.error("Error when liking post ", error);
  })
}
console.log(thought._id);

  return (
    <div className="heart">
      <button className="heart-btn" onClick={addHeart}>
      ❤️{hearts}
      </button>
    </div>
  )
}
