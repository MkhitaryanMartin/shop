import Button from "../../button";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { amazing, articles } from "../../../assets/data";
import Card from "./card";
import "./style.scss"


export default function Collectors(){
return(
    <section className="collectors">
      <div className="collectors__block collectors__block-article">
      <div className="collector__title-block">
            <h2 className="heading-2">Articles by Collectors</h2>
            <Button variant="text">More Articles <ArrowForwardIcon/></Button>
        </div>
        <div className="collectors__cards-block">
            {
                articles.map((item)=>{
                    return <Card text={item.text} title={item.title} color="black" justifyContent="flex-start" image={item.img} key={item.img}>
                    <Button variant="text">Read article <ArrowForwardIcon/></Button>
                </Card>
                })
            }
        </div>
      </div>
      <div className="collectors__block_background"></div>
      <div className="collectors__block collectors__block-amazing">
       <div className="collector__title-block">
            <h2 className="heading-2">Amazing events</h2>
            <Button variant="text">Explore Articles <ArrowForwardIcon/></Button>
        </div>
       <div className="collectors__cards-block">
            {
                amazing.map((item)=>{
                    return <Card subTitle={item.subTitle} headerTitle={item.title} color="black" justifyContent="flex-start" image={item.img} key={item.img}>
                    <Button variant="text">Buy Tickets<ArrowForwardIcon/></Button>
                </Card>
                })
            }
        </div>
       </div>
       <div className="collectors__fotter">
        <h2 className="heading-2">Collect More Sneakers Today</h2>
        <Button>Sign up now</Button>
       </div>
    </section>
)
}