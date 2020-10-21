import React, { useState } from 'react';

import { Typography, Box, Paper, Button, Grid } from '@material-ui/core';

import Simular from './simular';
import CreditoDisponivel from './CreditoDisponivel';
import EmAndamento from './EmAndamento';
import styles from '../styles/styles';

function Main() {
  const [openModal, setOpenModal] = useState(false);

  function handleCLose() {
    setOpenModal(false);
  }
  function onSimular() {
    setOpenModal(true);
  }

  return (
    <>
      <Box className="container row" style={{ marginTop: -100, zIndex: 1111 }}>
        <Box className="col s12 m12 l7">
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
          <CreditoDisponivel onSimular={onSimular} />
          <EmAndamento onSimular={onSimular} />
        </Box>

        <Box className="col s12 m12 l5">
          <Paper style={styles.paper} elevation={3}>
            <Typography style={styles.tittle}>Informações Gerais</Typography>
            <Box style={styles.m15}>
              <Typography style={styles.p}>Nome</Typography>
              <Typography style={styles.b16}>
                Fulando de tal da Silva
              </Typography>
            </Box>
            <Box style={styles.m15}>
              <Typography style={styles.p}>E-mail</Typography>
              <Typography style={styles.b16}>Fulando@gmail.com</Typography>
            </Box>
            <Box style={styles.row}>
              <Box style={styles.m15}>
                <Typography style={styles.p}>Nascimento</Typography>
                <Typography style={styles.b16}>03/06/2000</Typography>
              </Box>

              <Box style={{ ...styles.m15, marginLeft: 15 }}>
                <Typography style={styles.p}>CPF</Typography>
                <Typography style={styles.b16}>000.000.000-00</Typography>
              </Box>
            </Box>

            <Box style={styles.row}>
              <Box style={styles.m15}>
                <Typography style={styles.p}>Renda Mensal</Typography>
                <Typography style={styles.b16}>R$5.500,00</Typography>
              </Box>
              <Box style={{ ...styles.m15, marginLeft: 15 }}>
                <Typography style={styles.p}>Risco Operacional</Typography>
                <Typography style={styles.b16}>B</Typography>
              </Box>
            </Box>
            <Button
              color="primary"
              style={{ margin: '0 auto', width: 160, marginTop: 15 }}
            >
              ALTERAR DADOS
            </Button>
          </Paper>
          <Typography style={{ ...styles.tittle, ...styles.m30 }}>
            Veja como está a situação do Associado
          </Typography>

          <Paper style={styles.paper2}>
            <Typography style={styles.b16}>Situação no Serasa</Typography>
            <Box style={{ ...styles.row, alignItems: 'center' }}>
              <img
                src="http://arcof.com.br/wp-content/uploads/2020/06/ICON1.png"
                alt="Icon CPF"
              />
              <Box>
                <Typography style={{ ...styles.p, marginLeft: 15 }}>
                  Nenhuma dívida em seu CPF na Serasa
                </Typography>
                <Typography style={{ ...styles.pzinho, marginLeft: 15 }}>
                  Última consulta 20/10/2020
                </Typography>
              </Box>
            </Box>
          </Paper>

          <Paper style={styles.paper2}>
            <Typography style={styles.b16}>
              Situação na Receita Federal
            </Typography>
            <Box style={{ ...styles.row, alignItems: 'center' }}>
              <img
                src="http://arcof.com.br/wp-content/uploads/2020/06/ICON2.png"
                alt="Icon CPF"
              />
              <Box>
                <Typography style={{ ...styles.p, marginLeft: 15 }}>
                  CPF: <b>Regular</b>
                </Typography>
                <Typography style={{ ...styles.pzinho, marginLeft: 15 }}>
                  Última consulta 20/10/2020
                </Typography>
              </Box>
            </Box>
          </Paper>

          <Paper style={styles.paper2}>
            <Typography style={styles.b16}>Situação no SPC</Typography>
            <Box style={{ ...styles.row, alignItems: 'center' }}>
              <img
                src="http://arcof.com.br/wp-content/uploads/2020/06/ICON1.png"
                alt="Icon CPF"
              />
              <Box>
                <Typography style={{ ...styles.p, marginLeft: 15 }}>
                  Nenhuma dívida em seu CPF no SPC
                </Typography>
                <Typography style={{ ...styles.pzinho, marginLeft: 15 }}>
                  Última consulta 20/10/2020
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>

      <Simular open={openModal} close={handleCLose} />
    </>
  );
}

export default Main;
