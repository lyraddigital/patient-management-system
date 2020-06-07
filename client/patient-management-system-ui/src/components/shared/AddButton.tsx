import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((_) =>
  createStyles({
    root: {
      position: 'absolute',
      bottom: '10px',
      left: 'calc(50% - 28px)'
    }
  })
);

interface AddButtonProps {
    onClick: () => void;
}

const AddButton = (props: AddButtonProps) => {
    const classes = useStyles();

    return (
        <Fab onClick={() => props.onClick()} className={classes.root} color="secondary">
            <AddIcon />
        </Fab>
    );
}

export default AddButton;
