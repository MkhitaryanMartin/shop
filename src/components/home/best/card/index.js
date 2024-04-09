import * as React from 'react';
import { Card as MUICard, CardMedia, CardContent, CardActions, Typography } from '@mui/material';
import BuyIcon from '../../../svgs/buy';
import Button from '../../../button';


export default function Card({
    image = '',
    alt = "img",
    title = "",
    text = "",
    color = "white",
}) {
    return (
        <MUICard sx={{
            boxShadow:
                "0px 0px 15px 0px rgba(255, 255, 255, 0.07),0px 25px 50px -12px rgba(255, 255, 255, 0.25)",
            maxWidth: "394px",
            borderRadius: "10px",
            position: "relative",
            zIndex: "1"
        }}>
            <CardMedia
                component="img"
                height="194"
                image={image}
                alt={alt}
            />
            <CardContent sx={{ background: "#0F172A", p: "32px 32px 0 32px" }}>
                <Typography variant="h5" color={color} mb="16px" className='heading-6'>
                    {title}
                </Typography>
                <Typography variant='p' color={color} className='body-large'>
                    {text}
                </Typography>
            </CardContent>
            <CardActions sx={{ background: "#0F172A", display: "flex", justifyContent: "center", p: "32px" }}>
                <Button variant='small-long' color='white'><BuyIcon /> <span>Buy Now</span></Button>
            </CardActions>

        </MUICard>
    );
}