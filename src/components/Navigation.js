import {
    NavLink
} from "react-router-dom"

import '../scss/Navigation.css';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink exact to="/" activeClassName="isActive">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/entertainment" activeClassName="isActive">Entertainment</NavLink>
                </li>
                <li>
                    <NavLink to="/shop" activeClassName="isActive">Shop</NavLink>
                </li>
                <li>
                    <NavLink to="/events" activeClassName="isActive">Events</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" activeClassName="isActive">Contact</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;