import React from 'react';
import Collectible from './collectible';
import Best from './best';
import VideoBlock from './video-block';
import CommentBlock from './comment-block';
import Collection from './collection';

const HomeContainer = () => {
    return (
        <div>
            <Collectible/>
            <Best/>
            <VideoBlock/>
            <CommentBlock/>
            <Collection/>
        </div>
    );
};

export default HomeContainer;