import React, { useState } from 'react';

import {
  Container,
  TextField,
  Typography,
  Box,
  Paper,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';

// import { KeyboardArrowDown, PersonOutlineRounded } from '@material-ui/icons';
import styles from '../styles/styles';

function Main() {
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [state, setState] = useState({
    checkedC: false,
    checkedB: true,
  });

  const handleCheckChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const marks = [
    {
      value: 6,
      label: '6x',
    },
    {
      value: 12,
      label: '12x',
    },
    {
      value: 18,
      label: '18x',
    },
  ];

  return (
    <>
      <Box className="container row" style={{ marginTop: -100, zIndex: 1111 }}>
        <Box className="col s12 m12 l7">
          <Paper style={styles.paper} elevation={3}>
            <Typography style={styles.tittle}>
              Fulano, você tem <i>CredSim </i>disponível
            </Typography>

            <Typography style={styles.p}>
              CredSim é o nosso crédito descomplicado, basta ativar que ele
              <br />
              entra automaticamente na sua conta.
            </Typography>
            <Container className="container row" style={styles.m15}>
              <Box
                component="div"
                className="col s12 m6"
                style={{ ...styles.m15, textAlign: 'center' }}
              >
                <Typography style={styles.b16}>Valor disponível</Typography>
                <Typography variant="h4" style={{ fontWeight: 700 }}>
                  R$4.500,00
                </Typography>
              </Box>

              <Box
                component="div"
                className="col s12 m6"
                style={{ ...styles.m15, textAlign: 'center' }}
              >
                <Typography style={styles.b16}>Numero de parcelas</Typography>
                <Slider
                  defaultValue={0}
                  aria-labelledby="discrete-slider-custom"
                  step={1}
                  valueLabelDisplay="auto"
                  marks={marks}
                  max={18}
                  min={6}
                />
              </Box>
            </Container>
            <Button
              variant="contained"
              color="primary"
              style={{ margin: '0 auto', width: 90 }}
            >
              ATIVAR
            </Button>
          </Paper>

          <Paper style={{ ...styles.paper, minHeight: 500 }} elevation={3}>
            <Typography style={styles.tittle}>Simule seu emprestimo</Typography>

            <Box
              className="container row"
              style={{ ...styles.m15, width: '100%' }}
            >
              <Box component="div" className="col s12 m6" style={styles.m15}>
                <form
                  noValidate
                  autoComplete="off"
                  style={{ display: 'flex', flexDirection: 'column' }}
                >
                  <TextField id="standard-basic" label="Valor desejado" />

                  <FormControl style={styles.m30}>
                    <InputLabel id="demo-simple-select-label">
                      Motivo de empréstimo
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Refinanciar dívidas</MenuItem>
                      <MenuItem value={20}>Pagar cartão de crédito</MenuItem>
                      <MenuItem value={30}>
                        Pagar dívida do cheque especial
                      </MenuItem>
                      <MenuItem value={40}>Comprar veículo</MenuItem>
                      <MenuItem value={50}>
                        Comprar ou fazer reforma a sua casa
                      </MenuItem>
                      <MenuItem value={60}>Tratamento médico</MenuItem>
                      <MenuItem value={70}>Tirar férias</MenuItem>
                      <MenuItem value={80}>
                        Compras especiais (joias, eletrônicos, etc)
                      </MenuItem>
                      <MenuItem value={90}>Investir na minha empresa</MenuItem>
                      <MenuItem value={100}>Educação</MenuItem>
                      <MenuItem value={110}>Outro motivo</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    id="date"
                    label="Data do primeiro pagamento"
                    type="date"
                    defaultValue="2020-08-24"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    style={styles.m30}
                  />
                </form>
              </Box>

              <Box
                component="div"
                className="col s12 m6"
                style={{
                  ...styles.m15,
                  textAlign: 'center',

                  boxSizing: 'border-box',
                }}
              >
                <Typography style={styles.b16}>Numero de parcelas</Typography>
                <Slider
                  defaultValue={0}
                  aria-labelledby="discrete-slider-custom"
                  step={1}
                  valueLabelDisplay="auto"
                  marks={marks}
                  max={18}
                  min={6}
                />
                <Typography style={{ ...styles.b16, ...styles.m30 }}>
                  Melhore sua oferta
                </Typography>
                <Typography style={{ fontSize: 11 }}>
                  Com a inclusão de um veículo ou um imóvel suas ofertas de
                  empréstimo podem melhorar muito
                </Typography>

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.checkedB}
                      onChange={handleCheckChange}
                      name="checkedB"
                      color="primary"
                    />
                  }
                  label="Tenho veículo em meu nome"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.checkedC}
                      onChange={handleCheckChange}
                      name="checkedC"
                      color="primary"
                    />
                  }
                  label="Tenho imóvel em meu nome"
                />
              </Box>
            </Box>
            <Button
              variant="contained"
              color="primary"
              style={{ margin: '0 auto', width: 90, ...styles.m30 }}
            >
              Simular
            </Button>
          </Paper>
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

            <Box style={styles.m15}>
              <Typography style={styles.p}>Renda Mensal</Typography>
              <Typography style={styles.b16}>R$5.500,00</Typography>
            </Box>
            <Button
              color="primary"
              style={{ margin: '0 auto', width: 160, marginTop: 15 }}
            >
              ALTERAR DADOS
            </Button>
          </Paper>
          <Typography style={{ ...styles.tittle, ...styles.m30 }}>
            Veja como está sua situação
          </Typography>
          <Typography style={styles.p}>
            Pendencias podem diminuir seu crédito
          </Typography>

          <Paper style={styles.paper2}>
            <Typography style={styles.b16}>Situação no Serasa</Typography>
            <Box style={{ ...styles.row, alignItems: 'center' }}>
              <img
                src="http://arcof.com.br/wp-content/uploads/2020/06/ICON1.png"
                alt="Icon CPF"
              />
              <Typography style={{ ...styles.p, marginLeft: 15 }}>
                Nenhuma dívida em seu CPF na Serasa
              </Typography>
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
              <Typography style={{ ...styles.p, marginLeft: 15 }}>
                CPF: <b>Regular</b>
              </Typography>
            </Box>
          </Paper>

          <Paper style={styles.paper2}>
            <Typography style={styles.b16}>Situação no SPC</Typography>
            <Box style={{ ...styles.row, alignItems: 'center' }}>
              <img
                src="http://arcof.com.br/wp-content/uploads/2020/06/ICON1.png"
                alt="Icon CPF"
              />
              <Typography style={{ ...styles.p, marginLeft: 15 }}>
                Nenhuma dívida em seu CPF no SPC
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Box>
    </>
  );
}

export default Main;
