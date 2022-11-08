import { GiHamburgerMenu } from "react-icons/gi"
import { CgSearch } from "react-icons/cg"
import NavContent from "./NavContent"
import { useState } from "react"

const Navbar = () => {
    const [isToggle, setToggle] = useState(false)
    const handleToggle = () => {
        setToggle(toggle => !toggle)
    }

    return (
        <nav className={`navbar ${isToggle ? "is-toggle" : ""} p-6`}>
            {isToggle ? null : (
                <div className="flex items-center justify-between">
                    <div className="navbar-burger cursor-pointer" onClick={handleToggle}>
                        <GiHamburgerMenu size={32} style={{ color: "#15feeb" }} />
                    </div>
                    <div className="navbar-logo text-xl font-bold">GEEK ECO</div>
                    <CgSearch size={32} />
                </div>
            )}
            {isToggle ? <NavContent handleToggle={handleToggle} /> : null}
        </nav>
    )
}
export default Navbar
