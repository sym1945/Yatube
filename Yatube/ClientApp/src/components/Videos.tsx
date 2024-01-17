import * as React from 'react';
import { Container, Row, Col, Stack, Button, Nav, Image, Modal, Form, ModalDialog } from 'react-bootstrap';
import { faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory, useParams } from 'react-router-dom';
import { createFFmpeg, fetchFile, FFmpeg } from '@ffmpeg/ffmpeg';
import styled from "styled-components";

const StyledContainer = styled(Container)`
    cursor: pointer;
    user-select: none;
    background-color: gray;
    height: 240px;
    object-fit: cover;
    
`;

const WarpDiv = styled.div`
    width: 100%; 
    margin: 0 auto; 
    padding-bottom:67%; 
    border: solid #dadada 1.5px;
    color: #aaaaaa;
    position: relative;
    cursor: pointer;
    user-select: none;
`;
const CntsDiv = styled.div`
    position: absolute;
    top: 0; 
    left: 0; 
    font-size: 15px;
    width: 100%; 
    height: 100%; 
    text-align: center;
`;
const PlaceHolderDiv = styled.div`
    padding-top: 24%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const blind: React.CSSProperties = {
    position: 'absolute',
    width: '1px',
    height: '1px',
    clip: 'rect(0 0 0 0)',
    margin: '-1px',
    overflow: 'hidden'
}


export const Videos = () => {
    const [imgMainUserSrc, setImgMainUserSrc] = React.useState<string>();
    const [imgSrcs, setImgSrcs] = React.useState(new Array<string>());
    const [imgMainSrc, setImgMainSrc] = React.useState<string>();
    const [message, setMessage] = React.useState('Click Start to transcode');
    const [time, setTime] = React.useState(0);
    const [show, setShow] = React.useState(false);
    const mainThumbInput: React.Ref<HTMLInputElement> = React.useRef(null);

    React.useEffect(() => {
        setImgMainSrc(imgSrcs[0]);
        if (mainThumbInput && mainThumbInput.current) {
            mainThumbInput.current.value = '';
        }
    }, [imgSrcs]);

    React.useEffect(() => {
        setImgMainSrc(imgMainUserSrc);
        if (mainThumbInput && mainThumbInput.current) {
            mainThumbInput.current.value = '';
        }
    }, [imgMainUserSrc]);

    const doTranscode = async (file: File) => {
        try {
            // get the frame at 1.5 seconds of the video file
            const cover = await getVideoCover(file, time);
            // print out the result image blob
            setImgSrcs(srcs => {
                srcs.forEach(src => {
                    URL.revokeObjectURL(src);
                    console.log('remove', src);
                });

                return cover.map(blob => URL.createObjectURL(blob));
            });
            //setImgMainSrc(src => {
            //    if (src && src !== undefined) {
            //        URL.revokeObjectURL(src);
            //    }

            //    return URL.createObjectURL(cover[0]);
            //});
           
            //console.log(cover);
        } catch (ex) {
            console.log("ERROR: ", ex);
        }

    };

    function getVideoCover(file: File, seekTo = 0.0) {
        console.log("getting video cover for file: ", file);
        return new Promise<Blob[]>((resolve, reject) => {
            let imageBlobs: Blob[] = [];
            const imageCnt: number = 9;
            let seekTo: number = 0;
            let seekOffset: number = 0;

            // load the file to a video player
            const videoPlayer = document.createElement('video');
            videoPlayer.setAttribute('src', URL.createObjectURL(file));
            videoPlayer.load();
            videoPlayer.addEventListener('error', (ex) => {
                reject("error when loading video file");
            });
            // load metadata of the video to get video duration and dimensions
            videoPlayer.addEventListener('loadedmetadata', () => {
                // seek to user defined timestamp (in seconds) if possible
                console.dir(videoPlayer);
                seekOffset = (videoPlayer.duration / (imageCnt + 1));
                seekTo = seekOffset;

                if (videoPlayer.duration < seekTo) {
                    reject("video is too short.");
                    return;
                }
                // delay seeking or else 'seeked' event won't fire on Safari
                setTimeout(() => {
                    videoPlayer.currentTime = seekTo;
                }, 200);
                // extract video thumbnail once seeking is complete
                videoPlayer.addEventListener('seeked', () => {
                    console.log('video is now paused at %ss.', seekTo);
                    // define a canvas to have the same dimension as the video
                    const canvas = document.createElement("canvas");
                    canvas.width = 730;//videoPlayer.videoWidth;
                    canvas.height = 490;//videoPlayer.videoHeight;
                    // draw the video frame to canvas
                    const ctx = canvas.getContext("2d");
                    if (ctx === null)
                        return;

                    ctx.drawImage(videoPlayer, 0, 0, canvas.width, canvas.height);
                    // return the canvas image as a blob
                    ctx.canvas.toBlob(
                        blob => {
                            imageBlobs.push(blob as Blob);

                            if (imageBlobs.length === imageCnt) {
                                URL.revokeObjectURL(videoPlayer.src);
                                console.log('remove', videoPlayer.src);
                                resolve(imageBlobs);
                            }
                            else {
                                seekTo = seekOffset * (imageBlobs.length + 1);
                                videoPlayer.currentTime = seekTo;
                            }
                        },
                        "image/jpeg",
                        0.75 /* quality */
                    );
                });
            });
        });
    }


    const onInputTimeChange = (e) => {
        setTime(e.target.value);
    }

    const handleClickMainThumb = () => {
        console.log('click');
        mainThumbInput?.current?.click();
    }

    return (
        <Container>
            <input value={time} onChange={onInputTimeChange} />
            <Button onClick={() => setShow(true)}>Add Video</Button>
            <p>{message}</p>

            <Modal
                size="xl"
                show={show}
                centered
                style={{ overflowX: 'hidden' }}
                onHide={() => {
                    setShow(false);
                    setImgSrcs(srcs => {
                        srcs.forEach(src => {
                            URL.revokeObjectURL(src);
                            console.log('remove', src);
                        });
                        
                        return [];
                    });
                }}>
                <Modal.Header closeButton>
                    <Modal.Title>Please input the video information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onReset={(e) => console.log('reset')} onResetCapture={(e) => console.log('reset capture')}>
                        <Row xs={1} sm={1} lg={2}>
                            <Col>
                                <Form.Group controlId="formFileSm" className="mb-3">
                                    <Form.Label>Input video file</Form.Label>
                                    <Form.Control type="file" size="sm" accept=".mp4" onChange={(e) => {
                                        const files = ((e.target) as HTMLInputElement).files;
                                        if (files && files.length > 0)
                                            doTranscode(files[0]);
                                    }
                                    } />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Main Thubnail</Form.Label>
                                    <Form.Control type="file" size="sm" accept=".jpg" ref={mainThumbInput} style={blind} onChange={(e) => {
                                        const files = ((e.target) as HTMLInputElement).files;
                                        if (files && files.length > 0)
                                            setImgMainUserSrc(src => {
                                                if (src && src !== undefined)
                                                    URL.revokeObjectURL(src);

                                                return URL.createObjectURL(files[0]);
                                            });
                                    }} />
                                    <WarpDiv onClick={handleClickMainThumb}>
                                        <CntsDiv>
                                            {
                                                imgMainSrc !== undefined ? <Image fluid src={imgMainSrc} height='100%' width='100%' /> : <PlaceHolderDiv>Choose the image file</PlaceHolderDiv>
                                            }
                                        </CntsDiv>
                                    </WarpDiv>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Thumbnails</Form.Label>
                                    <Stack direction="horizontal" style={{ overflowX: 'auto' }}>
                                        {
                                            imgSrcs.map((imgSrc, index) =>
                                                <Image key={index} fluid width='240' height='180' src={imgSrc} onClick={(e) => {

                                                    if (imgMainUserSrc && imgMainUserSrc !== undefined)
                                                        URL.revokeObjectURL(imgMainUserSrc);

                                                    setImgMainSrc(imgSrcs[index]);
                                                }} />
                                            )
                                        }
                                    </Stack>
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Creator</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Actor</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Tags</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal>


        </Container>
    );
}


