import React from 'react';

import Navbar from '../../components/Navbar';
import PesquisaBody from '../../components/PesquisaBody';

function Dashboard() {
  return (
    <>
      <Navbar label="Pesquise um Associado" />
      <PesquisaBody />
    </>
  );
}

export default Dashboard;
