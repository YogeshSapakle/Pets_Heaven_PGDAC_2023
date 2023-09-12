import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { LinkContainer } from 'react-router-bootstrap';
import { useAppContext } from "./../../context/appContext";
import { useNavigate } from "react-router-dom";

function MyNavbar() {
  const { user } = useAppContext();
  // console.log(userRole);
  const { logoutUser } = useAppContext();
  const navigate = useNavigate();

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>

        <LinkContainer to={"/"} className="links">
          <Nav.Link href="/"><span style={{ fontSize: '2rem' }} role="img" aria-label="Dog">&#x1F415;</span></Nav.Link>
        </LinkContainer>

        <LinkContainer to={"/"} className="links">
          <Navbar.Brand href="/">Pet's Heaven</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {user?.role[0].roleName === "Rescuer" ?
              (
                <LinkContainer to={"/AddAni"} className="links">
                  <Nav.Link href="/addani">Add Animal</Nav.Link>
                </LinkContainer>
              ) :
              (
                <LinkContainer to={"/AddComp"} className="links">
                  <Nav.Link href="/addcomplaint">Add Complaint</Nav.Link>
                </LinkContainer>
              )
            }

            <LinkContainer to={"/SearchPage"} className="links">
              <Nav.Link href="/searchpage">Adopt</Nav.Link>
            </LinkContainer>

            <NavDropdown title="Services" id="collasible-nav-dropdown">
              <LinkContainer to={"/Allfeed"} className="links">
                <NavDropdown.Item href="/allfeed">Feedbacks</NavDropdown.Item>
              </LinkContainer>

              <LinkContainer to={"/Feedback"} className="links">
                <NavDropdown.Item href="/Feedback">Add Feedback</NavDropdown.Item>
              </LinkContainer>

              <NavDropdown.Divider />

              <LinkContainer to={"/ContactUs"} className="links">
                <NavDropdown.Item href="/contactus">Contact Us</NavDropdown.Item>
              </LinkContainer>

              <LinkContainer to={"/AboutUs"} className="links">
                <NavDropdown.Item href="/aboutus">About Us</NavDropdown.Item>
              </LinkContainer>

              {/* <NavDropdown.Divider />

              <LinkContainer to={"/Orders"} className="links">
                <NavDropdown.Item href="/orders">Orders</NavDropdown.Item>
              </LinkContainer> */}

            </NavDropdown>
          </Nav>

          <Nav>
            {!user ? (<LinkContainer to={"/Login"} className="links">
              <Nav.Link href="/login">Login</Nav.Link>
            </LinkContainer>) : (
              <LinkContainer to={"/Login"} className="links">
                <Nav.Link href="/login" onClick={() => { logoutUser(); navigate("/login"); }}>Logout</Nav.Link>
              </LinkContainer>)
            }
            {!user ? (<LinkContainer to={"/Register"} className="links">
              <Nav.Link eventKey={2} href="/register">
                Register
              </Nav.Link>
            </LinkContainer>) : (
              <LinkContainer to={"/Profile"} className="links">
                <Nav.Link eventKey={2} href="/profile">
                  Profile
                </Nav.Link>
              </LinkContainer>)}
            {user ? (<Navbar.Text>
              Role: {user?.role[0].roleName}
            </Navbar.Text>) : null}

            {
              user ? (
                <NavDropdown title={user?.userName} id="collasible-nav-dropdown">
                  {user?.role[0].roleName === "User" ? (
                    <>
                      <LinkContainer to={"/Orders"} className="links">
                        <NavDropdown.Item href="/orders">Orders</NavDropdown.Item>
                      </LinkContainer>

                      <LinkContainer to={"/Complaints"} className="links">
                        <NavDropdown.Item href="/complaints">Complaints</NavDropdown.Item>
                      </LinkContainer>

                      <LinkContainer to={"/Userapps"} className="links">
                        <NavDropdown.Item href="/userapps">Appointments</NavDropdown.Item>
                      </LinkContainer>
                    </>
                  ) : (
                    user?.role[0].roleName === "Rescuer" ? (
                      <>
                        <LinkContainer to={"/ResCompPage"} className="links">
                          <NavDropdown.Item href="/rescomppage">Complaints</NavDropdown.Item>
                        </LinkContainer>

                        <LinkContainer to={"/Resapps"} className="links">
                          <NavDropdown.Item href="/resapps">Appointments</NavDropdown.Item>
                        </LinkContainer>
                      </>
                    ) : (
                      <>
                        <LinkContainer to={"/Allfeed"} className="links">
                          <NavDropdown.Item href="/allfeed">User Feedbacks</NavDropdown.Item>
                        </LinkContainer>

                        <LinkContainer to={"/Admincontact"} className="links">
                          <NavDropdown.Item href="/admincontact">User Contacted</NavDropdown.Item>
                        </LinkContainer>
                      </>
                    )
                  )}

                </NavDropdown>
              ) : null
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  );
}

export default MyNavbar;