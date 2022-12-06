import React, { useEffect } from 'react'
import {Nav,NavDropdown,Navbar,Container} from "react-bootstrap"
import { Link, useHistory } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { logout } from '../../actions/userActions';

const Header = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const userLogin = useSelector((state)=>state.userLogin);
  const {userInfo} = userLogin;

  const logoutHandler=()=>{
    dispatch(logout());
    history.push("/");
  };

  useEffect(()=>{},[userInfo]);

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to='/' >Home</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {userInfo ? (
            <>
              <Nav.Link>
                <Link to='/'>Words</Link>
              </Nav.Link>
              <NavDropdown title="Select Language" id="basic-nav-dropdown">
                <NavDropdown.Item >English</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item >
                  Hindi
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={`${userInfo.name}`} id="basic-nav-dropdown">
                <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item 
                  onClick={logoutHandler}
                >
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </>
          ):(
            <Nav.Link >
              <Link to='/login'>Login</Link>
            </Nav.Link>
          )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;