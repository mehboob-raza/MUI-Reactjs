import React, { useContext, useEffect, useReducer } from "react";

import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
  name: "",
};

const AppProvider = ({ children }) => {
  const NFTOverview = () => {
    return dispatch({
      type: "NFT_Overview",
      payload: {
        name: "NFT Market",
      },
    });
  };

  const TopCollections = () => {
    return dispatch({
      type: "Top_Collections",
      payload: {
        name: "Top collections",
      },
    });
  };
  const NFTActivity = () => {
    return dispatch({
      type: "Top_Collections",
      payload: {
        name: "Top collections",
      },
    });
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider
      value={{ ...state, NFTOverview, TopCollections, NFTActivity }}
    >
      {children}
    </AppContext.Provider>
  );
};

// global custom hook

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
