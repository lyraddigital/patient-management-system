import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import Patient from '../../../models/Patient';

const useStyles = makeStyles((_) =>
  createStyles({
    root: {
      cursor: 'pointer'
    },
    cover: {
      flex: '1 0 auto',
    },
    actions: {
      display: 'flex', 
      justifyContent: 'flex-end'
    }
  })
);

interface PatientGridItemProps {
  patient: Patient;
  patientClicked: () => void;
  updateClicked: () => void;
  deleteClicked: () => void;
}

const PatientGridItem = (props: PatientGridItemProps) => {
  const classes = useStyles();
  const headingElement = <Typography noWrap={true}>{props.patient.fullName}</Typography>;

  const handleUpdateClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    props.updateClicked()
  };

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    props.deleteClicked()
  };

  return (
    <Grid item sm={6} lg={4}>
      <Card className={classes.root} onClick={props.patientClicked}>
        <Grid container>
          <Grid container item sm={3}>
            <CardMedia image={props.patient.imageSrc} className={classes.cover} />
          </Grid>
          <Grid item sm={9}>
            <CardHeader title={headingElement} subheader={props.patient.roomText}></CardHeader>
            <CardActions className={classes.actions}>
              <IconButton onClick={handleUpdateClick}>
                <EditIcon />
              </IconButton>
              <IconButton onClick={handleDeleteClick}>
                <DeleteIcon />
              </IconButton>
            </CardActions>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}

export default PatientGridItem;
