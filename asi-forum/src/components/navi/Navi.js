import React, { useState } from 'react';
import {Link} from "react-router-dom"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Badge
} from 'reactstrap';

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" light expand="md">
        <NavbarBrand><Link to="/"><h1><Badge color="success">AŞI FORUM</Badge></h1></Link></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink><Link to = "/saveuser"><h4><Badge color="success">YORUM EKLE</Badge></h4></Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to = "/pointlist"><h4><Badge color="success">SIRALAMA</Badge></h4></Link></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navi;