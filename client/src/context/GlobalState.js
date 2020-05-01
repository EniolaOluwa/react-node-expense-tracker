import React, { createContext, useReducer } from "react";
import axios from "axios";
import AppReducer from "./AppReducer";

// Initial state
const initialState = {
  transactions: [],
  error: null,
  loading: true
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getTransactions = async () => {
    try {
      const request = await axios.get("/api/v1/transactions");
      dispatch({ type: "GET_TRANSACTION", payload: request.data.data });
    } catch (error) {
      dispatch({ type: "TRANSACTION_ERROR", payload: error.response.data.error });
    }
  };

  const deleteTransaction = async id => {
    try {
      await axios.delete(`/api/v1/transactions/${id}`);
      dispatch({ type: "DELETE_TRANSACTION", id });
    } catch (error) {
      dispatch({ type: "TRANSACTION_ERROR", payload: error.response.data.error });
    }
  };

  const addTransaction = async transaction => {
    delete transaction.id;
    const config = { headers: { "Content-Type": "application/json" } };
    try {
      const request = await axios.post("/api/v1/transactions", transaction, config);
      dispatch({ type: "ADD_TRANSACTION", transaction: request.data.data });
    } catch (error) {
      dispatch({ type: "TRANSACTION_ERROR", payload: error.response.data.error });
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
        getTransactions,
        error: state.error,
        loading: state.loading
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
