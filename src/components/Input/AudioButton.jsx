import React, { useState, useEffect } from "react";
import {SiProbot} from 'react-icons/si'
import {useSound} from 'use-sound'
import { useAudioPlayer, AudioPlayerProvider } from "react-use-audio-player"
import ReactAudioPlayer from 'react-audio-player';
import axios from "axios";


const Player = ({file, output}) => {
    let data;
    useEffect(() => {
    <ReactAudioPlayer
      src={file}
      autoPlay
      controls
    />
    }, [output])
    
    return(
    data
)
}

  export default Player