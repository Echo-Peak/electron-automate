import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import ReactRouter ,{ hashHistory , Route , Router ,IndexRoute } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Layout from '../routes/layout';
import Snackbar from 'material-ui/Snackbar';
import Admin from '../routes/admin';
import System from '../routes/system';
import BrowserWindows from '../routes/browser-windows';
import Shell from '../shell';
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
import {Stores} from '../store';
import uuid from '../util/uuid';
import WindowPreview from '../routes/browser-window-preview';


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
      let routes = [
        {route:'logs',store:null, elm:Logs},
        {route:'system',store:null, elm:System},
        {route:'windows',store:null, elm:BrowserWindows},
        {route:'shell',store:null, elm:Shell},
        {route:'audio',store:Stores.audio, elm:Audio},
        {route:'keyboard',store:null, elm:Keyboard},
        {route:'mouse',store:null, elm:Mouse},
        {route:'tasker',store:null, elm:Tasker},
        {route:'file-system',store:null, elm:FileSystem},
        {route:'info',store:null, elm:Info},
        {route:'scripts',store:null, elm:Scripts},
        {route:'npm',store:null, elm:NpmUI},
        {route:'app',store:null, elm:AppActions},
        {route:'preview',store:Stores.browserWindow, elm:WindowPreview},
      ];

      return (<div >
        <MuiThemeProvider>
        <Router history={hashHistory}>

            <Route path ='/' name='home' component={(props) => <Layout _props={props} store={Stores.browserWindow}/>}>

                <IndexRoute component={Admin}></IndexRoute>
                {routes.map(e => (
                  <Route key = {uuid()} component={f =><e.elm store={e.store}/> } path={e.route}>
                </Route>))}
            </Route>

          </Router>
        </MuiThemeProvider>
      </div>)
    }
}


ReactDOM.render(<App/> , document.getElementById('app'))
