import React from 'react';
let {Component} = React;
import {withRouter} from 'react-router';


class Layout extends Component {
  constructor(props) {
    super();
    this.state = {
      open: false,
      msg: '',
      selectedIndex:2
    };
  }
  componentDidMount() {

  }
  componentWillMount() {}

  render() {
    let {state, props} = this;
    return (
      <div className='layout'>
      {this.props.children}
      </div>
    )
  }
}
export default withRouter(Layout)
