import React, { ReactNode } from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

interface LayoutProps {
    pageTitle: string;
    children: ReactNode;
}

const Layout = (props: LayoutProps) => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar></Toolbar>
            </AppBar>
            <Box paddingTop={2}>
                <Container>
                    <h2>{props.pageTitle}</h2>
                    <hr />
                    {props.children}
                </Container>
            </Box>
        </div>
    );
}

export default Layout;
