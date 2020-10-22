import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useHistory } from 'react-router-dom';
import RowValor from './RowValor';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  pointer: {
    cursor: 'pointer',
  },
});

export default function TabelaPesquisa(props) {
  const { valor } = props;

  const history = useHistory();
  const classes = useStyles();

  function handleCLick(e) {
    history.push('/dashboard');
  }
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>CPF/CNPJ</TableCell>
            <TableCell>Situação Cadastral</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <RowValor valor={valor} />
          <TableRow
            hover
            onClick={(e) => handleCLick(e)}
            className={classes.pointer}
          >
            <TableCell component="th" scope="row">
              Fulano de Tal da Silva
            </TableCell>
            <TableCell>000.000.000-00</TableCell>
            <TableCell>Associado</TableCell>
          </TableRow>
          <RowValor valor={valor} />
          <RowValor valor={valor} />
          <RowValor valor={valor} />
          <RowValor valor={valor} />
          <RowValor valor={valor} />
          <RowValor valor={valor} />
          <RowValor valor={valor} />
        </TableBody>
      </Table>
    </TableContainer>
  );
}
