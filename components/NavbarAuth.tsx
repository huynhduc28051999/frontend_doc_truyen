import React, { useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from "reactstrap";
import { Home } from 'react-feather';

const NarbarAuth = ({ currentUser }: PropsFromRedux) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <div className='position-sticky'>
      <Navbar color="light" expand="md" light>
        <NavbarBrand href={currentUser?.id ? '/admin' : '/'}>Bảng điều khiển</NavbarBrand>
        <NavbarBrand href="/">
            <Home />
        </NavbarBrand>
        <NavbarToggler onClick={toggleMenu} />
        <Collapse navbar isOpen={isOpen}>
          {currentUser?.id ? (
            <>
              <Nav className="me-auto" navbar>
                <NavItem>
                  <NavLink href="/admin/them-truyen">
                    Thêm truyện
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/admin/sang-tac">
                    Sáng tác
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown inNavbar nav>
                  <DropdownToggle caret nav>
                    Thảo luận
                  </DropdownToggle>
                  <DropdownMenu end>
                    <DropdownItem>
                      <NavLink href="/admin/thao-luan/them-thao-luan">
                        Thêm thảo luận
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="/admin/thao-luan">
                        Thảo luận của bạn
                      </NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
              <NavbarBrand>
                <Button>Đăng xuất</Button>
              </NavbarBrand>
            </>
          ): (
            <>
              <div className="me-auto" ></div>
              <Nav navbar>
                <NavItem>
                  <NavLink href="/dang-ky">Đăng kí</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/dang-nhap">Đăng nhập</NavLink>
                </NavItem>
              </Nav>
            </>
          )}
        </Collapse>
      </Navbar>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  currentUser: state.authReducer.user
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(NarbarAuth);
