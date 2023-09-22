import { Link, NavLink } from "react-router-dom";
const Header = () => {
    <div className="header">
        <h1>Heallo React Router</h1>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact Us</NavLink>
            </li>
            <li>
                <NavLink to="/product">Products</NavLink>
            </li>
        </ul>
    </div>
};

export default Header;