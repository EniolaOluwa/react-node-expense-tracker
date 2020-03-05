import React, { useState, useContext } from "react";
import uuid from "uuid-random";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();
    if (!text || !amount) {
      alert("You cannot add an incomplete transaction");
    } else {
      const payload = {
        text,
        id: uuid(),
        amount: +amount
      };
      addTransaction(payload);
      setAmount("");
      setText("");
    }
  };

  return (
    <>
      <h3>Add A New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            placeholder="Enter text..."
            onChange={e => setText(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label htmlFor="amount">
            Amount <br /> (negative -expense, positive -income)
          </label>
          <input
            type="number"
            value={amount}
            placeholder="Enter amount..."
            onChange={e => setAmount(e.target.value)}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
