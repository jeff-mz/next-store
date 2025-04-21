"use client";

import { createContext, useContext, useEffect, useReducer } from "react";

const CartContext = createContext();

// Custom hook for context
export const useCartContext = () => useContext(CartContext);

const initState = JSON.parse(localStorage.getItem("items")) || [];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADDTOCART":
      return [...state, { ...action.payload, quantity: 1 }];

    case "INCREASE":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    case "DECREASE":
      return state.map((item) =>
        item.id === action.payload.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

    case "REMOVE":
      return state.filter((item) => item.id !== action.payload.id);

    default:
      return state;
  }
};

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  // store in local storage
  // useEffect(() => {
  //   const storedItems = localStorage.getItem(JSON.parse("items"));
  //   storedItems && console.log(storedItems);
  // }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(state));
    // console.log(localStorage.getItem(JSON.parse("items")));
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
