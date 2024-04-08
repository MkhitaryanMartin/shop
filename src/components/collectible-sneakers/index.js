import TrophyIcon from "../svgs/trophy";
import TunnelIcon from "../svgs/tunnel";
import TVIcon from "../svgs/tv";
import prieda from "../../assets/img/prieda.png"
import "./style.scss"

export default function CollectibleSneakers() {
    return (
        <div className="collectible">
           <div className="collectible__container">
           <div className="collectible__text-block">
                <h1 className="collectible-title">Collectible Sneakers</h1>
                <p className="collectible__text-block__text">Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.</p>
                <div>
                    <button>Sign up now</button>
                    <button>Watch Demo</button>
                </div>
            </div>
            <div className="collectible__img-block">
                <img src={prieda} alt="prieda"/>
            </div>
           </div>
           <div className="collectible__icon-block">
            <div>
            <TrophyIcon/>
            <p>Nibh viverra</p>
            <p>Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. </p>
            </div>
            <div>
            <TunnelIcon/>
            <p>Cursus amet</p>
            <p>Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. </p>
            </div>
            <div>
            <TVIcon/>
            <p>Ipsum fermentum</p>
            <p>Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. </p>
            </div>
            </div>
        </div>
    )
}