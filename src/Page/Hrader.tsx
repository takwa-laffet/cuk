import React from "react";

import {
    NavLink,
  Nav,
  
  NavItem,
} from "reactstrap";
import  Logo  from "./Logo";


export default function Header() {


  const [dropdownOpen, setOpen] = React.useState(false);



  

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <header>
     <div>
  <Nav  scrolling dark expand="md" fixed="top">
    <NavItem>
      <NavLink
        active
        href="/"
      >          <Logo  />

      </NavLink>
    </NavItem>
    
    <NavItem>
      <NavLink href="/login">
        pontage
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="admin">
       espace admine
      </NavLink>
    </NavItem>
    <NavItem>
     
    </NavItem>
  </Nav>
</div>
    </header>
  );
}
