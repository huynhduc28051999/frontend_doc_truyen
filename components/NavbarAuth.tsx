import React, { useState } from "react";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Container
} from "reactstrap";

const NarbarAuth = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <Container className='position-sticky' fluid="md">
      <Navbar color="light" expand="md" light>
        <NavbarBrand>Bảng điều khiển</NavbarBrand>
        <NavbarToggler onClick={toggleMenu} />
        <Collapse navbar isOpen={isOpen}>
          <div className="me-auto" ></div>
          <Nav navbar>
            <NavItem>
              <NavLink href="/dang-ky">Đăng kí</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/dang-nhap">Đăng nhập</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  );
};

export default NarbarAuth;
