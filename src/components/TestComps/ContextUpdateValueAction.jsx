import React from 'react';
import { useTestContextUpdate } from "../../context/TestContext"

export const ContextUpdateValueAction = () => {
  const dispatch = useTestContextUpdate()
  return (
    <button type="button" onClick={() => dispatch({ type: 'swap' })}> Update </button>
  )
}