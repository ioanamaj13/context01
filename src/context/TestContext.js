import React, { useContext, useReducer } from "react";
import { defaultContextState } from "../constants/defaultContextState";

export const TestContext = React.createContext();
export const TestContextUpdate = React.createContext();

export const testReducer = (state, action) => {
  switch (action.type) {
    case "swap": {
      return { ...state, testValue: !state.testValue };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export const TestProvider = ({ children }) => {
  const defaultValues = defaultContextState;
  const [state, dispatch] = useReducer(testReducer, defaultValues);
  return (
    <TestContext.Provider value={state}>
      <TestContextUpdate.Provider value={dispatch}>
        {children}
      </TestContextUpdate.Provider>
    </TestContext.Provider>
  );
};

export const useTestContext = () => {
  const context = useContext(TestContext);
  console.log(context);
  if (context === undefined) {
    throw new Error("useTestContext must be used within a TestProvider");
  }
  return context;
};

export const useTestContextUpdate = () => {
  const context = useContext(TestContextUpdate);
  if (context === undefined) {
    throw new Error("useCountDispatch must be used within a TestProvider");
  }
  return context;
};
