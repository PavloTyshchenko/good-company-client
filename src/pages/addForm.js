import React, { useState } from 'react';
import { graphql, compose } from 'react-apollo';

// styles
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Layout from '../components/layout';
import Head from '../components/head';

// queries
import { addQuestionnaireMutation, getQuestionnairesQuery } from '../queries/queries';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


const AddForm = (props) => {

  const classes = useStyles();

  const [values, setValues] = useState({
    name: '',
    tent: false,
    sleepingBag: false,
    rug: false,
    flashlight: false,
    banana: false,
    dishes: false,
    brezent: false,
    charger: false,
    smoking: false,
    road: '',
    comments: '',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const onSubmit = (e) => {
    // how to prevent default?

    props.addQuestionnaireMutation({
      variables: {
        name: values.name,
        tent: values.tent,
        sleepingBag: values.sleepingBag,
        rug: values.rug,
        flashlight: values.flashlight,
        banana: values.banana,
        dishes: values.dishes,
        brezent: values.brezent,
        charger: values.charger,
        smoking: values.smoking,
        road: values.road,
        comments: values.comments
      },
      refetchQueries: [{ query: getQuestionnairesQuery}]
    })
  };



  return (
    <Layout>
      <Head title={"Анкета"} />

        <Typography component="h1" variant="h5">
          Анкета фестивальника
        </Typography>

        <form
          className={classes.form}
          onSubmit={onSubmit}
        >
          <Grid container spacing={2}>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Ім'я"
                autoFocus
                value={values.name}
                onChange={handleChange('name')}
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    value={values.tent}
                    onChange={() => setValues({ ...values, tent: !values.tent })}
                    color="primary" />
                }
                label="Намет"
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    value={values.sleepingBag}
                    onChange={() => setValues({ ...values, sleepingBag: !values.sleepingBag })}
                    color="primary" />
                }
                label="Спальний мішок"
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    value={values.rug}
                    onChange={() => setValues({ ...values, rug: !values.rug })}
                    color="primary" />
                }
                label="Каремат"
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    value={values.flashlight}
                    onChange={() => setValues({ ...values, flashlight: !values.flashlight })}
                    color="primary" />
                }
                label="Ліхтарик"
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    value={values.banana}
                    onChange={() => setValues({ ...values, banana: !values.banana })}
                    color="primary" />
                }
                label="Бананка"
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    value={values.dishes}
                    onChange={() => setValues({ ...values, dishes: !values.dishes })}
                    color="primary" />
                }
                label="Посуд (тарілка, чашка, прибори)"
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    value={values.brezent}
                    onChange={() => setValues({ ...values, brezent: !values.brezent })}
                    color="primary" />
                }
                label="Брезент + мотузки"
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    value={values.charger}
                    onChange={() => setValues({ ...values, charger: !values.charger })}
                    color="primary" />
                }
                label="Зарядний пристрій + павербенк"
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    value={values.smoking}
                    onChange={() => setValues({ ...values, smoking: !values.smoking })}
                    color="primary" />
                }
                label="Курець?"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="З ким і як їдеш, коротко"
                autoFocus
                value={values.road}
                onChange={handleChange('road')}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Короткий коментар"
                autoFocus
                value={values.comments}
                onChange={handleChange('comments')}
              />
            </Grid>

          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Додати
          </Button>
        </form>
        <Box mt={5}>
        </Box>

    </Layout>
      )
    };
    
export default compose(
  graphql(getQuestionnairesQuery, { name: "getQuestionnairesQuery"}),
  graphql(addQuestionnaireMutation, { name: "addQuestionnaireMutation"})
  
)(AddForm);