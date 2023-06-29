import "./App.css";
import Billsplit from "./components/Billsplit";
import FriendsList from "./components/FriendsList";
import AddfriendForm from "./components/AddfriendForm";
import { useState } from "react";
import { nanoid } from "nanoid";

const initialFriends = [
  {
    id: nanoid(),
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: nanoid(),
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: nanoid(),
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [isOpen, setIsOpen] = useState(true);
  const [selected, setSelected] = useState(null);

  const toggle = function () {
    setIsOpen((prev) => !prev);
    setSelected(null);
  };

  const handleAddFriend = function (addedFriend) {
    setFriends((prev) => [...prev, addedFriend]);
  };

  const handleSelection = function (item) {
    setSelected(item);
    selected?.id === item.id ? setSelected(null) : setSelected(item);

    setIsOpen(true);
  };

  const handleSplitBill = function (value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selected.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelected(null);
  };

  return (
    <div className="App">
      <div className="content">
        <FriendsList
          friends={friends}
          handleSelection={handleSelection}
          selected={selected}
        />

        {!isOpen && (
          <AddfriendForm onAddFriend={handleAddFriend} nanoid={nanoid()} />
        )}

        <div className="close-container">
          <button onClick={toggle}>{!isOpen ? "Close" : "Open"}</button>
        </div>
      </div>
      <div className="content">
        {selected && (
          <Billsplit
            friends={friends}
            selected={selected}
            onSplit={handleSplitBill}
            key={selected.id}
          />
        )}
      </div>
    </div>
  );
}

export default App;
