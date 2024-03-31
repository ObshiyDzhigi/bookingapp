import "./navbar.css"
import {Link} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";


const Navbar = () => {
    const { user,loading, error, dispatch } = useContext(AuthContext);
    const handleLogout = async (e) => {
        e.preventDefault();
            dispatch({ type: "LOGOUT"});
    };
    return (
    <div className="navbar">
        <div className="navContainer">
            <Link to={"/"} style={{color: "inherit", textDecoration: "none"}}>
                <span className="logo">lamabooking</span>
            </Link>
            {user ? user.username : (<div className="navItems">
                <button className="navButton">Register</button>

                <Link to={'/login'}>
                    <button className="navButton">Login</button>
                </Link>
            </div>)}

            {user && <button onClick={handleLogout} className="logout">Logout</button>}

        </div>
    </div>
    )
}

export default Navbar