import React, { PureComponent } from 'react'

class Button extends PureComponent {
  render() {
    const { title, onClick, disabled } = this.props;

    return (
      <button onClick={onClick} disabled={disabled}>{title}</button>
    )
  }
}

export default Button