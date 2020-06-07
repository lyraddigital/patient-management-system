import React from 'react';
import { Box, CircularProgress, Dialog, DialogContent, DialogTitle } from '@material-ui/core';

interface LoaderProps {
    loading: boolean;
    title: string;
}

const Loader = (props: LoaderProps) => {
    return (
        <Dialog open={props.loading}>
            <DialogTitle>{props.title}</DialogTitle>
            <DialogContent>
                <Box p={2} display="flex" justifyContent="center">
                    <CircularProgress color="secondary" size={100} />
                </Box>
            </DialogContent>
        </Dialog>
    );
}

export default Loader;
