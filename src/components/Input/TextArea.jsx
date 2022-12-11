import { Textarea,  Button, Dropdown, Grid, Loading} from "@nextui-org/react";
import axios from "axios";
import { Icon } from '@iconify/react';
import React, {useRef, useState, useEffect} from "react";
import Player from "./AudioButton";
import AudioButton from "./AudioButton";
import audioFile from './YourAudioFile.mp3'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './input.scss'


const TextAreas = ({show,setshow, output, input, checkeds, load, reverseTrans}) => {
  
  const [lang, setLang] = useState(checkeds === true ? 'Somali' : 'English')
  const [element, setElement] = useState( lang != 'Somali'? 'Somali' : 'English')
  const [loading, setLoading] = useState(false)

  let cnt = <Loading type="points" color="currentColor" size="sm" />
    return (
        <div className="gui" style={{opacity: show ? 0 : 1, zIndex: show ? 0 : 11}}>
      <span className="close-gui" onClick={setshow}>&#10006;</span>
      <h1>{input}</h1>
      <p>{output}</p>
      <div className="ab-year"></div>
      <Grid.Container gap={1.8} style={{marginTop: 'auto'}}>
      <Grid>
      <Button bordered css={{color:'White', borderColor:'White'}} rounded color="secondary" auto>
          {/* {lang != 'Somali' && setElement('English')} {lang} */}
          {lang}
        </Button>
        </Grid>


        <Grid>
        <Button bordered css={{color:'black', borderColor:'White'}} rounded color="gradient" auto>
        <Icon icon="ant-design:swap-outlined" onClick={() => {setLang(pre => pre == 'English' ? 'Somali':'English'); setElement(lang != 'Somali' ? 'English' : 'Somali')}}/> </Button>
</Grid>



        <Grid>
        {/* <Button bordered css={{color:'White', borderColor:'White', width:'40px'}} rounded color="error" auto> */}
        <Dropdown>
      <Dropdown.Button bordered css={{color:'White', borderColor:'White', width:'40px'}} rounded color="error" auto>{element}</Dropdown.Button>
      <Dropdown.Menu aria-label="Static Actions">
        <Dropdown.Item key="new"><span onClick={() => setElement(pre => lang != 'Somali'? 'Somali' : 'English')}>{element != 'English' && element != 'Somali' ? 'Somali' : 'Arabic'}</span></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        {/* </Button> */}
        </Grid>
        <Grid>
        <Button 
        bordered 
        color="secondary" 
        disabled={checkeds && lang == 'Somali' || !checkeds && lang == 'English'} 
        rounded 
        auto
        onClick={reverseTrans}>
          {load ? cnt : 'Translate'}
        </Button>
        </Grid>
        <Grid>
        <Button bordered css={{color:'black', borderColor:'White'}} rounded color="gradient" auto>
        <Icon icon="ph:speaker-high-bold" /> </Button>

        </Grid>
        </Grid.Container>
    </div>  
    )
}


export default TextAreas