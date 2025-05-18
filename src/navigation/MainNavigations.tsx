import { NavLink } from 'react-router-dom'

export default function MainNavigations() {
    return (
        <header className="header">
            <nav>
                <ul className="list">
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                        Home
                    </NavLink></li>
                    <li><NavLink to="/add" className={({ isActive }) => isActive ? "active" : ""}>
                        add crypto
                    </NavLink></li>
                </ul>
            </nav>
        </header>
    )
}