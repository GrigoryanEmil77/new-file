import { Link } from "react-router-dom"

function Header() {
    return (
        <ul>

            <Link to='/' >
                <li>home</li>
            </Link>
            <Link to='join'>
                <li>contact</li>
            </Link>
            <Link to='message'>
                <li>PHOTO</li>
            </Link>
            
        </ul>
    )
}

export default Header