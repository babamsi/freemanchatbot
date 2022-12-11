
import { createStyles, Switch, TextField } from '@mui/material'
import { borderBottomColor } from '@mui/system'
import React, {useState} from 'react'
import './input.scss'

const styles = createStyles({
  notchedOutline: { borderBottomColor: '#f0f !important' },
});

 const Inputs = ({input, output, setInput, outputMod, expand,requestHandler, checked, checkNav, darkMod, dark}) => {
    const [toggle, setToggle] = useState(false)
    return (
      <>
        
      <div className="search-box">
      <input className={`search-input ${expand && !output? 'expand' : ''}`}
       type="text" 
       name="" 
       value={input} 
       onChange={e => setInput(e.target.value)} 
       placeholder="what are you thinking today.."
       onKeyPress={(e) => {
        if (e.key === "Enter") {
            requestHandler()
        }
    }}/>
      <span className="search-btn">
        <i className="fas fa-search" style={{display: `${output ? 'none' : ''}`}} onClick={()=>{darkMod(); outputMod()}}></i>
      </span>  
      <br />
    </div>
    <a href="#" style={{color:'aqua', position: 'absolute',top: '58%', left: '46%', fontSize:'25px', textDecoration:'none', display: `${dark && !output? '' : 'none'}`}}>
    Somali  <Switch checked={checked} onChange={checkNav} style={{color: 'aqua'}}/></a>
    </>
    )
}

export default Inputs