import React, { PureComponent } from 'react'
import Button from '../Button/Button';

class Numbers extends PureComponent {
  render() {
    const { numbers, deleteNumber } = this.props;

    const numberItems = numbers.map((n, index) => (
      <div key={index}>{n} <Button title='X' onClick={() => deleteNumber(n)} /></div>
    ))

    return (
      <div>{numberItems}</div>
    )
  }
}

export default Numbers