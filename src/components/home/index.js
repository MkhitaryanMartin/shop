import React from 'react';
import Collectible from './collectible';
import Best from './best';
import VideoBlock from './video-block';
import CommentBlock from './comment-block';
import Collection from './collection';
import Collectors from './collectors';

const HomeContainer = () => {
    return (
        <div>
            <Collectible/>
            {/* <Best/> */}
            <VideoBlock/>
            <CommentBlock/>
            <Collection/>
            <Collectors/>
        </div>
    );
};

export default HomeContainer;