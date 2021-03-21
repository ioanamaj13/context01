import React from "react";
import { useTestContext } from "../../context/TestContext";

export const ContextValue = () => {
  const values = useTestContext();
  console.log(values.testValue);
  return <div>{JSON.stringify(values)}</div>
}