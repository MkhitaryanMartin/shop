
import { Avatar } from "@mui/material";
import "./style.scss"


export default function CommentCard({ comment }) {
    return (
        <div className="comment-card">
            <p className="comment-card__logo"><comment.logo />  <span className="heading-6">{comment.compName}</span></p>
            <p className="comment-card__text body-xxl">{comment.text}</p>
            <div className="comment-card__avatar-block">
                <Avatar alt={comment.name} src={comment.avatar} sx={{mr:"16px"}}/>
                <div>
                    <p className="body-large">{comment.name}</p>
                    <p className="body-medium job-title">{comment.jobTitle}</p>
                </div>
            </div>
        </div>

    )
}