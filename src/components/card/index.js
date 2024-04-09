import * as React from 'react';
import { Card as MUICard, CardMedia, CardContent, CardActions, Typography } from '@mui/material';


export default function Card({
    image='',
    alt = "img",
    title = "",
    text = "",
    children,
    background="inherit",
    color="white",
    justifyContent="center"
}) {
    return (
        <MUICard sx={{  boxShadow: 
            "0px 0px 15px 0px rgba(255, 255, 255, 0.07),0px 25px 50px -12px rgba(255, 255, 255, 0.25)", 
            maxWidth:"394px",
            borderRadius:"10px",
            position: "relative",
            zIndex: "1"
            }}>
            <CardMedia
                component="img"
                height="194"
                image={image}
                alt={alt}
            />
            <CardContent sx={{background, p:"32px 32px 0 32px"}}>
                <Typography variant="h5" color={color} mb="16px">
                    {title}
                </Typography>
                <Typography variant='p' color={color}>
                    {text}
                </Typography>
            </CardContent>
            <CardActions sx={{background, display:"flex", justifyContent, p:"32px"}}>
                {children}
            </CardActions>

        </MUICard>
    );
}