import React from 'react';

import Layout from './compoments/Layout';
import NavBar from './compoments/NavBar';

import GlobalStyles from './styles/global';

function App() {
  return (
    <>
      <Layout>

        <NavBar />

      </Layout>
      <GlobalStyles />
    </>
  );
}

export default App;
