import React from 'react';

import {
  AppBar,
  Link,
  IconButton,
  Avatar,
  Typography,
  Box,
} from '@material-ui/core';

import { KeyboardArrowDown, PersonOutlineRounded } from '@material-ui/icons';
import styles from '../styles/styles';

function Navbar(props) {
  const preventDefault = (event) => event.preventDefault();
  const { label } = props;

  return (
    <Box component="nav" style={{ height: 230, zIndex: 1 }}>
      <AppBar
        style={{ background: '#fdc000', height: 230, zIndex: 1 }}
        position="initial"
      >
        <Box className="container row" style={{ padding: 24 }}>
          <Box component="div" style={styles.rowBetween}>
            <Typography
              variant="h4"
              component="h2"
              style={{ fontStyle: 'italic' }}
            >
              LOGO
            </Typography>

            <Box component="div" style={styles.row}>
              <Avatar style={{ background: '#fff' }}>
                <PersonOutlineRounded style={{ color: '#000000DE' }} />
              </Avatar>

              <Typography
                style={{ fontSize: 12, fontWeight: 700, paddingLeft: 10 }}
              >
                Olá, Maria
                <Link
                  href="#p"
                  onClick={preventDefault}
                  style={{ color: '#fff', display: 'block', fontSize: 16 }}
                >
                  Atendente
                </Link>
              </Typography>
              <IconButton>
                <KeyboardArrowDown style={{ color: '#fff' }} />
              </IconButton>
            </Box>
          </Box>
          <Typography style={styles.bigTittle}>{label}</Typography>
        </Box>
      </AppBar>
    </Box>
  );
}

export default Navbar;
