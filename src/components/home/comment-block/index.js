import React, { useState, useRef } from "react";
import { comments } from "../../../assets/data";
import CommentCard from "../../comment-card";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { IconButton } from "@mui/material";
import "./style.scss";

export default function CommentBlock() {
    const categoryListRef = useRef(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsDown(true);
        setStartX(e.pageX - categoryListRef.current.offsetLeft);
        setScrollLeft(categoryListRef.current.scrollLeft);
    };

    const handleMouseUp = () => {
        setIsDown(false);
    };

    const handleMouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - categoryListRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        categoryListRef.current.scrollLeft = scrollLeft - walk;
    };

    const onScrollLeft = () => {
        categoryListRef.current.scrollLeft -= 100;
    };

    const onScrollRight = () => {
        categoryListRef.current.scrollLeft += 100;
    };

    return (
        <section className="comments-block">
            <div className="comments-block__title-block">
                <h2 className="heading-2">Because they love us</h2>
                <div className="comments-block__button-block">
                    <IconButton sx={{ mr: "24px", border: "1px solid black", borderRadius: "50%" }} onClick={onScrollLeft}>
                        <ArrowBackIcon />
                    </IconButton>
                    <IconButton sx={{ border: "1px solid black", borderRadius: "50%" }} onClick={onScrollRight}>
                        <ArrowForwardIcon />
                    </IconButton>
                </div>
            </div>
            <div className="comments">
            <div className="yelow-background"></div>
                <div
                    className="scroller"
                    ref={categoryListRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseUp}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                >
                    {
                        comments.map((comment, i) => {
                            return <CommentCard comment={comment} key={comment.jobTitle + i} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}
