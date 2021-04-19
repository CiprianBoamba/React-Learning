import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import User from './components/users/User';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

import './App.css';

const App = () => {

    return (
      <GithubState>
        <AlertState>
           <Router>
              <div className='App'>
               <Navbar />
                  <div className="container">
                    <Alert/>
                    <Switch>
                      <Route  exact path='/' component={Home}/>
                      <Route exact path='/about' component={About}/>
                      <Route exact path='/user/:login' component ={User} />
                      <Route component={NotFound}/>
                    </Switch>
                  </div>
              </div>
           </Router>
         </AlertState>
      </GithubState>
    );
  
}

export default App;


// loading={this.state.loading} users={this.state.users}

//use this to fetch api so i can manage how it look&work
// async componentDidMount() {
  //   //use this function when we get a req from http:
  //   // console.log(process.env.REACT_APP_GITHUB_ID)
  //   this.setState({loading: true});

  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
  //   this.setState({users: res.data, loading: false});

  // };