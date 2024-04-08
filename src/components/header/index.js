import { links } from "../../assets/data";
import Button from "../button";
import "./style.scss"

export default function Header() {
    return (
        <header className="header">
            <nav className="header__nav">
                <a href="#" className="header__link">Collers</a>
                <ul className="header__list">
                    {links.map((link) => <li key={link}><a href="#" key={link}>{link}</a></li>)}
                    <li><Button variant="small">Sign up now</Button></li>
                </ul>
            </nav>
        </header>
    )
}