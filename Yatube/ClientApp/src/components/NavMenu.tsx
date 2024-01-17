import * as React from 'react';
import { Container, Navbar, Offcanvas, Nav, Breadcrumb, Stack } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';


export const NavMenu = () => {
    const location = useLocation();

    const convertLinkName = (pathname: string) => {
        if (pathname === '' || pathname === '/')
            return 'Home';
        else
            return pathname;
    }

    const getBreadcrumbItems = () => {
        let pathes: string[];
        if (location.pathname === '/')
            pathes = [];
        else
            pathes = location.pathname.split('/');

        let items: any[] = [];
        let lastPath = pathes.reduce((acc, cur, idx) => {
            if (cur !== '')
                acc.accPath += ('/' + cur);

            acc.curPath = cur;
            if (idx < pathes.length - 1) {
                items.push(<Breadcrumb.Item linkAs={Link} linkProps={{ to: acc.accPath }}>{convertLinkName(cur)}</Breadcrumb.Item>);
            }

            return acc;
        }, {
            accPath: '',
            curPath: ''
        });

        items.push(<Breadcrumb.Item active>{convertLinkName(lastPath.curPath)}</Breadcrumb.Item>);

        return items;
    }

    return (
        <Navbar bg="light" expand={false}>
            <Stack direction="horizontal">
                <Navbar.Toggle className="mx-3" />
                <Container>
                    <Navbar.Brand as={Link} to="/">Yatube</Navbar.Brand>
                    <Breadcrumb>
                        {
                            getBreadcrumbItems()
                        }
                    </Breadcrumb>
                </Container>
                <Navbar.Offcanvas placement="start">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Yatube</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav>
                            <hr />
                            <Nav.Link as={Link} to='/'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/videos'>Video</Nav.Link>
                            <hr />
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Stack>
        </Navbar>
    )
}