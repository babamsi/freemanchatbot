import React from "react";
import { Navbar, Button, Link, Text, Card, Spacer, Radio, useTheme, Checkbox } from "@nextui-org/react"
import { AcmeLogo } from "./AcmeLogo.js";
import { VariantsSelectorWrapper } from "./VariantsSelectorWrapper.js";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import './navbar.scss'

export default function Navbars({checkNav, checked}) {
  const [variant, setVariant] = React.useState("default");
  const [activeColor, setActiveColor] = React.useState("primary");

  const {isDark} = useTheme(true);

  const variants = [
    "default",
    "highlight",
    "highlight-solid",
    "underline",
    "highlight-rounded",
    "highlight-solid-rounded",
    "underline-rounded",
  ];

  const colors = ["primary", "secondary", "success", "warning", "error"];
  
  return (
    <React.Fragment>
      <div id="abc">
    <nav>
        <ul>
            <li><a href="#">UBAX <sup>beta</sup></a></li>
            
            <li>
              <a href="#">
            <Switch checked={checked} onChange={checkNav} />Somali </a></li>
        </ul>
    </nav>
</div>
      </React.Fragment>
  )
}