import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Icon, Paper } from '@material-ui/core';

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

const Legend = ({ keys }) => {
  const classes = useStyles();

  const Key = ({ title, color }) => {
    return (
      <div className={classes.key}>
        <Icon className={classes.icon} style={{ color }}>
          lens
        </Icon>
        {title}
      </div>
    );
  };

  const keyComponents = keys.map(({ title, color }) => {
    return <Key title={title} color={color} key={`${title}${color}`} />;
  });

  return (
    <Paper elevation={3} className={classes.legend}>
      {keyComponents}
    </Paper>
  );
};

export default Legend;
