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

function Navbar() {
  const preventDefault = (event) => event.preventDefault();

  return (
    <Box component="nav" style={{ height: 230, zIndex: 1 }}>
      <AppBar
        style={{ background: '#008466', height: 230, zIndex: 1 }}
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
                style={{ fontSize: 12, fontWeight: 700, paddingLeft: 20 }}
              >
                Olá, Fulano
                <Link
                  href="#p"
                  onClick={preventDefault}
                  style={{ color: '#fff', display: 'block', fontSize: 16 }}
                >
                  Minha Conta
                </Link>
              </Typography>
              <IconButton>
                <KeyboardArrowDown style={{ color: '#fff' }} />
              </IconButton>
            </Box>
          </Box>
          <Typography style={styles.bigTittle}>Olá, Fulano</Typography>
        </Box>
      </AppBar>
    </Box>
  );
}

export default Navbar;
