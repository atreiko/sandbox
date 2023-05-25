import React from 'react';
import classes from './CssModules.module.scss';

function CssModules() {
  console.log(classes)
  return (
    <div className={classes.root}>Root
      <h3 className={classes.heading}>Heading</h3>
      <div className='global-class'>Global text</div>
    </div>
  )
}

export default CssModules
