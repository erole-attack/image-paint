import { ContextMenu, ContextMenuTrigger, MenuItem } from 'react-contextmenu'
import { useEffect, useState } from 'react'

import Square from './components/Square'

function App() {

  function handleClick( e, data ) {
    setActiveColor( data.color )
  }

  const [totalWidth, setTotalWidth] = useState( null )
  const [totalHeight, setTotalHeight] = useState( null )
  const [activeColor, setActiveColor] = useState( 'purple')
  const [mouseIsDown, setMouseIsDown] = useState( false )

  const cellWidth = totalWidth / 100
  const totalCellRows = Math.round( totalHeight / cellWidth )
  const totalCellAmount = totalCellRows * 100

  const cellArray = new Array( totalCellAmount || 0 ).fill( <Square color={ activeColor } mouseIsDown={ mouseIsDown }/> )

  const changeMouseStatus = () => {
    setMouseIsDown(!mouseIsDown)
  }

  useEffect(() => {
    setTotalWidth( window.innerWidth )
    setTotalHeight( window.innerHeight )
  }, [])

  return (
    <ContextMenuTrigger id='menu'>
      <div style ={{ display: 'flex', flexWrap: 'wrap'  }} onMouseDown={ changeMouseStatus } onMouseUp={ changeMouseStatus }>
          {
            cellArray.map( x => x )
          }
          <ContextMenu id='menu' style ={{ display: 'flex', backgroundColor: 'white', padding: '5px'}}>
            <MenuItem data={{ color: 'purple' }} onClick={ handleClick }>
              <div style ={{ width: '50px', height: '50px', marginRight: '10px', backgroundColor: 'purple'}}/>
            </MenuItem>
            <MenuItem data={{ color: 'red' }} onClick={ handleClick }>
              <div style ={{ width: '50px', height: '50px', marginRight: '10px', backgroundColor: 'red'}}/>
            </MenuItem>
            <MenuItem data={{ color: 'blue' }} onClick={ handleClick }>
              <div style ={{ width: '50px', height: '50px', marginRight: '10px', backgroundColor: 'blue'}}/>
            </MenuItem>
            <MenuItem data={{ color: 'yellow' }} onClick={ handleClick }>
              <div style ={{ width: '50px', height: '50px', marginRight: '10px', backgroundColor: 'yellow'}}/>
            </MenuItem>
            <MenuItem data={{ color: 'cyan' }} onClick={ handleClick }>
              <div style ={{ width: '50px', height: '50px', backgroundColor: 'cyan'}}/>
            </MenuItem>
          </ContextMenu>
      </div>
    </ContextMenuTrigger>
  )
}

export default App
