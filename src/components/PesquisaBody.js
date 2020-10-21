import React, { useState } from 'react';

import { Typography, Box, Paper, Button, Grid } from '@material-ui/core';

import styles from '../styles/styles';

function PesquisaBody() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Box className="container row" style={{ marginTop: -100, zIndex: 1111 }}>
        <Box className="col s12 m12 l12">
          <Paper style={styles.paper} elevation={3}>
            <Grid container spacing={5}>
              <Grid item>
                <Typography style={styles.tittle}>
                  Crédito Disponível
                </Typography>
                <Typography variant="h4" style={{ fontWeight: 700 }}>
                  R$85.500,00
                </Typography>
              </Grid>
              <Grid item>
                <Typography style={styles.tittle}>Valor Aplicado</Typography>
                <Typography variant="h4" style={{ fontWeight: 700 }}>
                  R$2.500,00
                </Typography>
              </Grid>
              <Grid item>
                <Typography style={styles.tittle}>Saldo Devedor</Typography>
                <Typography variant="h4" style={{ fontWeight: 700 }}>
                  R$4.500,00
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Box>
    </>
  );
}

export default PesquisaBody;
