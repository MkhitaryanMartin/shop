import { footerData } from "../../assets/data";
import List from "../list";
import AppStoreIcon from "../svgs/app-store";
import GooglePlayIcon from "../svgs/google-play";
import LanguageIcon from '@mui/icons-material/Language';
import "./style.scss";

export default function Footer(){
    return (
        <footer className="footer">
            <div className="footer__link-block">
            <List list={footerData.product} title="Product"/>
            <List list={footerData.solutions} title="Solutions"/>
            <List list={footerData.support}  title="Support"/>
           <div>
           <div className="footer__icon-block">
            <p>Get the App</p>
            <p><AppStoreIcon/></p>
           <p> <GooglePlayIcon/></p>
           </div>
            <div>
                <p></p>
            </div>
           </div>
            </div>
            <div className="footer__addres-block">
                <p className="body-medium">Collers @ 2023. All rights reserved.</p>
                <div className="footer__addres-block__link-block body-medium">
                    <p>Terms</p>
                    <p>Privacy</p>
                    <p>Contact</p>
                    <p><LanguageIcon fontSize="small" sx={{mr:"5px"}}/> En</p>
                </div>
            </div>
        </footer>
    )
}