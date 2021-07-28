import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SideBar from './components/SideBar/SideBar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
    
  return (
    <div>
          <div className="container-fluid">
              <div className="row">

                    <Router>

                        

                      <div className="col-md-2 col-sm-3">
                          <div className="side-bar">
                              <SideBar/>
                          </div>
                      </div>
                      

                      <Switch>
                          <div className="col-md-10 col-sm-9">
                              <div className="all-content">

                                <Route exact path="/">
                                    <Home/>
                                </Route>

                                <Route path="/home">
                                    <Home/>
                                </Route>

                                <Route path="/about">
                                    <About/>
                                </Route>

                                <Route path="/projects">
                                    <Projects/>
                                </Route>

                                <Route path="/contact">
                                    <Contact/>
                                </Route>

                              

                              </div>
                          </div>

                      </Switch>
                  </Router>

              </div>
          </div>
      </div>
  );
}

export default App;
