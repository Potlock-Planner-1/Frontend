import React from "react"
import { Link } from "react-router-dom"
import { HeaderStyle } from "../styles/StyledHeader"

const Header = () => {

    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        localStorage.removeItem('username')
        window.location.reload()
    }

return (
    <HeaderStyle>
        <div>
        <h1>Putlock Planner</h1>
        </div>
        <nav>
        <button onClick={handleLogout}>Logout</button>
        <Link className="link" to="/potluck-list">Home</Link>
        <Link className="link" to="/create-potluck">Host a Potluck</Link>
        </nav>
    </HeaderStyle>
)
}
export default Header