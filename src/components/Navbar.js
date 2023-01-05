import { Navbar, NavbarBrand, Row } from "reactstrap";
import LangButtons from "../components/LangButtons";



const AppNavbar = () => {
    return (
        <Navbar
    className="my"
    color="dark"
    dark
    sticky="top"
  >
    <NavbarBrand href="/">
        Art Claudia Cota
        <Row className= "justify-content-end">
          <LangButtons />
        </Row>
    </NavbarBrand>
  </Navbar>
    )
};

export default AppNavbar;