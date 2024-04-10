import TrophyIcon from "../../../svgs/trophy";
import TunnelIcon from "../../../svgs/tunnel";
import TVIcon from "../../../svgs/tv";
import "./style.scss"


export default function IconBlock() {
    return (
        <div className="collectible__icon-block">
            <div>
                <TrophyIcon />
                <p className="subtitle-XL">Nibh viverra</p>
                <p className="body-large">Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. </p>
            </div>
            <div>
                <TunnelIcon />
                <p className="subtitle-XL">Cursus amet</p>
                <p className="body-large">Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. </p>
            </div>
            <div>
                <TVIcon />
                <p className="subtitle-XL">Ipsum fermentum</p>
                <p className="body-large">Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. </p>
            </div>
        </div>
    )
}