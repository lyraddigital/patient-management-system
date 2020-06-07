import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';

interface ConfirmDialogProps {
    open: boolean;
    title: string;
    message: string;
    onClose: () => void;
    onConfirmed: () => void;
};

const ConfirmDialog = (props: ConfirmDialogProps) => {
    return (
        <Dialog open={props.open} onClose={props.onClose}>
            <DialogTitle>{props.title}</DialogTitle>
            <DialogContent>{props.message}</DialogContent>
            <DialogActions>
                <Button autoFocus onClick={() => props.onClose()} color="primary">No</Button>
                <Button onClick={() => props.onConfirmed()} color="primary">Yes</Button>
            </DialogActions>
        </Dialog>
    );
}

export default ConfirmDialog;
