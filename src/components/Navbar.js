import { Navbar, NavbarBrand } from "reactstrap";


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
        
    </NavbarBrand>
  </Navbar>
    )
};

export default AppNavbar;