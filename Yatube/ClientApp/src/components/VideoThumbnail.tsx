import * as React from 'react';
import { Stack, Card, CardGroup, Nav } from 'react-bootstrap';
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from 'react-router-dom';


export interface VideoThumbnailProps {
    imgSrc: string,
    title: string,
    viewCount: number
}

export const VideoThumbnail = (props: VideoThumbnailProps) => {
    const history = useHistory();
    const handleClick = () => {
        history.push(`/videos/${props.viewCount}`);
    }

    return (
        <Card className="text-center" onClick={handleClick} style={{ cursor: "pointer" }} >
            <Card.Img variant="top" src={props.imgSrc} />
            <Card.Body>
                <Card.Text>{props.title}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <Stack direction="horizontal" gap={2} className="justify-content-center text-muted">
                    <FontAwesomeIcon icon={faEye} />
                    <small>{props.viewCount}</small>
                </Stack>
            </Card.Footer>
        </Card >
    );
}

export interface VideoThumbnailGroupProps {
    group: Array<VideoThumbnailProps>
}

export const VideoThumbnailGroup = (props: VideoThumbnailGroupProps) => {
    return (
        <CardGroup>
            {props.group.map(g => <VideoThumbnail {...g} />)}
        </CardGroup>
    );
}




