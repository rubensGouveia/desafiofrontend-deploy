import React, { useState } from 'react';

import {
  TextField,
  Typography,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  Checkbox,
  FormControlLabel,
  Dialog,
  Grid,
  makeStyles,
} from '@material-ui/core';
import styles from '../styles/styles';

const useStyles = makeStyles({
  dialog: {
    padding: 70,
  },
});

function Simular(props) {
  const [age, setAge] = useState('');

  const classes = useStyles();
  const { open, close } = props;

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
    <Dialog open={open} fullWidth maxWidth="lg" onClose={close}>
      <Grid container className={classes.dialog}>
        <Typography style={styles.tittle}>Simule seu emprestimo</Typography>

        <Box className="container row" style={{ ...styles.m15, width: '100%' }}>
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
      </Grid>
    </Dialog>
  );
}

export default Simular;
