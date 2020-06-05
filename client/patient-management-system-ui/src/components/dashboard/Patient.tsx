import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((_) =>
  createStyles({
    root: {
      display: 'flex'
    },
    cover: {
      width: 120,
    },
    details: {
      display: 'flex', 
      flexDirection: 'column'
    }
  })
);

const Patient = (props: any) => {
  const classes = useStyles();
  const patientName = `${props.patient.firstName} ${props.patient.lastName}`;
  const roomNumber = `Room: ${props.patient.room}`;

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.cover} image="thumbnail.png" />
      <div className={classes.details}>
        <CardHeader title={patientName} subheader={roomNumber}></CardHeader>
        <CardActions style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={() => props.patientClicked(props.patient)}>
            <VisibilityIcon />
          </IconButton>
          {/* <IconButton onClick={() => props.updateClicked(props.patient)}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => props.deleteClicked(props.patient)}>
            <DeleteIcon />
          </IconButton> */}
        </CardActions>
      </div>
    </Card>
  );
}

export default Patient;
