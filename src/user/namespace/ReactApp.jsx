import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import ReactRouter ,{ hashHistory , Route , Router ,IndexRoute} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Layout from '../routes/layout';
import Snackbar from 'material-ui/Snackbar';

import Admin from '../routes/admin';

import Intros from '../routes/intros';
import Keyboard from '../routes/keyboard';
import Logs from '../routes/logs';
import Audio from '../routes/audio';
import Mouse from '../routes/Mouse';
import Info from '../routes/Info';

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
              <IndexRoute component={Admin}></IndexRoute>
                <Route path ='logs' component={Logs}></Route>
                <Route path ='audio' component={Audio}></Route>
                <Route path ='keyboard' component={Keyboard}></Route>
                <Route path ='mouse' component={Mouse}></Route>
                <Route path ='info' component={Info}></Route>

            </Route>

          </Router>

          </div>

        </MuiThemeProvider>
      </div>)
    }
}


ReactDOM.render(<App/> , document.getElementById('app'))
