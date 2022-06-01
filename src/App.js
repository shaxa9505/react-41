import React from 'react';
import Header from "./Header"
import Footer from "./Footer"
import {Route, Switch} from "react-router-dom"


import Home from "./Pages/Home";
import About from './Pages/About';
import Contact from './Pages/Contact';



function App() {
  return (
    <div>
      <Header />
      <main className="container content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route hash="header" path="/about" component={About} />
          <Route path="/contacts" component={Contact} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;