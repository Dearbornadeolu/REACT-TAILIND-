import React from 'react'

export default function Char(props) {
  return (
    <div className='inline-block p-4 m-4 border-2 border-black text-center rounded-lg cursor-pointer' onClick={props.clicked}>{props.character} </div>
  )
}
