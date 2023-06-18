import React, { useState } from "react";
import "../styles/Billsplit.css";

function Billsplit({ onSplit, selected }) {
  const [bill, setBill] = useState("");
  const [yourExp, setYourExp] = useState("");
  const friendBill = bill ? bill - yourExp : "";
  const [whoIsPaying, setWhoIsPaying] = useState("you");

  const handleBillSubmit = function (e) {
    e.preventDefault();

    if (!bill || !yourExp) return;
    onSplit(whoIsPaying === "you" ? friendBill : -yourExp);
  };

  return (
    <form className="bill-split-container" onSubmit={handleBillSubmit}>
      <h2>Split a bill with {selected.name}</h2>

      <div className="form-text">
        <label>💰 Bill Value</label>
        <input
          type="number"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
        />
      </div>

      <div className="form-text">
        <label>👨‍💼 Your expense</label>
        <input
          type="number"
          value={yourExp}
          onChange={(e) => setYourExp(Number(e.target.value))}
        />
      </div>

      <div className="form-text">
        <label>👬 {selected.name}'s expense :</label>
        <input type="number" value={friendBill} disabled />
      </div>

      <div className="form-text">
        <label>🤑 Who is paying the bill?</label>
        <select
          value={whoIsPaying}
          onChange={(e) => setWhoIsPaying(e.target.value)}
        >
          <option value="you">You</option>
          <option value="friend">Friend</option>
        </select>
      </div>
      <div className="split-btn_container">
        <button>Split bill</button>
      </div>
    </form>
  );
}

export default Billsplit;
