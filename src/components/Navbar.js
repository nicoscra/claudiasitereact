import { Navbar, NavbarBrand } from "reactstrap";
import SubHeader from "./SubHeader";

const AppNavbar = () => {
    return (
        <Navbar
    className="my-2"
    color="dark"
    dark
    sticky="top"
  >
    <NavbarBrand href="/">
        Art Claudia Cota
        <SubHeader current ='Home' />
    </NavbarBrand>
  </Navbar>
    )
};

export default AppNavbar;