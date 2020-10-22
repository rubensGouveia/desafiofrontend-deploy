import React, { useState } from 'react';

import { Box, Paper, Grid } from '@material-ui/core';
import InputCustomizado from './inputCustomizado';
import TablePesquisa from './TablePesquisa';

import styles from '../styles/styles';

function PesquisaBody() {
  const [valor, setValor] = useState('');
  const [value, setValue] = useState('');

  function atualizarValue(value) {
    setValue(value);
  }

  function setarValor(e, value) {
    e.preventDefault();
    setValor(value);
  }
  return (
    <>
      <Box className="container row" style={{ marginTop: -100, zIndex: 1111 }}>
        <Box className="col s12 m12 l12">
          <Paper style={styles.paper} elevation={3}>
            <Grid container spacing={5}>
              <Grid item xs={12}>
                <InputCustomizado
                  onClick={setarValor}
                  value={value}
                  setValue={atualizarValue}
                />
              </Grid>
              {valor !== '' && (
                <Grid item xs={12}>
                  <TablePesquisa valor={valor} />
                </Grid>
              )}
            </Grid>
          </Paper>
        </Box>
      </Box>
    </>
  );
}

export default PesquisaBody;
