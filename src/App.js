import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Home from '../src/components/Home'; 
import Programming from '../src/components/Programming';
import Mechatronic from '../src/components/Mechatronic';
import Contacts from '../src/components/Contacts';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/programacao" component={Programming} />
          <Route path="/projetos-mecatronicos" component={Mechatronic} />
          <Route path="/contatos" component={Contacts} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
