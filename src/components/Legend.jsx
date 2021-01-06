import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Icon, IconButton, Paper } from '@material-ui/core';
import { CloseSharp, Lens } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  legend: {
    display: 'flex',
    justifyContent: 'center',
    minWidth: 120,
    position: 'absolute',
    zIndex: 100,
    backgroundColor: 'white',
    flexDirection: 'column',
    padding: theme.spacing(2),
    bottom: theme.spacing(3),
    right: theme.spacing(3),
  },
  icon: {
    fontSize: 10,
    marginRight: theme.spacing(1),
  },
  key: {
    fontSize: 16,
  },
}));

const Legend = ({ keys, show }) => {
  const classes = useStyles();
  const [isShown, setIsShown] = useState(show);

  const Key = ({ title, color }) => {
    return (
      <div className={classes.key}>
        <Icon className={classes.icon} style={{ color }}>
          <Lens />
        </Icon>
        {title}
      </div>
    );
  };

  const keyComponents = keys.map(({ title, color }) => {
    return <Key title={title} color={color} key={`${title}${color}`} />;
  });

  if (isShown) {
    return (
      <Paper elevation={3} className={classes.legend}>
        <IconButton size="small" onClick={() => setIsShown(false)}>
          <CloseSharp />
        </IconButton>
        {keyComponents}
      </Paper>
    );
  }
  return null;
};

export default Legend;
