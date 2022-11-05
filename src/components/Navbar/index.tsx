import {useState} from "react";

const Navbar = () => {
    const [isToggle, setToggle] = useState(false);

    return (
        <nav className={`navbar ${isToggle ? "is-toggle" : ""} py-4`}>
            <div className="navbar-burger js-navbar-burger">
                <i className="ic-menu icon"> icon </i>
            </div>
        </nav>
    );
};

export default Navbar;
