import { createContext, useContext, useReducer } from "react";
import { tableConst } from "./tableConst";
// import { timelineOptions } from '../components/timeline/util';

const tableContext = createContext();

const tableReducer = (state, action) => {
  switch (action.type) {
    case tableConst.ADD_DATA_TO_TABLE:
      console.log(action.payload);
      return {
        ...state,
        tableData: action.payload
      };
    default: {
      return state;
    }
  }
};
const initialState = {
  tableData: []
};
export const tableContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tableReducer, initialState);

  return (
    <tableContext.Provider value={{ state, dispatch }}>
      {children}
    </tableContext.Provider>
  );
};

export const useTableContext = () => useContext(tableContext);
