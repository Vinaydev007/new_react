import React from 'react'
import { useState } from 'react'

export default function Form() {
    const[name,setname]=useState("")
    const[submitedname,chnsubmit]=useState("")
    const onchange=(e)=>{
        setname(e.target.value)
    }
    const onsubmit=()=>{
    chnsubmit(name)
     setname("")
    }
  return (
    <>
   <input type="text" className='form' value={name} onChange={onchange} />
   <button type='submit'className='btn' onClick={onsubmit}>submit</button>
   <p>{submitedname}</p>
   </>
  )
}
