import React from 'react';
import Collectible from './collectible';
import Best from './best';
import VideoBlock from './video-block';
import CommentBlock from './comment-block';

const HomeContainer = () => {
    return (
        <div>
            <Collectible/>
            <Best/>
            <VideoBlock/>
            <CommentBlock/>
        </div>
    );
};

export default HomeContainer;