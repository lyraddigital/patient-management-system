import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const Patient = (props: any) => {
    const patientName = `${props.patient.firstName} ${props.patient.lastName}`;

  return (
    <Card>
      <CardHeader action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
      } 
      title={patientName}
      subheader={props.patient.room}>
      </CardHeader>
      <img src={props.patient.imageSrc} alt={patientName} width={100} height={100} />
      <button onClick={() => props.patientClicked(props.patient)}>Select</button>
      <button onClick={() => props.updateClicked(props.patient)}>Update</button>
      <button onClick={() => props.deleteClicked(props.patient)}>Delete</button>
    </Card>
  );
}

export default Patient;
