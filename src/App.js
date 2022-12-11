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

  const [checked, setChecked] = useState(false)
  const [show, setshow] = useState(false)
  const [loading, setloading] = useState(false)
  const [dark, setDark] = useState(false)
  const [expand, setExpand] = useState(false)
  const [btnLoading, setBtnLoading] = useState(false)


  const revTrans = async() => {
    setChecked(pre => !pre);
    setBtnLoading(true)
      if(!checked) {
        {axios.post('https://aeda-49-156-80-5.ngrok.io/translate', {
          Body: output,
          Lang:'eng_Latn',
          To: 'som_Latn'
        })
        .then(function (response) {
            setOutput(response.data)
            setBtnLoading(false)
        })
        .catch(function (error) {
          console.log(error);
        })
        }
      } else {
        {axios.post('https://aeda-49-156-80-5.ngrok.io/translate', {
          Body: output,
          Lang: 'som_Latn',
          To: 'eng_Latn'
        })
        .then(function (response) {
            setOutput(response.data)
            setBtnLoading(false)
        })
        .catch(function (error) {
          console.log(error);
        })
        }
      }
    
  }

const requestHandler = () => {
  setloading(true)
  console.log(checked)
  if(checked) {
    {axios.post('https://aeda-49-156-80-5.ngrok.io/translate', {
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
      Body: input,
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
    <div className={`${dark ? 'dark'  : ''}`}>    <Navbars />
  
      <span className={`close ${dark  && !output? 'show' : 'hide'}`} onClick={()=> {setDark(false); setExpand(false)}}>&#10006;</span>
     
      <Inputs input={input} 
      setInput={setInput} 
      requestHandler={requestHandler} 
      dark={dark} 
      expand={expand}
      darkMod={() => setDark(true)} 
      output={output}
      checkNav={check => setChecked(check.target.checked)} checked={checked}
      outputMod={() => !show && setExpand(pre => !pre) }/>
      
      {output ? <TextAreas 
      output={output} 
      input={input} 
      show={show} 
      setshow={() => {setshow(pre => !!pre); setOutput('')}}
      checkeds={checked}
      load={btnLoading}
      reverseTrans={revTrans}
      />: ''}
      
      
    </div>
  </>
  return (
    <>
   {
    loading ? <div className={`${dark ? 'dark'  : ''}`}><Spinner /> </div>: content
   }
   <h2>Powered By Kumi</h2>
   </>
 
  );
}

export default App;
