import React from 'react';
import * as icons from '../../theme/icons';

function Icon(props) {
  const { type, color, filled, onClick } = props;

  const iconJsx = icons[type];

  if (!iconJsx) {
    return null;
  }

  return (
    <span data-testid='icon' onClick={onClick}>{iconJsx(color, filled)}</span>
  )
}

export default Icon
