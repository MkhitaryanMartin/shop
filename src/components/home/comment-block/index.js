import { comments } from "../../../assets/data";
import {Avatar} from "@mui/material";
import "./style.scss"
import CommentCard from "../../comment-card";


export default function CommentBlock(){
    return (
        <section className="comments-block">
            <div className="comments-block__title-block">
                <h2 className="heading-2 ">Because they love us</h2>
                <div></div>
            </div>
            <div className="comments">
                <div className="yelow-background"></div>
                {
                    comments.map((comment,i)=>{
                        return <CommentCard comment={comment} key={comment.jobTitle+i}/>
                    })
                }
            </div>
        </section>
    )
}