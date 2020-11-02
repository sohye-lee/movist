import React from 'react';

//components
import Header from './components/Header/HeaderComponent';
import Home from './components/HomeComponent';

//styles
import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <GlobalStyle />
    </div>
  );
}

export default App;
