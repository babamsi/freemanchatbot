import { Container, Card, Row, Text,Spacer } from "@nextui-org/react";
import { useState } from "react";
import axios from 'axios'
import './App.css';
import Inputs from './components/Input/Input';
import TextAreas from "./components/Input/TextArea";
import Navbars from './components/navbar/navbar';
import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'
import Spinner from "./components/spinner/Spinner";

function App() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

const { setTheme } = useNextTheme('dark')
setTheme('dark')

  const [checked, setChecked] = useState(false)
  const [show, setshow] = useState(false)
  const [loading, setloading] = useState(false)
  const { isDark, type } = useTheme();

    const requestHandler = () => {
      setloading(true)
      if(checked) {
        {axios.post('http://bamsi.pythonanywhere.com/react', {
          Body: input
        })
        .then(function (response) {
            setOutput(response.data)
            setloading(false)
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
            setloading(false)
        })
        .catch(function (error) {
          console.log(error);
        })
        }
      }
      
    }
    const content = <>
    <div className="dark">    <Navbars checkNav={check => setChecked(check.target.checked)} checked={checked}/>
  
      
     
      <Inputs input={input} setInput={setInput} requestHandler={requestHandler}/>
      
      {output ? <TextAreas output={output} input={input} show={show} setshow={() => {setshow(pre => !!pre); setOutput('')}}/>: ''}
      
      
    </div>
  </>
  return (
   [
    loading ? <Spinner /> : content
   ]
 
  );
}

export default App;
