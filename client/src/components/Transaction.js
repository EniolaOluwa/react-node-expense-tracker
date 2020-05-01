import React, { useContext } from "react";
import { numberWithCommas } from "../utils/format";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ transaction }) => {
  const { _id, text, amount } = transaction;
  const sign = amount > 0 ? "+" : "-";
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li className={amount > 0 ? "plus" : "minus"}>
      {text}
      <span>
        {sign}${numberWithCommas(Math.abs(amount))}
      </span>
      <button className="delete-btn" onClick={() => deleteTransaction(_id)}>
        x
      </button>
    </li>
  );
};

export default Transaction;
