import Button from "../../button";
import CheckIcon from '@mui/icons-material/Check';
import video from "../../../assets/img/video.png";
import decoVideo from "../../../assets/img/deco-video.png";
import { Typography } from '@mui/material';
import "./style.scss"

export default function VideoBlock(){
    return (
        <section className="video-block">
           <div className="video-block__container">
           <div>
                <h2 className="heading-2">Why join us</h2>
              <div className="video-block__text-block">
              <p className="body-xl"><CheckIcon fontSize="small" sx={{color:"#15803D",fontSize:"16px"}}/>Est et in pharetra magna adipiscing ornare aliquam.</p>
                <p className="body-xl"><CheckIcon  fontSize="small" sx={{color:"#15803D",fontSize:"16px"}}/>Tellus arcu sed consequat ac velit ut eu blandit.</p>
                <p className="body-xl"><CheckIcon  fontSize="small" sx={{color:"#15803D",fontSize:"16px"}}/>Ullamcorper ornare in et egestas dolor orci.</p>
              </div>
              <Button className="button-large">
                <Typography variant="span" p="0 32px">Sign up now</Typography>
              </Button>
            </div>
            <div className="video-block__img-block">
                <img src={video} alt="video"/>
                <img src={decoVideo} alt="deco-video" className="deco-video"/>
            </div>
           </div>
        </section>
    )
}