import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Button extends PureComponent {
  render() {
    const { color, backgroundColor, size, title, onClick } = this.props
    
    const styles = {
      color,
      backgroundColor, 
      fontSize: size
    }

    return (
      <button style={styles} onClick={onClick}>
        {title}
      </button>
    )
  }
}

Button.propTypes = {
  color: PropTypes.string, 
  backgroundColor: PropTypes.string, 
  size: PropTypes.number,
  title: PropTypes.string.isRequired, 
  onClick: PropTypes.func.isRequired
}

Button.defaultProps = {
  color: 'black',
  backgroundColor: 'white',
  size: 14,
}

export default Button