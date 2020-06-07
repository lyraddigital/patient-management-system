import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import Patient, { Gender } from '../../../models/Patient';

const useStyles = makeStyles((_) =>
  createStyles({
    root: {
      cursor: 'pointer'
    }
  })
);

interface PatientListItemProps {
  patient: Patient;
  patientClicked: () => void;
}

const PatientListItem = (props: PatientListItemProps) => {
  const classes = useStyles();
  const patientName = `${props.patient.firstName} ${props.patient.lastName}`;
  const roomNumber = `Room: ${props.patient.room}`;
  const imageSrc = `assets/${props.patient.gender === Gender.Male ? 'thumbnail.png': 'female.png'}`;
  const headingElement = <Typography noWrap={true}>{patientName}</Typography>;

  return (
    <>
      <ListItem className={classes.root} onClick={() => props.patientClicked()}>
        <ListItemAvatar>
          <Avatar alt={patientName} src={imageSrc} />
        </ListItemAvatar>
        <ListItemText primary={headingElement} secondary={roomNumber}></ListItemText>
      </ListItem>
      <Divider />
    </>
  );
}

export default PatientListItem;
