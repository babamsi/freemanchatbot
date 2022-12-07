import { Textarea,  Button, Link, Grid} from "@nextui-org/react";
import axios from "axios";
import React, {useRef, useState, useEffect} from "react";
import Player from "./AudioButton";
import AudioButton from "./AudioButton";
import audioFile from './YourAudioFile.mp3'
import './input.scss'


const TextAreas = ({show,setshow, output, input}) => {
    const [toggle, setToggle] = useState(show)
    return (
        <div className="gui" style={{opacity: show ? 0 : 1, zIndex: show ? 0 : 11}}>
      <span className="close-gui" onClick={setshow}>&#10006;</span>
      <h1>{input}</h1>
      <p>{output}</p>
      <div className="ab-year"></div>
    </div>  
    )
}


export default TextAreas