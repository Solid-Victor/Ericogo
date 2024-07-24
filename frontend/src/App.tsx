import { Container, NavbarBrand, Navbar, Nav, Button } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { Store } from "./Store";
import { useContext, useEffect } from "react";

function App() {
  const {
    state: { mode },
    dispatch,
  } = useContext(Store);

  useEffect(() => {
    document.body.setAttribute("data-bs-theme", mode);
  }, [mode]);

  const switchModeHandler = (): void => dispatch({ type: "SWITCH_MODE" });

  return (
    <div className="d-flex flex-column flex-center h-full">
      <header>
        <Navbar>
          <Container>
            <NavbarBrand>Ericogo</NavbarBrand>
          </Container>
          <Nav>
            <Button variant={mode} onClick={switchModeHandler}>
              <i className={mode === "light" ? "fa fa-sun" : "fa fa-moon"}></i>
            </Button>
            <a href="/cart" className="nav-link">
              Cart
            </a>
            <a href="/signin" className="nav-link">
              Sign in
            </a>
          </Nav>
        </Navbar>
      </header>
      <main>
        <Container className="mt-5">
          <Outlet />
        </Container>
      </main>
      <footer>
        <div className="text-center">All right reserved</div>
      </footer>
    </div>
  );
}

export default App;
