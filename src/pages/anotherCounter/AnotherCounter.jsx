import { CountProvider, useCountState, useCountDispatch } from "../../context/CountContext";

import { PageContainer } from "../../components/pageContainer/PageContainer";

function CountDisplay() {
  const { count } = useCountState()
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const dispatch = useCountDispatch()
  return (
    <button onClick={() => dispatch({ type: 'increment' })}>
      Increment count
    </button>
  )
}

export function AnotherCounter() {
  return (
    <PageContainer>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </PageContainer>
  )
}