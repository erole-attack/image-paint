import styled from 'styled-components'
import { useState } from 'react'

const StyledSquare = styled.div`
  all: unset;
  width: 1vw;
  height: 1vw;
  box-shadow: 1px 1px 1px black inset;
  background-color: ${ props => props.color };
`

function Square( props ) {

  const [ color, setColor ] = useState( 'white' )

  const paintSquares = ( event ) => {

    if ( event.button === 0 ) {
      if ( color !== props.color && props.mouseIsDown ) {
        setColor( props.color ) 
      } 
    }
    
  }

  const paintSingleSquare = ( event ) => {

    if ( event.button === 0 ) {
      if ( color !== props.color ) {
        setColor( props.color ) 
      } else {
        setColor( 'white' )
      }
    }
    
  }
  
  return (
    <StyledSquare color={ color } onMouseOver={ paintSquares } onMouseDown={ paintSingleSquare }/>
  )
 }
 
 export default Square