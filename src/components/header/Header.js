import {Link} from "react-router-dom";
import "./Header.css";

function Header() {

    return (
        <>
            <header>
                <nav className="nav-bar">
                    <ul>
                        <li>
                            <Link to="/">
                                Logo
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;
