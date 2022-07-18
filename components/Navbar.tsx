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

const Narbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <Container className='position-sticky' fluid="md">
      <Navbar color="light" expand="md" light>
        <NavbarToggler onClick={toggleMenu} />
        <NavbarBrand href="/">DocTruyen</NavbarBrand>
        <Collapse navbar isOpen={isOpen}>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/tim-kiem">Tìm Kiếm</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/thao-luan">Thảo luận</NavLink>
            </NavItem>
          </Nav>
          <Nav navbar>
            <NavItem>
              <NavLink href="/dang-nhap">Đăng nhập</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  );
};

export default Narbar;
