import { comments } from "../../../assets/data";
import {Avatar} from "@mui/material";


export default function CommentBlock(){
    return (
        <section>
            <div>
                <h2>Because they love us</h2>
                <div></div>
            </div>
            <div>
                {
                    comments.map((comment)=>{
                        return <div>
                            <p><comment.logo/>{comment.compName}</p>
                            <p>{comment.text}</p>
                            <div>
                            <Avatar alt={comment.name} src={comment.avatar} />
                            <div>
                                <p>{comment.name}</p>
                                <p>{comment.jobTitle}</p>
                            </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </section>
    )
}