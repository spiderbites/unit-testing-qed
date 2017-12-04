import React from 'react'
import Box from './box'

const Row = ({ row }) => {
  return (
    <div className="row">
      {row.map((box, i) => <Box key={i}>{row[i]}</Box>)}
    </div>
  )
}

export default Row
