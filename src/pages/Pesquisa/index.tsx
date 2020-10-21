import React from 'react';

import Container from '@material-ui/core/Container';

import Navbar from '../../components/Navbar';
import PesquisaBody from '../../components/PesquisaBody';

function Dashboard() {
  return (
    <>
      <Navbar label="Pesquise um Associado" />
      <PesquisaBody />

      <Container />
    </>
  );
}

export default Dashboard;
