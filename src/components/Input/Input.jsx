
import { createStyles, TextField } from '@mui/material'
import { borderBottomColor } from '@mui/system'
import React, {useState} from 'react'
import './input.scss'

const styles = createStyles({
  notchedOutline: { borderBottomColor: '#f0f !important' },
});

 const Inputs = ({input, setInput, requestHandler}) => {
    // const [toggle, setToggle] = useState(false)
    return (
      <>
        
      <div className="search-box">
      <input className="search-input" type="text" name="" value={input} onChange={e => setInput(e.target.value)} placeholder="what are you thinking today.."/>
      <span className="search-btn">
        <i className="fas fa-search" onClick={requestHandler}></i>
      </span>  
     
    </div>
    </>
    )
}

export default Inputs