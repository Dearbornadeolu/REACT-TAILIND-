import React from 'react'

export default function Validation(props) {

    let validationMsg = <p className='text-green-700'>Text Long Enough</p>
    if(props.inputLength <= 5){
        validationMsg = <p className='text-red-700'>Text too short</p>
    }

  return (
    <div>
       {validationMsg}
    </div>
  )
}
