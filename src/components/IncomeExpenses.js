import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const income = transactions
    .filter(trans => trans.amount > 0)
    .reduce((acc, item) => acc + item.amount, 0)
    .toFixed(2);

  const expense = transactions
    .filter(trans => trans.amount < 0)
    .reduce((acc, item) => acc + item.amount, 0)
    .toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          ${income}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          ${Math.abs(expense)}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
