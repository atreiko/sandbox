import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ageSelector, nameSelector } from '../../store/selectors';

// useSelector - read from Redux
// useDispatch - write to Redux

function Footer() {
  const dispatch = useDispatch();
  const name = useSelector(nameSelector);
  const age = useSelector(ageSelector);

  const incrementAge = () => {
    dispatch({ type: "INCREMENT_AGE" })
  }

  return (
    <div>
      <h2>Footer</h2>
      <div>{name}</div>
      <div>{age}</div>
      <div><button onClick={incrementAge}>Increment age</button></div>
    </div>
  );
}

export default Footer;