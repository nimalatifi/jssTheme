import * as React from 'react'
import {render} from 'react-dom'
import {createUseStyles} from 'react-jss'
import stylesheet from './styles'

// Create your Styles. Remember, since React-JSS uses the default preset,
// most plugins are available without further configuration needed.
const useStyles = createUseStyles(stylesheet)

// Define the component using these styles and pass it the 'classes' prop.
// Use this to assign scoped class names.


export default function Button() {
    const classes = useStyles()
    return (
      <button className={classes.btn}>
        <span >red</span>
        <div className={'green'}>green</div>
      </button>
    )
}




