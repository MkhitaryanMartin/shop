import TrophyIcon from "../../../svgs/trophy";
import TunnelIcon from "../../../svgs/tunnel";
import TVIcon from "../../../svgs/tv";
import "./style.scss"


export default function IconBlock() {
    return (      
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
    )
}