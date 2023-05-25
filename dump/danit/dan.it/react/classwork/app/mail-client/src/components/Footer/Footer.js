import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import useTimeout from '../../hooks/useTimeout';
import Animate from '../Animate/Animate';

function Footer() {
  const dispatch = useDispatch();
  const numbers = useMemo(() => [1, 2, 3, 4, 5, 6, 7, 8], []);
  const timeoutNumbers = useTimeout(numbers, 2000)

  return (
    <h2>
      Footer <button onClick={() => dispatch({type: 'TEST_ACTION'})}>Test</button>
      {timeoutNumbers.map(n => <Animate key={n} duration={2000}><div key={n}>{n}</div></Animate>)}
    </h2>
  );
}

export default Footer;