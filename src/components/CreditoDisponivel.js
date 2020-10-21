import React from 'react';
import { Typography, Paper, Button, Grid, makeStyles } from '@material-ui/core';

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
    marginLeft: '22%',
    marginRight: '22%',
  },
});

function CreditoDisponivel(props) {
  const { onSimular } = props;
  const classes = useStyles();
  return (
    <Paper style={{ ...styles.paper }} elevation={3}>
      <Grid container justify="space-around" alignContent="space-around">
        <div className={classes.destaque}>
          <Typography style={styles.tittle}>
            Produtos De Crédito Disponiveis
          </Typography>
        </div>
      </Grid>
      <div className={classes.apertar}>
        <Grid container justify="space-between">
          <Typography style={styles.p}>Credito Garantido</Typography>
          <Typography style={styles.b16}>R$ 14.000,00</Typography>
        </Grid>
        <Grid container justify="space-between">
          <Typography style={styles.p}>Credito Parcelado Curto</Typography>
          <Typography style={styles.b16}>R$ 44.000,00</Typography>
        </Grid>

        <Grid container justify="space-between">
          <Typography style={styles.p}>Credito Parcelado Longo</Typography>
          <Typography style={styles.b16}>R$ 85.500,00</Typography>
        </Grid>
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={onSimular}
        style={{ margin: '0 auto', ...styles.m30 }}
      >
        Simular Emprestimo
      </Button>
    </Paper>
  );
}

export default CreditoDisponivel;
