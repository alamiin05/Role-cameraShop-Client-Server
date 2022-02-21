import React from "react";
import { Link } from "react-router-dom";
import { BiArrowFromLeft } from "react-icons/bi";
import { Navbar, Container, Nav,} from "react-bootstrap";
const NavBar = () => {
  const styles = {
    navStyle: {
      textDecoration: "none",
      marginRight: "15px",
      color: "#0b033b",
      fontSize: "25px",
      fontWeight: "600",
    },
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="" variant="light">
      <Container>
        <Navbar.Brand className="mx-5 my-2">
          <Link to="/home">
            <div>
              <img
                src="https://i.ibb.co/CH8wRhW/Role-1X.png"
                alt=""
                srcSet=""
              />
            </div>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto text-end ">
            <Link style={styles.navStyle} to="/home">
              Home
            </Link>

            <Link style={styles.navStyle} to="/traveladvisory">
              {" "}
              Travel Advisory
            </Link>
            <Link style={styles.navStyle} to="/contact">
              {" "}
              Contact
            </Link>
          </Nav>
          <Nav >
            {/* Displaying name When Login */}

            {/* {user.email && (
                <div className="d-lg-flex">
                  <NavDropdown title="Dashboard" id="collasible-nav-dropdown">
               
                    <NavDropdown.Item >
                      <Link to="/myorder" className="nav-style" >My Order</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item >
                      <Link className="nav-style" to="">Manage Order</Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item>
                      <Link className="nav-style" to="/addpackges">
                        Add A New Service{" "}
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>

                  <span className="text-secondary fs-4 fw-bold mx-3">
                    {" "}
                    {user.displayName}{" "}
                  </span>
                </div>
              )} */}

            {/* showing Logout button when its login */}

            {/* {user.email ? (
                <Link to="/home">
                  <button className="btn btn-dark" onClick={logOut}>
                    {" "}
                    log out{" "}
                  </button>{" "}
                </Link>
              ) : ( */}

            <Link style={styles.navStyle} to="/signin">
              <button type="button" className="btn btn-dark">
              <div className="d-flex flex-row ">
                <div className="fs-4">Sign In</div>
                <div className="mt-2 ms-1 fs-4">
              
                  <BiArrowFromLeft />
                </div>
                </div>
              </button>
             

           
            </Link>

            {/* )} */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
