import React from "react";
import { Navbar, Button, Link, Text, Card, Spacer, Radio, useTheme, Checkbox } from "@nextui-org/react"
import { AcmeLogo } from "./AcmeLogo.js";
import { VariantsSelectorWrapper } from "./VariantsSelectorWrapper.js";

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
      <Navbar isBordered={isDark} variant="sticky">
        <Navbar.Brand>
          <AcmeLogo />
          <Text b color="inherit" hideIn="xs">
            ACME
          </Text>
        </Navbar.Brand>
        <Navbar.Content activeColor={activeColor} hideIn="xs" variant={variant}>
          {/* <Navbar.Link href="#">Features</Navbar.Link>
          <Navbar.Link href="#">Customers</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Company</Navbar.Link> */}
        </Navbar.Content>
        <Navbar.Content>
          {/* <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link> */}
          <Navbar.Item>
            <Button auto flat as={Link} color={activeColor} href="#">
            <Checkbox color="gradient" defaultSelected={checked} onChange={checkNav}>
        Somali
      </Checkbox>
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
      
      </React.Fragment>
  )
}