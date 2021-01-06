import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Popover, Typography } from '@material-ui/core';

// Styling
const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
  positioning: {
    position: 'absolute',
    bottom: 0,
    margin: theme.spacing(1),
  },
  color: {
    color: 'white',
    backgroundColor: 'red',
    '&:hover': {
      backgroundColor: 'darkred',
    },
  },
}));

// Button & Popover components
export default function SimplePopover() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const { color, positioning, typography } = classes;

  return (
    <div>
      <Button
        className={`${color} ${positioning}`}
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
      >
        Report Issue
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography className={typography}>
          To fill out an issue form, click{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.stpaul.gov/report-incident"
          >
            here
          </a>
        </Typography>
      </Popover>
    </div>
  );
}
