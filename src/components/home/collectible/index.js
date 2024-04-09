import prieda from "../../../assets/img/prieda.png";

import "./style.scss"
import PlayCircleIcon from "../../svgs/play-circle";
import Button from "../../button";
import IconBlock from "./icon-block";

export default function Collectible() {
    return (
        <section className="collectible">
      <div className="container">
           <div className="collectible__container">
           <div className="collectible__text-block">
                <h1 className="collectible-title heading-1-medium">Collectible Sneakers</h1>
                <p className="collectible__text-block__text body-large">Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.</p>
                <div className="collectible__button-block">
                    <Button className="button-medium"><span className="button_padding">Sign up now</span></Button>
                    <Button variant="text"><PlayCircleIcon/> <span>Watch Demo</span></Button>
                </div>
            </div>
            <div className="collectible__img-block">
                <img src={prieda} alt="prieda"/>
            </div>
           </div>
       <IconBlock/>
           </div>
        </section>
    )
}