import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    position: 'absolute',
    zIndex: 100,
    backgroundColor: 'white',
    marginTop: theme.spacing(10),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  flex: {
    display: 'flex',
    justifyContent: 'center',
  },
  font: {
    fontsize: 12,
  },
}));

// Filter for business markers
export default function NativeSelects(props) {
  const classes = useStyles();
  const { category, setCategory } = props;
  const [openTooltip, setOpenTooltip] = useState(true);

  // Changing filter category
  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className={classes.flex}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="simple-select-outlined-label">Filter</InputLabel>
        <Tooltip
          open={openTooltip}
          title="Select a category to show markers"
          arrow
        >
          <Select
            labelId="simple-select-outlined-label"
            id="simple-select-outlined"
            value={category}
            onChange={handleChange}
            label="Filter"
            onOpen={() => {
              setOpenTooltip(false);
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Food & Coffee">Food & Coffee</MenuItem>
            <MenuItem value="Retail">Retail</MenuItem>
            <MenuItem value="Services">Services</MenuItem>
            <MenuItem value="Entertainment">Entertainment</MenuItem>
          </Select>
        </Tooltip>
      </FormControl>
    </div>
  );
}
