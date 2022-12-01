import { Input } from "@nextui-org/react";
import {useState} from 'react'
import axios from 'axios'
import {  SendIcon } from "./SendIcon";
import { SendButton } from "./SendButton";
 const Inputs = ({input, setInput, requestHandler}) => {
    
    return (
        <Input
            clearable
            contentRightStyling={false}
            width="100%"
            value={input}
            onChange={e => setInput(e.target.value)}
            labelPlaceholder="Ask me anything..."
            contentRight={
              <SendButton onClick={requestHandler}>
                <SendIcon />
              </SendButton>
            }
          />
    )
}

export default Inputs