import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  NavbarToggler,
  NavbarText
} from "reactstrap";
import '../../src/components/bar.css'
import { Link } from "react-router-dom";


export const Bar = () => {
  return (
    <div>
      <Navbar color="dark" expand="sm" dark>
        <NavbarBrand href="/"style={{fontWeight:"600"}}>FAKESTORE</NavbarBrand>
        
        
        <Collapse navbar> 

          <Nav className="me-auto justify-content-center" navbar style={{width:"100%",textAlign:"center",margin:"0 auto"}}>

            <NavItem className="item">
              <Link to="/">Home</Link>
            </NavItem>
          </Nav>
        <NavbarText className="item">
          Social
        </NavbarText>
        </Collapse>
      </Navbar>
    </div>

  );
};

export default Bar;
