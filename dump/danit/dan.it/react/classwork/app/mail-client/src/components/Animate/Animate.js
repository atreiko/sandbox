import React from 'react'
import PropTypes from 'prop-types'
import { VelocityComponent } from 'velocity-react'
import 'velocity-animate/velocity.ui'

const Animate = (props) => {
  const children = React.cloneElement(props.children, {
    style: {
      ...props.children.style,
      visibility: 'hidden'
    }
  })
  return (
    <VelocityComponent {...props} children={children} />
  )
}

Animate.propTypes = {
  children: PropTypes.element.isRequired
}

Animate.defaultProps = {
  animation: 'transition.fadeIn',
  runOnMount: true,
  targetQuerySelector: null,
  interruptBehavior: 'stop',
  visibility: 'visible',
  duration: 300,
  delay: 0,
  easing: [0.4, 0.0, 0.2, 1],
  display: null
}

export default Animate