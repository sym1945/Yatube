﻿import * as React from 'react';
import { Container } from 'react-bootstrap';
import { VideoThumbnailProps, VideoThumbnailGroup } from './VideoThumbnail';



const dummyDatas: Array<VideoThumbnailProps> = [
    {
        imgSrc: 'staticfiles/test.jpg', title: 'fc2-ppv-111111', viewCount: 1
    },
    {
        imgSrc: 'staticfiles/test.jpg', title: 'fc2-ppv-111111', viewCount: 2
    },
    {
        imgSrc: 'staticfiles/test.jpg', title: 'fc2-ppv-111111', viewCount: 3
    },
    {
        imgSrc: 'staticfiles/test.jpg', title: 'fc2-ppv-111111', viewCount: 4
    },
    {
        imgSrc: 'staticfiles/test.jpg', title: 'fc2-ppv-111111', viewCount: 5
    },
    {
        imgSrc: 'staticfiles/test.jpg', title: 'fc2-ppv-111111', viewCount: 6
    },
    {
        imgSrc: 'staticfiles/test.jpg', title: 'fc2-ppv-111111', viewCount: 7
    },
    {
        imgSrc: 'staticfiles/test.jpg', title: 'fc2-ppv-111111', viewCount: 8
    },
]

const getThumbnailGroups = (arr: Array<VideoThumbnailProps>, size: number) => {
    let i: number;
    let j: number;
    let chunk: number = size;
    let temparray: Array<Array<VideoThumbnailProps>> = [];
    for (i = 0, j = arr.length; i < j; i += chunk) {
        let g = arr.slice(i, i + chunk);
        temparray.push(g);
    }

    return temparray
}

const Index = () => {
    return (
        <Container>
            {
                getThumbnailGroups(dummyDatas, 4).map(grp => 
                    <VideoThumbnailGroup group={grp} />
                )
            }
        </Container>
    );
}

Index.displayName = Index.name

export default Index;

