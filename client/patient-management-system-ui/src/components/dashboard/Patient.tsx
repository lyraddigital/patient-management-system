import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((_) =>
  createStyles({
    root: {
      display: 'flex'
    },
    cover: {
      width: 90,
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
        <CardActions>
          <button onClick={() => props.patientClicked(props.patient)}>View</button>
          <button onClick={() => props.updateClicked(props.patient)}>Update</button>
          <button onClick={() => props.deleteClicked(props.patient)}>Delete</button>
        </CardActions>
      </div>
    </Card>
  );
}

export default Patient;
