import React, { useState, useEffect } from "react";
import { PageContainer } from "../../components/pageContainer/PageContainer";
import { ContextValue } from '../../components/TestComps/ContextValue';
import { ContextUpdateValueAction } from '../../components/TestComps/ContextUpdateValueAction';
import { useTestContext } from '../../context/TestContext';

export const Counter = () => {

  const counterState = useTestContext();
  console.log(counterState);


  const initialState = () => {
    return {
      count1: 0,
      count2: 2,
      sumCount: 2
    };
  }

  const [counter, setCounter] = useState(() => initialState());
  useEffect(() => {
    setCounter((prevCount) => {
      return { ...prevCount, sumCount: prevCount.count1 + prevCount.count2 }
    })
  }, [counter.count1, counter.count2])

  const decrementCount1 = () => {
    setCounter((prevCount) => {
      return { ...prevCount, count1: prevCount.count1 - 1 }
    });
  }

  const incrementCount1 = () => {
    setCounter((prevCount) => {
      return { ...prevCount, count1: prevCount.count1 + 1 }
    });
  }

  const decrementCount2 = () => {
    setCounter((prevCount) => {
      return { ...prevCount, count2: prevCount.count2 - 1 }
    });
  }

  const incrementCount2 = () => {
    setCounter((prevCount) => {
      return { ...prevCount, count2: prevCount.count2 + 1 }
    });
  }

  return (
    <PageContainer>
      <div> Counter </div>
      <div>
        <span>
          <button type="button" onClick={decrementCount1}> - </button>
          <span> {counter.count1} </span>
          <button type="button" onClick={incrementCount1}> + </button>
        </span>
        <span>
          <button type="button" onClick={decrementCount2}> - </button>
          <span> {counter.count2} </span>
          <button type="button" onClick={incrementCount2}> + </button>
        </span>
      </div>
      <div> {JSON.stringify(counter)} </div>
      <div>
        <ContextValue />
        <ContextUpdateValueAction />
      </div>
    </PageContainer>
  )
}