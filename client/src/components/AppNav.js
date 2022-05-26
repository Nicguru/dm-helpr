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
const AppNav = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand as={Nav.Link}>
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
                <Nav.Link active>
                  <FontAwesomeIcon
                    icon={faDungeon}
                    size="xl"
                    className="d-none d-lg-block mx-auto"
                  />
                  Dashboard
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <FontAwesomeIcon
                    icon={faStore}
                    size="xl"
                    className="d-none d-lg-block mx-auto"
                  />
                  Community
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
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
