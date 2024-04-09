
import { Avatar } from "@mui/material";
import "./style.scss"


export default function CommentCard({ comment }) {
    return (
        <div className="comment-card">
            <p className="comment-card__logo"><comment.logo />  <span>{comment.compName}</span></p>
            <p className="comment-card__text">{comment.text}</p>
            <div className="comment-card__avatar-block">
                <Avatar alt={comment.name} src={comment.avatar} sx={{mr:"16px"}}/>
                <div>
                    <p>{comment.name}</p>
                    <p>{comment.jobTitle}</p>
                </div>
            </div>
        </div>

    )
}