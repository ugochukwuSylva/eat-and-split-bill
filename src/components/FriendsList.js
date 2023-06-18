import React from "react";
import "../styles/FriendsList.css";

function FriendsList({ friends, handleSelection, selected }) {
  return (
    <ul>
      {friends.map((friend, i) => (
        <ListItem
          friend={friend}
          key={i}
          handleSelection={handleSelection}
          selected={selected}
        />
      ))}
    </ul>
  );
}

export function ListItem({ friend, handleSelection, selected }) {
  const isSelected = selected?.id === friend.id;

  const color = function () {
    if (friend.balance > 0) {
      return { color: "#66a80f" };
    }
    if (friend.balance < 0) {
      return { color: "#e03131" };
    }
    if (friend.balance === 0) {
      return { color: "black" };
    }
  };

  return (
    <>
      <li
        className="grid-container"
        style={isSelected ? { background: "#fff4e6" } : {}}
      >
        <div className="image-container">
          <img src={friend.image} alt="friendImage" />
        </div>
        <div className="text-container">
          <h3>{friend.name}</h3>
          <p style={color()}>
            {friend.balance > 0 &&
              `${friend.name} owes you $${Math.abs(Number(friend.balance))}`}
            {friend.balance < 0 &&
              `You owe ${friend.name} $${Math.abs(Number(friend.balance))}`}
            {friend.balance === 0 && `You and ${friend.name} are even`}
          </p>
        </div>
        <button onClick={() => handleSelection(friend)}>
          {isSelected ? "Close" : "Select"}
        </button>
      </li>
    </>
  );
}

export default FriendsList;
