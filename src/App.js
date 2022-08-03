import React, { Component } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Test from './components/test/Test';

import { Provider } from './Context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';

class App extends Component {
  render() {
  return (
    <Provider>
      <Router basename={process.env.PUBLIC_URL}>
    <div className="App">
    <h1>Contact Manager</h1>
    <Header branding="Contact Manager" />
    <div className="container">
   <Routes>
     <Route exact path="/" element={<Contacts />} /> 
     <Route exact path="/contact/add" element={<AddContact />} />
     <Route exact path="/contact/edit/:id" element={<EditContact />} />
    <Route exact path="/about" element={<About />} /> 
    <Route exact path="/test" element={<Test />} /> 
    <Route element={<NotFound />} />
   </Routes>
    </div>
    </div>
    </Router>
    </Provider>
  );
 }
}

export default App;
