import Button from "../../button";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { amazing, articles } from "../../../assets/data";
import amazingImg from "../../../assets/img/amazing-back.png"
import Card from "./card";
import backlights from "../../../assets/img/backlights.png"
import "./style.scss"


export default function Collectors() {
    return (
        <section className="collectors">
            <div className="collectors__block collectors__block-article">
                <div className="collectors__title-block">
                    <h2 className="heading-2">Articles by Collectors</h2>
                    <Button variant="text">More Articles <ArrowForwardIcon sx={{ml:"16px"}}/></Button>
                </div>
                <div className="collectors__cards-block">
                    {
                        articles.map((item) => {
                            return <Card text={item.text} title={item.title} color="black" justifyContent="flex-start" image={item.img} key={item.img}>
                                <Button variant="text">Read article <ArrowForwardIcon sx={{ml:"16px"}}/></Button>
                            </Card>
                        })
                    }
                </div>
            </div>
            <div className="collectors__block collectors__block-amazing">
                <div className="collectors__title-block">
                    <h2 className="heading-2">Amazing events</h2>
                    <Button variant="text">Explore Articles <ArrowForwardIcon sx={{ml:"16px"}}/></Button>
                </div>
                <div className="collectors__cards-block">
                    {
                        amazing.map((item) => {
                            return <Card subTitle={item.subTitle} headerTitle={item.title} color="black" justifyContent="flex-start" image={item.img} key={item.img}>
                                <Button variant="text">Buy Tickets<ArrowForwardIcon sx={{ml:"16px"}}/></Button>
                            </Card>
                        })
                    }
                </div>
                <div className="amazing__img-block">
                    <img src={amazingImg}/>
                </div>
            </div>
            <img src={backlights} className="collectors__backlights" height="250"/>
            <div className="collectors__fotter">
                <h2 className="heading-2">Collect More Sneakers Today</h2>
                <Button variant="medium" className="button-xl"><span>Sign up now</span></Button>
            </div>
        </section>
    )
}