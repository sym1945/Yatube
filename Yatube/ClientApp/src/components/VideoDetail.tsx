import * as React from 'react';
import { Container, Row, Col, Stack, Button, Nav } from 'react-bootstrap';
import { faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory, useParams } from 'react-router-dom';
import styled from "styled-components";

const ActionStack = styled(Stack)`
    cursor: pointer;
    user-select: none;
    transition: 0.3s;
    &:hover {
        color: red;
    }
`;

export const VideoDetail = () => {
    const { id } = useParams();
    const [likeCnt, setLikeCnt] = React.useState(0);
    const [dislikeCnt, setDislikeCnt] = React.useState(0);

    const onClickLike = () => {
        setLikeCnt(cnt => cnt + 1);
    };

    const onClickDislike = () => {
        setDislikeCnt(cnt => cnt + 1);
    };

    return (
        <Container fluid>
            <Row>
                <Col md={8}>
                    <video width='100%' controls>
                        <source src="staticfiles/test.mp4" type="video/mp4"/>
                    </video>
                    <Stack className="mt-3">
                        <h5 className="my-0">FC2-PPV-1234567</h5>
                        <Stack direction="horizontal" gap={3}>
                            <div className="text-muted me-auto">12345 views</div>
                            <ActionStack direction='horizontal' gap={2} onClick={onClickLike}>
                                <FontAwesomeIcon icon={faHeart} />
                                <div>{likeCnt}</div>
                            </ActionStack>
                            <ActionStack direction='horizontal' gap={2} onClick={onClickDislike}>
                                <FontAwesomeIcon icon={faHeartBroken} />
                                <div>{dislikeCnt}</div>
                            </ActionStack>
                        </Stack>
                    </Stack>

                    <hr />

                    <dl className="row">
                        <dt className="col-sm-2">Creator</dt>
                        <dd className="col-sm-4">
                            <a href="#">derukin</a>
                        </dd>

                        <dt className="col-sm-1">Actor</dt>
                        <dd className="col-sm-5">
                            <a href="#">unknown</a>
                        </dd>

                        <dt className="col-sm-2 text-truncate">Upload Date</dt>
                        <dd className="col-sm-10">
                            2022-01-11
                        </dd>

                        <dt className="col-sm-2 text-truncate">Description</dt>
                        <dd className="col-sm-10">
                            <p>
                                Definition for the term.
                                And some more placeholder definition text.
                            </p>
                        </dd>
                    </dl>

                    <hr />

                    <Stack direction="horizontal" gap={1}>
                        <Button variant="warning" size="sm">tag1</Button>
                        <Button variant="warning" size="sm">tag2</Button>
                        <Button variant="warning" size="sm">tag3</Button>
                        <Button variant="warning" size="sm">tag4</Button>
                        <Button variant="warning" size="sm">tag5</Button>
                    </Stack>

                    <hr />

                </Col>
                <Col md={4}>
                    <div style={{ backgroundColor: 'gray' }}>
                        Related Videos
                    </div>
                </Col>
            </Row>
        </Container>
    );
}


