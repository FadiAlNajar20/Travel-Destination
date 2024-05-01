
import "./Header.css";

function Header() {

    return (
        <>
            <header>
                <nav className="nav-bar">
                    <ul>
                        <li>
                            <a href="/">
                                Logo
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                Home
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;
