import col from "../../../assets/img/col.png";
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import MonitorOutlinedIcon from '@mui/icons-material/MonitorOutlined';
import PodcastsOutlinedIcon from '@mui/icons-material/PodcastsOutlined';
import TuneIcon from '@mui/icons-material/Tune';
import IconButton from "./IconButton";
import Scroller from "../../scroller";
import Map from "../../map";
import { points } from "../../../assets/data";
import "./style.scss"
import { useState } from "react";

export default function Collection() {
    const [isShow, setIsShow]= useState(undefined)

const handleClick = (index)=>{
   setIsShow(index)
}
    return (
        <section className="collection">
           <div className="collection__title-block">
           <h2 className="heading-2">Grow your collection</h2>
            <p className="collection__text body-large">Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus.
                Nec magna sed interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam tellus.
            </p>
           </div>
            <div className="collection__filter-block">
                   <Scroller className="collection__icon-block">
                   <IconButton><SearchIcon /> <span className="body-large">Bibendum tellus</span> <ArrowForwardIcon /></IconButton>
                    <IconButton><VerifiedUserOutlinedIcon /> <span className="body-large">Cras eget</span></IconButton>
                    <IconButton><RocketLaunchOutlinedIcon /> <span className="body-large">Dolor pharetra</span></IconButton>
                    <IconButton><MonitorOutlinedIcon />  <span className="body-large">Amet, fringilla</span></IconButton>
                    <IconButton><PodcastsOutlinedIcon /><span className="body-large">Amet nibh</span></IconButton>
                    <IconButton ><TuneIcon /><span className="body-large">Sed velit</span></IconButton>
                   </Scroller>
              
                <img src={col} alt="colection" className="collection__img"/>
            </div>
            <div className="collection__map-block">
           {isShow !== undefined ? <div style={{color:"white", position:"absolute", zIndex:1}}> 
        <p className="heading-1-l">11,658,467</p>
        <h2 className="heading-2">Shoes Collected</h2>
        </div>:""}
            <Map points={points} onClick={handleClick} selectedPointIndex={isShow}/>
            </div>
            
        </section>
    )
}