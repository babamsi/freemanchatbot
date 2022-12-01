import { Container, Card, Row, Text,Spacer } from "@nextui-org/react";
import { useState } from "react";
import axios from 'axios'
import './App.css';
import Inputs from './components/Input/Input';
import TextAreas from "./components/Input/TextArea";
import Navbars from './components/navbar/navbar';

function App() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [checked, setChecked] = useState(true)
    const requestHandler = () => {
      if(checked) {
        {axios.post('http://bamsi.pythonanywhere.com/react', {
          Body: input
        })
        .then(function (response) {
            setOutput(response.data)
        })
        .catch(function (error) {
          console.log(error);
        })
        }
      } else {
        {axios.post('http://bamsi.pythonanywhere.com/en', {
          Body: input
        })
        .then(function (response) {
            setOutput(response.data)
        })
        .catch(function (error) {
          console.log(error);
        })
        }
      }
        setInput("")
    }
  return (
    <Container style={{margin: "0 auto"}}>
      <Navbars checkNav={check => setChecked(!!check)} checked={checked}/>
      <Spacer y={4} />
    <Card css={{ $$cardColor: '$colors$white' }} style={{height: "80vh"}}>
      <Card.Body>
        
        <Spacer y={3} />
        <div style={{"width": "50%", "margin": "0 auto"}}>
        <Inputs input={input} setInput={setInput} requestHandler={requestHandler}/>
        <Spacer y={3} />
        {output ? <TextAreas output={output}/>: ''}
        
        </div>
    </Card.Body>
    </Card>
    </Container>
  );
}

export default App;
