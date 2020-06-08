import { History } from 'history';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { 
    Box, Button, FormControl, FormControlLabel, FormLabel, 
    Grid, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField 
} from '@material-ui/core';
import { useForm } from "react-hook-form";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import Layout from '../components/shared/Layout';
import { useGetRoomsQuery } from '../generated/graphql';
import { Room } from '../models/Room';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mt: {
      marginTop: theme.spacing(2)
    }
  })
);

interface NewPatientPageProps {
    history: History;
}

const NewPatientPage = (props: NewPatientPageProps) => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data: any) => console.log(data);
    const classes = useStyles();
    const { data } = useGetRoomsQuery();

    const rooms = data?.rooms ? data?.rooms : [];

    const onCancelClicked = () => {
        props.history.push(`/dashboard`);
    };

    return (
        <Layout pageTitle="New Patient">
            <form noValidate autoComplete="off">
                <Grid container spacing={10}>
                    <Grid item xs={12} sm={6}>
                        <FormControl component="fieldset" fullWidth={true}>
                            <FormLabel component="legend">Personal Details</FormLabel>
                            
                            <TextField
                                error={!!errors.firstName}
                                className={classes.mt}
                                size="medium"
                                name="firstName"
                                label="First Name"
                                placeholder="First Name"
                                autoFocus
                                variant="filled"
                                inputRef={register({ required: true, maxLength: 255 })} />
                            {errors.firstName?.type === 'required' && <span>First name is required</span>}
                            {errors.firstName?.type === 'maxLength' && <span>First name must be less then 255 characters</span>}

                            <TextField
                                error={!!errors.lastName}
                                className={classes.mt}
                                name="lastName"
                                label="Last Name"
                                placeholder="Last Name"
                                variant="filled"
                                inputRef={register({ required: true, maxLength: 255 })} />
                            {errors.lastName?.type === 'required' && <span>Last name is required</span>}
                            {errors.lastName?.type === 'maxLength' && <span>Last name must be less then 255 characters</span>}

                            <FormControl component="fieldset" className={classes.mt}>
                                <FormLabel component="legend">Gender</FormLabel>
                                <RadioGroup aria-label="gender" name="gender">
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                </RadioGroup>
                            </FormControl>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl component="fieldset" fullWidth={true}>
                            <FormLabel component="legend">Room Allocation</FormLabel>
                            <InputLabel id="new-patient-room-number-label">Room Number</InputLabel>
                            <Select
                                ref={register}
                                fullWidth={true}
                                defaultValue=""
                                variant="filled"
                                labelId="new-patient-room-number-label"
                                className={classes.mt}>
                                    <MenuItem value="">Choose Room</MenuItem>
                                {rooms.map((r: Room) => (
                                    <MenuItem key={r.id} value={r.id}>{r.roomNumber}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>

                <Box display="inline-grid" gridTemplateColumns="1fr 1fr" gridColumnGap={15} marginTop={2}>
                    <Button variant="contained" onClick={onCancelClicked}>Cancel</Button>
                    <Button variant="contained" color="primary" onClick={handleSubmit(onSubmit)}>Create</Button>
                </Box>
            </form>
        </Layout>
    );
}

export default withRouter(NewPatientPage);
