import { NavLink,to } from "react-router-dom";

const NavberComponet = () => {
    return (
        <>
            <nav className="nav nav-pills justify-content-sm-evenly">
                <NavLink className="nav-link " to={"/CompanyDaitles"}>
                    CompanyDaitles
                </NavLink>
                <NavLink className="nav-link" to={"/CompnayBank"}>
                    CompnayBank
                </NavLink>
                <NavLink className="nav-link" to={"/CompanyConteact"}>
                    CompanyConteact
                </NavLink>


            </nav>
        </>
    )
}
export default NavberComponet;