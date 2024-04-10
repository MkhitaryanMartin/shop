import React, {useRef, useState}  from "react";
import "./style.css"


function Scroller({
    children,
    className
}){
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
    return (
            <div 
            className={`scroller ${className}`}
            ref={categoryListRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseUp}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            >
               {children}
            </div>
    )
}

export default Scroller