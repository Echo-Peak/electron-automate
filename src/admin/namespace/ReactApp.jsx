import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import ReactRouter ,{ hashHistory , Route , Router ,IndexRoute} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Layout from '../routes/layout';
import Snackbar from 'material-ui/Snackbar';
import Admin from '../routes/admin';
import System from '../routes/system';
import BrowserWindows from '../routes/browser-windows';
import Shell from '../routes/shell';
import Keyboard from '../routes/keyboard';
import Logs from '../routes/logs';
import Audio from '../routes/audio';
import Scripts from '../routes/Scripts';
import Mouse from '../routes/Mouse';
import FileSystem from '../routes/file-system';
import Info from '../routes/Info';
import NpmUI from '../routes/npm-ui';
import Tasker from '../routes/tasker';
import AppActions from '../routes/app';

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
                <Route path ='system' component={System}></Route>
                <Route path ='windows' component={BrowserWindows}></Route>
                <Route path ='shell' component={Shell}></Route>
                <Route path ='audio' component={Audio}></Route>
                <Route path ='keyboard' component={Keyboard}></Route>
                <Route path ='mouse' component={Mouse}></Route>
                <Route path ='tasker' component={Tasker}></Route>
                <Route path ='file-system' component={FileSystem}></Route>
                <Route path ='info' component={Info}></Route>
                <Route path ='scripts' component={Scripts}></Route>
                <Route path ='npm' component={NpmUI}></Route>
                <Route path ='app' component={AppActions}></Route>
            </Route>

          </Router>

          </div>

        </MuiThemeProvider>
      </div>)
    }
}


ReactDOM.render(<App/> , document.getElementById('app'))
