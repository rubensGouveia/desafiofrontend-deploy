import React from 'react';

import Container from '@material-ui/core/Container';

import Navbar from '../../components/Navbar';
import Main from '../../components/Main';

function Dashboard() {
  return (
    <>
      <Navbar label="Atendimento - Fulando de tal " />
      <Main />

      <Container />
    </>
  );
}

export default Dashboard;
