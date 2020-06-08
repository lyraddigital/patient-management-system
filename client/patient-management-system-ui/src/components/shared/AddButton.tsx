import React from 'react';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

interface AddButtonProps {
    onClick: () => void;
}

const AddButton = (props: AddButtonProps) => {
    return (
        <Fab onClick={() => props.onClick()} size="small" color="secondary">
            <AddIcon />
        </Fab>
    );
}

export default AddButton;
