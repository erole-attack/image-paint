import styled from 'styled-components'
import { useState } from 'react'

const StyledSquare = styled.div`
  all: unset;
  box-sizing: border-box;
  width: 1vw;
  height: 1vw;
  box-shadow: 1px 1px 1px black inset;
  border-bottom: ${ props => props.bottomRow && '1px solid black' };
  background-color: ${ props => props.color };
`

function Square( props ) {

  const [ color, setColor ] = useState( 'white' )

  const paintSquares = ( event ) => {

    if ( event.button === 0 ) {
      if ( props.mouseIsDown && props.isErasing ) {
        setColor( 'white' ) 
      } 
      if ( color !== props.color && props.mouseIsDown && !props.isErasing ) {
        setColor( props.color ) 
      } 
    }

    !props.mouseIsDown && props.setErasing( false )
    
  }

  const paintSingleSquare = ( event ) => {

    if ( event.button === 0 ) {
      if ( color !== props.color ) {
        setColor( props.color ) 
      } else {
        setColor( 'white' )
        props.setErasing( true )
      }
    }
    
  }
  
  return (
    <StyledSquare color={ color } onMouseOver={ paintSquares } onMouseDown={ paintSingleSquare } bottomRow={ props.bottomRow }/>
  )
 }
 
 export default Square