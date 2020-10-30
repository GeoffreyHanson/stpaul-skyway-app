import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    position: 'absolute',
    zIndex: 100,
    backgroundColor: 'white',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  flex: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

// Filter for business markers
export default function NativeSelects(props) {
  const classes = useStyles();
  const { category, setCategory } = props;

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className={classes.flex}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="simple-select-outlined-label">Filter</InputLabel>
        <Select
          labelId="simple-select-outlined-label"
          id="simple-select-outlined"
          value={category.filter}
          onChange={handleChange}
          label="Filter"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Food & Coffee">Food & Coffee</MenuItem>
          <MenuItem value="Retail">Retail</MenuItem>
          <MenuItem value="Services">Services</MenuItem>
          <MenuItem value="Entertainment">Entertainment</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
