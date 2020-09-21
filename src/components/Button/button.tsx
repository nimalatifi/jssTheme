import * as React from 'react'
import {render} from 'react-dom'
import {createUseStyles} from 'react-jss'
import stylesheet from './styles'


const useStyles = createUseStyles(stylesheet)


export default function Button({...props}) {
    const classes = useStyles(props)
    return (
      <button className={classes.btn}>
        <span >red</span>
        <div className={'green'}>{props.children}</div>
      </button>
    )
}
Button.defaultProps = {
  spacing: 10,
  fontWeight: 'bold',
  labelColor: 'green'
}




