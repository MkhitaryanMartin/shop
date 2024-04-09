import Button from "../../button";
import CheckIcon from '@mui/icons-material/Check';
import video from "../../../assets/img/video.png";
import decoVideo from "../../../assets/img/deco-video.png";
import "./style.scss"

export default function VideoBlock(){
    return (
        <section className="video-block">
            <div className="deco-video__block">
                <img src={decoVideo} alt="deco-video"/>
            </div>
           <div className="video-block__container">
           <div>
                <h2>Why join us</h2>
              <div className="video-block__text-block">
              <p><CheckIcon fontSize="small" sx={{color:"#15803D",fontSize:"16px"}}/>Est et in pharetra magna adipiscing ornare aliquam.</p>
                <p><CheckIcon  fontSize="small" sx={{color:"#15803D",fontSize:"16px"}}/>Tellus arcu sed consequat ac velit ut eu blandit.</p>
                <p><CheckIcon  fontSize="small" sx={{color:"#15803D",fontSize:"16px"}}/>Ullamcorper ornare in et egestas dolor orci.</p>
              </div>
              <Button>Sign up now</Button>
            </div>
            <div className="video-block__img-block">
                <img src={video} alt="video"/>
            </div>
           </div>
        </section>
    )
}