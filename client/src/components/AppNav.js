import {
  faDice,
  faDiceD20,
  faDungeon,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Stack,
  Button,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
const AppNav = () => {
  return (
    <header>
      <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand as={NavLink} to="/" href="/">
            <Stack direction="horizontal" gap={2}>
              <FontAwesomeIcon icon={faDiceD20} size="2x" />
              <span className="cinzel unselectable d-none d-md-block">
                dmHelpr
              </span>
            </Stack>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="me-auto mt-3 mt-lg-0" variant="pills" justify>
              <Nav.Item>
                <Nav.Link as={NavLink} to="/dashboard" href="/dashboard">
                  <FontAwesomeIcon
                    icon={faDungeon}
                    size="xl"
                    className="d-none d-lg-block mx-auto"
                  />
                  Dashboard
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={NavLink} to="/community" href="/community">
                  <FontAwesomeIcon
                    icon={faStore}
                    size="xl"
                    className="d-none d-lg-block mx-auto"
                  />
                  Community
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link disabled>
                  <FontAwesomeIcon
                    icon={faDice}
                    size="xl"
                    className="d-none d-lg-block mx-auto"
                  />
                  Generators
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Nav className="me-2 mt-3 mt-lg-0">
              <Stack direction="horizontal" gap={2}>
                <Button variant="primary" className="col-6">
                  Sign In
                </Button>
                <Button variant="secondary" className="col-6">
                  Register
                </Button>
              </Stack>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default AppNav;
