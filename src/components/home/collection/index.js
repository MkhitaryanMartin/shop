import col from "../../../assets/img/col.png";
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import MonitorOutlinedIcon from '@mui/icons-material/MonitorOutlined';
import PodcastsOutlinedIcon from '@mui/icons-material/PodcastsOutlined';
import TuneIcon from '@mui/icons-material/Tune';
import { IconButton } from "@mui/material"
import "./style.scss"

export default function Collection() {
    return (
        <section className="collection">
            <h2 className="heading-2">Grow your collection</h2>
            <p className="collection__text body-large">Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus.
                Nec magna sed interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam tellus.
            </p>
            <div className="collection__filter-block">
                <div className="collection__icon-block">
                    <IconButton sx={{ color: "#0F172A" }}><SearchIcon /> <span className="body-large">Bibendum tellus</span> <ArrowForwardIcon /></IconButton>
                    <IconButton sx={{ color: "#0F172A" }}><VerifiedUserOutlinedIcon /> <span className="body-large">Cras eget</span></IconButton>
                    <IconButton sx={{ color: "#0F172A" }}><RocketLaunchOutlinedIcon /> <span className="body-large">Dolor pharetra</span></IconButton>
                    <IconButton sx={{ color: "#0F172A" }}><MonitorOutlinedIcon />  <span className="body-large">Amet, fringilla</span></IconButton>
                    <IconButton sx={{ color: "#0F172A" }}><PodcastsOutlinedIcon /><span className="body-large">Amet nibh</span></IconButton>
                    <IconButton sx={{ color: "#0F172A" }}><TuneIcon /><span className="body-large">Sed velit</span></IconButton>
                </div>
                <img src={col} alt="colection" />
            </div>
            <div className="collection__collected"></div>
        </section>
    )
}