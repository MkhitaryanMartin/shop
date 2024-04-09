import { footerData } from "../../assets/data";
import List from "../list";
import AppStoreIcon from "../svgs/app-store";
import GooglePlayIcon from "../svgs/google-play";
import "./style.scss";

export default function Footer(){
    return (
        <footer className="footer">
            <div className="footer__link-block">
            <List list={footerData.product}/>
            <List list={footerData.solutions}/>
            <List list={footerData.support}/>
           <div>
           <div>
            <p><AppStoreIcon/></p>
           <p> <GooglePlayIcon/></p>
           </div>
            <div>
                <p></p>
            </div>
           </div>
            </div>
            <div className="footer__addres-block">
                <p>Collers @ 2023. All rights reserved.</p>
                <div className="footer__addres-block__link-block">
                    <p>Terms</p>
                    <p>Privacy</p>
                    <p>Contact</p>
                    <p>EN</p>
                </div>
            </div>
        </footer>
    )
}