import { links } from "../../assets/data";
import Button from "../button";
import MenuIcon from '@mui/icons-material/Menu';
import "./style.scss"

export default function Header() {
    return (
        <header className="header">
            <nav className="header__nav">
                <a href="#" className="heading-5">Collers</a>
                <MenuIcon fontSize="large" sx={{color:"#78350F"}} className="header__menu"/>
                <ul className="header__list">
                    {links.map((link) => <li key={link}><a className="button-medium" href="#" key={link}>{link}</a></li>)}
                    <li><Button className="button-medium" variant="small">Sign up now</Button></li>
                </ul>
            </nav>
        </header>
    )
}