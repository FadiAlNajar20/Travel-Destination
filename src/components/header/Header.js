
import "./Header.css"
function Header() {

    return (
        <>
            <header >
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
// ReactDOM.render(Header, document.body)
export default Header;


// type Props = {}
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View>
//       </View>
//     )
//   }
// }