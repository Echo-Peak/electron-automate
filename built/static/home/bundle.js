webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ReactApp = __webpack_require__(253);

	var _ReactApp2 = _interopRequireDefault(_ReactApp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },

/***/ 93:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {

	  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
	    var r = Math.random() * 16 | 0,
	        v = c == 'x' ? r : r & 0x3 | 0x8;
	    return v.toString(16);
	  });
	};

/***/ },

/***/ 253:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(11);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactTapEventPlugin = __webpack_require__(539);

	var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

	var _reactRouter = __webpack_require__(82);

	var _reactRouter2 = _interopRequireDefault(_reactRouter);

	var _MuiThemeProvider = __webpack_require__(205);

	var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

	var _layout = __webpack_require__(256);

	var _layout2 = _interopRequireDefault(_layout);

	var _login = __webpack_require__(257);

	var _login2 = _interopRequireDefault(_login);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	(0, _reactTapEventPlugin2.default)();

	var App = function (_React$Component) {
	  _inherits(App, _React$Component);

	  function App(props) {
	    _classCallCheck(this, App);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this));

	    _this.state = {};
	    return _this;
	  }

	  _createClass(App, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _MuiThemeProvider2.default,
	          null,
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              _reactRouter.Router,
	              { history: _reactRouter.hashHistory },
	              _react2.default.createElement(
	                _reactRouter.Route,
	                { path: '/', name: 'home', component: _layout2.default },
	                _react2.default.createElement(_reactRouter.IndexRoute, { component: _login2.default })
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return App;
	}(_react2.default.Component);

	_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('app'));

/***/ },

/***/ 254:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Dialog = __webpack_require__(58);

	var _Dialog2 = _interopRequireDefault(_Dialog);

	var _FlatButton = __webpack_require__(35);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	var _RaisedButton = __webpack_require__(105);

	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

	var _TextField = __webpack_require__(41);

	var _TextField2 = _interopRequireDefault(_TextField);

	var _colors = __webpack_require__(61);

	var _List = __webpack_require__(101);

	var _uuid = __webpack_require__(93);

	var _uuid2 = _interopRequireDefault(_uuid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;


	var styles = {
	  dialog: {
	    width: '100%',
	    maxWidth: 'none',
	    height: '100%',
	    transform: ''
	  },
	  messaages: {
	    height: 200,
	    overflowY: 'scroll'
	  },
	  //width:'100%'
	  inputField: {
	    height: 100

	  },
	  errorStyle: {
	    color: _colors.orange500
	  },
	  underlineStyle: {
	    borderColor: _colors.orange500
	  },
	  floatingLabelStyle: {
	    color: _colors.orange500
	  },
	  floatingLabelFocusStyle: {
	    color: _colors.blue500
	  },
	  container: {
	    position: 'absolute',
	    bottom: 0,
	    left: 0,
	    margin: 10
	  },
	  input: {
	    width: '100%'
	  }

	};

	var Chat = function (_Component) {
	  _inherits(Chat, _Component);

	  function Chat(props) {
	    _classCallCheck(this, Chat);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Chat).call(this));

	    _this.state = {
	      msgs: [],
	      open: false
	    };
	    return _this;
	  }

	  _createClass(Chat, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      sockets.Chat.on('new-message', function (newMsg) {
	        console.log('yay', newMsg);
	        _this2.state.msgs.push(newMsg);
	        _this2.refs.msgScroll.scrollTop = _this2.refs.msgScroll.offsetHeight;
	        _this2.setState({ msgs: _this2.state.msgs });
	      });
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'send',
	    value: function send() {
	      var input = this.refs.input.input.refs.input;

	      var name = window.internalAddress || 'Anoymonus';
	      input.value.length && sockets.Chat.emit('send-message', { name: name, msg: input.value });
	      console.log(input.value, { name: name, msg: input.value });
	      input.value = '';
	    }
	  }, {
	    key: 'toggleChatUI',
	    value: function toggleChatUI(bool) {
	      this.setState({ open: bool });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var actions = [_react2.default.createElement(_FlatButton2.default, {
	        label: 'close',
	        primary: true,
	        onTouchTap: this.toggleChatUI.bind(this, false)
	      })];
	      return _react2.default.createElement(
	        'div',
	        { style: styles.container },
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(_FlatButton2.default, { backgroundColor: '#EF5350', style: { color: 'white' }, label: 'open chat', secondary: true, onTouchTap: this.toggleChatUI.bind(this, true) }),
	          _react2.default.createElement(
	            _Dialog2.default,
	            {
	              className: 'chat-dialog',
	              title: 'Chat',
	              actions: actions,
	              modal: true,
	              autoDetectWindowHeight: true,
	              contentStyle: styles.dialog,
	              onRequestClose: this.toggleChatUI.bind(this, false),
	              open: this.state.open },
	            _react2.default.createElement(
	              'section',
	              { style: styles.messaages, ref: 'msgScroll' },
	              _react2.default.createElement(
	                _List.List,
	                null,
	                this.state.msgs.map(function (e) {
	                  return _react2.default.createElement(_List.ListItem, { key: (0, _uuid2.default)(), primaryText: _react2.default.createElement(
	                      'span',
	                      { style: { fontWeight: 'bold' } },
	                      e.name.replace(/\:|f/g, '')
	                    ), secondaryText: e.msg });
	                })
	              )
	            ),
	            _react2.default.createElement(
	              'section',
	              { style: styles.inputField },
	              _react2.default.createElement(_TextField2.default, { style: styles.input, multiLine: true, hintText: 'Write a message...',
	                hintStyle: styles.errorStyle, ref: 'input', id: 'input' }),
	              _react2.default.createElement('br', null),
	              _react2.default.createElement(_RaisedButton2.default, { label: 'send', primary: true, onTouchTap: this.send.bind(this) })
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Chat;
	}(Component);

	exports.default = Chat;

/***/ },

/***/ 255:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Dialog = __webpack_require__(58);

	var _Dialog2 = _interopRequireDefault(_Dialog);

	var _FlatButton = __webpack_require__(35);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	var _RaisedButton = __webpack_require__(105);

	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

	var _TextField = __webpack_require__(41);

	var _TextField2 = _interopRequireDefault(_TextField);

	var _colors = __webpack_require__(61);

	var _List = __webpack_require__(101);

	var _uuid = __webpack_require__(93);

	var _uuid2 = _interopRequireDefault(_uuid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;


	var styles = {
	  dialog: {
	    width: '100%',
	    maxWidth: 'none',
	    height: '80%'
	  },
	  messaages: {
	    height: 500,
	    overflowY: 'scroll',
	    width: '100%'
	  },
	  errorStyle: {
	    color: _colors.orange500
	  },
	  underlineStyle: {
	    borderColor: _colors.orange500
	  },
	  floatingLabelStyle: {
	    color: _colors.orange500
	  },
	  floatingLabelFocusStyle: {
	    color: _colors.blue500
	  },
	  container: {
	    position: 'absolute',
	    bottom: 0,
	    right: 0,
	    margin: 10
	  },
	  input: {
	    width: '100%'
	  }

	};

	var History = function (_Component) {
	  _inherits(History, _Component);

	  function History(props) {
	    _classCallCheck(this, History);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(History).call(this));

	    _this.state = {
	      open: false,
	      history: [{ user: 'admin', ip: '192.168.23.1', date: new Date() }]
	    };

	    sockets.System.on('update-history', function (historyArr) {
	      console.log(historyArr);
	      _this.setState({ history: historyArr });
	    });
	    sockets.System.emit('get-history');
	    return _this;
	  }

	  _createClass(History, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'toggleHistory',
	    value: function toggleHistory(bool) {
	      this.setState({ open: bool });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var actions = [_react2.default.createElement(_FlatButton2.default, {
	        label: 'close',
	        primary: true,

	        onTouchTap: this.toggleHistory.bind(this, false)
	      })];

	      return _react2.default.createElement(
	        'div',
	        { style: styles.container },
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(_FlatButton2.default, { backgroundColor: '#EF5350', style: { color: 'white' }, label: 'open History', onTouchTap: this.toggleHistory.bind(this, true) }),
	          _react2.default.createElement(
	            _Dialog2.default,
	            {
	              title: 'History',
	              actions: actions,
	              modal: true,
	              contentStyle: styles.dialog,
	              autoScrollBodyContent: true,
	              open: this.state.open },
	            _react2.default.createElement(
	              _List.List,
	              null,
	              this.state.history.map(function (e) {
	                return _react2.default.createElement(_List.ListItem, { key: (0, _uuid2.default)(), primaryText: e.user, secondaryText: 'IP: ' + e.ip + ', DATE: ' + e.date });
	              })
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return History;
	}(Component);

	exports.default = History;

/***/ },

/***/ 256:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(82);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;

	var Layout = function (_Component) {
	  _inherits(Layout, _Component);

	  function Layout(props) {
	    _classCallCheck(this, Layout);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Layout).call(this));

	    _this.state = {
	      open: false,
	      msg: '',
	      selectedIndex: 2
	    };
	    return _this;
	  }

	  _createClass(Layout, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'render',
	    value: function render() {
	      var state = this.state;
	      var props = this.props;

	      return _react2.default.createElement(
	        'div',
	        { className: 'layout' },
	        this.props.children
	      );
	    }
	  }]);

	  return Layout;
	}(Component);

	exports.default = (0, _reactRouter.withRouter)(Layout);

/***/ },

/***/ 257:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(82);

	var _FlatButton = __webpack_require__(35);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	var _IconButton = __webpack_require__(48);

	var _IconButton2 = _interopRequireDefault(_IconButton);

	var _supervisorAccount = __webpack_require__(482);

	var _supervisorAccount2 = _interopRequireDefault(_supervisorAccount);

	var _accountCircle = __webpack_require__(477);

	var _accountCircle2 = _interopRequireDefault(_accountCircle);

	var _pets = __webpack_require__(481);

	var _pets2 = _interopRequireDefault(_pets);

	var _Chip = __webpack_require__(164);

	var _Chip2 = _interopRequireDefault(_Chip);

	var _chat = __webpack_require__(254);

	var _chat2 = _interopRequireDefault(_chat);

	var _history = __webpack_require__(255);

	var _history2 = _interopRequireDefault(_history);

	var _uuid = __webpack_require__(93);

	var _uuid2 = _interopRequireDefault(_uuid);

	var _flatInput = __webpack_require__(258);

	var _flatInput2 = _interopRequireDefault(_flatInput);

	var _chevronRight = __webpack_require__(206);

	var _chevronRight2 = _interopRequireDefault(_chevronRight);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;

	var randIcon = [_react2.default.createElement(_pets2.default, null), _react2.default.createElement(_accountCircle2.default, null), _react2.default.createElement(_supervisorAccount2.default, null)];


	var styles = {
	  chip: {
	    position: 'absolute',
	    top: 10,
	    margin: 20
	  },
	  largeIcon: {
	    width: 60,
	    height: 60,
	    color: 'white'
	  },

	  large: {
	    width: 120,
	    height: 120,
	    padding: 30
	  },
	  textField: {
	    color: 'white'
	  }
	};

	var Login = function (_Component) {
	  _inherits(Login, _Component);

	  function Login(props) {
	    _classCallCheck(this, Login);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Login).call(this));

	    _this.state = {
	      isAuthed: false,
	      toggle: false,
	      toast: false,
	      users: [],
	      pageID: '',
	      who: {
	        name: '',
	        ip: null
	      },
	      msg: '',
	      value: '',
	      waiting: false
	    };
	    var self = _this;
	    sockets.System.on('spawned-app', function (spawnUrl) {
	      if (window.internalAddress === spawnUrl.ip) {
	        self.setState({ pageID: spawnUrl.id });
	        alert('you have access to /' + spawnUrl.id + ' \'' + spawnUrl.role + '\'');
	      }
	      console.log(spawnUrl);
	    });
	    sockets.Crypto.on('status', function (status) {

	      if (status.status) {} else {
	        console.log(status);
	        alert('rejected');
	      }
	    });

	    return _this;
	  }

	  _createClass(Login, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      var users = window.host.roles.split(',').map(function (user) {

	        return _react2.default.createElement(
	          'div',
	          { className: 'user', key: (0, _uuid2.default)(), onTouchTap: _this2.setWho.bind(_this2, user) },
	          _react2.default.createElement(
	            'div',
	            { className: 'icon-button' },
	            _react2.default.createElement(
	              _IconButton2.default,
	              { iconStyle: styles.largeIcon, style: styles.large },
	              randIcon[Math.floor(Math.random() * randIcon.length)]
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'button' },
	            _react2.default.createElement(_FlatButton2.default, { label: user, style: { color: 'white' } })
	          )
	        );
	      });
	      this.setState({ users: users });
	    }
	  }, {
	    key: 'setValue',
	    value: function setValue(e) {
	      this.setState({ value: e.target.value });
	    }
	  }, {
	    key: 'handleRequestClose',
	    value: function handleRequestClose() {
	      this.setState({ toast: false });
	    }
	  }, {
	    key: 'handleFile',
	    value: function handleFile(e) {
	      e.persist();
	      var self = this;
	      var files = e.target.files;
	      var safeFiles = Array.apply(null, files).filter(function (e) {
	        return (/^secret\.txt|key\.txt/.test(e.name)
	        );
	      }).sort(function (a, b) {
	        return a.name - b.name;
	      });
	      var done = {};
	      var count = 0;
	      if (!safeFiles.length) {
	        e.target.value = '';
	        return;
	      }
	      safeFiles.forEach(function (fileObj, index, arr) {
	        var reader = new FileReader();
	        reader.onload = function (e2) {
	          count += 1;
	          var result = e2.target.result;
	          done[fileObj.name.split('.')[0]] = result;
	          if (count === arr.length) {
	            if (done.secret && done.key) {
	              sockets.Crypto.emit('check', done.secret, done.key, self.state.who);

	              e.target.value = '';
	            } else {
	              //e.target.value = '';
	              alert('rejected');
	            }
	          }
	        };
	        reader.readAsText(fileObj);
	      });
	    }
	  }, {
	    key: 'setWho',
	    value: function setWho(who) {
	      this.setState({ who: { name: who, ip: window.internalAddress } });
	    }
	  }, {
	    key: 'render',
	    value: function render() {

	      return _react2.default.createElement(
	        'div',
	        { className: 'login-container' },
	        _react2.default.createElement(
	          'div',
	          { className: 'inner-container' },
	          _react2.default.createElement(
	            'div',
	            { className: 'user-container' },
	            this.state.users
	          ),
	          _react2.default.createElement('br', null),
	          _react2.default.createElement(
	            'div',
	            { className: 'info' },
	            _react2.default.createElement(
	              'label',
	              { style: { color: 'white' } },
	              'Add key file'
	            ),
	            _react2.default.createElement(
	              'h3',
	              { style: { color: 'white', textAlign: 'center' } },
	              this.state.who.name,
	              ' ',
	              this.state.who.ip
	            ),
	            this.state.who.name && this.state.pageID && _react2.default.createElement(_FlatButton2.default, {
	              label: 'go to /' + this.state.pageID,
	              href: 'http://' + window.host.ip + ':' + window.host.port + '/' + this.state.pageID,
	              secondary: true,
	              icon: _react2.default.createElement(_chevronRight2.default, null)
	            }),
	            this.state.who.name && _react2.default.createElement(_flatInput2.default, { accept: '.txt', multiple: true, type: 'file', onChange: this.handleFile.bind(this) })
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'bottom' },
	          _react2.default.createElement(_chat2.default, null),
	          _react2.default.createElement(_history2.default, null)
	        )
	      );
	    }
	  }]);

	  return Login;
	}(Component);

	exports.default = (0, _reactRouter.withRouter)(Login);

/***/ },

/***/ 258:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _FlatButton = __webpack_require__(35);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;


	var styles = {
	  input: {
	    opacity: 0,
	    width: '100%',
	    height: '100%',
	    position: 'absolute',
	    zIndex: 2,
	    cursor: 'pointer'
	  }
	};

	var FlatInput = function (_Component) {
	  _inherits(FlatInput, _Component);

	  function FlatInput(props) {
	    _classCallCheck(this, FlatInput);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FlatInput).call(this));

	    _this.state = {};
	    return _this;
	  }

	  _createClass(FlatInput, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'streamData',
	    value: function streamData(onchange, e) {
	      var file = ev.target.files[0];
	      var reader = new FileReader();
	      var name = file.name;
	      var self = this;
	      console.log("streaming");
	      reader.onload = function (res) {
	        var data = res.target.result;
	        console.log("streaming", data.length);
	        onchange(data);
	      };
	      reader.readAsBinaryString(file);
	    }
	  }, {
	    key: 'render',
	    value: function render() {

	      var stream = this.props.stream ? this.streamData.bind(this, this.props.onChange) : this.props.onChange;
	      var input = _react2.default.createElement('input', { accept: this.props.accept,
	        multiple: true,
	        style: styles.input,
	        type: this.props.type,
	        onChange: stream
	      });

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_FlatButton2.default, { label: 'Select File', children: input, style: { color: 'white', cursor: 'pointer' } })
	      );
	    }
	  }]);

	  return FlatInput;
	}(Component);

	exports.default = FlatInput;

/***/ },

/***/ 260:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule invariant
	 */

	"use strict";

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function (condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error('Invariant Violation: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },

/***/ 261:
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule keyOf
	 */

	/**
	 * Allows extraction of a minified key. Let's the build system minify keys
	 * without losing the ability to dynamically use key strings as values
	 * themselves. Pass in an object with a single key/val pair and it will return
	 * you the string key of that single record. Suppose you want to grab the
	 * value for a key 'className' inside of an object. Key/val minification may
	 * have aliased that key to be 'xa12'. keyOf({className: null}) will return
	 * 'xa12' in that case. Resolve keys you want to use once at startup time, then
	 * reuse those resolutions.
	 */
	"use strict";

	var keyOf = function (oneKeyObj) {
	  var key;
	  for (key in oneKeyObj) {
	    if (!oneKeyObj.hasOwnProperty(key)) {
	      continue;
	    }
	    return key;
	  }
	  return null;
	};

	module.exports = keyOf;

/***/ },

/***/ 477:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(9);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(8);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ActionAccountCircle = function ActionAccountCircle(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z' })
	  );
	};
	ActionAccountCircle = (0, _pure2.default)(ActionAccountCircle);
	ActionAccountCircle.displayName = 'ActionAccountCircle';
	ActionAccountCircle.muiName = 'SvgIcon';

	exports.default = ActionAccountCircle;

/***/ },

/***/ 481:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(9);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(8);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ActionPets = function ActionPets(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('circle', { cx: '4.5', cy: '9.5', r: '2.5' }),
	    _react2.default.createElement('circle', { cx: '9', cy: '5.5', r: '2.5' }),
	    _react2.default.createElement('circle', { cx: '15', cy: '5.5', r: '2.5' }),
	    _react2.default.createElement('circle', { cx: '19.5', cy: '9.5', r: '2.5' }),
	    _react2.default.createElement('path', { d: 'M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z' })
	  );
	};
	ActionPets = (0, _pure2.default)(ActionPets);
	ActionPets.displayName = 'ActionPets';
	ActionPets.muiName = 'SvgIcon';

	exports.default = ActionPets;

/***/ },

/***/ 482:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(9);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(8);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ActionSupervisorAccount = function ActionSupervisorAccount(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z' })
	  );
	};
	ActionSupervisorAccount = (0, _pure2.default)(ActionSupervisorAccount);
	ActionSupervisorAccount.displayName = 'ActionSupervisorAccount';
	ActionSupervisorAccount.muiName = 'SvgIcon';

	exports.default = ActionSupervisorAccount;

/***/ },

/***/ 536:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * @providesModule TapEventPlugin
	 * @typechecks static-only
	 */

	"use strict";

	var EventConstants = __webpack_require__(27);
	var EventPluginUtils = __webpack_require__(85);
	var EventPropagators = __webpack_require__(54);
	var SyntheticUIEvent = __webpack_require__(57);
	var TouchEventUtils = __webpack_require__(537);
	var ViewportMetrics = __webpack_require__(138);

	var keyOf = __webpack_require__(261);
	var topLevelTypes = EventConstants.topLevelTypes;

	var isStartish = EventPluginUtils.isStartish;
	var isEndish = EventPluginUtils.isEndish;

	var isTouch = function(topLevelType) {
	  var touchTypes = [
	    topLevelTypes.topTouchCancel,
	    topLevelTypes.topTouchEnd,
	    topLevelTypes.topTouchStart,
	    topLevelTypes.topTouchMove
	  ];
	  return touchTypes.indexOf(topLevelType) >= 0;
	}

	/**
	 * Number of pixels that are tolerated in between a `touchStart` and `touchEnd`
	 * in order to still be considered a 'tap' event.
	 */
	var tapMoveThreshold = 10;
	var ignoreMouseThreshold = 750;
	var startCoords = {x: null, y: null};
	var lastTouchEvent = null;

	var Axis = {
	  x: {page: 'pageX', client: 'clientX', envScroll: 'currentPageScrollLeft'},
	  y: {page: 'pageY', client: 'clientY', envScroll: 'currentPageScrollTop'}
	};

	function getAxisCoordOfEvent(axis, nativeEvent) {
	  var singleTouch = TouchEventUtils.extractSingleTouch(nativeEvent);
	  if (singleTouch) {
	    return singleTouch[axis.page];
	  }
	  return axis.page in nativeEvent ?
	    nativeEvent[axis.page] :
	    nativeEvent[axis.client] + ViewportMetrics[axis.envScroll];
	}

	function getDistance(coords, nativeEvent) {
	  var pageX = getAxisCoordOfEvent(Axis.x, nativeEvent);
	  var pageY = getAxisCoordOfEvent(Axis.y, nativeEvent);
	  return Math.pow(
	    Math.pow(pageX - coords.x, 2) + Math.pow(pageY - coords.y, 2),
	    0.5
	  );
	}

	var touchEvents = [
	  topLevelTypes.topTouchStart,
	  topLevelTypes.topTouchCancel,
	  topLevelTypes.topTouchEnd,
	  topLevelTypes.topTouchMove,
	];

	var dependencies = [
	  topLevelTypes.topMouseDown,
	  topLevelTypes.topMouseMove,
	  topLevelTypes.topMouseUp,
	].concat(touchEvents);

	var eventTypes = {
	  touchTap: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onTouchTap: null}),
	      captured: keyOf({onTouchTapCapture: null})
	    },
	    dependencies: dependencies
	  }
	};

	var now = (function() {
	  if (Date.now) {
	    return Date.now;
	  } else {
	    // IE8 support: http://stackoverflow.com/questions/9430357/please-explain-why-and-how-new-date-works-as-workaround-for-date-now-in
	    return function () {
	      return +new Date;
	    }
	  }
	})();

	function createTapEventPlugin(shouldRejectClick) {
	  return {

	    tapMoveThreshold: tapMoveThreshold,

	    ignoreMouseThreshold: ignoreMouseThreshold,

	    eventTypes: eventTypes,

	    /**
	     * @param {string} topLevelType Record from `EventConstants`.
	     * @param {DOMEventTarget} targetInst The listening component root node.
	     * @param {object} nativeEvent Native browser event.
	     * @return {*} An accumulation of synthetic events.
	     * @see {EventPluginHub.extractEvents}
	     */
	    extractEvents: function(
	      topLevelType,
	      targetInst,
	      nativeEvent,
	      nativeEventTarget
	    ) {

	      if (isTouch(topLevelType)) {
	        lastTouchEvent = now();
	      } else {
	        if (shouldRejectClick(lastTouchEvent, now())) {
	          return null;
	        }
	      }

	      if (!isStartish(topLevelType) && !isEndish(topLevelType)) {
	        return null;
	      }
	      var event = null;
	      var distance = getDistance(startCoords, nativeEvent);
	      if (isEndish(topLevelType) && distance < tapMoveThreshold) {
	        event = SyntheticUIEvent.getPooled(
	          eventTypes.touchTap,
	          targetInst,
	          nativeEvent,
	          nativeEventTarget
	        );
	      }
	      if (isStartish(topLevelType)) {
	        startCoords.x = getAxisCoordOfEvent(Axis.x, nativeEvent);
	        startCoords.y = getAxisCoordOfEvent(Axis.y, nativeEvent);
	      } else if (isEndish(topLevelType)) {
	        startCoords.x = 0;
	        startCoords.y = 0;
	      }
	      EventPropagators.accumulateTwoPhaseDispatches(event);
	      return event;
	    }

	  };
	}

	module.exports = createTapEventPlugin;


/***/ },

/***/ 537:
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * @providesModule TouchEventUtils
	 */

	var TouchEventUtils = {
	  /**
	   * Utility function for common case of extracting out the primary touch from a
	   * touch event.
	   * - `touchEnd` events usually do not have the `touches` property.
	   *   http://stackoverflow.com/questions/3666929/
	   *   mobile-sarai-touchend-event-not-firing-when-last-touch-is-removed
	   *
	   * @param {Event} nativeEvent Native event that may or may not be a touch.
	   * @return {TouchesObject?} an object with pageX and pageY or null.
	   */
	  extractSingleTouch: function(nativeEvent) {
	    var touches = nativeEvent.touches;
	    var changedTouches = nativeEvent.changedTouches;
	    var hasTouches = touches && touches.length > 0;
	    var hasChangedTouches = changedTouches && changedTouches.length > 0;

	    return !hasTouches && hasChangedTouches ? changedTouches[0] :
	           hasTouches ? touches[0] :
	           nativeEvent;
	  }
	};

	module.exports = TouchEventUtils;


/***/ },

/***/ 538:
/***/ function(module, exports) {

	module.exports = function(lastTouchEvent, clickTimestamp) {
	  if (lastTouchEvent && (clickTimestamp - lastTouchEvent) < 750) {
	    return true;
	  }
	};


/***/ },

/***/ 539:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var invariant = __webpack_require__(260);
	var defaultClickRejectionStrategy = __webpack_require__(538);

	var alreadyInjected = false;

	module.exports = function injectTapEventPlugin (strategyOverrides) {
	  strategyOverrides = strategyOverrides || {}
	  var shouldRejectClick = strategyOverrides.shouldRejectClick || defaultClickRejectionStrategy;

	  if (process.env.NODE_ENV !== 'production') {
	    invariant(
	      !alreadyInjected,
	      'injectTapEventPlugin(): Can only be called once per application lifecycle.\n\n\
	It is recommended to call injectTapEventPlugin() just before you call \
	ReactDOM.render(). If you are using an external library which calls injectTapEventPlugin() \
	itself, please contact the maintainer as it shouldn\'t be called in library code and \
	should be injected by the application.'
	    )
	  }

	  alreadyInjected = true;

	  __webpack_require__(53).injection.injectEventPluginsByName({
	    'TapEventPlugin':       __webpack_require__(536)(shouldRejectClick)
	  });
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }

});