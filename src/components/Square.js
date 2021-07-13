import styled from 'styled-components'
import { useState } from 'react'

const StyledSquare = styled.div`
  all: unset;
  width: 1vw;
  height: 1vw;
  box-shadow: 1px 1px 1px black inset;
  background-color: ${ props => props.isPainted ? props.color : 'white' };
`

function Square( props ) {

  const [ color, setColor ] = useState( 'white' )
  const [ isPainted, setIsPainted ] = useState( false )

  const paintSquares = ( event ) => {

    if ( event.button === 0 ) {
      if ( color !== props.color && props.mouseIsDown ) {
        setColor( props.color ) 
        setIsPainted( true )
      } else if( color === props.color && props.mouseIsDown ) {
        setColor( props.color )
        setIsPainted( !isPainted )
      }
    }
    
  }

  const paintSingleSquare = ( event ) => {

    if ( event.button === 0 ) {
      if ( color !== props.color ) {
        setColor( props.color ) 
        setIsPainted( true )
      } else {
        setColor( props.color )
        setIsPainted( !isPainted )
      }
    }
    
  }
  
  return (
    <StyledSquare color={ color } isPainted={ isPainted } onMouseOver={ paintSquares } onMouseDown={ paintSingleSquare }/>
  )
 }
 
 export default Square