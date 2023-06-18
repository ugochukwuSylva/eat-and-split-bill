import React, { useState } from "react";
import "../styles/AddfriendForm.css";

function AddfriendForm({ onAddFriend, nanoid }) {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("https://i.pravatar.cc/48?u=499476");

  const handleSubmit = function (e) {
    e.preventDefault();

    if (!name || !url) return;

    const id = nanoid;

    const newFriend = {
      id,
      name,
      url,
      balance: 0,
      image: `https://i.pravatar.cc/48?u=${nanoid}`,
    };
    onAddFriend(newFriend);
    setName("");
  };

  // const firstLetterCap = function (name) {
  //   const transformedCase =
  //     name.split("")[0].toUpperCase() + name.split("").splice(1).join("");

  //   console.log(transformedCase);
  // };
  // firstLetterCap(name);

  return (
    <form className="add-friend_form" onSubmit={handleSubmit}>
      <div className="form-text">
        <label>👫 Friend name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="enter name"
        />
      </div>

      <div className="form-text">
        <label>🔗 Image URL</label>
        <input value={url} onChange={(e) => setUrl(e.target.value)} />
      </div>

      <div className="add-friend-btn">
        <button>Add</button>
      </div>
    </form>
  );
}

export default AddfriendForm;
