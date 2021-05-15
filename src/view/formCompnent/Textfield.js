import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    paddingTop: theme.spacing(1),
    height: 40,
    width: "100%",
    background:"#F2F2F2",

  },
}));

export default function Textfield(props) {
  const classes = useStyles();
  const userData = props.userData
  const formData = props.formData
  const handleChange = props.func

  return (
    <form className={classes.container} noValidate>
      <TextField
        label={props.heading}
        type={formData.type}
        name={formData.name}
        value={userData}
        placeholder={props.placeholder}
        className={classes.textField}
        onChange={handleChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}
