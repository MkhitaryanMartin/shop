import Button from "../../button";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Card from "../../card";
import "./style.scss"
import { amazing, articles } from "../../../assets/data";

export default function Collectors(){
return(
    <section className="collectors">
        <div>
            <h2>Articles by Collectors</h2>
            <Button variant="text">More Articles <ArrowForwardIcon/></Button>
        </div>
        <div className="collectors__articles-cards-block">
            {
                articles.map((item)=>{
                    return <Card text={item.text} title={item.title} color="black" justifyContent="flex-start" image={item.img}>
                    <Button variant="text">Read article <ArrowForwardIcon/></Button>
                </Card>
                })
            }
        </div>
        <div className="collectors__articles-cards-block">
            {
                amazing.map((item)=>{
                    return <Card subTitle={item.subTitle} headerTitle={item.title} color="black" justifyContent="flex-start" image={item.img}>
                    <Button variant="text">Buy Tickets<ArrowForwardIcon/></Button>
                </Card>
                })
            }
        </div>
    </section>
)
}