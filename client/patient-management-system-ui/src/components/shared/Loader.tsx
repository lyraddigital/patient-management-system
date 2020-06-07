import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';

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
