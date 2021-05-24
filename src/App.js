import React from 'react';
import './App.css';
import { Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Components/Header';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Textfield from './Components/FormsUI/Textfield';
import Select from './Components/FormsUI/Select';
import countries from './data/countries.json';
import DateTimePicker from './Components/FormsUI/DateTimePicker';
import Checkbox from './Components/FormsUI/Checkbox';
import Button from './Components/FormsUI/Button';

const useStyles = makeStyles((Theme) => ({
  formWapper: {
    marginTop: Theme.spacing(5),
    marginBottom: Theme.spacing(8),
  },
}));

const INITIAL_FORM_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  addressLine1: '',
  addressLine2: '',
  city: '',
  state: '',
  country: '',
  arrivalDate: '',
  departureDate: '',
  message: '',
  termsOfService: false,
};

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string()
    .required('Required'),
  lastName: Yup.string()
    .required('Rquired'),
  email: Yup.string()
    .email('Invalid Email')
    .required('Required'),
  phone: Yup.number()
    .integer()
    .typeError('Please enter a valid phone number')
    .required('Required'),
  addressLine1: Yup.string()
    .required('Required'),
  addressLine2: Yup.string(),
  city: Yup.string()
    .required('Required'),
  state: Yup.string()
    .required('Required'),
  country: Yup.string()
    .required('Required'),
  arrivalDate: Yup.date()
    .required('Required'),
  departureDate: Yup.date()
    .required('Required'),
  message: Yup.string(),
  termsOfMessage: Yup.boolean()
    .oneOf([true], 'The terms and conditions must be accepted.')
    .required('The terms and conditions must be accepted.'),
})

const App = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="md">
            <div className={classes.formWrapper}>

            <Formik
              initialValues= {{
                ...INITIAL_FORM_STATE
              }}
              validationSchema={FORM_VALIDATION}
              onSubmit={(values, actions) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }, 1000);
              }}
            >
              <Form>

                <Grid container spacing={2}>
                  <Grid item xs={12} style={{marginTop: "20px"}}>
                    <Typography>
                      Your details
                    </Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield 
                      name="firstName"
                      label="First Name"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Textfield 
                      name="lastName"
                      label="Last Name"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Textfield 
                      name="email"
                      label="Email"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Textfield 
                      name="phone"
                      label="Phone No"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography>
                      <Textfield 
                        name='addressLine1'
                        label="Address Line 1"
                      />
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>
                      <Textfield 
                        name='addressLine2'
                        label="Address Line 2"
                      />
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>
                      <Textfield 
                        name='city'
                        label="City"
                      />
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>
                      <Textfield 
                        name='state'
                        label="State"
                      />
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                      <Select 
                        name='country'
                        label="Country"
                        options={countries}
                      />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography>
                      Booking Information
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <DateTimePicker 
                      name="arrivalDate"
                      label="Arrival Date"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <DateTimePicker 
                      name="departureDate"
                      label="Departure Date"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Textfield 
                      name='message'
                      label='Leave Your Message'
                      multiline={true}
                      rows={4}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Checkbox 
                      name='termsOfMessage'
                      legend="Terms Of Service"
                      label="I agree"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button>
                      Submit Form
                    </Button>
                  </Grid>


                </Grid>
                

              </Form>
            </Formik>



            </div>
        </Container>

      </Grid>
    </Grid>
  );
}

export default App;
