import Link from "next/link";
import styles from "./Navbar.module.css";
import {GiHamburgerMenu} from "react-icons/gi";
import NavContent from "./NavContent";
import {useState} from "react";

const Navbar = () => {
    const [isToggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle((toggle) => !toggle);
    };

    return (
        <nav className={`navbar ${isToggle ? "is-toggle" : ""} p-6`}>
            {isToggle ? null : (
                <div className="navbar-burger js-navbar-burger " onClick={handleToggle}>
                    <GiHamburgerMenu size={30} style={{color: "#15feeb"}} />
                </div>
            )}
            {isToggle ? <NavContent handleToggle={handleToggle} /> : null}
        </nav>
    );
};
export default Navbar;
