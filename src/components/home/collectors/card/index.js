import * as React from 'react';
import { Card as MUICard, CardMedia, CardContent, CardActions, Typography, Box } from '@mui/material';


export default function Card({
    image = '',
    alt = "img",
    title = "",
    text = "",
    children,
    headerTitle = "",
    subTitle = "",
}) {
    return (
        <MUICard sx={{
            maxWidth: "302px",
            borderRadius: "10px",
            position: "relative",
            zIndex: "1",
            p: title ? "" : "16px"
        }}>
            {headerTitle && <Box p="24px 0px 16px 0px">
                <p>{subTitle}</p>
                <Typography variant="h6" mt="4px">
                    {headerTitle}
                </Typography>
            </Box>}
            <CardMedia
                component="img"
                height="220"
                image={image}
                alt={alt}
            />
            {title && <CardContent sx={{ p: "32px 32px 0 32px" }}>
                <Typography variant="h6" mb="16px">
                    {title}
                </Typography>
                <Typography variant='p'>
                    {text}
                </Typography>
            </CardContent>}
            <CardActions sx={{ display: "flex", justifyContent: "flex-start", p: title ? "32px" : "16px 0" }}>
                {children}
            </CardActions>

        </MUICard>
    );
}