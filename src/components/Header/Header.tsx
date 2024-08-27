import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Person, Cart3, GeoAlt, Clock } from "react-bootstrap-icons";
import "./Header.scss";

const Header = () => {

    return (
        <div className="header-wrapper">
            <Navbar expand="lg" sticky="top" className="bg-body-tertiary header-container">
                <Container>
                    <div className="container">
                        <div className="row">
                            <div className="col-3">
                                <Person className="primary-color" size={25}/>
                            </div>
                            <div className="col-6 d-flex justify-content-center">
                                <h4 className="primary-color">Restaurant</h4>
                            </div>
                            <div className="col-3 d-flex justify-content-end">
                                <Cart3 className="primary-color" size={25}/>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-2">
                        <div className="row">
                            <div className="col-6 text-truncate">
                                <GeoAlt size={15}/><span className="mx-1 primary-color" style={{fontSize: "16px"}}>বীর উত্তম এ কে খন্দকার রোড Awru Tower Dhaka</span>
                            </div>
                            <div className="col-6 d-flex justify-content-center align-items-center primary-color">
                                <Clock size={15}/><span className="mx-1" style={{fontSize: "16px"}}>Standard</span>
                            </div>
                        </div>
                    </div>
                    {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse> */}
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
