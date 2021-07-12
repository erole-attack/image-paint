import styled from 'styled-components'
import { useState } from 'react'

const StyledSquare = styled.div`
  all: unset;
  width: 1vw;
  height: 1vw;
  box-shadow: 1px 1px 1px black inset;
  background-color: ${ props => props.isPainted ? 'none' : props.color };
`

function Square(props) {

  const [color, setColor] = useState(props.color)
  const [isPainted, setIsPainted] = useState(true)

  const paintSquare = () => {
    setColor(props.color || 'purple')
    setIsPainted(!isPainted)
  }
  
  console.log(isPainted)

  return (
    <StyledSquare color={ color } isPainted={ isPainted } onMouseDown={ paintSquare }/>
  )
 }
 
 export default Square