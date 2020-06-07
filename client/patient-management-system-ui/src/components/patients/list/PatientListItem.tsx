import React from 'react';
import { Avatar, Divider, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import Patient from '../../../models/Patient';

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
  const headingElement = <Typography noWrap={true}>{props.patient.fullName}</Typography>;

  return (
    <>
      <ListItem className={classes.root} onClick={() => props.patientClicked()}>
        <ListItemAvatar>
          <Avatar alt={props.patient.fullName} src={props.patient.imageSrc} />
        </ListItemAvatar>
        <ListItemText primary={headingElement} secondary={props.patient.roomText}></ListItemText>
      </ListItem>
      <Divider />
    </>
  );
}

export default PatientListItem;
