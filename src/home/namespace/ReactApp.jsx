import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import ReactRouter ,{ hashHistory , Route , Router ,IndexRoute} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Layout from '../routes/layout';
import Login from '../routes/login';

class App extends React.Component{
    constructor(props){
      super();
      this.state = {};
    }
    componentDidMount(){

    }
    componentWillMount(){

    }
    render(){
      return (<div>
        <MuiThemeProvider>
          <div>
          <Router history={hashHistory}>
            <Route path ='/' name='home' component={Layout}>
              <IndexRoute component={Login}></IndexRoute>
            </Route>
          </Router>
          </div>

        </MuiThemeProvider>
      </div>)
    }
}


ReactDOM.render(<App/> , document.getElementById('app'))
