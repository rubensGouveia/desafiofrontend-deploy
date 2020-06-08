import React from 'react';

import Container from '@material-ui/core/Container';

import Navbar from '../../components/Navbar';
import Main from '../../components/Main';

function Dashboard() {
  return (
    <>
      <Navbar />
      <Main style={{ marginTop: -50 }} />

      <Container />
    </>
  );
}

export default Dashboard;
