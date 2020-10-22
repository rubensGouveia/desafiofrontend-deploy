import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  row: {
    background: '#ccc',
  },
});

export default function RowValor(props) {
  const { valor } = props;

  const classes = useStyles();

  return (
    <TableRow className={classes.row}>
      <TableCell component="th" scope="row">
        {valor}
      </TableCell>
      <TableCell>715.652.847-11</TableCell>
      <TableCell>Falecido</TableCell>
    </TableRow>
  );
}
