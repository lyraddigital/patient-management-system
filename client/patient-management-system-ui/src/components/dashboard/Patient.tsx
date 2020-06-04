import React from 'react';

const Patient = (props: any) => {
    const patientName = `${props.patient.firstName} ${props.patient.lastName}`;

  return (
    <div>
      <img src={props.patient.imageSrc} alt={patientName} width={100} height={100} />
      <p>{patientName}</p>
      <p>{props.patient.room}</p>
      <button onClick={() => props.patientClicked(props.patient)}>Select</button>
      <button onClick={() => props.updateClicked(props.patient)}>Update</button>
      <button onClick={() => props.deleteClicked(props.patient)}>Delete</button>
    </div>
  );
}

export default Patient;
