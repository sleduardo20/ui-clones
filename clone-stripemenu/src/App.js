import React from 'react';

import Layout from './components/Layout';
import NavBar from './components/NavBar';

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
