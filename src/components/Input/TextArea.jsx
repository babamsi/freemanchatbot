import { Textarea,  Button, Link, Grid} from "@nextui-org/react";
import axios from "axios";
import React, {useRef, useState, useEffect} from "react";
import Player from "./AudioButton";
import AudioButton from "./AudioButton";
import audioFile from './YourAudioFile.mp3'
class TextAreas extends React.Component {
    state = {
        audio: null,
        url: ''
    }
    // componentWillMount() {
    //     axios.post('http://localhost:8080/', {
    //         Body:this.props.output
    //     }).then(res => this.setState({audio: res.data})).catch(e => console.error(e))
    // }
    render() {
    
    
return(
    <Grid.Container>
        <Grid xs={7}>
        <Textarea
          placeholder=""
          readOnly
          width="100%"
          value={this.props.output}
        />
        </Grid>
        <Grid xs={5}>
            {this.props.output.length > 5 ? 
        <Button auto color={"primary"} style={{marginTop:"20px", padding:"10px"}}
        >
        <Player file={this.state.url} output={this.props.output} />
        
        </Button> : null }
        </Grid>
        </Grid.Container>
)}
}

export default TextAreas