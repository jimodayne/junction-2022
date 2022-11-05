import {useState} from "react";
import NavContent from "./NavContent";

const Navbar = () => {
    const [isToggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle((toggle) => !toggle);
    };

    return (
        <nav className={`navbar ${isToggle ? "is-toggle" : ""} p-6`}>
            <div className="navbar-burger js-navbar-burger " onClick={handleToggle}>
                <i className="ic-menu icon "> icon </i>
            </div>
            {isToggle ? <NavContent handleToggle={handleToggle} /> : null}
        </nav>
    );
};

export default Navbar;
