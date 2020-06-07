import React, { ReactNode } from 'react';
import { AppBar, Box, Container, Toolbar, Typography } from '@material-ui/core';

interface LayoutProps {
    pageTitle: string;
    children: ReactNode;
}

const Layout = (props: LayoutProps) => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography component="h1">Patient Managment System</Typography>
                </Toolbar>
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
