/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {
  BrowserRouter as Router,
  // Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
// import { Routes ,Route, Switch } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      message : message,
      type : type
    })
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor= 'dark';
      document.title = 'Textutils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor= 'light';
      document.title = 'Textutils - Light Mode';
    }
  }
  return (
    <>
      <Navbar title="Lozown" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Router>
    <Routes>
        <Route exact path="/About" component={ <About/>} />
        <Route exact path="/TextForm" component={<TextForm heading="Enter The Text To Analyse" mode={mode} /> } />
        {/* <Route exact path="/Nabbar" component={<Navbar title="Lozown" mode={mode} toggleMode={toggleMode} />} /> */}
    </Routes>
</Router>
      {/* <Switch>
          <Route path="/about">
           
          </Route>
          <Route path="/">
           
          </Route>
        </Switch> */}
      {/* <TextForm heading="Enter The Text To Analyse" mode={mode} />       */}
    </>
  );
}

export default App;
