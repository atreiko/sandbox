import { useEffect, useState } from "react";

const useTimeout = (arr, timeout = 1000) => {
  const [timeoutArr, setTimeoutArr] = useState([]);

  useEffect(() => {
    setTimeoutArr([])
    arr.forEach((item, index) => {
      setTimeout(() => {
        setTimeoutArr(state => {
          if (state.some(el => el.id === item.id)) {
            return state
          } else {
            return [...state, item]
          }
        })
      }, timeout * index)
    })
  }, [arr, timeout]);

  return timeoutArr;
}

export default useTimeout;