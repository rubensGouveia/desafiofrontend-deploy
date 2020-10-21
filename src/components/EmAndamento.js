import React from 'react';
import { Typography, Paper, Grid, makeStyles } from '@material-ui/core';

import styles from '../styles/styles';

const useStyles = makeStyles({
  destaque: {
    width: 'max-content',

    padding: 5,
    marginBottom: 25,
    borderBottom: 7,
    borderBottomColor: '#fee369',
    borderBottomStyle: 'solid',
  },
  apertar: {
    marginLeft: '2%',
    marginRight: '2%',
  },
  box: {
    width: 'max-content',
    padding: 20,
    border: 2,
    borderColor: '#fee369',
    borderStyle: 'solid',
    borderRadius: 5,
  },
});

function CreditoDisponivel() {
  const classes = useStyles();
  return (
    <Paper style={{ ...styles.paper }} elevation={3}>
      <Grid container justify="space-around" alignContent="space-around">
        <div className={classes.destaque}>
          <Typography style={styles.tittle}>Contratados</Typography>
        </div>
      </Grid>
      <div className={classes.apertar}>
        <Grid container justify="space-around">
          <Grid
            item
            direction="column"
            justify="space-between"
            className={classes.box}
          >
            <Typography style={styles.b16}>Credito Parcelado Curto</Typography>
            <Typography style={styles.p}>
              Valor Solicitado: R$ 6.000,00
            </Typography>
            <Typography style={styles.p}>Parcelas Pagas: 3</Typography>
            <Typography style={styles.p}>Parcelas Restantes: 9</Typography>
            <Typography style={styles.p}>Valor Parcela: R$500,00</Typography>
            <Typography style={styles.p}>Status: Em dia</Typography>
          </Grid>
          <Grid
            item
            direction="column"
            justify="space-between"
            className={classes.box}
          >
            <Typography style={styles.b16}>RDCP</Typography>
            <Typography style={styles.p}>
              Valor Aplicado: R$ 2.300,00
            </Typography>
            <Typography style={styles.p}>Data Aplicação: 20/10/2018</Typography>
            <Typography style={styles.p}>Rendimento: R$ 200,00</Typography>
          </Grid>
        </Grid>
      </div>
    </Paper>
  );
}

export default CreditoDisponivel;
