webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ReactApp = __webpack_require__(288);

	var _ReactApp2 = _interopRequireDefault(_ReactApp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },

/***/ 13:
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

/***/ 45:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _SwipeableViews = __webpack_require__(608);

	var _SwipeableViews2 = _interopRequireDefault(_SwipeableViews);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _SwipeableViews2.default; //  weak

/***/ },

/***/ 55:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(5);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(4);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ContentAdd = function ContentAdd(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z' })
	  );
	};
	ContentAdd = (0, _pure2.default)(ContentAdd);
	ContentAdd.displayName = 'ContentAdd';
	ContentAdd.muiName = 'SvgIcon';

	exports.default = ContentAdd;

/***/ },

/***/ 109:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21;

	var _mobx = __webpack_require__(65);

	var _uuid = __webpack_require__(13);

	var _uuid2 = _interopRequireDefault(_uuid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _initDefineProp(target, property, descriptor, context) {
	  if (!descriptor) return;
	  Object.defineProperty(target, property, {
	    enumerable: descriptor.enumerable,
	    configurable: descriptor.configurable,
	    writable: descriptor.writable,
	    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
	  });
	}

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	  var desc = {};
	  Object['ke' + 'ys'](descriptor).forEach(function (key) {
	    desc[key] = descriptor[key];
	  });
	  desc.enumerable = !!desc.enumerable;
	  desc.configurable = !!desc.configurable;

	  if ('value' in desc || desc.initializer) {
	    desc.writable = true;
	  }

	  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	    return decorator(target, property, desc) || desc;
	  }, desc);

	  if (context && desc.initializer !== void 0) {
	    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	    desc.initializer = undefined;
	  }

	  if (desc.initializer === void 0) {
	    Object['define' + 'Property'](target, property, desc);
	    desc = null;
	  }

	  return desc;
	}

	function _initializerWarningHelper(descriptor, context) {
	  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
	}

	var BrowserWindowConfig = (_class = function () {
	  _createClass(BrowserWindowConfig, [{
	    key: 'build',
	    value: function build(mediaType) {
	      var built = {
	        id: (0, _uuid2.default)(),
	        title: this.title,
	        center: this.center,
	        frame: this.frame,
	        ignoreTimeout: this.ignoreTimeout,
	        timeout: this.timeout,
	        show: this.show,
	        skipTaskbar: this.skipTaskbar,
	        mediaType: {
	          src: this.src || mediaType,
	          type: this.type
	        },
	        dims: {
	          width: this.width,
	          height: this.height,
	          auto: this.auto,
	          scale: this.scale
	        },
	        pos: {
	          x: this.x,
	          y: this.y
	        }
	      };
	      return built;
	    }
	  }, {
	    key: 'setProp',
	    value: function setProp(prop, value) {
	      this[prop] = value;
	    }
	  }, {
	    key: 'setScreen',
	    value: function setScreen(width, height) {
	      this.screenWidth = width;
	      this.screenHeight = height;
	    }
	  }]);

	  function BrowserWindowConfig() {
	    _classCallCheck(this, BrowserWindowConfig);

	    _initDefineProp(this, 'width', _descriptor, this);

	    _initDefineProp(this, 'height', _descriptor2, this);

	    _initDefineProp(this, 'auto', _descriptor3, this);

	    _initDefineProp(this, 'scale', _descriptor4, this);

	    _initDefineProp(this, 'center', _descriptor5, this);

	    _initDefineProp(this, 'alwaysOnTop', _descriptor6, this);

	    _initDefineProp(this, 'skipTaskbar', _descriptor7, this);

	    _initDefineProp(this, 'title', _descriptor8, this);

	    _initDefineProp(this, 'hasShadow', _descriptor9, this);

	    _initDefineProp(this, 'frame', _descriptor10, this);

	    _initDefineProp(this, 'moveable', _descriptor11, this);

	    _initDefineProp(this, 'show', _descriptor12, this);

	    _initDefineProp(this, 'timeout', _descriptor13, this);

	    _initDefineProp(this, 'ignoreTimeout', _descriptor14, this);

	    _initDefineProp(this, 'type', _descriptor15, this);

	    _initDefineProp(this, 'x', _descriptor16, this);

	    _initDefineProp(this, 'y', _descriptor17, this);

	    _initDefineProp(this, 'id', _descriptor18, this);

	    _initDefineProp(this, 'src', _descriptor19, this);

	    _initDefineProp(this, 'screenWidth', _descriptor20, this);

	    _initDefineProp(this, 'screenHeight', _descriptor21, this);
	  }

	  return BrowserWindowConfig;
	}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'width', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return 1;
	  }
	}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'height', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return 1;
	  }
	}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'auto', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return true;
	  }
	}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'scale', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return 1;
	  }
	}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'center', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return true;
	  }
	}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'alwaysOnTop', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return true;
	  }
	}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, 'skipTaskbar', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return true;
	  }
	}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, 'title', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return '';
	  }
	}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, 'hasShadow', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return true;
	  }
	}), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, 'frame', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return false;
	  }
	}), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, 'moveable', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return false;
	  }
	}), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, 'show', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return false;
	  }
	}), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, 'timeout', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return 1000;
	  }
	}), _descriptor14 = _applyDecoratedDescriptor(_class.prototype, 'ignoreTimeout', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return false;
	  }
	}), _descriptor15 = _applyDecoratedDescriptor(_class.prototype, 'type', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return '';
	  }
	}), _descriptor16 = _applyDecoratedDescriptor(_class.prototype, 'x', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return 0;
	  }
	}), _descriptor17 = _applyDecoratedDescriptor(_class.prototype, 'y', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return 0;
	  }
	}), _descriptor18 = _applyDecoratedDescriptor(_class.prototype, 'id', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return '';
	  }
	}), _descriptor19 = _applyDecoratedDescriptor(_class.prototype, 'src', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return '';
	  }
	}), _descriptor20 = _applyDecoratedDescriptor(_class.prototype, 'screenWidth', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return 50;
	  }
	}), _descriptor21 = _applyDecoratedDescriptor(_class.prototype, 'screenHeight', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return 50;
	  }
	}), _applyDecoratedDescriptor(_class.prototype, 'build', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'build'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'setProp', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setProp'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'setScreen', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setScreen'), _class.prototype)), _class);
	exports.default = BrowserWindowConfig;

/***/ },

/***/ 110:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _FlatButton = __webpack_require__(10);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	var _RaisedButton = __webpack_require__(22);

	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

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
	    value: function streamData(onchange, ev) {
	      var fileArray = Array.apply(0, ev.target.files);

	      var self = this;
	      var count = 0;
	      var files = [];
	      fileArray.forEach(function (fileData, index, arr) {
	        var reader = new FileReader();
	        reader.onload = function (res) {
	          count += 1;
	          var data = res.target.result;
	          files.push({ name: fileData.name, data: data });
	          if (count === arr.length) {
	            onchange(files);
	          }
	        };
	        reader.readAsBinaryString(fileData);
	      });

	      console.log("streaming");
	    }
	  }, {
	    key: 'render',
	    value: function render() {

	      var stream = this.props.stream ? this.streamData.bind(this, this.props.onChange) : this.props.onChange;
	      var input = _react2.default.createElement('input', { accept: this.props.accept,
	        multiple: true,
	        style: styles.input,
	        type: 'file',
	        onChange: stream
	      });

	      if (this.props.raised) {
	        return _react2.default.createElement(_RaisedButton2.default, { secondary: this.props.secondary, primary: this.props.primary, label: this.props.label, children: input, style: { cursor: 'pointer' } });
	      } else {
	        return _react2.default.createElement(_FlatButton2.default, { secondary: this.props.secondary, primary: this.props.primary, label: this.props.label, children: input, style: { cursor: 'pointer' } });
	      }
	    }
	  }]);

	  return FlatInput;
	}(Component);

	exports.default = FlatInput;

/***/ },

/***/ 133:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(5);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(4);

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

/***/ 134:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(5);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(4);

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

/***/ 135:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(5);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(4);

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

/***/ 136:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(5);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(4);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CommunicationLocationOn = function CommunicationLocationOn(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z' })
	  );
	};
	CommunicationLocationOn = (0, _pure2.default)(CommunicationLocationOn);
	CommunicationLocationOn.displayName = 'CommunicationLocationOn';
	CommunicationLocationOn.muiName = 'SvgIcon';

	exports.default = CommunicationLocationOn;

/***/ },

/***/ 167:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _RadioButton = __webpack_require__(86);

	var _favorite = __webpack_require__(231);

	var _favorite2 = _interopRequireDefault(_favorite);

	var _favoriteBorder = __webpack_require__(230);

	var _favoriteBorder2 = _interopRequireDefault(_favoriteBorder);

	var _uuid = __webpack_require__(13);

	var _uuid2 = _interopRequireDefault(_uuid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;

	var styles = {
	  block: {
	    //maxWidth: 250,
	    //display:'inline-block'
	  },
	  radioButton: {
	    marginBottom: 16

	  }

	};

	//
	// display:'inline'

	var CallbackAction = function (_Component) {
	  _inherits(CallbackAction, _Component);

	  function CallbackAction(props) {
	    _classCallCheck(this, CallbackAction);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CallbackAction).call(this));

	    _this.state = {
	      current: null
	    };
	    return _this;
	  }

	  _createClass(CallbackAction, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'execCommand',
	    value: function execCommand(e, index) {
	      this.props.queueCommand(this.props.commands[index], this.props.commands[index].code);
	    }
	  }, {
	    key: 'setCurrent',
	    value: function setCurrent(item, code) {}
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _RadioButton.RadioButtonGroup,
	          { style: styles.root, name: 'callback', defaultSelected: 'none', onChange: this.execCommand.bind(this) },
	          _react2.default.createElement(_RadioButton.RadioButton, {
	            value: 'none',
	            label: 'none',
	            style: styles.radioButton
	          }),
	          this.props.commands.map(function (e, i) {
	            return _react2.default.createElement(_RadioButton.RadioButton, { key: (0, _uuid2.default)(), value: i, label: e.cmd, style: styles.radioButton });
	          })
	        )
	      );
	    }
	  }]);

	  return CallbackAction;
	}(Component);

	exports.default = CallbackAction;

/***/ },

/***/ 168:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Popover = __webpack_require__(192);

	var _Menu = __webpack_require__(118);

	var _Menu2 = _interopRequireDefault(_Menu);

	var _MenuItem = __webpack_require__(84);

	var _MenuItem2 = _interopRequireDefault(_MenuItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;

	var Delay = function (_Component) {
	  _inherits(Delay, _Component);

	  function Delay(props) {
	    _classCallCheck(this, Delay);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Delay).call(this));

	    _this.state = {};
	    return _this;
	  }

	  _createClass(Delay, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'setDelay',
	    value: function setDelay(e) {
	      //this.props.setDelay()
	      var text = e.target.innerText.trim().replace(/[^\d+]/g, '');
	      this.props.setDelay(text);
	      this.props.close();
	    }
	  }, {
	    key: 'render',
	    value: function render() {

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _Popover.Popover,
	          {
	            open: this.props.show,
	            anchorEl: this.props.anchorEl,
	            anchorOrigin: { horizontal: 'left', vertical: 'bottom' },
	            targetOrigin: { horizontal: 'left', vertical: 'top' },
	            onRequestClose: this.props.close,
	            animation: _Popover.PopoverAnimationVertical
	          },
	          _react2.default.createElement(
	            _Menu2.default,
	            null,
	            _react2.default.createElement(_MenuItem2.default, { primaryText: '1000ms', onTouchTap: this.setDelay.bind(this) }),
	            _react2.default.createElement(_MenuItem2.default, { primaryText: '2000ms', onTouchTap: this.setDelay.bind(this) }),
	            _react2.default.createElement(_MenuItem2.default, { primaryText: '5000ms', onTouchTap: this.setDelay.bind(this) }),
	            _react2.default.createElement(_MenuItem2.default, { primaryText: '10000ms', onTouchTap: this.setDelay.bind(this) }),
	            _react2.default.createElement(_MenuItem2.default, { primaryText: '30000ms', onTouchTap: this.setDelay.bind(this) }),
	            _react2.default.createElement(_MenuItem2.default, { primaryText: '60000ms', onTouchTap: this.setDelay.bind(this) }),
	            _react2.default.createElement(_MenuItem2.default, { primaryText: '120000ms ', onTouchTap: this.setDelay.bind(this) })
	          )
	        )
	      );
	    }
	  }]);

	  return Delay;
	}(Component);

	exports.default = Delay;

/***/ },

/***/ 169:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (func, wait, immediate) {

	  var timeout;
	  return function () {
	    var context = this,
	        args = arguments;
	    var later = function later() {
	      timeout = null;
	      if (!immediate) func.apply(context, args);
	    };
	    var callNow = immediate && !timeout;
	    clearTimeout(timeout);
	    timeout = setTimeout(later, wait);
	    if (callNow) func.apply(context, args);
	  };
	};

/***/ },

/***/ 179:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BottomNavigationItem = exports.BottomNavigation = undefined;

	var _BottomNavigation2 = __webpack_require__(361);

	var _BottomNavigation3 = _interopRequireDefault(_BottomNavigation2);

	var _BottomNavigationItem2 = __webpack_require__(362);

	var _BottomNavigationItem3 = _interopRequireDefault(_BottomNavigationItem2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.BottomNavigation = _BottomNavigation3.default;
	exports.BottomNavigationItem = _BottomNavigationItem3.default;

/***/ },

/***/ 229:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(5);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(4);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ActionDashboard = function ActionDashboard(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z' })
	  );
	};
	ActionDashboard = (0, _pure2.default)(ActionDashboard);
	ActionDashboard.displayName = 'ActionDashboard';
	ActionDashboard.muiName = 'SvgIcon';

	exports.default = ActionDashboard;

/***/ },

/***/ 230:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(5);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(4);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ActionFavoriteBorder = function ActionFavoriteBorder(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z' })
	  );
	};
	ActionFavoriteBorder = (0, _pure2.default)(ActionFavoriteBorder);
	ActionFavoriteBorder.displayName = 'ActionFavoriteBorder';
	ActionFavoriteBorder.muiName = 'SvgIcon';

	exports.default = ActionFavoriteBorder;

/***/ },

/***/ 231:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(5);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(4);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ActionFavorite = function ActionFavorite(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' })
	  );
	};
	ActionFavorite = (0, _pure2.default)(ActionFavorite);
	ActionFavorite.displayName = 'ActionFavorite';
	ActionFavorite.muiName = 'SvgIcon';

	exports.default = ActionFavorite;

/***/ },

/***/ 232:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(5);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(4);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ActionGrade = function ActionGrade(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' })
	  );
	};
	ActionGrade = (0, _pure2.default)(ActionGrade);
	ActionGrade.displayName = 'ActionGrade';
	ActionGrade.muiName = 'SvgIcon';

	exports.default = ActionGrade;

/***/ },

/***/ 233:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(5);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(4);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ActionInfo = function ActionInfo(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z' })
	  );
	};
	ActionInfo = (0, _pure2.default)(ActionInfo);
	ActionInfo.displayName = 'ActionInfo';
	ActionInfo.muiName = 'SvgIcon';

	exports.default = ActionInfo;

/***/ },

/***/ 234:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(5);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(4);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ContentDrafts = function ContentDrafts(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z' })
	  );
	};
	ContentDrafts = (0, _pure2.default)(ContentDrafts);
	ContentDrafts.displayName = 'ContentDrafts';
	ContentDrafts.muiName = 'SvgIcon';

	exports.default = ContentDrafts;

/***/ },

/***/ 235:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(5);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(4);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ContentInbox = function ContentInbox(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z' })
	  );
	};
	ContentInbox = (0, _pure2.default)(ContentInbox);
	ContentInbox.displayName = 'ContentInbox';
	ContentInbox.muiName = 'SvgIcon';

	exports.default = ContentInbox;

/***/ },

/***/ 236:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(5);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(4);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ContentSend = function ContentSend(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M2.01 21L23 12 2.01 3 2 10l15 2-15 2z' })
	  );
	};
	ContentSend = (0, _pure2.default)(ContentSend);
	ContentSend.displayName = 'ContentSend';
	ContentSend.muiName = 'SvgIcon';

	exports.default = ContentSend;

/***/ },

/***/ 283:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _FloatingActionButton = __webpack_require__(33);

	var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

	var _dashboard = __webpack_require__(229);

	var _dashboard2 = _interopRequireDefault(_dashboard);

	var _Dialog = __webpack_require__(49);

	var _Dialog2 = _interopRequireDefault(_Dialog);

	var _FlatButton = __webpack_require__(10);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	var _RaisedButton = __webpack_require__(22);

	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;


	var styles = {
	  fab: {
	    marginRight: 20
	  },
	  controls: {
	    position: 'fixed',
	    bottom: 0,
	    right: 50,
	    margin: 10,
	    zIndex: 8200
	  }
	};

	var Controls = function (_Component) {
	  _inherits(Controls, _Component);

	  function Controls(props) {
	    _classCallCheck(this, Controls);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Controls).call(this));

	    _this.state = {
	      dialog: false
	    };
	    return _this;
	  }

	  _createClass(Controls, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'create',
	    value: function create() {}
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var actions = [_react2.default.createElement(_FlatButton2.default, {
	        label: 'close',
	        primary: true,
	        onTouchTap: this.handleClose
	      }), _react2.default.createElement(_FlatButton2.default, {
	        label: 'create',
	        primary: true,
	        keyboardFocused: true,
	        onTouchTap: function onTouchTap(e) {
	          return !_this2.setState({ dialog: false }) && _this2.create.call(_this2);
	        }
	      })];

	      return _react2.default.createElement(
	        'div',
	        { style: styles.controls },
	        _react2.default.createElement(
	          _FloatingActionButton2.default,
	          { style: styles.fab, onTouchTap: function onTouchTap(e) {
	              return _this2.setState({ dialog: true });
	            } },
	          _react2.default.createElement(_dashboard2.default, null)
	        ),
	        _react2.default.createElement(
	          _Dialog2.default,
	          {
	            title: 'Create a browser window',
	            actions: actions,
	            modal: false,
	            open: this.state.dialog,
	            onRequestClose: function onRequestClose(e) {
	              return _this2.setState({ dialog: false });
	            } },
	          'The actions in this window were passed in as an array of React objects.'
	        )
	      );
	    }
	  }]);

	  return Controls;
	}(Component);

	exports.default = Controls;

/***/ },

/***/ 284:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _TextField = __webpack_require__(15);

	var _TextField2 = _interopRequireDefault(_TextField);

	var _RaisedButton = __webpack_require__(22);

	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

	var _uuid = __webpack_require__(13);

	var _uuid2 = _interopRequireDefault(_uuid);

	var _FlatButton = __webpack_require__(10);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	var _windowsSettings = __webpack_require__(319);

	var _windowsSettings2 = _interopRequireDefault(_windowsSettings);

	var _mobxReact = __webpack_require__(43);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;


	var styles = {
	  button: {
	    margin: 10
	  },
	  container: {
	    width: '80%',
	    textAlign: 'center',
	    margin: '0 auto'
	  }

	};

	var CustomWindow = (0, _mobxReact.observer)(_class = function (_Component) {
	  _inherits(CustomWindow, _Component);

	  function CustomWindow(props) {
	    _classCallCheck(this, CustomWindow);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CustomWindow).call(this));

	    _this.state = {
	      userScripts: [],
	      stylesheets: [],
	      timeout: 30,
	      id: '',
	      deps: [],
	      innerHTML: ''
	    };
	    return _this;
	  }

	  _createClass(CustomWindow, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'add',
	    value: function add(prop) {
	      this.setState(_defineProperty({}, prop, this.state[prop].concat('')));
	    }
	  }, {
	    key: 'create',
	    value: function create() {
	      console.log("creating custom BrowserWindow");
	      var config = Object.assign({}, this.state);
	      config.timeout = config.timeout * 1000;
	      sockets.Electron.emit('create-browser-window', (0, _uuid2.default)(), 'custom', config);
	    }
	  }, {
	    key: 'delete',
	    value: function _delete(prop, index) {
	      var o = this.state[prop];
	      o[index] = '';
	      o.splice(index, 1);
	      this.setState(_defineProperty({}, prop, o));
	    }
	  }, {
	    key: 'setWindowSettings',
	    value: function setWindowSettings(prop, e, value) {
	      var par = prop.split('/');
	      var settings = void 0;
	      if (par.length > 1) {
	        settings = this.state[par[0]];
	        settings[par[1]] = value;
	      } else {
	        console.log(par[0], value);
	        this.state[par[0]] = value;
	      }

	      this.forceUpdate();
	    }
	  }, {
	    key: 'save',
	    value: function save() {
	      sockets.fs.emit('save-window', this.state);
	    }
	  }, {
	    key: 'compare',
	    value: function compare() {

	      ~this.props.store.filenames.indexOf(this.state.id) ? this.setState({ exists: true }) : this.setState({ exists: false });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _state = this.state;
	      var deps = _state.deps;
	      var userScripts = _state.userScripts;
	      var innerHTML = _state.innerHTML;


	      var ifExists = this.state.exists ? this.state.id + ' already exists! Overwrite?' : '';
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'section',
	          { style: styles.container },
	          (userScripts.length || deps.length || innerHTML.length) && _react2.default.createElement(_RaisedButton2.default, { label: 'create', primary: true, onTouchTap: this.create.bind(this) }) || null,
	          (userScripts.length || deps.length || innerHTML.length) && this.state.id.length && _react2.default.createElement(_RaisedButton2.default, { label: 'save', primary: true, onTouchTap: this.save.bind(this) }) || null,
	          _react2.default.createElement(_RaisedButton2.default, { style: styles.button, label: 'add dependency', secondary: true, onTouchTap: this.add.bind(this, 'deps') }),
	          _react2.default.createElement(_RaisedButton2.default, { style: styles.button, label: 'add script', secondary: true, onTouchTap: this.add.bind(this, 'userScripts') }),
	          _react2.default.createElement(_RaisedButton2.default, { style: styles.button, label: 'add stylesheet', secondary: true, onTouchTap: this.add.bind(this, 'stylesheets') })
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: { padding: 20 } },
	          _react2.default.createElement(_TextField2.default, { errorText: ifExists,
	            hintText: 'ID:(required) ',
	            onChange: function onChange(e) {
	              return (_this2.state.id = e.target.value) && _this2.compare.call(_this2);
	            } }),
	          _react2.default.createElement(_TextField2.default, {
	            multiLine: true,
	            fullWidth: true, hintText: 'inner HTML',
	            onChange: function onChange(e) {
	              return innerHTML = e.target.value;
	            } })
	        ),
	        this.state.deps.map(function (e, i) {
	          return _react2.default.createElement(
	            'div',
	            { style: { padding: 20 }, key: (0, _uuid2.default)() },
	            _react2.default.createElement(_TextField2.default, {
	              multiLine: true, defaultValue: e,
	              fullWidth: true, hintText: 'Dependency - ' + i,
	              onChange: function onChange(e) {
	                return _this2.state.deps[i] = e.target.value;
	              } }),
	            _react2.default.createElement(_FlatButton2.default, { label: 'delete', secondary: true, onTouchTap: _this2.delete.bind(_this2, 'deps', i) })
	          );
	        }),
	        this.state.userScripts.map(function (e, i) {
	          return _react2.default.createElement(
	            'div',
	            { style: { padding: 20 }, key: (0, _uuid2.default)() },
	            _react2.default.createElement(_TextField2.default, {
	              multiLine: true, defaultValue: e,
	              fullWidth: true, hintText: 'User Script - ' + i,
	              onChange: function onChange(e) {
	                return _this2.state.userScripts[i] = e.target.value;
	              } }),
	            _react2.default.createElement(_FlatButton2.default, { label: 'delete', secondary: true, onTouchTap: _this2.delete.bind(_this2, 'userScripts', i) })
	          );
	        }),
	        this.state.stylesheets.map(function (e, i) {
	          return _react2.default.createElement(
	            'div',
	            { style: { padding: 20 }, key: (0, _uuid2.default)() },
	            _react2.default.createElement(_TextField2.default, {
	              multiLine: true, defaultValue: e,
	              fullWidth: true, hintText: 'User stylesheet - ' + i,
	              onChange: function onChange(e) {
	                return _this2.state.stylesheets[i] = e.target.value;
	              } }),
	            _react2.default.createElement(_FlatButton2.default, { label: 'delete', secondary: true, onTouchTap: _this2.delete.bind(_this2, 'stylesheets', i) })
	          );
	        })
	      );
	    }
	  }]);

	  return CustomWindow;
	}(Component)) || _class;

	exports.default = CustomWindow;

/***/ },

/***/ 285:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Tabs = __webpack_require__(35);

	var _reactSwipeableViews = __webpack_require__(45);

	var _reactSwipeableViews2 = _interopRequireDefault(_reactSwipeableViews);

	var _List = __webpack_require__(21);

	var _uuid = __webpack_require__(13);

	var _uuid2 = _interopRequireDefault(_uuid);

	var _TextField = __webpack_require__(15);

	var _TextField2 = _interopRequireDefault(_TextField);

	var _colors = __webpack_require__(38);

	var _Divider = __webpack_require__(28);

	var _Divider2 = _interopRequireDefault(_Divider);

	var _Toggle = __webpack_require__(36);

	var _Toggle2 = _interopRequireDefault(_Toggle);

	var _FloatingActionButton = __webpack_require__(33);

	var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

	var _add = __webpack_require__(55);

	var _add2 = _interopRequireDefault(_add);

	var _FlatButton = __webpack_require__(10);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	var _custom = __webpack_require__(284);

	var _custom2 = _interopRequireDefault(_custom);

	var _controls = __webpack_require__(283);

	var _controls2 = _interopRequireDefault(_controls);

	var _savedWindows = __webpack_require__(286);

	var _savedWindows2 = _interopRequireDefault(_savedWindows);

	var _youtube = __webpack_require__(287);

	var _youtube2 = _interopRequireDefault(_youtube);

	var _upload = __webpack_require__(706);

	var _upload2 = _interopRequireDefault(_upload);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;


	var styles = {
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
	  slide: {
	    height: 900
	  }
	};

	var Intro = function (_Component) {
	  _inherits(Intro, _Component);

	  function Intro(props) {
	    _classCallCheck(this, Intro);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Intro).call(this));

	    _this.state = {
	      slideIndex: 0,
	      timeLeft: 0,
	      presets: [],
	      package: {},
	      current: {},
	      currentPlaying: null,
	      ready: false
	    };
	    _this.interval = null;
	    return _this;
	  }

	  _createClass(Intro, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      console.log('sent');

	      // sockets.fs.on('window-list' ,(metadata)=>{ //arr of browser window objs
	      //
	      //   let data = metadata.map(e => JSON.parse(e));
	      //   console.log(data)
	      //   this.setState({presets:data})
	      // });
	      //
	      // sockets.fs.emit('get-window-list');
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearInterval(this.interval);
	    }
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'execIntro',
	    value: function execIntro(item, presetName) {
	      if (this.state.currentPlaying) {

	        return;
	      }
	      clearInterval(this.interval);
	      var opts = this.state.presets[item];
	      this.state.current = opts.id;
	      this.setState({ timeLeft: opts.timeout / 1000, currentPlaying: opts.id });
	      //  let config = Object.assign(this.state.window , this.state.youtube)

	      console.log(presetName, opts);

	      // this.clock();
	      // switch(opts.mediaType.type){
	      //   case 'file': sockets.Electron.emit('create-browser-window' ,presetName.id ,'file', opts);break;
	      //   case 'url': sockets.Electron.emit('create-browser-window' ,presetName.id ,'url', opts);break;
	      //   case 'youtube': sockets.Electron.emit('create-browser-window' ,uuid() ,'youtube', opts);break;
	      //   case 'custom': sockets.Electron.emit('create-browser-window' ,uuid() ,'custom', opts);break;
	      // }

	      console.log('emmited', opts);
	    }
	  }, {
	    key: 'clock',
	    value: function clock(secs) {
	      var self = this;
	      this.interval = setInterval(function () {
	        if (self.state.timeLeft <= 0) {
	          self.setState({ currentPlaying: null });
	          clearInterval(self.interval);
	          return;
	        }
	        self.setState({ timeLeft: self.state.timeLeft - 1 });
	      }, 1000);
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(value) {
	      this.setState({ slideIndex: value });
	    }
	  }, {
	    key: 'save',
	    value: function save() {
	      if (this.state.ready && this.state.package.package && this.state.package.package.ext === 'json') {
	        var requiredFields = JSON.parse(this.state.package.package.value);

	        if (requiredFields.id) {

	          sockets.fs.emit('save-intro', this.state.package);
	          console.log('sending', this.state.package);
	        } else {
	          alert('invailed config id');
	        }
	      } else {
	        alert('file / folder does not contain package.json');
	      }
	    }
	  }, {
	    key: 'createPackage',
	    value: function createPackage(ev) {
	      var files = ev.target.files;
	      var cFiles = Array.apply(0, files);
	      var cc = 0;
	      var totalSize = 0;
	      var self = this;
	      console.log(cFiles);

	      cFiles.map(function (file, index, arr) {
	        var reader = new FileReader();

	        reader.onload = function (res) {
	          cc += 1;
	          totalSize += file.size;
	          var filenameData = file.name.split('.');
	          var ext = filenameData[filenameData.length - 1];
	          var filename = filenameData[0];
	          var text = res.target.result;

	          self.state.package[filename] = {
	            ext: ext,
	            size: file.size,
	            value: text
	          };
	          //console.log(text)
	          if (cc === arr.length) {
	            self.setState({ ready: true });
	          }
	        };
	        reader.readAsText(file);
	      });
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      clearInterval(this.interval);
	      this.setState({ timeLeft: 0, currentPlaying: null });
	      sockets.Electron.emit('destroy-browser-window', this.state.current);
	      console.log('destorying', this.state.current);
	    }
	  }, {
	    key: 'createYoutube',
	    value: function createYoutube(ytConfig) {
	      var ready = {};
	      var _dimsConfig = Object.assign({}, {
	        id: ytConfig.id,
	        seekTo: ytConfig.seekTo,
	        volume: ytConfig.volume,
	        mute: ytConfig.mute,
	        frame: ytConfig.frame,
	        timeout: ytConfig.timeout,
	        mediaType: {
	          type: 'youtube'
	        },
	        dims: {
	          auto: ytConfig.auto,
	          height: ytConfig.height,
	          width: ytConfig.width,
	          scale: ytConfig.scale
	        },
	        pos: {
	          y: ytConfig.y,
	          x: ytConfig.x
	        }
	      });
	      // this.state.youtube.id = uuid();
	      this.state.currentPlaying = 'Youtube - ' + ytConfig.id;
	      _dimsConfig.timeout = ytConfig.timeout * 1000;
	      this.setState({ timeLeft: Math.floor(ytConfig.timeout), currentPlaying: this.state.currentPlaying });
	      this.clock();
	      var config = Object.assign(this.state.window, _dimsConfig);

	      console.log('sent browser window', config);

	      //sockets.Electron.emit('create-browser-window' ,uuid() ,'youtube' ,config);
	      // console.log(config)
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'windows' },
	        _react2.default.createElement(_controls2.default, { store: this.props.store }),
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            _Tabs.Tabs,
	            { onChange: this.handleChange.bind(this), value: this.state.slideIndex },
	            _react2.default.createElement(_Tabs.Tab, { label: 'windows', value: 0 }),
	            _react2.default.createElement(_Tabs.Tab, { label: 'custom', value: 1 }),
	            _react2.default.createElement(_Tabs.Tab, { label: 'upload', value: 2 }),
	            _react2.default.createElement(_Tabs.Tab, { label: 'youtube', value: 3 })
	          ),
	          _react2.default.createElement(
	            _reactSwipeableViews2.default,
	            { index: this.state.slideIndex, onChangeIndex: this.handleChange.bind(this) },
	            _react2.default.createElement(
	              'div',
	              { style: styles.slide },
	              _react2.default.createElement(_savedWindows2.default, { store: this.props.store })
	            ),
	            _react2.default.createElement(
	              'div',
	              { style: styles.slide },
	              _react2.default.createElement(_custom2.default, { store: this.props.store })
	            ),
	            _react2.default.createElement(
	              'div',
	              { style: styles.slide },
	              _react2.default.createElement(_upload2.default, { store: this.props.store })
	            ),
	            _react2.default.createElement(
	              'div',
	              { style: styles.slide },
	              _react2.default.createElement(_youtube2.default, { store: this.props.store })
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Intro;
	}(Component);

	exports.default = Intro;

/***/ },

/***/ 286:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _List = __webpack_require__(21);

	var _mobxReact = __webpack_require__(43);

	var _uuid = __webpack_require__(13);

	var _uuid2 = _interopRequireDefault(_uuid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;

	var SavedWindows = (0, _mobxReact.observer)(_class = function (_Component) {
	  _inherits(SavedWindows, _Component);

	  function SavedWindows(props) {
	    _classCallCheck(this, SavedWindows);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SavedWindows).call(this));

	    _this.state = {};
	    return _this;
	  }

	  _createClass(SavedWindows, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'execIntro',
	    value: function execIntro() {}
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _List.List,
	          null,
	          this.props.store.saved.map(function (e, index) {
	            return _react2.default.createElement(_List.ListItem, { key: (0, _uuid2.default)(),
	              primaryText: e.id,
	              secondaryText: 'Type: ' + e.mediaType.type + ', Frame:' + e.frame + ' , width:' + e.dims.width + ' - auto(' + e.dims.auto + ') , height:' + e.dims.height + ' - auto(' + e.dims.auto + ') , timeout:' + e.timeout,
	              onTouchTap: _this2.execIntro.bind(_this2, index, e) });
	          })
	        )
	      );
	    }
	  }]);

	  return SavedWindows;
	}(Component)) || _class;

	exports.default = SavedWindows;

/***/ },

/***/ 287:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Slider = __webpack_require__(29);

	var _Slider2 = _interopRequireDefault(_Slider);

	var _Toggle = __webpack_require__(36);

	var _Toggle2 = _interopRequireDefault(_Toggle);

	var _TextField = __webpack_require__(15);

	var _TextField2 = _interopRequireDefault(_TextField);

	var _Dialog = __webpack_require__(49);

	var _Dialog2 = _interopRequireDefault(_Dialog);

	var _FlatButton = __webpack_require__(10);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	var _RaisedButton = __webpack_require__(22);

	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

	var _List = __webpack_require__(21);

	var _uuid = __webpack_require__(13);

	var _uuid2 = _interopRequireDefault(_uuid);

	var _mobxReact = __webpack_require__(43);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;

	var YoutubeGenerator = (0, _mobxReact.observer)(_class = function (_Component) {
	  _inherits(YoutubeGenerator, _Component);

	  function YoutubeGenerator(props) {
	    _classCallCheck(this, YoutubeGenerator);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(YoutubeGenerator).call(this));

	    _this.state = {
	      robotWidth: 10,
	      robotHeight: 10,
	      volume: 1,
	      id: '',
	      auto: false,
	      mute: false,
	      timeout: 1,
	      frame: true,
	      scale: 0.5,
	      x: 0,
	      y: 0,
	      seekTo: 0,
	      dialog: false,
	      alwaysOnTop: false

	    };
	    return _this;
	  }

	  _createClass(YoutubeGenerator, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'checkThenCreate',
	    value: function checkThenCreate() {
	      if (!this.state.id.length) {
	        alert('need video id');
	        return;
	      }
	      console.log(this.state.timeout);
	      //  console.log("checking");
	      this.setState({ dialog: false });
	      var copy = Object.assign({}, this.state);
	      this.props.create(copy);
	    }
	  }, {
	    key: 'setToggle',
	    value: function setToggle(prop, e, value) {
	      this.setState(_defineProperty({}, prop, value));
	    }
	  }, {
	    key: 'setSlider',
	    value: function setSlider(prop, e, value) {
	      this.setState(_defineProperty({}, prop, value));
	    }
	  }, {
	    key: 'time',
	    value: function time(seconds) {
	      var minutes = "0" + Math.floor(seconds / 60);
	      var seconds = "0" + (seconds - minutes * 60);
	      return minutes.substr(-2) + ":" + seconds.substr(-2);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var actions = [_react2.default.createElement(_FlatButton2.default, {
	        label: 'Create',
	        primary: true,
	        onTouchTap: this.checkThenCreate.bind(this)
	      }), _react2.default.createElement(_FlatButton2.default, {
	        label: 'close',
	        primary: true,
	        keyboardFocused: true,
	        onTouchTap: function onTouchTap(e) {
	          return _this2.setState({ dialog: false });
	        }
	      })];
	      return _react2.default.createElement(
	        'h1',
	        null,
	        'youtube'
	      );
	      return _react2.default.createElement(
	        'div',
	        { className: 'container-fluid' },
	        _react2.default.createElement(
	          'section',
	          { style: { padding: 20 } },
	          _react2.default.createElement(_TextField2.default, { hintText: 'Youtube video id', errorText: 'This field is required', onChange: function onChange(e) {
	              return _this2.setState({ id: e.target.value });
	            } }),
	          _react2.default.createElement('br', null)
	        ),
	        _react2.default.createElement(
	          'section',
	          null,
	          _react2.default.createElement(_Toggle2.default, { style: { width: 150 }, label: 'Frame', onToggle: this.setToggle.bind(this, 'frame') }),
	          _react2.default.createElement(_Toggle2.default, { style: { width: 150 }, label: 'Mute', onToggle: this.setToggle.bind(this, 'mute') }),
	          _react2.default.createElement(_Toggle2.default, { style: { width: 150 }, label: 'always on top', onToggle: this.setToggle.bind(this, 'alwaysOnTop') }),
	          _react2.default.createElement(_Toggle2.default, { style: { width: 150 }, label: 'auto width/height', onToggle: this.setToggle.bind(this, 'auto') }),
	          _react2.default.createElement(
	            'span',
	            null,
	            'Timeout: ',
	            this.state.timeout,
	            ' seconds'
	          ),
	          _react2.default.createElement(_Slider2.default, { style: { width: '40%', margin: 20 },
	            step: 1, value: this.state.timeout, min: 1, max: 300, onChange: this.setSlider.bind(this, 'timeout') })
	        ),
	        _react2.default.createElement(
	          'span',
	          null,
	          'Seek: ',
	          this.time(this.state.seekTo)
	        ),
	        _react2.default.createElement(_Slider2.default, { style: { width: '40%', margin: 20 },
	          step: 1, value: this.state.seekTo, min: 0, max: 5999, onChange: this.setSlider.bind(this, 'seekTo') }),
	        _react2.default.createElement(
	          'span',
	          null,
	          'Volume: ',
	          this.state.volume * 100,
	          '%'
	        ),
	        _react2.default.createElement(_Slider2.default, { style: { width: '40%', margin: 20 },
	          step: 0.05, value: this.state.volume, min: 0, max: 1, onChange: this.setSlider.bind(this, 'volume') }),
	        _react2.default.createElement('section', null),
	        _react2.default.createElement(
	          'section',
	          null,
	          _react2.default.createElement(
	            'span',
	            null,
	            'Scaling: ',
	            this.state.scale
	          ),
	          _react2.default.createElement(_Slider2.default, { style: { width: '80%', margin: '0 auto' },
	            step: 0.05, value: this.state.scale, min: 0.1, max: 1, onChange: this.setSlider.bind(this, 'scale') }),
	          _react2.default.createElement(
	            'span',
	            null,
	            'Width: ',
	            this.state.width
	          ),
	          _react2.default.createElement(_Slider2.default, { style: { width: '80%', margin: '0 auto' },
	            step: 1, value: this.state.width, min: 1, max: this.state.robotWidth, onChange: this.setSlider.bind(this, 'width') }),
	          _react2.default.createElement(
	            'span',
	            null,
	            'Height: ',
	            this.state.height
	          ),
	          _react2.default.createElement(_Slider2.default, { style: { width: '80%', margin: '0 auto' },
	            step: 1, value: this.state.height, min: 1, max: this.state.robotHeight, onChange: this.setSlider.bind(this, 'height') }),
	          _react2.default.createElement(
	            'span',
	            null,
	            'X Cord: ',
	            Math.floor(this.state.robotWidth * this.state.x)
	          ),
	          _react2.default.createElement(_Slider2.default, { style: { width: '80%', margin: '0 auto' },
	            step: 0.01, value: this.state.x, min: 0, max: 1, onChange: this.setSlider.bind(this, 'x') }),
	          _react2.default.createElement(
	            'span',
	            null,
	            'Y Cord: ',
	            Math.floor(this.state.robotHeight * this.state.y)
	          ),
	          _react2.default.createElement(_Slider2.default, { style: { width: '80%', margin: '0 auto' },
	            step: 0.01, value: this.state.y, min: 0, max: 1, onChange: this.setSlider.bind(this, 'y') })
	        ),
	        _react2.default.createElement(
	          'section',
	          null,
	          _react2.default.createElement(_RaisedButton2.default, { label: 'preview', primary: true, onTouchTap: function onTouchTap(e) {
	              return _this2.setState({ dialog: true });
	            } }),
	          _react2.default.createElement(_RaisedButton2.default, { label: 'create', secondary: true, onTouchTap: this.checkThenCreate.bind(this) })
	        ),
	        _react2.default.createElement(
	          _Dialog2.default,
	          {
	            title: 'Preview',
	            actions: actions,
	            modal: false,
	            open: this.state.dialog,
	            autoScrollBodyContent: true,
	            onRequestClose: function onRequestClose(e) {
	              return _this2.setState({ dialog: false });
	            } },
	          _react2.default.createElement(
	            _List.List,
	            null,
	            Object.keys(this.state).map(function (e) {
	              return _react2.default.createElement(_List.ListItem, { key: (0, _uuid2.default)(), primaryText: _react2.default.createElement(
	                  'strong',
	                  null,
	                  e
	                ), secondaryText: JSON.stringify(_this2.state[e]) });
	            })
	          )
	        )
	      );
	    }
	  }]);

	  return YoutubeGenerator;
	}(Component)) || _class;

	exports.default = YoutubeGenerator;

/***/ },

/***/ 288:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(11);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactTapEventPlugin = __webpack_require__(612);

	var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

	var _reactRouter = __webpack_require__(57);

	var _reactRouter2 = _interopRequireDefault(_reactRouter);

	var _MuiThemeProvider = __webpack_require__(228);

	var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

	var _layout = __webpack_require__(302);

	var _layout2 = _interopRequireDefault(_layout);

	var _Snackbar = __webpack_require__(87);

	var _Snackbar2 = _interopRequireDefault(_Snackbar);

	var _admin = __webpack_require__(296);

	var _admin2 = _interopRequireDefault(_admin);

	var _system = __webpack_require__(305);

	var _system2 = _interopRequireDefault(_system);

	var _createWindow = __webpack_require__(285);

	var _createWindow2 = _interopRequireDefault(_createWindow);

	var _shell = __webpack_require__(308);

	var _shell2 = _interopRequireDefault(_shell);

	var _keyboard = __webpack_require__(301);

	var _keyboard2 = _interopRequireDefault(_keyboard);

	var _logs = __webpack_require__(303);

	var _logs2 = _interopRequireDefault(_logs);

	var _audio = __webpack_require__(298);

	var _audio2 = _interopRequireDefault(_audio);

	var _Scripts = __webpack_require__(295);

	var _Scripts2 = _interopRequireDefault(_Scripts);

	var _Mouse = __webpack_require__(294);

	var _Mouse2 = _interopRequireDefault(_Mouse);

	var _fileSystem = __webpack_require__(300);

	var _fileSystem2 = _interopRequireDefault(_fileSystem);

	var _Info = __webpack_require__(293);

	var _Info2 = _interopRequireDefault(_Info);

	var _npmUi = __webpack_require__(304);

	var _npmUi2 = _interopRequireDefault(_npmUi);

	var _tasker = __webpack_require__(306);

	var _tasker2 = _interopRequireDefault(_tasker);

	var _app = __webpack_require__(297);

	var _app2 = _interopRequireDefault(_app);

	var _store = __webpack_require__(312);

	var _uuid = __webpack_require__(13);

	var _uuid2 = _interopRequireDefault(_uuid);

	var _browserWindowPreview = __webpack_require__(299);

	var _browserWindowPreview2 = _interopRequireDefault(_browserWindowPreview);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	(0, _reactTapEventPlugin2.default)();


	//debugging purposes
	window.STORES = _store.Stores;

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
	      var routes = [{ route: 'logs', store: null, elm: _logs2.default }, { route: 'system', store: null, elm: _system2.default }, { route: 'windows', store: _store.Stores.window, elm: _createWindow2.default }, { route: 'shell', store: _store.Stores.shell, elm: _shell2.default }, { route: 'audio', store: _store.Stores.audio, elm: _audio2.default }, { route: 'keyboard', store: null, elm: _keyboard2.default }, { route: 'mouse', store: _store.Stores.browserWindow, elm: _Mouse2.default }, { route: 'tasker', store: null, elm: _tasker2.default }, { route: 'file-system', store: null, elm: _fileSystem2.default }, { route: 'info', store: null, elm: _Info2.default }, { route: 'scripts', store: null, elm: _Scripts2.default }, { route: 'npm', store: null, elm: _npmUi2.default }, { route: 'app', store: null, elm: _app2.default }, { route: 'preview', store: _store.Stores.browserWindow, elm: _browserWindowPreview2.default }];

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _MuiThemeProvider2.default,
	          null,
	          _react2.default.createElement(
	            _reactRouter.Router,
	            { history: _reactRouter.hashHistory },
	            _react2.default.createElement(
	              _reactRouter.Route,
	              { path: '/', name: 'home', component: function component(props) {
	                  return _react2.default.createElement(_layout2.default, { _props: props, store: _store.Stores.browserWindow });
	                } },
	              _react2.default.createElement(_reactRouter.IndexRoute, { component: _admin2.default }),
	              routes.map(function (e) {
	                return _react2.default.createElement(_reactRouter.Route, { key: (0, _uuid2.default)(), component: function component(f) {
	                    return _react2.default.createElement(e.elm, { store: e.store });
	                  }, path: e.route });
	              })
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

/***/ 289:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _mobxReact = __webpack_require__(43);

	var _RaisedButton = __webpack_require__(22);

	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

	var _IconButton = __webpack_require__(34);

	var _IconButton2 = _interopRequireDefault(_IconButton);

	var _replay = __webpack_require__(542);

	var _replay2 = _interopRequireDefault(_replay);

	var _playArrow = __webpack_require__(541);

	var _playArrow2 = _interopRequireDefault(_playArrow);

	var _pause = __webpack_require__(540);

	var _pause2 = _interopRequireDefault(_pause);

	var _stop = __webpack_require__(545);

	var _stop2 = _interopRequireDefault(_stop);

	var _loop = __webpack_require__(538);

	var _loop2 = _interopRequireDefault(_loop);

	var _compareArrows = __webpack_require__(532);

	var _compareArrows2 = _interopRequireDefault(_compareArrows);

	var _skipNext = __webpack_require__(543);

	var _skipNext2 = _interopRequireDefault(_skipNext);

	var _skipPrevious = __webpack_require__(544);

	var _skipPrevious2 = _interopRequireDefault(_skipPrevious);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;
	//icons

	var styles = {
	  button: {

	    margin: 12
	  }, smallIcon: {
	    width: 36,
	    height: 36
	  },
	  mediumIcon: {
	    width: 48,
	    height: 48
	  },
	  largeIcon: {
	    width: 60,
	    height: 60
	  },
	  small: {
	    width: 72,
	    height: 72,
	    padding: 16
	  },
	  medium: {
	    width: 96,
	    height: 96,
	    padding: 24
	  },
	  large: {
	    width: 120,
	    height: 120,
	    padding: 30
	  }

	};

	var Controls = (0, _mobxReact.observer)(_class = function (_Component) {
	  _inherits(Controls, _Component);

	  function Controls(props) {
	    _classCallCheck(this, Controls);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Controls).call(this));

	    _this.state = {};
	    return _this;
	  }

	  _createClass(Controls, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'mute',
	    value: function mute() {
	      this.props.xStore.setMute(!this.props.xStore.mute);
	    }
	  }, {
	    key: 'repeat',
	    value: function repeat() {
	      if (this.props.xStore.current) {

	        this.props.xStore.setRepeat(!this.props.xStore.repeat);
	      }
	    }
	  }, {
	    key: 'next',
	    value: function next() {
	      this.props.xStore.next();
	    }
	  }, {
	    key: 'previous',
	    value: function previous() {}
	  }, {
	    key: 'togglePlayback',
	    value: function togglePlayback() {
	      if (this.props.xStore.current) {
	        this.props.xStore.setIsPlaying(!this.props.xStore.isPlaying);
	        if (this.props.xStore.isPlaying) {
	          this.props.element.play();
	          this.props.startclock();
	        } else {
	          this.props.element.pause();
	          this.props.stopclock();
	        }
	      }
	    }
	  }, {
	    key: 'autoplay',
	    value: function autoplay() {
	      this.props.xStore.setAutoplay(!this.props.xStore.autoplay);
	    }
	  }, {
	    key: 'stop',
	    value: function stop() {
	      this.props.xStore.reset();

	      sockets.Electron.emit('destroy-browser-window', this.props.xStore.currentID);
	    }
	  }, {
	    key: 'internalPlayback',
	    value: function internalPlayback() {
	      if (this.props.xStore.internalPlayback) {
	        this.props.xStore.elementREF.pause();
	      } else {
	        this.props.xStore.elementREF.currentTime = this.props.xStore.elasped;
	        this.props.xStore.elementREF.play();
	      }
	      this.props.xStore.setInternalPlayback(!this.props.xStore.internalPlayback);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var store = this.props.xStore;
	      var mute = this.props.mute ? 'unmute' : 'mute';
	      var isPlaying = this.props.xStore.isPlaying ? 'pause' : 'play';
	      var autoplay = this.props.xStore.autoplay ? 'on' : 'off';
	      var repeat = this.props.xStore.repeat ? 'on' : 'off';

	      var playbackStatus = this.props.xStore.isPlaying ? _react2.default.createElement(_pause2.default, null) : _react2.default.createElement(_playArrow2.default, null);
	      var ifAutoplay = store.autoplay ? '#52b652' : 'black';
	      var ifRepeat = store.repeat ? '#2298ff' : 'gray';
	      var internalPlayback = store.internalPlayback ? '#52b652' : 'black';
	      return _react2.default.createElement(
	        'div',
	        { className: 'audio-controls' },
	        _react2.default.createElement(
	          _IconButton2.default,
	          { title: 'mirror playback on this device', iconStyle: _extends({}, styles.mediumIcon, { color: internalPlayback }), style: styles.medium, onTouchTap: this.internalPlayback.bind(this) },
	          _react2.default.createElement(_compareArrows2.default, null)
	        ),
	        _react2.default.createElement(
	          _IconButton2.default,
	          { title: 'toggle autoplay', iconStyle: _extends({}, styles.mediumIcon, { color: ifAutoplay }), style: styles.medium, onTouchTap: this.autoplay.bind(this) },
	          _react2.default.createElement(_loop2.default, null)
	        ),
	        _react2.default.createElement(
	          _IconButton2.default,
	          { title: 'repeat', iconStyle: _extends({}, styles.mediumIcon, { color: ifRepeat }), style: styles.medium, onTouchTap: this.repeat.bind(this) },
	          _react2.default.createElement(_replay2.default, null)
	        ),
	        _react2.default.createElement(
	          _IconButton2.default,
	          { title: 'previous track', iconStyle: styles.mediumIcon, style: styles.medium, onTouchTap: this.previous.bind(this) },
	          _react2.default.createElement(_skipPrevious2.default, null)
	        ),
	        _react2.default.createElement(
	          _IconButton2.default,
	          { title: 'toggle playback', iconStyle: styles.mediumIcon, style: styles.medium, onTouchTap: this.togglePlayback.bind(this) },
	          playbackStatus
	        ),
	        _react2.default.createElement(
	          _IconButton2.default,
	          { title: 'next track', iconStyle: styles.mediumIcon, style: styles.medium, onTouchTap: this.next.bind(this) },
	          _react2.default.createElement(_skipNext2.default, null)
	        ),
	        _react2.default.createElement(
	          _IconButton2.default,
	          { title: 'stop', iconStyle: styles.mediumIcon, style: styles.medium, onTouchTap: this.stop.bind(this) },
	          _react2.default.createElement(_stop2.default, null)
	        )
	      );
	    }
	  }]);

	  return Controls;
	}(Component)) || _class;

	exports.default = Controls;

/***/ },

/***/ 290:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _seekBar = __webpack_require__(291);

	var _seekBar2 = _interopRequireDefault(_seekBar);

	var _mobxReact = __webpack_require__(43);

	var _Slider = __webpack_require__(29);

	var _Slider2 = _interopRequireDefault(_Slider);

	var _controls = __webpack_require__(289);

	var _controls2 = _interopRequireDefault(_controls);

	var _Snackbar = __webpack_require__(87);

	var _Snackbar2 = _interopRequireDefault(_Snackbar);

	var _volume = __webpack_require__(292);

	var _volume2 = _interopRequireDefault(_volume);

	var _RefreshIndicator = __webpack_require__(194);

	var _RefreshIndicator2 = _interopRequireDefault(_RefreshIndicator);

	var _LinearProgress = __webpack_require__(190);

	var _LinearProgress2 = _interopRequireDefault(_LinearProgress);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;


	var styles = {
	  refresh: {
	    display: 'inline-block',
	    position: 'relative'
	  },
	  loader: {
	    width: '80%',
	    margin: '10 auto'

	  }
	};

	var Player = (0, _mobxReact.observer)(_class = function (_Component) {
	  _inherits(Player, _Component);

	  function Player(props) {
	    _classCallCheck(this, Player);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Player).call(this));

	    _this.state = {};
	    _this.clock = null;
	    var self = _this;

	    //this.x_audio = new X_audio();
	    return _this;
	  }

	  _createClass(Player, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      sockets.Electron.on('byte-transfer', function (byteObj) {
	        if (byteObj.total) {
	          _this2.props.xStore.totalBytes = byteObj.total;
	        } else if (byteObj.sent) {
	          _this2.props.xStore.bytesReceived += byteObj.sent;
	        }
	      });
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'covertPlaytime',
	    value: function covertPlaytime(totalDuration) {
	      var d = totalDuration;
	      var minutes = "0" + Math.floor(d / 60);
	      var seconds = "0" + (d - minutes * 60);
	      return minutes.substr(-2) + ":" + seconds.substr(-2);
	    }
	  }, {
	    key: 'setVolume',
	    value: function setVolume() {}
	  }, {
	    key: 'seekStart',
	    value: function seekStart() {}
	  }, {
	    key: 'seekEnd',
	    value: function seekEnd() {}
	  }, {
	    key: 'startClock',
	    value: function startClock() {
	      this.props.xStore.startClock();
	      // this.clock = setInterval(()=>{
	      //   this.props.xStore.setElapsed(this.props.xStore.elasped += 1);
	      // },1000);
	    }
	  }, {
	    key: 'stopClock',
	    value: function stopClock() {
	      var clock = this.props.xStore.stopClock();
	      //clearInterval(this.clock);
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      var clock = this.props.xStore.reset();
	      // clearInterval(this.clock);
	      // this.props.xStore.setElapsed(0)
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      var x_audio = this.props.xStore;
	      var current = x_audio.current ? x_audio.current : 'Nothing Playing';
	      var volume = x_audio.volume <= 0 ? 'Muted' : x_audio.volume;
	      var elasped = x_audio.elasped ? x_audio.elasped : false;
	      var duration = x_audio.duration ? x_audio.duration : false;
	      var element = this.props.element;

	      var ifVolume = typeof volume === 'number' && Math.floor(volume * 100) + '%' || 'Muted';

	      // <Slider
	      //   style={{width:'20%' ,margin:20}}
	      //   step={0.1} min={0} max={1}
	      //   value={x_audio.volume}
	      //    onChange={this.setVolume.bind(this)}/>

	      return _react2.default.createElement(
	        'div',
	        { className: 'audio-player' },
	        _react2.default.createElement(
	          'section',
	          { className: 'audio-player-top' },
	          _react2.default.createElement(
	            'div',
	            { className: 'title' },
	            _react2.default.createElement(
	              'h4',
	              null,
	              _react2.default.createElement(
	                'i',
	                null,
	                current
	              )
	            )
	          ),
	          _react2.default.createElement('div', { className: 'flex' }),
	          _react2.default.createElement(
	            'div',
	            { className: 'stats' },
	            _react2.default.createElement(
	              'span',
	              null,
	              'Volume: ',
	              _react2.default.createElement(
	                'strong',
	                null,
	                ifVolume
	              ),
	              ' '
	            ),
	            _react2.default.createElement(
	              'span',
	              null,
	              'elasped: ',
	              _react2.default.createElement(
	                'strong',
	                null,
	                elasped
	              ),
	              ' '
	            ),
	            _react2.default.createElement(
	              'span',
	              null,
	              'duration: ',
	              _react2.default.createElement(
	                'strong',
	                null,
	                Math.floor(duration)
	              ),
	              's '
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'seekbar-container' },
	          _react2.default.createElement(
	            'div',
	            { className: 'elapsed' },
	            _react2.default.createElement(
	              'span',
	              null,
	              this.covertPlaytime(x_audio.elasped)
	            )
	          ),
	          _react2.default.createElement(_seekBar2.default, { className: 'seekbar', xStore: x_audio,
	            label: 'Seek audio',
	            ref: 'slider',
	            name: x_audio.current,
	            seek: x_audio.elasped,
	            isPlaying: x_audio.isPlaying,
	            duration: x_audio.duration }),
	          _react2.default.createElement(
	            'div',
	            { className: 'length' },
	            _react2.default.createElement(
	              'span',
	              null,
	              this.covertPlaytime(x_audio.duration)
	            )
	          ),
	          _react2.default.createElement(_volume2.default, { className: 'volume',
	            xStore: x_audio,
	            value: x_audio.volume })
	        ),
	        x_audio.current && _react2.default.createElement(_LinearProgress2.default, { mode: 'determinate', value: x_audio.bytesReceived, min: 0, max: x_audio.totalBytes, style: styles.loader }),
	        _react2.default.createElement(_controls2.default, {
	          startclock: this.startClock.bind(this),
	          stopclock: this.stopClock.bind(this),
	          reset: this.reset.bind(this),
	          xStore: x_audio,
	          element: element,
	          mute: x_audio.mute
	        }),
	        _react2.default.createElement(_Snackbar2.default, {
	          open: x_audio.status.length ? true : false,
	          message: x_audio.status,
	          autoHideDuration: 4000,
	          onRequestClose: function onRequestClose(e) {
	            return _this3.setState({ toast: false });
	          }
	        })
	      );
	    }
	  }]);

	  return Player;
	}(Component)) || _class;

	exports.default = Player;

/***/ },

/***/ 291:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Slider = __webpack_require__(29);

	var _Slider2 = _interopRequireDefault(_Slider);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;


	var styles = {
	  seek: {
	    //  width:'50%',
	    //margin:'0 auto',
	    //display:'inline-block'
	  },
	  container: {
	    //position:'absolute',
	    //width:'100%',
	    //margin:10

	  }
	};

	var SeekBar = function (_Component) {
	  _inherits(SeekBar, _Component);

	  function SeekBar(props) {
	    _classCallCheck(this, SeekBar);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SeekBar).call(this));

	    _this.state = {};
	    return _this;
	  }

	  _createClass(SeekBar, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'seekStart',
	    value: function seekStart(ev, value) {
	      var current = this.props.xStore.elasped;
	      var input = parseInt(this.refs.slider.refs.input.value);
	      //let nextValue  = parseInt();

	      if (current === input) {
	        return;
	      }

	      console.log(input);
	    }
	  }, {
	    key: 'seekStop',
	    value: function seekStop(ev, nextValue) {}
	  }, {
	    key: 'seeking',
	    value: function seeking(ev, nextValue) {
	      if (nextValue === this.props.xStore.elasped) {
	        return;
	      }
	      console.log(nextValue);
	      this.props.xStore.setElapsed(nextValue);
	      sockets.Electron.emit('seek-audio', nextValue);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var duration = this.props.duration;
	      var ifTrackLength = duration > 1 ? Math.floor(duration) : 1;

	      console.log('seek!!!!', this.props.seek, ifTrackLength);
	      //  onDragStart={this.seekStart.bind(this)}
	      //onDragStop={this.seekStop.bind(this)}
	      return _react2.default.createElement(
	        'div',
	        { style: styles.container, className: this.props.className },
	        _react2.default.createElement(_Slider2.default, { disabled: !this.props.isPlaying,
	          ref: 'slider',
	          style: styles.seek,
	          sliderStyle: { marginTop: 0, marginBottom: 0, position: 'absolute', top: 0, width: '100%' },
	          step: 1,
	          value: this.props.seek + 1,
	          min: 0,
	          max: ifTrackLength,

	          onChange: this.seeking.bind(this) })
	      );
	    }
	  }]);

	  return SeekBar;
	}(Component);

	exports.default = SeekBar;

/***/ },

/***/ 292:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Slider = __webpack_require__(29);

	var _Slider2 = _interopRequireDefault(_Slider);

	var _volumeUp = __webpack_require__(548);

	var _volumeUp2 = _interopRequireDefault(_volumeUp);

	var _volumeDown = __webpack_require__(546);

	var _volumeDown2 = _interopRequireDefault(_volumeDown);

	var _volumeMute = __webpack_require__(547);

	var _volumeMute2 = _interopRequireDefault(_volumeMute);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;

	var Volume = function (_Component) {
	  _inherits(Volume, _Component);

	  function Volume(props) {
	    _classCallCheck(this, Volume);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Volume).call(this));

	    _this.state = {};
	    return _this;
	  }

	  _createClass(Volume, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'toggleMute',
	    value: function toggleMute() {}
	  }, {
	    key: 'changeVolume',
	    value: function changeVolume(ev, value) {
	      this.props.xStore.setVolume(value);

	      sockets.Electron.emit('change-volume', this.props.xStore.volume);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var xStore = _props.xStore;
	      var value = _props.value;

	      var currentColumeState = void 0;
	      switch (true) {
	        case value <= 0:
	          currentColumeState = _react2.default.createElement(_volumeMute2.default, null);break;
	        case value > 0 && value < 0.6:
	          currentColumeState = _react2.default.createElement(_volumeDown2.default, null);break;
	        case value >= 0.6:
	          currentColumeState = _react2.default.createElement(_volumeUp2.default, null);break;

	      }

	      return _react2.default.createElement(
	        'div',
	        { className: this.props.className },
	        _react2.default.createElement(
	          'div',
	          { className: 'icons', onTouchTap: this.toggleMute.bind(this) },
	          currentColumeState
	        ),
	        _react2.default.createElement(_Slider2.default, {
	          style: { width: 100, margin: 10, paddingLeft: 20 },
	          sliderStyle: { width: 100, marginTop: 0, marginBottom: 0, position: 'absolute', top: 0, paddingLeft: 20 },
	          step: 0.05,
	          min: 0,
	          max: 1,
	          value: value,
	          onChange: this.changeVolume.bind(this) })
	      );
	    }
	  }]);

	  return Volume;
	}(Component);

	exports.default = Volume;

/***/ },

/***/ 293:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Tabs = __webpack_require__(35);

	var _reactSwipeableViews = __webpack_require__(45);

	var _reactSwipeableViews2 = _interopRequireDefault(_reactSwipeableViews);

	var _List = __webpack_require__(21);

	var _uuid = __webpack_require__(13);

	var _uuid2 = _interopRequireDefault(_uuid);

	var _TextField = __webpack_require__(15);

	var _TextField2 = _interopRequireDefault(_TextField);

	var _colors = __webpack_require__(38);

	var _Divider = __webpack_require__(28);

	var _Divider2 = _interopRequireDefault(_Divider);

	var _Toggle = __webpack_require__(36);

	var _Toggle2 = _interopRequireDefault(_Toggle);

	var _FloatingActionButton = __webpack_require__(33);

	var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

	var _add = __webpack_require__(55);

	var _add2 = _interopRequireDefault(_add);

	var _FlatButton = __webpack_require__(10);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;


	var styles = {
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
	  slide: {
	    height: 900
	  }
	};

	var Info = function (_Component) {
	  _inherits(Info, _Component);

	  function Info(props) {
	    _classCallCheck(this, Info);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Info).call(this));

	    _this.state = {
	      slideIndex: 0,
	      netstat: [],
	      waiting: true
	    };
	    _this.interval = null;
	    return _this;
	  }

	  _createClass(Info, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      var self = this;

	      sockets.System.on('got-netstat', function (list) {
	        console.log(list);
	        _this2.setState({ netstat: list, waiting: false });
	      });
	      sockets.System.emit('get-netstat');
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'handleChange',
	    value: function handleChange(value) {
	      this.setState({ slideIndex: value });
	    }
	  }, {
	    key: 'render',
	    value: function render() {

	      return _react2.default.createElement(
	        'div',
	        { className: 'intros' },
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            _Tabs.Tabs,
	            { onChange: this.handleChange.bind(this), value: this.state.slideIndex },
	            _react2.default.createElement(_Tabs.Tab, { label: 'network', value: 0 }),
	            _react2.default.createElement(_Tabs.Tab, { label: 'other', value: 1 })
	          ),
	          _react2.default.createElement(
	            _reactSwipeableViews2.default,
	            { index: this.state.slideIndex, onChangeIndex: this.handleChange.bind(this) },
	            _react2.default.createElement(
	              'div',
	              { style: styles.slide },
	              this.state.waiting && _react2.default.createElement(
	                'span',
	                null,
	                'Waiting....takes a few secs'
	              ),
	              _react2.default.createElement(
	                _List.List,
	                null,
	                this.state.netstat.map(function (e) {
	                  return _react2.default.createElement(_List.ListItem, { key: (0, _uuid2.default)(), primaryText: e.protocal + ' ' + e.state, secondaryText: 'Local: ' + e.local + ' , ext: ' + e.ext });
	                })
	              )
	            ),
	            _react2.default.createElement('div', { style: styles.slide })
	          )
	        )
	      );
	    }
	  }]);

	  return Info;
	}(Component);

	exports.default = Info;

/***/ },

/***/ 294:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Tabs = __webpack_require__(35);

	var _reactSwipeableViews = __webpack_require__(45);

	var _reactSwipeableViews2 = _interopRequireDefault(_reactSwipeableViews);

	var _List = __webpack_require__(21);

	var _uuid = __webpack_require__(13);

	var _uuid2 = _interopRequireDefault(_uuid);

	var _TextField = __webpack_require__(15);

	var _TextField2 = _interopRequireDefault(_TextField);

	var _colors = __webpack_require__(38);

	var _Divider = __webpack_require__(28);

	var _Divider2 = _interopRequireDefault(_Divider);

	var _Toggle = __webpack_require__(36);

	var _Toggle2 = _interopRequireDefault(_Toggle);

	var _FloatingActionButton = __webpack_require__(33);

	var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

	var _add = __webpack_require__(55);

	var _add2 = _interopRequireDefault(_add);

	var _FlatButton = __webpack_require__(10);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	var _delay = __webpack_require__(168);

	var _delay2 = _interopRequireDefault(_delay);

	var _callbackAction = __webpack_require__(167);

	var _callbackAction2 = _interopRequireDefault(_callbackAction);

	var _recordPad = __webpack_require__(316);

	var _recordPad2 = _interopRequireDefault(_recordPad);

	var _mobxReact = __webpack_require__(43);

	var _cancel = __webpack_require__(563);

	var _cancel2 = _interopRequireDefault(_cancel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;


	var styles = {
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
	  slide: {
	    height: 900
	  },
	  fab: {
	    marginRight: 20
	  },
	  controls: {
	    position: 'fixed',
	    bottom: 0,
	    right: 50,
	    margin: 10,
	    zIndex: 8200
	  }

	};

	var Mouse = (0, _mobxReact.observer)(_class = function (_Component) {
	  _inherits(Mouse, _Component);

	  function Mouse(props) {
	    _classCallCheck(this, Mouse);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Mouse).call(this));

	    _this.state = {
	      slideIndex: 0,
	      mouseFunctions: [],
	      waiting: true

	    };
	    return _this;
	  }

	  _createClass(Mouse, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      var self = this;
	      setTimeout(this.kill, 8000);

	      sockets.Robot.on('mouse-functions', function (fn) {
	        console.log(JSON.parse(fn));
	        _this2.setState({ mouseFunctions: JSON.parse(fn) });
	      });

	      sockets.Robot.emit('get-mouse-functions');
	    }
	  }, {
	    key: 'mover',
	    value: function mover(ev) {
	      var rect = ev.target.getBoundingClientRect();
	      var cx = Math.abs(ev.srcEvent.clientX || ev.pointers[0].clientY - rect.left);
	      var cy = Math.abs(ev.srcEvent.clientY || ev.pointers[0].clientY - rect.top);
	      var x = cx / 0.5;
	      var y = cy / 0.5;
	      if (x <= this.state.screen.orig.width && y <= this.state.screen.orig.height) {
	        //console.log(x ,y);
	        sockets.Robot.emit('move-mouse', { x: x, y: y });
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'handleChange',
	    value: function handleChange(value) {
	      this.setState({ slideIndex: value });
	    }
	  }, {
	    key: 'execCommand',
	    value: function execCommand(item) {
	      //console.log(item);
	      sockets.Robot.emit('execute-mouse-function', item);
	    }
	  }, {
	    key: 'mouseClick',
	    value: function mouseClick(leftRight) {

	      sockets.Robot.emit('mouse-click', leftRight);
	    }
	  }, {
	    key: 'done',
	    value: function done() {}
	  }, {
	    key: 'kill',
	    value: function kill() {
	      console.log("killing");
	      sockets.Robot.emit('stop');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      return _react2.default.createElement(
	        'div',
	        { className: 'mouse' },
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'div',
	            { style: styles.controls },
	            _react2.default.createElement(
	              _FloatingActionButton2.default,
	              { style: styles.fab, onTouchTap: this.kill.bind(this) },
	              _react2.default.createElement(_cancel2.default, null)
	            )
	          ),
	          _react2.default.createElement(
	            _Tabs.Tabs,
	            { onChange: this.handleChange.bind(this), value: this.state.slideIndex },
	            _react2.default.createElement(_Tabs.Tab, { label: 'functions', value: 0 }),
	            _react2.default.createElement(_Tabs.Tab, { label: 'record input', value: 1 }),
	            _react2.default.createElement(_Tabs.Tab, { label: 'raw input', value: 2 })
	          ),
	          _react2.default.createElement(
	            _reactSwipeableViews2.default,
	            { index: this.state.slideIndex, onChangeIndex: this.handleChange.bind(this) },
	            _react2.default.createElement(
	              'div',
	              { style: styles.slide },
	              _react2.default.createElement(
	                _List.List,
	                null,
	                this.state.mouseFunctions.map(function (e, index) {
	                  return _react2.default.createElement(_List.ListItem, { key: (0, _uuid2.default)(),
	                    primaryText: e.title,
	                    secondaryText: e.desp,
	                    onTouchTap: _this3.execCommand.bind(_this3, e) });
	                })
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { style: styles.slide },
	              _react2.default.createElement(_recordPad2.default, { store: this.props.store })
	            ),
	            _react2.default.createElement(
	              'div',
	              { style: styles.slide },
	              this.state.waiting && _react2.default.createElement(
	                'span',
	                null,
	                'Waiting for screen'
	              ),
	              _react2.default.createElement('div', {
	                style: { margin: 15 },
	                className: 'client-screen', ref: 'screen' }),
	              _react2.default.createElement(_FlatButton2.default, { label: 'Left click', primary: true, onTouchTap: this.mouseClick.bind(this, 'left') }),
	              _react2.default.createElement(_FlatButton2.default, { label: 'right click', primary: true, onTouchTap: this.mouseClick.bind(this, 'right') })
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Mouse;
	}(Component)) || _class;

	exports.default = Mouse;

/***/ },

/***/ 295:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(57);

	var _FlatButton = __webpack_require__(10);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	var _IconButton = __webpack_require__(34);

	var _IconButton2 = _interopRequireDefault(_IconButton);

	var _supervisorAccount = __webpack_require__(135);

	var _supervisorAccount2 = _interopRequireDefault(_supervisorAccount);

	var _accountCircle = __webpack_require__(133);

	var _accountCircle2 = _interopRequireDefault(_accountCircle);

	var _pets = __webpack_require__(134);

	var _pets2 = _interopRequireDefault(_pets);

	var _Tabs = __webpack_require__(35);

	var _reactSwipeableViews = __webpack_require__(45);

	var _reactSwipeableViews2 = _interopRequireDefault(_reactSwipeableViews);

	var _List = __webpack_require__(21);

	var _vbsMaker = __webpack_require__(320);

	var _vbsMaker2 = _interopRequireDefault(_vbsMaker);

	var _uuid = __webpack_require__(13);

	var _uuid2 = _interopRequireDefault(_uuid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;


	var styles = {
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
	  slide: {
	    height: 900
	  }
	};

	var Scripts = function (_Component) {
	  _inherits(Scripts, _Component);

	  function Scripts(props) {
	    _classCallCheck(this, Scripts);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Scripts).call(this));

	    _this.state = {
	      slideIndex: 0,
	      presets: []

	    };
	    return _this;
	  }

	  _createClass(Scripts, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var self = this;

	      sockets.fs.on('got-scripts', function (data) {

	        self.setState({ presets: data });
	      });
	      sockets.fs.emit('get-scripts');
	    }
	  }, {
	    key: 'execScript',
	    value: function execScript(file) {
	      sockets.System.emit('exec-script', file);
	    }
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'handleChange',
	    value: function handleChange(value) {
	      this.setState({ slideIndex: value });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _react2.default.createElement(
	        'div',
	        { className: '' },
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            _Tabs.Tabs,
	            { onChange: this.handleChange.bind(this), value: this.state.slideIndex },
	            _react2.default.createElement(_Tabs.Tab, { label: 'presets', value: 0 }),
	            _react2.default.createElement(_Tabs.Tab, { label: 'create', value: 1 })
	          ),
	          _react2.default.createElement(
	            _reactSwipeableViews2.default,
	            { index: this.state.slideIndex, onChangeIndex: this.handleChange.bind(this) },
	            _react2.default.createElement(
	              'div',
	              { style: styles.slide },
	              _react2.default.createElement(
	                _List.List,
	                null,
	                this.state.presets.map(function (e) {
	                  return _react2.default.createElement(_List.ListItem, { key: (0, _uuid2.default)(), primaryText: e, onTouchTap: _this2.execScript.bind(_this2, e) });
	                })
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { style: styles.slide },
	              _react2.default.createElement(_vbsMaker2.default, null)
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Scripts;
	}(Component);

	exports.default = (0, _reactRouter.withRouter)(Scripts);

/***/ },

/***/ 296:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(57);

	var _FlatButton = __webpack_require__(10);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	var _IconButton = __webpack_require__(34);

	var _IconButton2 = _interopRequireDefault(_IconButton);

	var _supervisorAccount = __webpack_require__(135);

	var _supervisorAccount2 = _interopRequireDefault(_supervisorAccount);

	var _accountCircle = __webpack_require__(133);

	var _accountCircle2 = _interopRequireDefault(_accountCircle);

	var _pets = __webpack_require__(134);

	var _pets2 = _interopRequireDefault(_pets);

	var _uuid = __webpack_require__(13);

	var _uuid2 = _interopRequireDefault(_uuid);

	var _FontIcon = __webpack_require__(73);

	var _FontIcon2 = _interopRequireDefault(_FontIcon);

	var _BottomNavigation = __webpack_require__(179);

	var _Paper = __webpack_require__(17);

	var _Paper2 = _interopRequireDefault(_Paper);

	var _locationOn = __webpack_require__(136);

	var _locationOn2 = _interopRequireDefault(_locationOn);

	var _security = __webpack_require__(559);

	var _security2 = _interopRequireDefault(_security);

	var _toys = __webpack_require__(560);

	var _toys2 = _interopRequireDefault(_toys);

	var _mouse = __webpack_require__(558);

	var _mouse2 = _interopRequireDefault(_mouse);

	var _gamepad = __webpack_require__(554);

	var _gamepad2 = _interopRequireDefault(_gamepad);

	var _code = __webpack_require__(531);

	var _code2 = _interopRequireDefault(_code);

	var _pictureInPicture = __webpack_require__(535);

	var _pictureInPicture2 = _interopRequireDefault(_pictureInPicture);

	var _build = __webpack_require__(529);

	var _build2 = _interopRequireDefault(_build);

	var _swapVert = __webpack_require__(536);

	var _swapVert2 = _interopRequireDefault(_swapVert);

	var _movie = __webpack_require__(539);

	var _movie2 = _interopRequireDefault(_movie);

	var _donutLarge = __webpack_require__(533);

	var _donutLarge2 = _interopRequireDefault(_donutLarge);

	var _dashboard = __webpack_require__(229);

	var _dashboard2 = _interopRequireDefault(_dashboard);

	var _desktopWindows = __webpack_require__(553);

	var _desktopWindows2 = _interopRequireDefault(_desktopWindows);

	var _phonelinkSetup = __webpack_require__(549);

	var _phonelinkSetup2 = _interopRequireDefault(_phonelinkSetup);

	var _folder = __webpack_require__(551);

	var _folder2 = _interopRequireDefault(_folder);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;


	var recentsIcon = _react2.default.createElement(
	  _FontIcon2.default,
	  { className: 'material-icons' },
	  'restore'
	);
	var favoritesIcon = _react2.default.createElement(
	  _FontIcon2.default,
	  { className: 'material-icons' },
	  'favorite'
	);
	var nearbyIcon = _react2.default.createElement(_locationOn2.default, null);

	var mdColors = ["#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722", "#795548", "#9E9E9E", "#607D8B"];
	var styles = {

	  largeIcon: {
	    width: 60,
	    height: 60,
	    display: 'inline-block'
	  },

	  large: {
	    width: 120,
	    height: 120,
	    padding: 30
	  },
	  bottomBar: {
	    position: 'absolute',
	    bottom: '0',
	    width: '100%'
	  },
	  button: {
	    height: 100,
	    width: '100%'

	  }
	};

	var Admin = function (_Component) {
	  _inherits(Admin, _Component);

	  function Admin(props) {
	    _classCallCheck(this, Admin);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Admin).call(this));

	    _this.state = {
	      selectedIndex: 0
	    };
	    return _this;
	  }

	  _createClass(Admin, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      //let permissions = window.host.permissions
	      var actions = {
	        'info': _desktopWindows2.default,
	        'Shell': _code2.default,
	        'file-system': _folder2.default,
	        'system': _phonelinkSetup2.default,
	        'Mouse': _mouse2.default,
	        'Keyboard': _gamepad2.default,
	        'audio': _movie2.default,
	        'scripts': _security2.default,
	        'windows': _pictureInPicture2.default,
	        'tasker': _build2.default
	      };

	      actions = Object.keys(actions).map(function (e) {
	        var Icon = actions[e];
	        var color = mdColors[Math.floor(Math.random() * mdColors.length)];
	        var textColor = 'white';
	        var switchTextColor = color.match(/[a-z0-9]{2}/gi).map(function (e) {
	          return parseInt(e, 16);
	        }).reduce(function (start, item) {
	          start += item;
	          return start;
	        }, 0);

	        if (switchTextColor >= 460) {
	          textColor = 'black';
	        }
	        return _react2.default.createElement(
	          'li',
	          { key: (0, _uuid2.default)(), className: 'action' },
	          _react2.default.createElement(
	            'div',
	            { style: { margin: 5, background: color } },
	            _react2.default.createElement(
	              _IconButton2.default,
	              { iconStyle: _extends({}, styles.largeIcon, { color: textColor }), style: styles.large },
	              _react2.default.createElement(Icon, null)
	            ),
	            _react2.default.createElement(_FlatButton2.default, { label: e, style: _extends({}, styles.button, { color: textColor }), onTouchTap: _this2.goto.bind(_this2, e) })
	          )
	        );
	      });

	      this.setState({ actions: actions });
	    }
	  }, {
	    key: 'select',
	    value: function select(index) {
	      this.setState({ selectedIndex: index });
	    }
	  }, {
	    key: 'goto',
	    value: function goto(url) {
	      this.props.router.push(url.toLowerCase());
	    }
	  }, {
	    key: 'render',
	    value: function render() {

	      return _react2.default.createElement(
	        'div',
	        { className: 'admin-route' },
	        _react2.default.createElement(
	          'div',
	          { className: 'admin-container' },
	          _react2.default.createElement(
	            'ul',
	            null,
	            this.state.actions
	          )
	        )
	      );
	    }
	  }]);

	  return Admin;
	}(Component);

	exports.default = (0, _reactRouter.withRouter)(Admin);

/***/ },

/***/ 297:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _FlatButton = __webpack_require__(10);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;

	var AppActions = function (_Component) {
	  _inherits(AppActions, _Component);

	  function AppActions(props) {
	    _classCallCheck(this, AppActions);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AppActions).call(this));

	    _this.state = {};
	    return _this;
	  }

	  _createClass(AppActions, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_FlatButton2.default, { label: 'restart' })
	      );
	    }
	  }]);

	  return AppActions;
	}(Component);

	exports.default = AppActions;

/***/ },

/***/ 298:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Tabs = __webpack_require__(35);

	var _reactSwipeableViews = __webpack_require__(45);

	var _reactSwipeableViews2 = _interopRequireDefault(_reactSwipeableViews);

	var _List = __webpack_require__(21);

	var _uuid = __webpack_require__(13);

	var _uuid2 = _interopRequireDefault(_uuid);

	var _TextField = __webpack_require__(15);

	var _TextField2 = _interopRequireDefault(_TextField);

	var _colors = __webpack_require__(38);

	var _Divider = __webpack_require__(28);

	var _Divider2 = _interopRequireDefault(_Divider);

	var _Toggle = __webpack_require__(36);

	var _Toggle2 = _interopRequireDefault(_Toggle);

	var _FloatingActionButton = __webpack_require__(33);

	var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

	var _add = __webpack_require__(55);

	var _add2 = _interopRequireDefault(_add);

	var _FlatButton = __webpack_require__(10);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	var _RaisedButton = __webpack_require__(22);

	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

	var _flatInput = __webpack_require__(110);

	var _flatInput2 = _interopRequireDefault(_flatInput);

	var _Slider = __webpack_require__(29);

	var _Slider2 = _interopRequireDefault(_Slider);

	var _player = __webpack_require__(290);

	var _player2 = _interopRequireDefault(_player);

	var _mobxReact = __webpack_require__(43);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;


	var styles = {
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
	  slide: {
	    height: 900
	  },
	  button: {
	    position: 'relative',
	    top: -40,
	    float: 'right',
	    marginRight: 10
	  },
	  seek: {
	    width: '80%',
	    margin: '0 auto'
	  }
	};

	var Audio = (0, _mobxReact.observer)(_class = function (_Component) {
	  _inherits(Audio, _Component);

	  function Audio(props) {
	    _classCallCheck(this, Audio);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Audio).call(this));

	    _this.state = {
	      slideIndex: 0,
	      audio: [],
	      elasped: 0,
	      instance: null,
	      prep: false,
	      isPlaying: false,
	      names: [],
	      totalSize: 0,
	      action: false,
	      seek: 0,
	      seeking: false,
	      elm: null

	    };

	    _this.x_audio = props.store;
	    _this.interval = null;
	    _this.config = {};
	    window.xStore = _this.x_audio;
	    return _this;
	  }

	  _createClass(Audio, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      var self = this;
	      var element = this.refs.audio;
	      self.x_audio.setElementREF(element);
	      sockets.fs.on('audio-list', function (files) {
	        //arr of browser window objs

	        console.log(files);
	        _this2.setState({ audio: files.file, dir: files.dir });
	      });
	      sockets.fs.emit('get-audio-list');
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearInterval(this.interval);
	      this.state.current = false;
	      this.state.prep = false;
	      sockets.Electron.emit('destroy-browser-window', this.config.id);
	    }
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'spawnAudioProcess',
	    value: function spawnAudioProcess(filename) {
	      console.log('creating');
	      this.x_audio.createAudioBuffer(filename);
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(value) {
	      this.setState({ slideIndex: value });
	    }
	  }, {
	    key: 'prepAudio',
	    value: function prepAudio(ev) {
	      var file = ev.target.files[0];
	      var reader = new FileReader();
	      var name = file.name;
	      var self = this;
	      reader.onload = function (res) {
	        var data = res.target.result;
	        self.state.data = { name: name, data: data };
	        self.setState({ prep: true });
	      };
	      reader.readAsBinaryString(file);
	    }
	  }, {
	    key: 'save',
	    value: function save(stream) {
	      //let {name , data} = this.state.data;
	      var names = stream.map(function (e) {
	        return e.name;
	      });
	      var size = stream.reduce(function (start, item) {
	        return start += item.data.length;
	      }, 0);
	      this.setState({ names: names, totalSize: size });
	      console.log('stream', names, size);
	      sockets.fs.emit('save-audio', stream);
	    }
	  }, {
	    key: 'deleteAudio',
	    value: function deleteAudio(name) {
	      console.log('deleteing', name);
	      sockets.fs.emit('delete-audio', name);
	    }
	  }, {
	    key: 'queue',
	    value: function queue(filename) {
	      var store = this.x_audio;
	      this.x_audio.queue(filename);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      var props = this.props._props;

	      //  let isCurrent = this.x_audio.current

	      return _react2.default.createElement(
	        'div',
	        { className: 'intros' },
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            _Tabs.Tabs,
	            { onChange: this.handleChange.bind(this), value: this.state.slideIndex },
	            _react2.default.createElement(_Tabs.Tab, { label: 'files', value: 0 }),
	            _react2.default.createElement(_Tabs.Tab, { label: 'create', value: 1 })
	          ),
	          _react2.default.createElement(
	            _reactSwipeableViews2.default,
	            { index: this.state.slideIndex, onChangeIndex: this.handleChange.bind(this) },
	            _react2.default.createElement(
	              'div',
	              { style: styles.slide },
	              _react2.default.createElement(_player2.default, {
	                element: this.state.elm,
	                xStore: this.x_audio,
	                isPlaying: this.state.isPlaying,
	                current: this.state.current,
	                duration: this.state.duration,
	                settings: this.state.settings,
	                seek: this.state.seek }),
	              _react2.default.createElement(
	                _List.List,
	                null,
	                this.state.audio.map(function (e, index) {
	                  return _react2.default.createElement(
	                    'div',
	                    { key: (0, _uuid2.default)(), style: { position: 'relative' } },
	                    _react2.default.createElement(_List.ListItem, {
	                      style: { background: e === _this3.x_audio.current ? 'rgba(64, 173, 237, 0.18)' : 'transparent' },
	                      primaryText: e,
	                      onTouchTap: _this3.spawnAudioProcess.bind(_this3, e) }),
	                    _react2.default.createElement(_RaisedButton2.default, { disabled: _this3.state.isPlaying, label: 'delete', onTouchTap: _this3.deleteAudio.bind(_this3, e), primary: true, style: styles.button }),
	                    _react2.default.createElement(_RaisedButton2.default, {
	                      disabled: _this3.x_audio.current === e,
	                      label: 'queue',
	                      onTouchTap: _this3.queue.bind(_this3, e), secondary: true, style: styles.button })
	                  );
	                })
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { style: styles.slide },
	              _react2.default.createElement(
	                'span',
	                null,
	                'Will be added (',
	                (this.state.totalSize / 1024 / 1024).toFixed(1),
	                'MB)'
	              ),
	              _react2.default.createElement('br', null),
	              _react2.default.createElement(
	                'ul',
	                null,
	                this.state.names.map(function (e) {
	                  return _react2.default.createElement(
	                    'li',
	                    { key: (0, _uuid2.default)() },
	                    e
	                  );
	                })
	              ),
	              _react2.default.createElement(_flatInput2.default, { raised: true, secondary: true, stream: true, accept: '.mp3', label: 'Upload audio files', onChange: this.save.bind(this) })
	            )
	          )
	        ),
	        _react2.default.createElement('audio', { src: this.x_audio.blob_url, ref: 'audio' })
	      );
	    }
	  }]);

	  return Audio;
	}(Component)) || _class;

	exports.default = Audio;

/***/ },

/***/ 299:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _mobxReact = __webpack_require__(43);

	var _Toggle = __webpack_require__(36);

	var _Toggle2 = _interopRequireDefault(_Toggle);

	var _Slider = __webpack_require__(29);

	var _Slider2 = _interopRequireDefault(_Slider);

	var _RaisedButton = __webpack_require__(22);

	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

	var _Divider = __webpack_require__(28);

	var _Divider2 = _interopRequireDefault(_Divider);

	var _debounce = __webpack_require__(169);

	var _debounce2 = _interopRequireDefault(_debounce);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;


	var styles = {
	  border: {
	    outline: '1px solid red',
	    background: '#e0e0e0',
	    margin: '0 auto',
	    marginTop: 10,
	    position: 'relative'
	  },
	  inner: {
	    background: '#9e9e9e',
	    outline: '1px solid blue',
	    position: 'absolute',
	    top: 0
	  },
	  toggle: {
	    width: 200
	  }
	};

	var BrowserWindowPreview = (0, _mobxReact.observer)(_class = function (_Component) {
	  _inherits(BrowserWindowPreview, _Component);

	  function BrowserWindowPreview(props) {
	    _classCallCheck(this, BrowserWindowPreview);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BrowserWindowPreview).call(this));

	    _this.state = {};
	    _this.listen = (0, _debounce2.default)(_this.listener.bind(_this), 500);
	    return _this;
	  }

	  _createClass(BrowserWindowPreview, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      window.addEventListener('resize', this.listen);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.removeEventListener('resize', this.listen);
	    }
	  }, {
	    key: 'listener',
	    value: function listener() {
	      this.forceUpdate();
	    }
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var x_window = this.props.store;

	      var constantScale = 0.5;
	      var screenWidth = window.innerWidth / x_window.screenWidth + window.innerWidth * 0.5;
	      var screenHeight = window.innerHeight / x_window.screenHeight + window.innerHeight * 0.5;
	      var width = x_window.width * constantScale * x_window.scale;
	      var height = x_window.height * constantScale * x_window.scale;

	      var left = x_window.x * constantScale;
	      var top = x_window.y * constantScale;

	      var ifOutofBounds = left + width > screenWidth || top + height > screenHeight ? 'red' : 'orange';

	      if (window.innerWidth < 700) {
	        screenWidth = screenWidth * 2;
	      }

	      return _react2.default.createElement(
	        'div',
	        { className: 'browser-window-preview' },
	        _react2.default.createElement(
	          'div',
	          { className: 'preview', style: { width: screenWidth, height: screenHeight, outlineColor: ifOutofBounds } },
	          _react2.default.createElement(
	            'span',
	            { className: 'screen' },
	            'Host screen @ 50% scale. ',
	            x_window.screenWidth,
	            'x',
	            x_window.screenHeight
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: _extends({}, styles.inner, { width: width, height: height, top: top, left: left }) },
	            _react2.default.createElement(
	              'span',
	              { className: 'transform' },
	              'browser window'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'controls' },
	          _react2.default.createElement(
	            'span',
	            null,
	            'pos-x: ',
	            _react2.default.createElement(
	              'strong',
	              null,
	              x_window.x
	            )
	          ),
	          _react2.default.createElement(_Slider2.default, { name: 'pos-X', step: 1, value: x_window.x, min: 0, max: x_window.screenWidth,
	            onChange: function onChange(e, v) {
	              return x_window.setProp('x', v);
	            } }),
	          _react2.default.createElement(
	            'span',
	            null,
	            'pos-y: ',
	            _react2.default.createElement(
	              'strong',
	              null,
	              x_window.y
	            )
	          ),
	          _react2.default.createElement(_Slider2.default, { name: 'pos-y', step: 1, value: x_window.y, min: 0, max: x_window.screenHeight,
	            onChange: function onChange(e, v) {
	              return x_window.setProp('y', v);
	            } }),
	          _react2.default.createElement(
	            'span',
	            null,
	            'width: ',
	            _react2.default.createElement(
	              'strong',
	              null,
	              Math.floor(x_window.width * x_window.scale)
	            )
	          ),
	          _react2.default.createElement(_Slider2.default, { name: 'width', step: 20, value: x_window.width, min: 0, max: x_window.screenWidth,
	            onChange: function onChange(e, v) {
	              return x_window.setProp('width', v);
	            } }),
	          _react2.default.createElement(
	            'span',
	            null,
	            'height: ',
	            _react2.default.createElement(
	              'strong',
	              null,
	              Math.floor(x_window.height * x_window.scale)
	            )
	          ),
	          _react2.default.createElement(_Slider2.default, { name: 'height', step: 20, value: x_window.height, min: 0, max: x_window.screenHeight,
	            onChange: function onChange(e, v) {
	              return x_window.setProp('height', v);
	            } }),
	          _react2.default.createElement(
	            'span',
	            null,
	            'scale-factor: ',
	            _react2.default.createElement(
	              'strong',
	              null,
	              x_window.scale
	            )
	          ),
	          _react2.default.createElement(_Slider2.default, { name: 'scale-factor', step: 0.01, value: x_window.scale, min: 0, max: 1, onChange: function onChange(e, v) {
	              return x_window.setProp('scale', v);
	            } }),
	          _react2.default.createElement(
	            'span',
	            null,
	            'automaticly scale: '
	          ),
	          _react2.default.createElement(_Toggle2.default, { label: 'auto', style: styles.toggle, onToggle: function onToggle(f, e) {
	              return _this2.x_window.setProp('auto', e);
	            } }),
	          _react2.default.createElement(_Divider2.default, null),
	          _react2.default.createElement(_Toggle2.default, { toggled: x_window.frame, label: 'frame', style: styles.toggle, onToggle: function onToggle(f, e) {
	              return x_window.setProp('frame', e);
	            } }),
	          _react2.default.createElement(_Toggle2.default, { toggled: x_window.center, label: 'center', style: styles.toggle, onToggle: function onToggle(f, e) {
	              return x_window.setProp('center', e);
	            } }),
	          _react2.default.createElement(_Toggle2.default, { toggled: x_window.alwaysOnTop, label: 'alwaysOnTop', style: styles.toggle, onToggle: function onToggle(f, e) {
	              return x_window.setProp('alwaysOnTop', e);
	            } }),
	          _react2.default.createElement(_Toggle2.default, { toggled: x_window.skipTaskbar, label: 'skipTaskbar', style: styles.toggle, onToggle: function onToggle(f, e) {
	              return x_window.setProp('skipTaskbar', e);
	            } }),
	          _react2.default.createElement(_Toggle2.default, { toggled: x_window.hasShadow, label: 'hasShadow', style: styles.toggle, onToggle: function onToggle(f, e) {
	              return x_window.setProp('hasShadow', e);
	            } }),
	          _react2.default.createElement(_Toggle2.default, { toggled: x_window.moveable, label: 'moveable', style: styles.toggle, onToggle: function onToggle(f, e) {
	              return x_window.setProp('moveable', e);
	            } }),
	          _react2.default.createElement(_Toggle2.default, { toggled: x_window.show, label: 'show', style: styles.toggle, onToggle: function onToggle(f, e) {
	              return x_window.setProp('show', e);
	            } })
	        )
	      );
	    }
	  }]);

	  return BrowserWindowPreview;
	}(Component)) || _class;

	exports.default = BrowserWindowPreview;

/***/ },

/***/ 300:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Tabs = __webpack_require__(35);

	var _reactSwipeableViews = __webpack_require__(45);

	var _reactSwipeableViews2 = _interopRequireDefault(_reactSwipeableViews);

	var _List = __webpack_require__(21);

	var _uuid = __webpack_require__(13);

	var _uuid2 = _interopRequireDefault(_uuid);

	var _TextField = __webpack_require__(15);

	var _TextField2 = _interopRequireDefault(_TextField);

	var _colors = __webpack_require__(38);

	var _Divider = __webpack_require__(28);

	var _Divider2 = _interopRequireDefault(_Divider);

	var _Toggle = __webpack_require__(36);

	var _Toggle2 = _interopRequireDefault(_Toggle);

	var _FloatingActionButton = __webpack_require__(33);

	var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

	var _add = __webpack_require__(55);

	var _add2 = _interopRequireDefault(_add);

	var _FlatButton = __webpack_require__(10);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	var _flatInput = __webpack_require__(110);

	var _flatInput2 = _interopRequireDefault(_flatInput);

	var _RaisedButton = __webpack_require__(22);

	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

	var _Badge = __webpack_require__(178);

	var _Badge2 = _interopRequireDefault(_Badge);

	var _IconButton = __webpack_require__(34);

	var _IconButton2 = _interopRequireDefault(_IconButton);

	var _error = __webpack_require__(537);

	var _error2 = _interopRequireDefault(_error);

	var _Dialog = __webpack_require__(49);

	var _Dialog2 = _interopRequireDefault(_Dialog);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;


	var styles = {
	  errorStyle: {
	    color: _colors.orange500
	  },
	  button: {
	    position: 'absolute',
	    right: 0,
	    top: 0,
	    height: '100%',
	    width: 150,
	    fontWeight: 'bold'
	  },
	  div: {
	    position: 'relative'
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
	  slide: {
	    height: 900
	  }
	};

	var FileSystem = function (_Component) {
	  _inherits(FileSystem, _Component);

	  function FileSystem(props) {
	    _classCallCheck(this, FileSystem);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FileSystem).call(this));

	    _this.state = {
	      slideIndex: 0,
	      cwd: null,
	      root: null,
	      currentDirlist: [],
	      newDir: false,
	      value: '',
	      errors: [],
	      dialog: false
	    };

	    return _this;
	  }

	  _createClass(FileSystem, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      var self = this;
	      sockets.fs.on('got-dirlist', function (newDirlist) {

	        var formated = newDirlist.list.map(function (item) {
	          var parts = item.split('.');

	          if (parts.length > 1) {
	            return { path: item, type: 'File' };
	          } else {
	            return { path: item, type: 'Directory' };
	          }
	        });
	        formated = formated.sort(function (a, b) {
	          return a.type === 'File';
	        });
	        if (self.state.root) {
	          self.setState({ currentDirlist: formated, cwd: newDirlist.cwd });
	          return;
	        }
	        self.setState({ currentDirlist: formated, cwd: newDirlist.cwd, root: newDirlist.root });
	      });

	      sockets.fs.on('got-delete', function (dir) {
	        alert('deleted ' + dir);
	      });

	      sockets.fs.emit('get-root-dir');

	      //opens dialog to show all errors!!!
	      sockets.fs.on('fs-error', function (error) {
	        _this2.state.errors.push(error);
	        _this2.setState({ errors: _this2.state.errors });
	      });
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'handleChange',
	    value: function handleChange(value) {
	      this.setState({ slideIndex: value });
	    }
	  }, {
	    key: 'changeDir',
	    value: function changeDir(newDir) {
	      var dir = this.state.cwd + '/' + newDir.path;
	      sockets.fs.emit('change-dir', dir);
	      //console.log(dir)
	    }
	  }, {
	    key: 'root',
	    value: function root() {
	      sockets.fs.emit('change-dir', this.state.root);
	    }
	  }, {
	    key: 'back',
	    value: function back() {
	      var rootDir = this.state.root.split(/\\|\//g).pop();

	      var path = this.state.cwd.split(/\\|\//g);

	      // if(~path.indexOf(rootDir)){
	      //
	      //   console.log(path ,this.state.root ,rootDir ,this.state.cwd)
	      //   return
	      // }
	      path.splice(path.length - 1, 1);
	      var current = path.join('\\');

	      sockets.fs.emit('change-dir', current);
	    }
	  }, {
	    key: 'deleteFile',
	    value: function deleteFile(dir) {
	      var _path = this.state.cwd + '/' + dir.path;
	      var confirm = window.confirm('delete this directory? THIS CANT BE UNDONE!! \n @' + _path);

	      if (confirm) {
	        sockets.fs.emit('delete-dir', { path: _path, cwd: this.state.cwd });
	        //alert('process need be restarted to update changes')
	      }
	    }
	  }, {
	    key: 'addFile',
	    value: function addFile(ev) {
	      var files = ev.target.files;
	      var cFiles = Array.apply(0, files);
	      var cc = 0;
	      var totalSize = 0;
	      var self = this;
	      console.log(cFiles);

	      cFiles.map(function (file, index, arr) {
	        var reader = new FileReader();

	        reader.onload = function (res) {
	          cc += 1;
	          totalSize += file.size;
	          var filenameData = file.name.split('.');
	          var ext = filenameData[filenameData.length - 1];
	          var filename = filenameData[0];
	          var text = res.target.result;
	          sockets.fs.emit('dir-add-file', { name: filename, ext: ext, value: text, path: self.state.cwd });
	        };
	        reader.readAsBinaryString(file);
	      });
	    }
	  }, {
	    key: 'newFile',
	    value: function newFile() {}
	  }, {
	    key: 'toggleDir',
	    value: function toggleDir() {
	      this.setState({ newDir: !this.state.newDir });
	    }
	  }, {
	    key: 'newDir',
	    value: function newDir() {
	      var _this3 = this;

	      var exists = this.state.currentDirlist.filter(function (e) {
	        return e.path === _this3.state.value;
	      });
	      console.log(exists);

	      if (exists.length) {
	        alert('\'' + exists[0].path + '\' already exists!');
	        return;
	      }
	      this.state.value.length && sockets.fs.emit('new-dir', { cwd: this.state.cwd, value: this.state.value });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this4 = this;

	      var actions = [_react2.default.createElement(_FlatButton2.default, {
	        label: 'Clear',
	        primary: true,
	        onTouchTap: function onTouchTap(e) {
	          return _this4.setState({ errors: [] });
	        }
	      }), _react2.default.createElement(_FlatButton2.default, {
	        label: 'Close',
	        primary: true,
	        keyboardFocused: true,
	        onTouchTap: function onTouchTap(e) {
	          return _this4.setState({ dialog: false });
	        }
	      })];
	      //let bold = e.type === 'Directory' ? {fontWeight:'bold'} : {}
	      return _react2.default.createElement(
	        'div',
	        { className: 'intros' },
	        _react2.default.createElement(
	          'span',
	          null,
	          'Directory: ',
	          this.state.cwd
	        ),
	        _react2.default.createElement('br', null),
	        _react2.default.createElement(_FlatButton2.default, { label: 'root', onTouchTap: this.root.bind(this) }),
	        _react2.default.createElement(_FlatButton2.default, { label: 'back', onTouchTap: this.back.bind(this) }),
	        _react2.default.createElement(_RaisedButton2.default, { secondary: true, label: 'new Directory', onTouchTap: this.toggleDir.bind(this) }),
	        _react2.default.createElement(_flatInput2.default, { raised: true, primary: true, accept: '*', label: 'new file', onChange: this.newFile.bind(this) }),
	        _react2.default.createElement(
	          _Badge2.default,
	          {
	            badgeContent: this.state.errors.length,
	            primary: true,
	            badgeStyle: { top: 12, right: 12 },
	            onTouchTap: function onTouchTap(e) {
	              return _this4.setState({ dialog: true });
	            }
	          },
	          _react2.default.createElement(
	            _IconButton2.default,
	            { tooltip: 'Errors' },
	            _react2.default.createElement(_error2.default, null)
	          )
	        ),
	        this.state.newDir && _react2.default.createElement(
	          'section',
	          null,
	          _react2.default.createElement(_TextField2.default, { hintText: 'type new directory name', onChange: function onChange(e) {
	              return _this4.setState({ value: e.target.value });
	            } }),
	          _react2.default.createElement(_FlatButton2.default, { label: 'add', onTouchTap: this.newDir.bind(this) })
	        ),
	        _react2.default.createElement(
	          _List.List,
	          null,
	          this.state.currentDirlist.map(function (e, index) {
	            return _react2.default.createElement(
	              'div',
	              { key: (0, _uuid2.default)(), style: styles.div },
	              _react2.default.createElement(_List.ListItem, {
	                style: e.type === 'Directory' ? { fontWeight: 'bold' } : {},
	                primaryText: e.path,
	                secondaryText: e.type,
	                onTouchTap: _this4.changeDir.bind(_this4, e) }),
	              _react2.default.createElement(_FlatButton2.default, { style: styles.button, secondary: true, label: 'delete', onTouchTap: _this4.deleteFile.bind(_this4, e) })
	            );
	          })
	        ),
	        _react2.default.createElement(
	          _Dialog2.default,
	          {
	            title: 'errors',
	            actions: actions,
	            modal: false,
	            open: this.state.dialog,
	            onRequestClose: function onRequestClose(e) {
	              return _this4.setState({ dialog: false });
	            } },
	          _react2.default.createElement(
	            _List.List,
	            null,
	            this.state.errors.map(function (e) {
	              return _react2.default.createElement(_List.ListItem, { key: (0, _uuid2.default)(), primaryText: e });
	            })
	          )
	        )
	      );
	    }
	  }]);

	  return FileSystem;
	}(Component);

	exports.default = FileSystem;

/***/ },

/***/ 301:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Tabs = __webpack_require__(35);

	var _reactSwipeableViews = __webpack_require__(45);

	var _reactSwipeableViews2 = _interopRequireDefault(_reactSwipeableViews);

	var _List = __webpack_require__(21);

	var _uuid = __webpack_require__(13);

	var _uuid2 = _interopRequireDefault(_uuid);

	var _TextField = __webpack_require__(15);

	var _TextField2 = _interopRequireDefault(_TextField);

	var _colors = __webpack_require__(38);

	var _Divider = __webpack_require__(28);

	var _Divider2 = _interopRequireDefault(_Divider);

	var _Toggle = __webpack_require__(36);

	var _Toggle2 = _interopRequireDefault(_Toggle);

	var _FloatingActionButton = __webpack_require__(33);

	var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

	var _add = __webpack_require__(55);

	var _add2 = _interopRequireDefault(_add);

	var _FlatButton = __webpack_require__(10);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	var _RaisedButton = __webpack_require__(22);

	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

	var _delay = __webpack_require__(168);

	var _delay2 = _interopRequireDefault(_delay);

	var _callbackAction = __webpack_require__(167);

	var _callbackAction2 = _interopRequireDefault(_callbackAction);

	var _shortcuts = __webpack_require__(317);

	var _shortcuts2 = _interopRequireDefault(_shortcuts);

	var _toggleUi = __webpack_require__(318);

	var _toggleUi2 = _interopRequireDefault(_toggleUi);

	var _CircularProgress = __webpack_require__(187);

	var _CircularProgress2 = _interopRequireDefault(_CircularProgress);

	var _Slider = __webpack_require__(29);

	var _Slider2 = _interopRequireDefault(_Slider);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;


	var styles = {
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
	  slide: {
	    height: 900
	  }
	};

	var Keyboard = function (_Component) {
	  _inherits(Keyboard, _Component);

	  function Keyboard(props) {
	    _classCallCheck(this, Keyboard);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Keyboard).call(this));

	    _this.state = {
	      slideIndex: 0,
	      delayToggle: false,
	      queItem: null,
	      queCode: null,
	      anchorEl: null,
	      delay: 80,
	      loadKeyboard: true,
	      sections: [],
	      hold: 0.5,
	      inputValue: ''
	    };

	    return _this;
	  }

	  _createClass(Keyboard, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      //sockets.Robot.emit('robot-prep-keyboard-shortcuts' , this.state.shortcuts);
	      sockets.Robot.on('keyboard-shortcuts', function (shortcuts) {
	        var obj = JSON.parse(shortcuts);
	        obj = obj.reduce(function (start, i, index) {
	          var parent = Object.keys(i);
	          start[parent[0]] = i[parent[0]];
	          return start;
	        }, {});

	        var sections = Object.keys(obj);
	        _this2.setState({ shortcuts: obj, sections: sections, loadKeyboard: false });
	      });
	      sockets.Robot.emit('get-keyboard-shortcuts');
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'handleChange',
	    value: function handleChange(value) {
	      this.setState({ slideIndex: value });
	    }
	  }, {
	    key: 'execCommand',
	    value: function execCommand(item, code) {
	      var _key = Array.isArray(item.code) ? item.code[1] : item.code;
	      var _mod = Array.isArray(item.code) ? item.code[0] : false;
	      return;
	      console.log(_key, _mod, item, code);
	      if (item.hold) {
	        sockets.Robot.emit('robot-keyToggle', { key: _key, delay: item.hold || 20, mod: _mod });
	      } else {

	        sockets.Robot.emit('robot-keyTap', { key: _key, mod: _mod });
	      }
	    }
	  }, {
	    key: 'sendText',
	    value: function sendText() {
	      var input = this.state.inputValue;
	      var delay = this.state.delay;
	      if (input.length) {

	        sockets.Robot.emit('robot-typeString', { input: input, delay: delay });
	      }
	      //setTimeout(this.queueCommand.bind(this) ,parseInt(delay));
	    }
	  }, {
	    key: 'handleDelay',
	    value: function handleDelay(e) {
	      e.preventDefault();
	      this.setState({
	        delayToggle: true,
	        anchorEl: e.currentTarget
	      });
	    }
	  }, {
	    key: 'closeDelay',
	    value: function closeDelay() {
	      this.setState({
	        delayToggle: false
	      });
	    }
	  }, {
	    key: 'setDelay',
	    value: function setDelay(delay) {
	      this.setState({ delay: delay });
	    }
	  }, {
	    key: 'queueCommand',
	    value: function queueCommand() {
	      this.state.queCode !== null && this.execCommand(this.state.queItem, this.state.queCode);
	    }
	  }, {
	    key: 'setQueue',
	    value: function setQueue(item, code) {
	      this.state.queItem = item;
	      this.state.queCode = code;
	    }
	  }, {
	    key: 'setHold',
	    value: function setHold(e, value) {
	      this.state.hold = value;
	      this.refs.mockHold.innerText = value;
	      //this.setState({hold:value})
	    }
	  }, {
	    key: 'getShortcuts',
	    value: function getShortcuts() {
	      return this.state.shortcuts;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      return _react2.default.createElement(
	        'div',
	        { className: 'intros' },
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            _Tabs.Tabs,
	            { onChange: this.handleChange.bind(this), value: this.state.slideIndex },
	            _react2.default.createElement(_Tabs.Tab, { label: 'shortcuts', value: 0 }),
	            _react2.default.createElement(_Tabs.Tab, { label: 'raw input', value: 1 })
	          ),
	          _react2.default.createElement(
	            _reactSwipeableViews2.default,
	            { index: this.state.slideIndex, onChangeIndex: this.handleChange.bind(this) },
	            _react2.default.createElement(
	              'div',
	              { style: styles.slide },
	              _react2.default.createElement(
	                'span',
	                null,
	                'hold key for ',
	                _react2.default.createElement('span', { ref: 'mockHold' }),
	                ' seconds'
	              ),
	              _react2.default.createElement(_Slider2.default, { style: { width: '90%', margin: '0 auto' }, min: 0.5, step: 0.5, max: 30, onChange: this.setHold.bind(this) }),
	              _react2.default.createElement(_toggleUi2.default, { show: this.state.loadKeyboard, label: 'loading keyboard shortcuts', icon: _react2.default.createElement(_CircularProgress2.default, null) }),
	              !this.props.loadKeyboard && this.state.sections.map(function (e) {
	                return _react2.default.createElement(_shortcuts2.default, {
	                  isLoading: _this3.state.loadKeyboard,
	                  hold: function hold(e) {
	                    return _this3.state.hold;
	                  },
	                  key: (0, _uuid2.default)(),
	                  section: e,
	                  content: _this3.state.shortcuts[e] });
	              })
	            ),
	            _react2.default.createElement(
	              'div',
	              null,
	              _react2.default.createElement(_TextField2.default, { hintText: 'input to send', onChange: function onChange(e) {
	                  return _this3.setState({ inputValue: e.target.value });
	                } }),
	              _react2.default.createElement('br', null),
	              _react2.default.createElement(_RaisedButton2.default, { label: 'send', primary: true, onTouchTap: this.sendText.bind(this) })
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Keyboard;
	}(Component);

	exports.default = Keyboard;

/***/ },

/***/ 302:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Snackbar = __webpack_require__(87);

	var _Snackbar2 = _interopRequireDefault(_Snackbar);

	var _inbox = __webpack_require__(235);

	var _inbox2 = _interopRequireDefault(_inbox);

	var _grade = __webpack_require__(232);

	var _grade2 = _interopRequireDefault(_grade);

	var _send = __webpack_require__(236);

	var _send2 = _interopRequireDefault(_send);

	var _drafts = __webpack_require__(234);

	var _drafts2 = _interopRequireDefault(_drafts);

	var _info = __webpack_require__(233);

	var _info2 = _interopRequireDefault(_info);

	var _BottomNavigation = __webpack_require__(179);

	var _FloatingActionButton = __webpack_require__(33);

	var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

	var _computer = __webpack_require__(552);

	var _computer2 = _interopRequireDefault(_computer);

	var _locationOn = __webpack_require__(136);

	var _locationOn2 = _interopRequireDefault(_locationOn);

	var _arrowBack = __webpack_require__(561);

	var _arrowBack2 = _interopRequireDefault(_arrowBack);

	var _memory = __webpack_require__(557);

	var _memory2 = _interopRequireDefault(_memory);

	var _history = __webpack_require__(534);

	var _history2 = _interopRequireDefault(_history);

	var _fileDownload = __webpack_require__(550);

	var _fileDownload2 = _interopRequireDefault(_fileDownload);

	var _Paper = __webpack_require__(17);

	var _Paper2 = _interopRequireDefault(_Paper);

	var _reactRouter = __webpack_require__(57);

	var _browserWindow = __webpack_require__(315);

	var _browserWindow2 = _interopRequireDefault(_browserWindow);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;

	var Wrapper = function (_Component) {
	  _inherits(Wrapper, _Component);

	  function Wrapper() {
	    _classCallCheck(this, Wrapper);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Wrapper).apply(this, arguments));
	  }

	  _createClass(Wrapper, [{
	    key: 'render',
	    value: function render() {
	      return this.props.children;
	    }
	  }]);

	  return Wrapper;
	}(Component);

	var styles = {

	  bottomBar: {
	    //position:'absolute',
	    bottom: 0,
	    left: 0,
	    width: '100%'
	  },
	  button: {
	    margin: 10,
	    position: 'fixed',
	    bottom: 0,
	    zIndex: 8000,
	    right: 0
	  }
	};

	var Layout = function (_Component2) {
	  _inherits(Layout, _Component2);

	  function Layout(props) {
	    _classCallCheck(this, Layout);

	    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Layout).call(this));

	    _this2.state = {
	      open: false,
	      msg: '',
	      selectedIndex: 2,
	      settings: false
	    };
	    return _this2;
	  }

	  _createClass(Layout, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'handleRequestClose',
	    value: function handleRequestClose() {
	      this.setState({ open: false });
	    }
	  }, {
	    key: 'select',
	    value: function select(index) {
	      switch (index) {
	        case 0:
	          this.props.router.push('');break;
	        case 1:
	          this.props.router.push('shell');break;
	        case 2:
	          this.props.router.push('logs');break;
	        case 3:
	          this.props.router.push('npm');break;
	        case 4:
	          this.props.router.push('app');break;
	      }
	      this.setState({ selectedIndex: index });
	    }
	  }, {
	    key: 'onBack',
	    value: function onBack() {
	      this.select(0);
	      this.props.router.push('admin');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      var state = this.state;

	      var props = this.props._props;
	      return _react2.default.createElement(
	        'div',
	        { className: 'Layout' },
	        _react2.default.createElement(
	          _Paper2.default,
	          { zDepth: 1, style: styles.bottomBar },
	          _react2.default.createElement(
	            _BottomNavigation.BottomNavigation,
	            { selectedIndex: this.state.selectedIndex },
	            _react2.default.createElement(_BottomNavigation.BottomNavigationItem, {
	              label: 'Back',
	              icon: _react2.default.createElement(_arrowBack2.default, { style: { display: 'inline-block' } }),
	              onTouchTap: function onTouchTap() {
	                return _this3.select(0);
	              }
	            }),
	            _react2.default.createElement(_BottomNavigation.BottomNavigationItem, {
	              label: 'Shell',
	              icon: _react2.default.createElement(_memory2.default, { style: { display: 'inline-block' } }),
	              onTouchTap: function onTouchTap() {
	                return _this3.select(1);
	              }
	            }),
	            _react2.default.createElement(_BottomNavigation.BottomNavigationItem, {
	              label: 'logs',
	              icon: _react2.default.createElement(_history2.default, { style: { display: 'inline-block' } }),
	              onTouchTap: function onTouchTap() {
	                return _this3.select(2);
	              }
	            }),
	            _react2.default.createElement(_BottomNavigation.BottomNavigationItem, {
	              label: 'NPM',
	              icon: _react2.default.createElement(_fileDownload2.default, { style: { display: 'inline-block' } }),
	              onTouchTap: function onTouchTap() {
	                return _this3.select(3);
	              }
	            }),
	            _react2.default.createElement(_BottomNavigation.BottomNavigationItem, {
	              label: 'APP',
	              icon: _react2.default.createElement(_fileDownload2.default, { style: { display: 'inline-block' } }),
	              onTouchTap: function onTouchTap() {
	                return _this3.select(4);
	              }
	            })
	          )
	        ),
	        _react2.default.createElement(
	          Wrapper,
	          { store: this.props.stores },
	          props.children
	        ),
	        _react2.default.createElement(
	          _FloatingActionButton2.default,
	          { secondary: true, style: styles.button, title: 'window settings', onTouchTap: function onTouchTap(e) {
	              return _this3.setState({ settings: true });
	            } },
	          _react2.default.createElement(_computer2.default, null)
	        ),
	        _react2.default.createElement(_browserWindow2.default, { store: this.props.store, show: this.state.settings, close: function close(e) {
	            return _this3.setState({ settings: false });
	          } })
	      );
	    }
	  }]);

	  return Layout;
	}(Component);

	exports.default = (0, _reactRouter.withRouter)(Layout);

/***/ },

/***/ 303:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _List = __webpack_require__(21);

	var _Dialog = __webpack_require__(49);

	var _Dialog2 = _interopRequireDefault(_Dialog);

	var _FlatButton = __webpack_require__(10);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	var _uuid = __webpack_require__(13);

	var _uuid2 = _interopRequireDefault(_uuid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;

	var Logs = function (_Component) {
	  _inherits(Logs, _Component);

	  function Logs(props) {
	    _classCallCheck(this, Logs);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Logs).call(this));

	    _this.state = {
	      dialog: false,
	      value: {},
	      event: '',
	      active: null

	    };
	    return _this;
	  }

	  _createClass(Logs, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var actions = [_react2.default.createElement(_FlatButton2.default, {
	        label: 'close',
	        primary: true,
	        onTouchTap: function onTouchTap(e) {
	          return _this2.setState({ dialog: false });
	        }
	      })];
	      var show = function show(value) {

	        //this.setState({target:JSON.stringify(value)});
	      };
	      var hide = function hide() {
	        //  this.setState({target:'false'});
	      };
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _List.List,
	          null,
	          window.LOG.map(function (e, index) {
	            return _react2.default.createElement(
	              'div',
	              { key: (0, _uuid2.default)(), style: { position: 'relative' } },
	              _react2.default.createElement(_List.ListItem, { primaryText: e.event, onTouchTap: function onTouchTap(f) {
	                  return _this2.setState({ dialog: true, value: e.value, title: e.event });
	                } }),
	              _react2.default.createElement(_FlatButton2.default, {
	                secondary: true, label: 'view', style: { position: 'absolute', top: 0, right: 0 },
	                onClick: function onClick(f) {
	                  return _this2.setState({ dialog: true, value: e.value, title: e.event });
	                } })
	            );
	          })
	        ),
	        _react2.default.createElement(
	          _Dialog2.default,
	          {
	            title: this.state.title,
	            autoScrollBodyContent: true,
	            actions: actions,
	            modal: false,
	            open: this.state.dialog,
	            onRequestClose: function onRequestClose(e) {
	              return _this2.setState({ dialog: false });
	            } },
	          _react2.default.createElement(
	            'pre',
	            null,
	            JSON.stringify(this.state.value, null, 2)
	          )
	        )
	      );
	    }
	  }]);

	  return Logs;
	}(Component);

	exports.default = Logs;

/***/ },

/***/ 304:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _TextField = __webpack_require__(15);

	var _TextField2 = _interopRequireDefault(_TextField);

	var _Checkbox = __webpack_require__(83);

	var _Checkbox2 = _interopRequireDefault(_Checkbox);

	var _FlatButton = __webpack_require__(10);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	var _uuid = __webpack_require__(13);

	var _uuid2 = _interopRequireDefault(_uuid);

	var _List = __webpack_require__(21);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;


	var styles = {
	  button: {
	    position: 'absolute',
	    top: 0,
	    right: 0
	  }
	};

	var npmUI = function (_Component) {
	  _inherits(npmUI, _Component);

	  function npmUI(props) {
	    _classCallCheck(this, npmUI);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(npmUI).call(this));

	    _this.state = {
	      value: '',
	      save: true,
	      isInstalled: null,
	      packages: [],
	      status: ''
	    };
	    return _this;
	  }

	  _createClass(npmUI, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      sockets.System.on('packageJSON', function (packageJSON) {
	        var json = JSON.parse(packageJSON);
	        var deps = Object.keys(json.dependencies);
	        _this2.setState({ packages: deps });
	        console.log(packageJSON);
	      });
	      sockets.System.on('npm-status', function (status) {
	        console.log(status);
	        _this2.setState({ status: status.value });
	      });
	      sockets.System.emit('get-packageJSON');
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'toggleDeps',
	    value: function toggleDeps() {
	      this.setState({ save: !this.state.save });
	    }
	  }, {
	    key: 'setValue',
	    value: function setValue(e) {
	      this.setState({ value: e.target.value });
	    }
	  }, {
	    key: 'install',
	    value: function install() {
	      var isInstalled = ~this.state.packages.indexOf(this.state.value);
	      var opts = { package: this.state.value, installed: isInstalled, save: this.state.save };
	      console.log(opts);
	      sockets.System.emit('npm-install', opts);
	      alert('app need to be restarted for these changes to take affect');
	    }
	  }, {
	    key: 'uninstall',
	    value: function uninstall(_package) {
	      console.log('uninstalling', _package);
	      sockets.System.emit('npm-uninstall', _package);
	      alert('app need to be restarted for these changes to take affect');
	    }
	  }, {
	    key: 'restart',
	    value: function restart() {
	      var confirm = window.confirm('restart app?');
	      if (confirm) {
	        sockets.System.emit('restart');
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      var isInstalled = ~this.state.packages.indexOf(this.state.value) ? 're-install' : 'install';
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(_TextField2.default, {
	            onChange: this.setValue.bind(this),
	            hintText: 'install npm module'
	          }),
	          _react2.default.createElement('br', null),
	          _react2.default.createElement(_Checkbox2.default, { label: 'add to dependancies?', checked: true, onCheck: this.toggleDeps.bind(this) }),
	          _react2.default.createElement(_FlatButton2.default, { label: isInstalled, primary: true, onTouchTap: this.install.bind(this) })
	        ),
	        _react2.default.createElement(
	          'section',
	          null,
	          _react2.default.createElement(
	            'h4',
	            null,
	            'installed'
	          ),
	          _react2.default.createElement(
	            _List.List,
	            null,
	            this.state.packages.map(function (e) {
	              return _react2.default.createElement(
	                'div',
	                { key: (0, _uuid2.default)(), style: { position: 'relative' } },
	                _react2.default.createElement(_List.ListItem, { primaryText: e }),
	                _react2.default.createElement(_FlatButton2.default, { label: 'uninstall', secondary: true, onTouchTap: _this3.uninstall.bind(_this3, e), style: styles.button })
	              );
	            })
	          )
	        ),
	        _react2.default.createElement(
	          'section',
	          null,
	          _react2.default.createElement(
	            'h4',
	            null,
	            'status'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            this.state.status
	          )
	        ),
	        _react2.default.createElement(
	          'section',
	          null,
	          _react2.default.createElement(_FlatButton2.default, { label: 'restart', primary: true, onTouchTap: this.restart.bind(this) })
	        )
	      );
	    }
	  }]);

	  return npmUI;
	}(Component);

	exports.default = npmUI;

/***/ },

/***/ 305:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(57);

	var _FlatButton = __webpack_require__(10);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	var _IconButton = __webpack_require__(34);

	var _IconButton2 = _interopRequireDefault(_IconButton);

	var _supervisorAccount = __webpack_require__(135);

	var _supervisorAccount2 = _interopRequireDefault(_supervisorAccount);

	var _accountCircle = __webpack_require__(133);

	var _accountCircle2 = _interopRequireDefault(_accountCircle);

	var _pets = __webpack_require__(134);

	var _pets2 = _interopRequireDefault(_pets);

	var _FontIcon = __webpack_require__(73);

	var _FontIcon2 = _interopRequireDefault(_FontIcon);

	var _locationOn = __webpack_require__(136);

	var _locationOn2 = _interopRequireDefault(_locationOn);

	var _Paper = __webpack_require__(17);

	var _Paper2 = _interopRequireDefault(_Paper);

	var _Tabs = __webpack_require__(35);

	var _reactSwipeableViews = __webpack_require__(45);

	var _reactSwipeableViews2 = _interopRequireDefault(_reactSwipeableViews);

	var _List = __webpack_require__(21);

	var _inbox = __webpack_require__(235);

	var _inbox2 = _interopRequireDefault(_inbox);

	var _grade = __webpack_require__(232);

	var _grade2 = _interopRequireDefault(_grade);

	var _send = __webpack_require__(236);

	var _send2 = _interopRequireDefault(_send);

	var _drafts = __webpack_require__(234);

	var _drafts2 = _interopRequireDefault(_drafts);

	var _Divider = __webpack_require__(28);

	var _Divider2 = _interopRequireDefault(_Divider);

	var _info = __webpack_require__(233);

	var _info2 = _interopRequireDefault(_info);

	var _uuid = __webpack_require__(13);

	var _uuid2 = _interopRequireDefault(_uuid);

	var _TextField = __webpack_require__(15);

	var _TextField2 = _interopRequireDefault(_TextField);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;


	var styles = {
	  largeIcon: {
	    width: 60,
	    height: 60,
	    color: 'white'
	  },
	  button: {
	    position: 'absolute',
	    right: 0,
	    top: 0,
	    height: '100%',
	    width: 150,
	    fontWeight: 'bold'
	  },
	  div: {
	    position: 'relative'
	  },
	  large: {
	    width: 120,
	    height: 120,
	    padding: 30
	  },
	  bottomBar: {
	    position: 'absolute',
	    bottom: 0,
	    width: '100%'
	  }
	};

	var System = function (_Component) {
	  _inherits(System, _Component);

	  function System(props) {
	    _classCallCheck(this, System);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(System).call(this));

	    _this.state = {
	      slideIndex: 0,
	      filtered: [],
	      system: [{ name: 'Shutdown', cmd: 'Shutdown.exe -s -t 00' }, { name: 'Lock', cmd: 'Rundll32.exe User32.dll,LockWorkStation' }, { name: 'Sleep', cmd: 'rundll32.exe powrprof.dll,SetSuspendState 0,1,0' }, { name: 'Restart', cmd: 'Shutdown.exe -r -t 00' }],
	      services: [],
	      processes: []
	    };
	    return _this;
	  }

	  _createClass(System, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var self = this;
	      sockets.System.on('got-services', function (list) {
	        //console.log(list);
	        self.setState({ services: list });
	      });
	      sockets.System.on('got-processes', function (list) {
	        //  console.log(list);
	        self.setState({ processes: list, filtered: list });
	      });
	      sockets.System.emit('get-services');
	      sockets.System.emit('get-processes');
	    }
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'handleChange',
	    value: function handleChange(value) {
	      this.setState({ slideIndex: value });
	    }
	  }, {
	    key: 'select',
	    value: function select(index) {
	      this.setState({ selectedIndex: index });
	    }
	  }, {
	    key: 'setFilter',
	    value: function setFilter(e) {
	      var _this2 = this;

	      var value = e.target.value;

	      if (!value.length) {
	        this.setState({ filtered: this.state.processes });
	      } else {
	        (function () {
	          var regex = new RegExp('^' + value, 'ig');
	          var filtered = _this2.state.processes.filter(function (e) {
	            return regex.test(e.name);
	          });
	          _this2.setState({ filtered: filtered });
	        })();
	      }
	    }
	  }, {
	    key: 'execCommand',
	    value: function execCommand(type, cmd) {
	      console.log(type, cmd);
	      switch (type) {
	        case 'system':
	          {
	            sockets.System.emit('system-power', cmd.cmd);
	          }break;
	        case 'services':
	          {}break;
	        case 'processes':
	          {
	            var confirm = window.confirm('kill ' + cmd.name + '?');
	            if (confirm) {
	              sockets.System.emit('taskkill', cmd.name);
	            }
	          }break;

	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      return _react2.default.createElement(
	        'div',
	        { className: 'system-action' },
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            _Tabs.Tabs,
	            { onChange: this.handleChange.bind(this), value: this.state.slideIndex },
	            _react2.default.createElement(_Tabs.Tab, { label: 'power', value: 0 }),
	            _react2.default.createElement(_Tabs.Tab, { label: 'active-services', value: 1 }),
	            _react2.default.createElement(_Tabs.Tab, { label: 'processes', value: 2 })
	          ),
	          _react2.default.createElement(
	            _reactSwipeableViews2.default,
	            { index: this.state.slideIndex, onChangeIndex: this.handleChange.bind(this) },
	            _react2.default.createElement(
	              'div',
	              { style: styles.slide },
	              _react2.default.createElement(
	                _List.List,
	                null,
	                this.state.system.map(function (e) {
	                  return _react2.default.createElement(_List.ListItem, { key: (0, _uuid2.default)(), primaryText: e.name, onTouchTap: _this3.execCommand.bind(_this3, 'system', e) });
	                })
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { style: styles.slide },
	              _react2.default.createElement(
	                _List.List,
	                null,
	                this.state.services.map(function (e) {
	                  return _react2.default.createElement(_List.ListItem, { key: (0, _uuid2.default)(), primaryText: e.name, secondaryText: e.user, onTouchTap: _this3.execCommand.bind(_this3, 'services', e) });
	                })
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { style: styles.slide },
	              _react2.default.createElement(_TextField2.default, { hintText: 'Search process', onChange: this.setFilter.bind(this) }),
	              _react2.default.createElement('br', null),
	              this.state.filtered.map(function (e, index) {
	                return _react2.default.createElement(
	                  'div',
	                  { key: (0, _uuid2.default)(), style: styles.div },
	                  _react2.default.createElement(_List.ListItem, {
	                    primaryText: e.name + ' - ' + e.pid,
	                    secondaryText: 'User: ' + e.user + ', Memory: ' + e.memory }),
	                  _react2.default.createElement(_FlatButton2.default, { style: styles.button, secondary: true, label: 'kill', onTouchTap: _this3.execCommand.bind(_this3, 'processes', e) })
	                );
	              })
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return System;
	}(Component);

	exports.default = (0, _reactRouter.withRouter)(System);

/***/ },

/***/ 306:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _FlatButton = __webpack_require__(10);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	var _Tabs = __webpack_require__(35);

	var _reactSwipeableViews = __webpack_require__(45);

	var _reactSwipeableViews2 = _interopRequireDefault(_reactSwipeableViews);

	var _List = __webpack_require__(21);

	var _uuid = __webpack_require__(13);

	var _uuid2 = _interopRequireDefault(_uuid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;


	var styles = {
	  slide: {
	    height: 900
	  }
	};

	var Tasker = function (_Component) {
	  _inherits(Tasker, _Component);

	  function Tasker(props) {
	    _classCallCheck(this, Tasker);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Tasker).call(this));

	    _this.state = {
	      slideIndex: 0,
	      tasks: []
	    };
	    return _this;
	  }

	  _createClass(Tasker, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'handleChange',
	    value: function handleChange(value) {
	      this.setState({ slideIndex: value });
	    }
	  }, {
	    key: 'execTask',
	    value: function execTask(task) {}
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _Tabs.Tabs,
	          { onChange: this.handleChange.bind(this), value: this.state.slideIndex },
	          _react2.default.createElement(_Tabs.Tab, { label: 'runner', value: 0 }),
	          _react2.default.createElement(_Tabs.Tab, { label: 'create', value: 1 }),
	          _react2.default.createElement(_Tabs.Tab, { label: 'modify', value: 2 })
	        ),
	        _react2.default.createElement(
	          _reactSwipeableViews2.default,
	          { index: this.state.slideIndex, onChangeIndex: this.handleChange.bind(this) },
	          _react2.default.createElement(
	            'div',
	            { style: styles.slide },
	            _react2.default.createElement(
	              _List.List,
	              null,
	              this.state.tasks.map(function (e) {
	                return _react2.default.createElement(_List.ListItem, { key: (0, _uuid2.default)(), primaryText: e, onTouchTap: _this2.execTask.bind(_this2, e) });
	              })
	            )
	          ),
	          _react2.default.createElement('div', { style: styles.slide }),
	          _react2.default.createElement('div', { style: styles.slide })
	        )
	      );
	    }
	  }]);

	  return Tasker;
	}(Component);

	exports.default = Tasker;

/***/ },

/***/ 307:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _FlatButton = __webpack_require__(10);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	var _RaisedButton = __webpack_require__(22);

	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;


	var styles = {
	  container: {
	    width: '80%',
	    position: 'relative',
	    margin: '0 auto',
	    textAlign: 'center'
	  },
	  button: {
	    margin: 10,
	    color: 'white'
	  }
	};

	var ShellControls = function (_Component) {
	  _inherits(ShellControls, _Component);

	  function ShellControls(props) {
	    _classCallCheck(this, ShellControls);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ShellControls).call(this));

	    _this.state = {};
	    return _this;
	  }

	  _createClass(ShellControls, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'send',
	    value: function send() {
	      switch (this.props.store.action) {
	        case 'command':
	          this.props.store.send_command(this.props.store.currentCommand);break;
	        case 'url':
	          this.props.store.send_url(this.props.store.currentUrl);break;
	      }
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      this.props.store.clear();
	    }
	  }, {
	    key: 'preview',
	    value: function preview() {

	      alert(this.props.store.currentCommand);
	    }
	  }, {
	    key: 'openUrl',
	    value: function openUrl() {
	      this.props.store.setOpenUrl(!this.props.store.openUrl);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { style: styles.container },
	        _react2.default.createElement(_RaisedButton2.default, { primary: true, label: 'Send', style: styles.button, onTouchTap: this.send.bind(this) }),
	        _react2.default.createElement(_RaisedButton2.default, { secondary: true, label: 'Clear', style: styles.button, onTouchTap: this.clear.bind(this) }),
	        _react2.default.createElement(_RaisedButton2.default, { secondary: true, label: 'Preview', style: styles.button, onTouchTap: this.preview.bind(this) }),
	        _react2.default.createElement(_RaisedButton2.default, { secondary: true, label: 'open url', style: styles.button, onTouchTap: this.openUrl.bind(this) })
	      );
	    }
	  }]);

	  return ShellControls;
	}(Component);

	exports.default = ShellControls;

/***/ },

/***/ 308:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _controls = __webpack_require__(307);

	var _controls2 = _interopRequireDefault(_controls);

	var _input = __webpack_require__(309);

	var _input2 = _interopRequireDefault(_input);

	var _output = __webpack_require__(310);

	var _output2 = _interopRequireDefault(_output);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;

	var Shell = function (_Component) {
	  _inherits(Shell, _Component);

	  function Shell(props) {
	    _classCallCheck(this, Shell);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Shell).call(this));

	    _this.state = {};
	    return _this;
	  }

	  _createClass(Shell, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'render',
	    value: function render() {
	      var store = this.props.store;

	      return _react2.default.createElement(
	        'div',
	        { className: 'shell-container' },
	        _react2.default.createElement(_controls2.default, { store: store }),
	        _react2.default.createElement(_input2.default, { store: store }),
	        _react2.default.createElement(_output2.default, { store: store })
	      );
	    }
	  }]);

	  return Shell;
	}(Component);

	exports.default = Shell;

/***/ },

/***/ 309:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _TextField = __webpack_require__(15);

	var _TextField2 = _interopRequireDefault(_TextField);

	var _colors = __webpack_require__(38);

	var _debounce = __webpack_require__(169);

	var _debounce2 = _interopRequireDefault(_debounce);

	var _mobxReact = __webpack_require__(43);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;

	var styles = {
	  errorStyle: {
	    color: _colors.blue500
	  },
	  input: {
	    padding: 10
	  }

	};

	var Input = (0, _mobxReact.observer)(_class = function (_Component) {
	  _inherits(Input, _Component);

	  function Input(props) {
	    _classCallCheck(this, Input);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Input).call(this));

	    _this.state = {};
	    _this.keypress = (0, _debounce2.default)(_this.keypreser.bind(_this), 500);
	    return _this;
	  }

	  _createClass(Input, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      window.addEventListener('keydown', this.keypress);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.removeEventListener('keydown', this.keypress);
	    }
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'keypreser',
	    value: function keypreser(e) {
	      switch (this.props.store.action) {
	        case 'command':
	          e.key === 'Enter' && e.ctrlKey && this.props.store.send_command(this.props.store.currentCommand);break;
	        case 'url':
	          e.key === 'Enter' && e.ctrlKey && this.props.store.send_url(this.props.store.currentUrl);break;

	      }
	    }
	  }, {
	    key: 'setValue',
	    value: function setValue(e) {
	      var oneliner = e.target.value.replace(/\n+?/gm, ' ');
	      this.props.store.setCommand(oneliner);
	    }
	  }, {
	    key: 'setUrl',
	    value: function setUrl(e) {
	      this.props.store.setCurrentUrl(e.target.value);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _react2.default.createElement(
	        'div',
	        { style: styles.input },
	        _react2.default.createElement(
	          'span',
	          null,
	          '*newlines will be replaced by spaces.'
	        ),
	        _react2.default.createElement(_TextField2.default, {
	          id: 'command',
	          hintText: 'Input(ctrl + enter to Send)',
	          rowsMax: 8,
	          multiLine: true,
	          fullWidth: true,
	          hintStyle: styles.errorStyle,
	          autoComplete: 'off',
	          autoCorrect: 'off',
	          autoCapitalize: 'off',
	          spellCheck: 'false',
	          onFocus: function onFocus(e) {
	            return _this2.props.store.setAction(e.target.id);
	          },
	          onChange: this.setValue.bind(this)
	        }),
	        this.props.store.openUrl && _react2.default.createElement(_TextField2.default, {
	          id: 'url',
	          hintText: 'URL(ctrl + enter to Send)',
	          fullWidth: true,
	          hintStyle: styles.errorStyle,
	          autoComplete: 'off',
	          autoCorrect: 'off',
	          autoCapitalize: 'off',
	          spellCheck: 'false',
	          onFocus: function onFocus(e) {
	            return _this2.props.store.setAction(e.target.id);
	          },
	          onChange: this.setUrl.bind(this)
	        })
	      );
	    }
	  }]);

	  return Input;
	}(Component)) || _class;

	exports.default = Input;

/***/ },

/***/ 310:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _mobxReact = __webpack_require__(43);

	var _uuid = __webpack_require__(13);

	var _uuid2 = _interopRequireDefault(_uuid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;


	var styles = {
	  waiting: {
	    color: 'rgb(27, 143, 208)'
	  },
	  command: {
	    color: 'rgb(169, 64, 200)',
	    fontSize: 18,
	    fontWeight: 'bold'
	  }
	};

	var Output = (0, _mobxReact.observer)(_class = function (_Component) {
	  _inherits(Output, _Component);

	  function Output(props) {
	    _classCallCheck(this, Output);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Output).call(this));

	    _this.state = {};
	    return _this;
	  }

	  _createClass(Output, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'render',
	    value: function render() {
	      var store = this.props.store;

	      return _react2.default.createElement(
	        'div',
	        { className: 'shell-output' },
	        _react2.default.createElement(
	          'code',
	          null,
	          _react2.default.createElement(
	            'ul',
	            null,
	            store.history.map(function (e) {
	              return _react2.default.createElement(
	                'div',
	                { key: (0, _uuid2.default)(), className: 'shell-output-item' },
	                _react2.default.createElement(
	                  'span',
	                  { style: styles.command },
	                  'Command: ',
	                  e.command.toUpperCase()
	                ),
	                e.waiting ? _react2.default.createElement(
	                  'pre',
	                  { style: styles.waiting },
	                  'Executing...'
	                ) : _react2.default.createElement(
	                  'pre',
	                  null,
	                  e.result
	                )
	              );
	            })
	          )
	        )
	      );
	    }
	  }]);

	  return Output;
	}(Component)) || _class;

	exports.default = Output;

/***/ },

/***/ 311:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17;

	var _mobx = __webpack_require__(65);

	var _uuid = __webpack_require__(13);

	var _uuid2 = _interopRequireDefault(_uuid);

	var _browserWindowConfig = __webpack_require__(109);

	var _browserWindowConfig2 = _interopRequireDefault(_browserWindowConfig);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _initDefineProp(target, property, descriptor, context) {
	  if (!descriptor) return;
	  Object.defineProperty(target, property, {
	    enumerable: descriptor.enumerable,
	    configurable: descriptor.configurable,
	    writable: descriptor.writable,
	    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
	  });
	}

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	  var desc = {};
	  Object['ke' + 'ys'](descriptor).forEach(function (key) {
	    desc[key] = descriptor[key];
	  });
	  desc.enumerable = !!desc.enumerable;
	  desc.configurable = !!desc.configurable;

	  if ('value' in desc || desc.initializer) {
	    desc.writable = true;
	  }

	  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	    return decorator(target, property, desc) || desc;
	  }, desc);

	  if (context && desc.initializer !== void 0) {
	    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	    desc.initializer = undefined;
	  }

	  if (desc.initializer === void 0) {
	    Object['define' + 'Property'](target, property, desc);
	    desc = null;
	  }

	  return desc;
	}

	function _initializerWarningHelper(descriptor, context) {
	  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
	}

	var AudioStore = (_class = function () {
	  _createClass(AudioStore, [{
	    key: 'setInternalPlayback',
	    value: function setInternalPlayback(bool) {
	      this.internalPlayback = bool;
	    }
	  }, {
	    key: 'setElementREF',
	    value: function setElementREF(HTMLAudioElement) {
	      this.elementREF = HTMLAudioElement;
	    }
	  }, {
	    key: 'setCurrent',
	    value: function setCurrent(value) {
	      this.current = value;
	    }
	  }, {
	    key: 'setBytesReceived',
	    value: function setBytesReceived(value) {
	      this.bytesReceived += value;
	    }
	  }, {
	    key: 'setTotalBytes',
	    value: function setTotalBytes(value) {
	      this.totalBytes = value;
	    }
	  }, {
	    key: 'setDuration',
	    value: function setDuration(duration) {
	      this.duration = duration;
	    }
	  }, {
	    key: 'setAutoplay',
	    value: function setAutoplay(bool) {
	      this.autoplay = bool;
	    }
	  }, {
	    key: 'setMute',
	    value: function setMute(bool) {
	      this.mute = bool;
	      if (bool) {
	        this.lastVolume = this.volume;
	        this.volume = 0;
	      } else {
	        this.volume = this.lastVolume;
	      }
	    }
	  }, {
	    key: 'setSeek',
	    value: function setSeek(value) {
	      this.seek = value;
	    }
	  }, {
	    key: 'setVolume',
	    value: function setVolume(value) {
	      this.volume = value;
	      this.lastVolume = value;
	    }
	  }, {
	    key: 'setIsPlaying',
	    value: function setIsPlaying(value) {
	      this.isPlaying = value;
	    }
	  }, {
	    key: 'setElapsed',
	    value: function setElapsed(value) {
	      this.elasped = value;
	      if (this.internalPlayback) {
	        this.elementREF.currentTime = value;
	      }
	    }
	  }, {
	    key: 'setRepeat',
	    value: function setRepeat(bool) {
	      this.repeat = bool;
	    }
	  }, {
	    key: 'next',
	    value: function next() {
	      var nextTrack = this.history[0];
	      if (!nextTrack) {
	        return;
	      }
	      if (nextTrack === this.current) {
	        this.reset();
	        return;
	      }
	      console.log(nextTrack, this.current, '838');

	      this.current = nextTrack;
	      sockets.Electron.emit('create-audio-buffer', nextTrack);
	    }
	  }, {
	    key: 'queue',
	    value: function queue(track) {
	      if (this.history.length >= 50) {
	        this.history.shift();
	      }
	      if (this.history.indexOf(track)) {
	        return;
	      }
	      this.history.push(track);
	    }
	  }, {
	    key: 'startClock',
	    value: function startClock() {
	      var _this = this;

	      this.clock = setInterval(function () {

	        _this.elasped += 1;
	        if (_this.elasped >= _this.duration - 2) {
	          if (_this.repeat) {

	            _this.createAudioBuffer(_this.history[0]);
	          } else {
	            _this.reset();
	          }

	          // if(!~this.history.indexOf(this.current)){
	          //   //this.createAudioBuffer(this.history.shift());
	          // }else{
	          // }
	        }
	      }, 1000);
	    }
	  }, {
	    key: 'stopClock',
	    value: function stopClock() {
	      clearInterval(this.clock);
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      clearInterval(this.clock);
	      this.current = '';
	      this.elasped = 0;
	      this.isPlaying = false;
	      this.seek = 1;
	      this.totalBytes = 1;
	      this.bytesReceived = 0;
	      this.duration = 0;
	      this.elementREF.pause();
	    }
	  }, {
	    key: 'resetClock',
	    value: function resetClock() {
	      clearInterval(this.clock);
	      this.elasped = 0;
	    }
	  }, {
	    key: 'createAudioBuffer',
	    value: function createAudioBuffer(filename) {
	      this.reset();
	      console.log("creating!!!!!", filename);
	      sockets.Electron.emit('create-audio-buffer', filename);
	      this.current = filename;
	      if (! ~this.history.indexOf(filename)) {
	        this.history.unshift(filename);
	      }
	    }
	  }, {
	    key: 'createBrowserWindow',
	    value: function createBrowserWindow(filename) {}
	  }, {
	    key: 'destroyBrowserWindow',
	    value: function destroyBrowserWindow(filename) {}
	  }]);

	  function AudioStore() {
	    var _this2 = this;

	    _classCallCheck(this, AudioStore);

	    _initDefineProp(this, 'history', _descriptor, this);

	    _initDefineProp(this, 'current', _descriptor2, this);

	    _initDefineProp(this, 'duration', _descriptor3, this);

	    _initDefineProp(this, 'elasped', _descriptor4, this);

	    _initDefineProp(this, 'seek', _descriptor5, this);

	    _initDefineProp(this, 'volume', _descriptor6, this);

	    _initDefineProp(this, 'mute', _descriptor7, this);

	    _initDefineProp(this, 'isPlaying', _descriptor8, this);

	    _initDefineProp(this, 'lastVolume', _descriptor9, this);

	    _initDefineProp(this, 'repeat', _descriptor10, this);

	    _initDefineProp(this, 'status', _descriptor11, this);

	    _initDefineProp(this, 'autoplay', _descriptor12, this);

	    _initDefineProp(this, 'bytesReceived', _descriptor13, this);

	    _initDefineProp(this, 'totalBytes', _descriptor14, this);

	    _initDefineProp(this, 'internalPlayback', _descriptor15, this);

	    _initDefineProp(this, 'elementREF', _descriptor16, this);

	    _initDefineProp(this, 'blob_url', _descriptor17, this);

	    this.clock = null;
	    this.config = new _browserWindowConfig2.default();
	    sockets.Electron.on('audio-buffer', function (binaryString) {
	      var element = _this2.elementREF;
	      sockets.Electron.emit('create-browser-window', (0, _uuid2.default)(), 'audio', _this2.config.build('audio'));
	      var buffer = new Uint8Array(binaryString.length);

	      for (var i = 0; i < binaryString.length; i++) {
	        buffer[i] = binaryString.charCodeAt(i);
	      }

	      var blob = new Blob([buffer], { type: 'audio/mp3' });
	      _this2.blob_url = URL.createObjectURL(blob);

	      element.onloadeddata = function (e) {
	        _this2.setDuration(element.duration);

	        if (_this2.internalPlayback) {
	          element.play();
	        }
	        if (_this2.autoplay) {
	          _this2.startClock();
	          _this2.isPlaying = true;
	        } else {
	          _this2.isPlaying = false;
	        }
	      };
	    });
	  }

	  return AudioStore;
	}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'history', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return [];
	  }
	}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'current', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return null;
	  }
	}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'duration', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return 0;
	  }
	}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'elasped', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return 0;
	  }
	}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'seek', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return 0;
	  }
	}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'volume', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return 1;
	  }
	}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, 'mute', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return false;
	  }
	}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, 'isPlaying', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return false;
	  }
	}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, 'lastVolume', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return 1;
	  }
	}), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, 'repeat', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return false;
	  }
	}), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, 'status', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return '';
	  }
	}), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, 'autoplay', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return true;
	  }
	}), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, 'bytesReceived', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return 0;
	  }
	}), _descriptor14 = _applyDecoratedDescriptor(_class.prototype, 'totalBytes', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return 1;
	  }
	}), _descriptor15 = _applyDecoratedDescriptor(_class.prototype, 'internalPlayback', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return false;
	  }
	}), _descriptor16 = _applyDecoratedDescriptor(_class.prototype, 'elementREF', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return null;
	  }
	}), _descriptor17 = _applyDecoratedDescriptor(_class.prototype, 'blob_url', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return '';
	  }
	}), _applyDecoratedDescriptor(_class.prototype, 'setInternalPlayback', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setInternalPlayback'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'setElementREF', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setElementREF'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'setCurrent', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setCurrent'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'setBytesReceived', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setBytesReceived'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'setTotalBytes', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setTotalBytes'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'setDuration', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setDuration'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'setAutoplay', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setAutoplay'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'setMute', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setMute'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'setSeek', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setSeek'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'setVolume', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setVolume'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'setIsPlaying', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setIsPlaying'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'setElapsed', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setElapsed'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'setRepeat', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setRepeat'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'next', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'next'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'queue', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'queue'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'startClock', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'startClock'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'stopClock', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'stopClock'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'reset', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'reset'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'resetClock', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'resetClock'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'createAudioBuffer', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'createAudioBuffer'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'createBrowserWindow', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'createBrowserWindow'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'destroyBrowserWindow', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'destroyBrowserWindow'), _class.prototype)), _class);
	exports.default = AudioStore;

/***/ },

/***/ 312:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Stores = undefined;

	var _audio = __webpack_require__(311);

	var _audio2 = _interopRequireDefault(_audio);

	var _browserWindowConfig = __webpack_require__(109);

	var _browserWindowConfig2 = _interopRequireDefault(_browserWindowConfig);

	var _shell = __webpack_require__(313);

	var _shell2 = _interopRequireDefault(_shell);

	var _windows = __webpack_require__(314);

	var _windows2 = _interopRequireDefault(_windows);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Stores = exports.Stores = {
	  audio: new _audio2.default(),
	  browserWindow: new _browserWindowConfig2.default(),
	  shell: new _shell2.default(),
	  window: new _windows2.default()
	};

/***/ },

/***/ 313:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

	var _mobx = __webpack_require__(65);

	var _uuid = __webpack_require__(13);

	var _uuid2 = _interopRequireDefault(_uuid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _initDefineProp(target, property, descriptor, context) {
	  if (!descriptor) return;
	  Object.defineProperty(target, property, {
	    enumerable: descriptor.enumerable,
	    configurable: descriptor.configurable,
	    writable: descriptor.writable,
	    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
	  });
	}

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	  var desc = {};
	  Object['ke' + 'ys'](descriptor).forEach(function (key) {
	    desc[key] = descriptor[key];
	  });
	  desc.enumerable = !!desc.enumerable;
	  desc.configurable = !!desc.configurable;

	  if ('value' in desc || desc.initializer) {
	    desc.writable = true;
	  }

	  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	    return decorator(target, property, desc) || desc;
	  }, desc);

	  if (context && desc.initializer !== void 0) {
	    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	    desc.initializer = undefined;
	  }

	  if (desc.initializer === void 0) {
	    Object['define' + 'Property'](target, property, desc);
	    desc = null;
	  }

	  return desc;
	}

	function _initializerWarningHelper(descriptor, context) {
	  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
	}

	var x_shell = (_class = function () {
	  _createClass(x_shell, [{
	    key: 'setCommand',
	    value: function setCommand(command) {
	      this.currentCommand = command;
	    }
	  }, {
	    key: 'setAction',
	    value: function setAction(action) {
	      this.action = action;
	    }
	  }, {
	    key: 'setOpenUrl',
	    value: function setOpenUrl(bool) {
	      this.openUrl = bool;
	    }
	  }, {
	    key: 'setCurrentUrl',
	    value: function setCurrentUrl(url) {
	      this.currentUrl = url;
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      this.history = [];
	    }
	  }, {
	    key: 'send_command',
	    value: function send_command(command) {
	      if (!command.length) {
	        return;
	      }
	      sockets.System.emit('shell-input', command);
	      this.currentID = (0, _uuid2.default)();
	      this.history.push({ command: command, waiting: true, result: '', id: this.currentID });
	    }
	  }, {
	    key: 'send_url',
	    value: function send_url(url) {
	      if (!url.length) {
	        return;
	      }
	      sockets.Electron.emit('shell-url', url);
	      this.currentID = (0, _uuid2.default)();
	      this.history.push({ command: url, waiting: true, result: '', id: this.currentID });
	    }
	  }]);

	  function x_shell() {
	    var _this = this;

	    _classCallCheck(this, x_shell);

	    _initDefineProp(this, 'history', _descriptor, this);

	    _initDefineProp(this, 'currentID', _descriptor2, this);

	    _initDefineProp(this, 'currentCommand', _descriptor3, this);

	    _initDefineProp(this, 'currentUrl', _descriptor4, this);

	    _initDefineProp(this, 'openUrl', _descriptor5, this);

	    _initDefineProp(this, 'action', _descriptor6, this);

	    sockets.System.on('shell-output', function (c) {
	      var getItem = _this.history.filter(function (e) {
	        return e.id === _this.currentID;
	      });
	      getItem[0].result = c;
	      getItem[0].waiting = false;
	    });
	  }

	  return x_shell;
	}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'history', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return [];
	  }
	}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'currentID', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return null;
	  }
	}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'currentCommand', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return '';
	  }
	}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'currentUrl', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return '';
	  }
	}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'openUrl', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return false;
	  }
	}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'action', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return '';
	  }
	}), _applyDecoratedDescriptor(_class.prototype, 'setCommand', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setCommand'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'setAction', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setAction'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'setOpenUrl', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setOpenUrl'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'setCurrentUrl', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setCurrentUrl'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'clear', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'clear'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'send_command', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'send_command'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'send_url', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'send_url'), _class.prototype)), _class);
	exports.default = x_shell;

/***/ },

/***/ 314:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _desc, _value, _class, _descriptor, _descriptor2;

	var _mobx = __webpack_require__(65);

	var _uuid = __webpack_require__(13);

	var _uuid2 = _interopRequireDefault(_uuid);

	var _browserWindowConfig = __webpack_require__(109);

	var _browserWindowConfig2 = _interopRequireDefault(_browserWindowConfig);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _initDefineProp(target, property, descriptor, context) {
	  if (!descriptor) return;
	  Object.defineProperty(target, property, {
	    enumerable: descriptor.enumerable,
	    configurable: descriptor.configurable,
	    writable: descriptor.writable,
	    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
	  });
	}

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	  var desc = {};
	  Object['ke' + 'ys'](descriptor).forEach(function (key) {
	    desc[key] = descriptor[key];
	  });
	  desc.enumerable = !!desc.enumerable;
	  desc.configurable = !!desc.configurable;

	  if ('value' in desc || desc.initializer) {
	    desc.writable = true;
	  }

	  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	    return decorator(target, property, desc) || desc;
	  }, desc);

	  if (context && desc.initializer !== void 0) {
	    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	    desc.initializer = undefined;
	  }

	  if (desc.initializer === void 0) {
	    Object['define' + 'Property'](target, property, desc);
	    desc = null;
	  }

	  return desc;
	}

	function _initializerWarningHelper(descriptor, context) {
	  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
	}

	var AudioStore = (_class = function () {
	  _createClass(AudioStore, [{
	    key: 'setSaved',
	    value: function setSaved(saved) {
	      this.saved = saved;
	    }
	  }]);

	  function AudioStore() {
	    var _this = this;

	    _classCallCheck(this, AudioStore);

	    _initDefineProp(this, 'saved', _descriptor, this);

	    _initDefineProp(this, 'filenames', _descriptor2, this);

	    sockets.fs.on('window-list', function (dirlist) {
	      //arr of browser window objs
	      dirlist.forEach(function (_package) {
	        var fromJSON = JSON.parse(_package);
	        _this.saved.push(fromJSON);
	        _this.filenames.push(fromJSON.id);
	      });
	    });

	    sockets.fs.emit('get-window-list');
	  }

	  return AudioStore;
	}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'saved', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return [];
	  }
	}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'filenames', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return [];
	  }
	}), _applyDecoratedDescriptor(_class.prototype, 'setSaved', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setSaved'), _class.prototype)), _class);
	exports.default = AudioStore;

/***/ },

/***/ 315:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Dialog = __webpack_require__(49);

	var _Dialog2 = _interopRequireDefault(_Dialog);

	var _FlatButton = __webpack_require__(10);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	var _Toggle = __webpack_require__(36);

	var _Toggle2 = _interopRequireDefault(_Toggle);

	var _Slider = __webpack_require__(29);

	var _Slider2 = _interopRequireDefault(_Slider);

	var _RaisedButton = __webpack_require__(22);

	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

	var _mobxReact = __webpack_require__(43);

	var _Divider = __webpack_require__(28);

	var _Divider2 = _interopRequireDefault(_Divider);

	var _reactRouter = __webpack_require__(57);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;


	var styles = {
	  toggle: {
	    marginBottom: 16
	  },
	  button: {
	    marginRight: 10
	  }
	};

	var BrowserWindowSettings = (0, _mobxReact.observer)(_class = function (_Component) {
	  _inherits(BrowserWindowSettings, _Component);

	  function BrowserWindowSettings(props) {
	    _classCallCheck(this, BrowserWindowSettings);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BrowserWindowSettings).call(this));

	    _this.state = {};
	    _this.x_window = props.store;

	    window.xWindow = _this.x_window;

	    return _this;
	  }

	  _createClass(BrowserWindowSettings, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      sockets.Robot.on('robot-screen', function (_screen) {
	        _this2.x_window.setScreen(_screen.width, _screen.height);
	      });
	      sockets.Robot.emit('get-robot-screen');
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'showPreview',
	    value: function showPreview() {
	      this.props.close();
	      this.props.router.push('preview');
	    }
	  }, {
	    key: 'setProp',
	    value: function setProp(prop, value) {
	      this.x_window.setProp(prop, value);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      var x_window = this.x_window;

	      var actions = [_react2.default.createElement(_RaisedButton2.default, {
	        label: 'ok', style: styles.button,
	        primary: true,
	        onTouchTap: this.props.close
	      }), _react2.default.createElement(_RaisedButton2.default, {
	        label: 'preview', style: styles.button,
	        secondary: true,
	        onTouchTap: this.showPreview.bind(this)
	      })];

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _Dialog2.default,
	          {
	            title: 'Browser Windows Settings',
	            actions: actions,
	            modal: false,
	            open: this.props.show,
	            onRequestClose: this.props.close,
	            autoScrollBodyContent: true },
	          _react2.default.createElement(
	            'span',
	            null,
	            'pos-x: ',
	            _react2.default.createElement(
	              'strong',
	              null,
	              x_window.x
	            )
	          ),
	          _react2.default.createElement(_Slider2.default, { name: 'pos-X', step: 1, value: x_window.x, min: 0, max: x_window.screenWidth,
	            onChange: function onChange(e, v) {
	              return x_window.setProp('x', v);
	            } }),
	          _react2.default.createElement(
	            'span',
	            null,
	            'pos-y: ',
	            _react2.default.createElement(
	              'strong',
	              null,
	              x_window.y
	            )
	          ),
	          _react2.default.createElement(_Slider2.default, { name: 'pos-y', step: 1, value: x_window.y, min: 0, max: x_window.screenHeight,
	            onChange: function onChange(e, v) {
	              return x_window.setProp('y', v);
	            } }),
	          _react2.default.createElement(
	            'span',
	            null,
	            'width: ',
	            _react2.default.createElement(
	              'strong',
	              null,
	              Math.floor(x_window.width * x_window.scale)
	            )
	          ),
	          _react2.default.createElement(_Slider2.default, { name: 'width', step: 20, value: x_window.width, min: 0, max: x_window.screenWidth,
	            onChange: function onChange(e, v) {
	              return x_window.setProp('width', v);
	            } }),
	          _react2.default.createElement(
	            'span',
	            null,
	            'height: ',
	            _react2.default.createElement(
	              'strong',
	              null,
	              Math.floor(x_window.height * x_window.scale)
	            )
	          ),
	          _react2.default.createElement(_Slider2.default, { name: 'height', step: 20, value: x_window.height, min: 0, max: x_window.screenHeight,
	            onChange: function onChange(e, v) {
	              return x_window.setProp('height', v);
	            } }),
	          _react2.default.createElement(
	            'span',
	            null,
	            'scale-factor: ',
	            _react2.default.createElement(
	              'strong',
	              null,
	              x_window.scale
	            )
	          ),
	          _react2.default.createElement(_Slider2.default, { name: 'scale-factor', step: 0.01, value: x_window.scale, min: 0, max: 1, onChange: function onChange(e, v) {
	              return x_window.setProp('scale', v);
	            } }),
	          _react2.default.createElement(
	            'span',
	            null,
	            'automaticly scale: '
	          ),
	          _react2.default.createElement(_Toggle2.default, { label: 'auto', style: styles.toggle, onToggle: function onToggle(f, e) {
	              return _this3.x_window.setProp('auto', e);
	            } }),
	          _react2.default.createElement(_Divider2.default, null),
	          _react2.default.createElement(_Toggle2.default, { toggled: x_window.frame, label: 'frame', style: styles.toggle, onToggle: function onToggle(f, e) {
	              return x_window.setProp('frame', e);
	            } }),
	          _react2.default.createElement(_Toggle2.default, { toggled: x_window.center, label: 'center', style: styles.toggle, onToggle: function onToggle(f, e) {
	              return x_window.setProp('center', e);
	            } }),
	          _react2.default.createElement(_Toggle2.default, { toggled: x_window.alwaysOnTop, label: 'alwaysOnTop', style: styles.toggle, onToggle: function onToggle(f, e) {
	              return x_window.setProp('alwaysOnTop', e);
	            } }),
	          _react2.default.createElement(_Toggle2.default, { toggled: x_window.skipTaskbar, label: 'skipTaskbar', style: styles.toggle, onToggle: function onToggle(f, e) {
	              return x_window.setProp('skipTaskbar', e);
	            } }),
	          _react2.default.createElement(_Toggle2.default, { toggled: x_window.hasShadow, label: 'hasShadow', style: styles.toggle, onToggle: function onToggle(f, e) {
	              return x_window.setProp('hasShadow', e);
	            } }),
	          _react2.default.createElement(_Toggle2.default, { toggled: x_window.moveable, label: 'moveable', style: styles.toggle, onToggle: function onToggle(f, e) {
	              return x_window.setProp('moveable', e);
	            } }),
	          _react2.default.createElement(_Toggle2.default, { toggled: x_window.show, label: 'show', style: styles.toggle, onToggle: function onToggle(f, e) {
	              return x_window.setProp('show', e);
	            } })
	        )
	      );
	    }
	  }]);

	  return BrowserWindowSettings;
	}(Component)) || _class;

	exports.default = (0, _reactRouter.withRouter)(BrowserWindowSettings);

/***/ },

/***/ 316:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _FlatButton = __webpack_require__(10);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	var _Slider = __webpack_require__(29);

	var _Slider2 = _interopRequireDefault(_Slider);

	var _debounce = __webpack_require__(169);

	var _debounce2 = _interopRequireDefault(_debounce);

	var _RaisedButton = __webpack_require__(22);

	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;

	var RecordPad = function (_Component) {
	  _inherits(RecordPad, _Component);

	  function RecordPad(props) {
	    _classCallCheck(this, RecordPad);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RecordPad).call(this));

	    _this.state = {
	      time: 0,
	      timeLeft: 0,
	      setTime: 1,
	      scale: 0.5,
	      stream: false
	    };
	    _this.clock = null;
	    _this.mousemove = _this.mousemove.bind(_this);
	    _this.ctx = {};
	    _this.recorded = [];
	    _this.waiting = false;
	    _this.pollRate = 10;
	    _this.resizeListener = (0, _debounce2.default)(_this.resize.bind(_this), 500);
	    return _this;
	  }

	  _createClass(RecordPad, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'resize',
	    value: function resize() {}
	  }, {
	    key: 'timer',
	    value: function timer() {}
	  }, {
	    key: 'mousemove',
	    value: function mousemove(e) {
	      var _this2 = this;

	      var x = e.clientX - this.ctx.left - 1;
	      var y = e.clientY - this.ctx.top - 1;
	      var _x = Math.floor(x / this.state.scale * 2);
	      var _y = Math.floor(y / this.state.scale * 2);

	      if (_x < 1) {
	        _x = 0;
	      }
	      if (_y < 1) {
	        _y = 0;
	      }
	      if (!this.waiting) {
	        this.waiting = true;
	        setTimeout(function () {
	          _this2.waiting = false;
	          if (!_this2.state.stream) {
	            _this2.recorded.push([_x, _y]);
	          } else {
	            consol.log(_x, _y);
	          }
	          _this2.ctx.ctx.fillRect(x, y, 1, 1);
	        }, this.pollRate);
	      }
	    }
	  }, {
	    key: 'stopRecording',
	    value: function stopRecording() {
	      this.refs.canvas.removeEventListener('mousemove', this.mousemove);
	      this.setState({ setTime: 0, timeLeft: 0 });
	    }
	  }, {
	    key: 'startRecording',
	    value: function startRecording() {
	      var width = this.props.store.screenWidth;
	      var height = this.props.store.screenHeight;

	      this.recorded = [];
	      var canvas = this.refs.canvas;
	      canvas.width = width * this.state.scale;
	      canvas.height = height * this.state.scale;
	      var rect = canvas.getBoundingClientRect();
	      this.ctx = {
	        ctx: canvas.getContext('2d'),
	        width: width * this.state.scale,
	        height: height * this.state.scale,
	        top: rect.top,
	        left: rect.left
	      };
	      this.ctx.ctx.clearRect(0, 0, this.ctx.width, this.ctx.height);
	      this.ctx.ctx.fillStyle = 'red';

	      canvas.addEventListener('mousemove', this.mousemove);
	    }
	  }, {
	    key: 'startTimer',
	    value: function startTimer() {
	      var _this3 = this;

	      var time = Math.floor(this.state.setTime); //secs -> ms
	      this.startRecording();
	      this.clock = setInterval(function () {
	        time -= 1;
	        if (time < 0) {

	          _this3.stopRecording();
	          clearInterval(_this3.clock);
	          return;
	        }
	        console.log("recording");
	        _this3.setState({ timeLeft: time });
	      }, 1000);
	    }
	  }, {
	    key: 'endTimer',
	    value: function endTimer() {
	      clearInterval(this.clock);
	      this.setState({ timeLeft: 0, setTime: 0 });
	      this.stopRecording();
	    }
	  }, {
	    key: 'sendRecord',
	    value: function sendRecord() {
	      if (this.recorded.length) {
	        console.log(this.recorded);
	        sockets.Robot.emit('exec-mouse-record', this.recorded);
	      }
	    }
	  }, {
	    key: 'sliderChange',
	    value: function sliderChange() {}
	  }, {
	    key: 'stream',
	    value: function stream() {
	      this.setState({ setTime: Infinity });
	      this.startRecording();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this4 = this;

	      var store = this.props.store;
	      var isStreaming = this.state.stream ? true : false;
	      // create keyboard timeline !!!
	      // add programs route;
	      // readdir program files for programs and open them?

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement('canvas', { ref: 'canvas',
	          style: { width: store.screenWidth * this.state.scale, height: store.screenHeight * this.state.scale, background: 'black' } }),
	        ' ',
	        _react2.default.createElement('br', null),
	        _react2.default.createElement(
	          'span',
	          null,
	          'Recording time ',
	          this.state.setTime,
	          's'
	        ),
	        _react2.default.createElement(_Slider2.default, {
	          style: { width: '40%', margin: 10 },
	          step: 1,
	          value: this.state.setTime || 1,
	          min: 1,
	          max: 60,
	          onChange: function onChange(e, value) {
	            return _this4.setState({ setTime: value });
	          } }),
	        _react2.default.createElement(
	          'span',
	          null,
	          'time left ',
	          this.state.timeLeft
	        ),
	        _react2.default.createElement(_FlatButton2.default, { label: 'Start', onTouchTap: this.startTimer.bind(this, this.props.length) }),
	        _react2.default.createElement(_FlatButton2.default, { label: 'Stop', onTouchTap: this.endTimer.bind(this) }),
	        _react2.default.createElement(_FlatButton2.default, { label: 'send', secondary: true, onTouchTap: this.sendRecord.bind(this) }),
	        _react2.default.createElement(_RaisedButton2.default, { primary: isStreaming, label: 'stream', onTouchTap: this.stream.bind(this) })
	      );
	    }
	  }]);

	  return RecordPad;
	}(Component);

	exports.default = RecordPad;

/***/ },

/***/ 317:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _uuid = __webpack_require__(13);

	var _uuid2 = _interopRequireDefault(_uuid);

	var _Card = __webpack_require__(186);

	var _FlatButton = __webpack_require__(10);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;

	var Shortcuts = function (_Component) {
	  _inherits(Shortcuts, _Component);

	  function Shortcuts(props) {
	    _classCallCheck(this, Shortcuts);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Shortcuts).call(this));

	    _this.state = {
	      expanded: false
	    };
	    return _this;
	  }

	  _createClass(Shortcuts, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'exec',
	    value: function exec(cmd) {
	      var mods = ['alt', 'shift', 'control', 'command'];
	      var filterMods = cmd.filter(function (e) {
	        return ~mods.indexOf(e);
	      });
	      var filterKey = cmd.filter(function (e) {
	        return ! ~mods.indexOf(e);
	      });
	      sockets.Robot.emit('robot-keyToggle', { key: filterKey[0], delay: this.props.hold() * 1000, mod: filterMods });
	    }
	  }, {
	    key: 'toggle',
	    value: function toggle(bool) {
	      this.setState({ expanded: bool });
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate() {
	      return true;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var label = this.props.section;
	      var content = this.props.content;
	      //console.log(content)
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _Card.Card,
	          { expanded: this.state.expanded },
	          _react2.default.createElement(_Card.CardHeader, {
	            title: label,
	            actAsExpander: true,
	            showExpandableButton: true
	          }),
	          _react2.default.createElement(
	            _Card.CardActions,
	            null,
	            _react2.default.createElement(_FlatButton2.default, { label: 'close', primary: true, onTouchTap: this.toggle.bind(this, false) }),
	            _react2.default.createElement(_FlatButton2.default, { label: 'show', primary: true, onTouchTap: this.toggle.bind(this, true) })
	          ),
	          _react2.default.createElement(
	            _Card.CardText,
	            { expandable: true },
	            _react2.default.createElement(
	              'ul',
	              { className: 'keyboard-shortcuts' },
	              content && content.map(function (e) {
	                return _react2.default.createElement(
	                  'div',
	                  { key: (0, _uuid2.default)(), onTouchTap: _this2.exec.bind(_this2, e.cmd) },
	                  _react2.default.createElement(
	                    'h4',
	                    null,
	                    e.cmd.join(' + ')
	                  ),
	                  _react2.default.createElement('br', null),
	                  _react2.default.createElement(
	                    'span',
	                    null,
	                    e.descp
	                  )
	                );
	              })
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Shortcuts;
	}(Component);

	exports.default = Shortcuts;

/***/ },

/***/ 318:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;

	var ToggleUI = function (_Component) {
	  _inherits(ToggleUI, _Component);

	  function ToggleUI(props) {
	    _classCallCheck(this, ToggleUI);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ToggleUI).call(this));

	    _this.state = {
	      show: true
	    };
	    return _this;
	  }

	  _createClass(ToggleUI, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      //this.setState({show:this.props.loading});
	    }
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'render',
	    value: function render() {

	      var styles = {
	        display: 'block',
	        width: '100%',
	        textAlign: 'center',
	        color: '#333',
	        position: 'absolute'
	      };
	      if (this.props.show) {
	        if (this.props.style) {
	          styles.display = this.props.style;
	          return;
	        }
	        styles.display = 'block';
	      } else {
	        styles.display = 'none';
	      }
	      //  console.error(this.props.label , this.props.show);

	      return _react2.default.createElement(
	        'div',
	        { style: styles, 'data-component': 'ToggleUI' },
	        _react2.default.createElement(
	          'h4',
	          { style: { padding: 20 } },
	          this.props.label
	        ),
	        this.props.icon
	      );
	    }
	  }]);

	  return ToggleUI;
	}(Component);

	exports.default = ToggleUI;

/***/ },

/***/ 319:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Dialog = __webpack_require__(49);

	var _Dialog2 = _interopRequireDefault(_Dialog);

	var _FlatButton = __webpack_require__(10);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	var _RaisedButton = __webpack_require__(22);

	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

	var _Slider = __webpack_require__(29);

	var _Slider2 = _interopRequireDefault(_Slider);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;

	var WindowsSettings = function (_Component) {
	  _inherits(WindowsSettings, _Component);

	  function WindowsSettings(props) {
	    _classCallCheck(this, WindowsSettings);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(WindowsSettings).call(this));

	    _this.state = {};
	    return _this;
	  }

	  _createClass(WindowsSettings, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'render',
	    value: function render() {
	      var actions = [_react2.default.createElement(_FlatButton2.default, {
	        label: 'ok',
	        primary: true,
	        onTouchTap: this.props.close
	      })];
	      var settings = this.props.settings;
	      var setValue = this.props.onChange;

	      return _react2.default.createElement(
	        _Dialog2.default,
	        {
	          title: 'window settings',
	          actions: actions,
	          modal: false,
	          open: this.props.show,
	          autoScrollBodyContent: true,
	          onRequestClose: this.props.close },
	        _react2.default.createElement(
	          'section',
	          null,
	          _react2.default.createElement(
	            'span',
	            null,
	            'timeout: ',
	            settings.timeout,
	            ' seconds '
	          ),
	          _react2.default.createElement(_Slider2.default, { style: { width: '80%', margin: '0 auto' },
	            step: 1, value: settings.timeout, min: 1, max: 600, onChange: setValue.bind(this, 'timeout') }),
	          _react2.default.createElement(
	            'span',
	            null,
	            'Scaling: ',
	            settings.dims.scale
	          ),
	          _react2.default.createElement(_Slider2.default, { style: { width: '80%', margin: '0 auto' },
	            step: 0.05, value: settings.dims.scale, min: 0.1, max: 1, onChange: setValue.bind(this, 'dims/scale') }),
	          _react2.default.createElement(
	            'span',
	            null,
	            'Width: ',
	            settings.dims.width
	          ),
	          _react2.default.createElement(_Slider2.default, { style: { width: '80%', margin: '0 auto' },
	            step: 1, value: settings.dims.width, min: 1, max: settings.robotWidth, onChange: setValue.bind(this, 'dims/width') }),
	          _react2.default.createElement(
	            'span',
	            null,
	            'Height: ',
	            settings.dims.height
	          ),
	          _react2.default.createElement(_Slider2.default, { style: { width: '80%', margin: '0 auto' },
	            step: 1, value: settings.dims.height, min: 1, max: settings.robotHeight, onChange: setValue.bind(this, 'dims/height') }),
	          _react2.default.createElement(
	            'span',
	            null,
	            'X Cord: ',
	            Math.floor(settings.robotWidth * settings.pos.x)
	          ),
	          _react2.default.createElement(_Slider2.default, { style: { width: '80%', margin: '0 auto' },
	            step: 0.01, value: settings.pos.x, min: 0, max: 1, onChange: setValue.bind(this, 'pos/x') }),
	          _react2.default.createElement(
	            'span',
	            null,
	            'Y Cord: ',
	            Math.floor(settings.robotHeight * settings.pos.y)
	          ),
	          _react2.default.createElement(_Slider2.default, { style: { width: '80%', margin: '0 auto' },
	            step: 0.01, value: settings.pos.y, min: 0, max: 1, onChange: setValue.bind(this, 'pos/y') })
	        )
	      );
	    }
	  }]);

	  return WindowsSettings;
	}(Component);

	exports.default = WindowsSettings;

/***/ },

/***/ 320:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _TextField = __webpack_require__(15);

	var _TextField2 = _interopRequireDefault(_TextField);

	var _FloatingActionButton = __webpack_require__(33);

	var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

	var _add = __webpack_require__(55);

	var _add2 = _interopRequireDefault(_add);

	var _RadioButton = __webpack_require__(86);

	var _favorite = __webpack_require__(231);

	var _favorite2 = _interopRequireDefault(_favorite);

	var _favoriteBorder = __webpack_require__(230);

	var _favoriteBorder2 = _interopRequireDefault(_favoriteBorder);

	var _RaisedButton = __webpack_require__(22);

	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;

	var styles = {
	  fab: {

	    display: 'inline-block'
	    //position:'absolute'
	  },
	  input: {
	    display: 'inline-block'
	  },
	  textarea: {
	    padding: 20
	  },
	  radio: {
	    padding: 20,
	    width: 200
	  }
	};

	var VBSMaker = function (_Component) {
	  _inherits(VBSMaker, _Component);

	  function VBSMaker(props) {
	    _classCallCheck(this, VBSMaker);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(VBSMaker).call(this));

	    _this.state = {
	      filename: '',
	      body: '',
	      type: 'vbs'
	    };
	    return _this;
	  }

	  _createClass(VBSMaker, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'saveVbs',
	    value: function saveVbs() {
	      if (this.state.filename.length && this.state.body.length) {
	        console.log('saveing script', this.state.filename, this.state.body);
	        sockets.fs.emit('save-script', { value: this.state.body, name: this.state.filename, type: this.state.type || 'vbs' });
	      } else {
	        alert('Did not save! filename or body was empty');
	      }
	    }
	  }, {
	    key: 'setFilename',
	    value: function setFilename(e) {
	      this.setState({ filename: e.target.value });
	    }
	  }, {
	    key: 'setBody',
	    value: function setBody(e) {
	      this.setState({ body: e.target.value });
	    }
	  }, {
	    key: 'changeType',
	    value: function changeType(e, type) {
	      //console.log(e ,d)
	      this.setState({ type: type });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_TextField2.default, {
	          id: 'input',
	          onChange: this.setBody.bind(this),
	          style: styles.textarea,
	          fullWidth: true,
	          multiLine: true,
	          hintText: 'Script Editor' }),
	        _react2.default.createElement(
	          'section',
	          null,
	          _react2.default.createElement(_TextField2.default, { style: styles.input, autoComplete: 'off', autoCorrect: 'off', autoCapitalize: 'off', spellCheck: 'false',
	            onChange: this.setFilename.bind(this),
	            hintText: 'save as',
	            errorText: 'This field is required',
	            floatingLabelText: 'Filename'
	          }),
	          _react2.default.createElement('br', null),
	          _react2.default.createElement(
	            _RadioButton.RadioButtonGroup,
	            { name: 'script_type', defaultSelected: 'vbs', onChange: this.changeType.bind(this), style: styles.radio },
	            _react2.default.createElement(_RadioButton.RadioButton, { value: 'cmd', label: 'cmd' }),
	            _react2.default.createElement(_RadioButton.RadioButton, { value: 'vbs', label: 'vbs' }),
	            _react2.default.createElement(_RadioButton.RadioButton, { value: 'bat', label: 'bat' })
	          ),
	          _react2.default.createElement(
	            'span',
	            null,
	            'Saveing as .',
	            _react2.default.createElement(
	              'strong',
	              null,
	              this.state.type
	            )
	          ),
	          _react2.default.createElement(_RaisedButton2.default, { label: 'save', onTouchTap: this.saveVbs.bind(this) })
	        )
	      );
	    }
	  }]);

	  return VBSMaker;
	}(Component);

	exports.default = VBSMaker;

/***/ },

/***/ 322:
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

/***/ 323:
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

/***/ 361:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _simpleAssign = __webpack_require__(3);

	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function getStyles(props, context) {
	  var bottomNavigation = context.muiTheme.bottomNavigation;


	  var styles = {
	    root: {
	      position: 'relative',
	      width: '100%',
	      display: 'flex',
	      justifyContent: 'center',
	      backgroundColor: bottomNavigation.backgroundColor,
	      height: bottomNavigation.height
	    },
	    item: {
	      flex: '1'
	    }
	  };

	  return styles;
	}

	var BottomNavigation = function BottomNavigation(props, context) {
	  var children = props.children;
	  var style = props.style;
	  var selectedIndex = props.selectedIndex;

	  var other = _objectWithoutProperties(props, ['children', 'style', 'selectedIndex']);

	  var prepareStyles = context.muiTheme.prepareStyles;

	  var styles = getStyles(props, context);

	  var preparedChildren = _react.Children.map(children, function (child, index) {
	    return (0, _react.cloneElement)(child, {
	      style: (0, _simpleAssign2.default)({}, styles.item, child.props.style),
	      selected: index === selectedIndex
	    });
	  });

	  return _react2.default.createElement(
	    'div',
	    _extends({}, other, { style: prepareStyles((0, _simpleAssign2.default)({}, styles.root, style)) }),
	    preparedChildren
	  );
	};

	BottomNavigation.propTypes = {
	  /**
	   * The `BottomNavigationItem`s to populate the element with.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * The index of the currently selected navigation item.
	   */
	  selectedIndex: _react.PropTypes.number,
	  /**
	   * @ignore
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object
	};

	BottomNavigation.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};

	exports.default = BottomNavigation;

/***/ },

/***/ 362:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _simpleAssign = __webpack_require__(3);

	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _EnhancedButton = __webpack_require__(30);

	var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function getStyles(props, context) {
	  var selected = props.selected;
	  var bottomNavigation = context.muiTheme.bottomNavigation;


	  var color = selected ? bottomNavigation.selectedColor : bottomNavigation.unselectedColor;

	  var styles = {
	    root: {
	      transition: 'padding-top 0.3s',
	      paddingTop: selected ? 6 : 8,
	      paddingBottom: 10,
	      paddingLeft: 12,
	      paddingRight: 12,
	      minWidth: 80,
	      maxWidth: 168
	    },
	    label: {
	      fontSize: selected ? bottomNavigation.selectedFontSize : bottomNavigation.unselectedFontSize,
	      transition: 'color 0.3s, font-size 0.3s',
	      color: color,
	      margin: 'auto'
	    },
	    icon: {
	      display: 'block'
	    },
	    iconColor: color
	  };

	  return styles;
	}

	var BottomNavigationItem = function BottomNavigationItem(props, context) {
	  var label = props.label;
	  var icon = props.icon;
	  var style = props.style;

	  var other = _objectWithoutProperties(props, ['label', 'icon', 'style']);

	  var prepareStyles = context.muiTheme.prepareStyles;

	  var styles = getStyles(props, context);

	  var styledIcon = (0, _react.cloneElement)(icon, {
	    style: (0, _simpleAssign2.default)({}, styles.icon, icon.props.style),
	    color: icon.props.color || styles.iconColor
	  });

	  return _react2.default.createElement(
	    _EnhancedButton2.default,
	    _extends({}, other, { style: (0, _simpleAssign2.default)({}, styles.root, style) }),
	    styledIcon,
	    _react2.default.createElement(
	      'div',
	      { style: prepareStyles(styles.label) },
	      label
	    )
	  );
	};

	BottomNavigationItem.propTypes = {
	  /**
	   * Set the icon representing the view for this item.
	   */
	  icon: _react.PropTypes.node,
	  /**
	   * Set the label describing the view for this item.
	   */
	  label: _react.PropTypes.node,
	  /**
	   * @ignore
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object
	};

	BottomNavigationItem.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};

	exports.default = BottomNavigationItem;

/***/ },

/***/ 529:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(5);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(4);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ActionBuild = function ActionBuild(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z' })
	  );
	};
	ActionBuild = (0, _pure2.default)(ActionBuild);
	ActionBuild.displayName = 'ActionBuild';
	ActionBuild.muiName = 'SvgIcon';

	exports.default = ActionBuild;

/***/ },

/***/ 531:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(5);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(4);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ActionCode = function ActionCode(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z' })
	  );
	};
	ActionCode = (0, _pure2.default)(ActionCode);
	ActionCode.displayName = 'ActionCode';
	ActionCode.muiName = 'SvgIcon';

	exports.default = ActionCode;

/***/ },

/***/ 532:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(5);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(4);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ActionCompareArrows = function ActionCompareArrows(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z' })
	  );
	};
	ActionCompareArrows = (0, _pure2.default)(ActionCompareArrows);
	ActionCompareArrows.displayName = 'ActionCompareArrows';
	ActionCompareArrows.muiName = 'SvgIcon';

	exports.default = ActionCompareArrows;

/***/ },

/***/ 533:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(5);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(4);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ActionDonutLarge = function ActionDonutLarge(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M11 5.08V2c-5 .5-9 4.81-9 10s4 9.5 9 10v-3.08c-3-.48-6-3.4-6-6.92s3-6.44 6-6.92zM18.97 11H22c-.47-5-4-8.53-9-9v3.08C16 5.51 18.54 8 18.97 11zM13 18.92V22c5-.47 8.53-4 9-9h-3.03c-.43 3-2.97 5.49-5.97 5.92z' })
	  );
	};
	ActionDonutLarge = (0, _pure2.default)(ActionDonutLarge);
	ActionDonutLarge.displayName = 'ActionDonutLarge';
	ActionDonutLarge.muiName = 'SvgIcon';

	exports.default = ActionDonutLarge;

/***/ },

/***/ 534:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(5);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(4);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ActionHistory = function ActionHistory(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z' })
	  );
	};
	ActionHistory = (0, _pure2.default)(ActionHistory);
	ActionHistory.displayName = 'ActionHistory';
	ActionHistory.muiName = 'SvgIcon';

	exports.default = ActionHistory;

/***/ },

/***/ 535:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(5);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(4);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ActionPictureInPicture = function ActionPictureInPicture(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M19 7h-8v6h8V7zm2-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2zm0 16.01H3V4.98h18v14.03z' })
	  );
	};
	ActionPictureInPicture = (0, _pure2.default)(ActionPictureInPicture);
	ActionPictureInPicture.displayName = 'ActionPictureInPicture';
	ActionPictureInPicture.muiName = 'SvgIcon';

	exports.default = ActionPictureInPicture;

/***/ },

/***/ 536:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(5);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(4);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ActionSwapVert = function ActionSwapVert(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z' })
	  );
	};
	ActionSwapVert = (0, _pure2.default)(ActionSwapVert);
	ActionSwapVert.displayName = 'ActionSwapVert';
	ActionSwapVert.muiName = 'SvgIcon';

	exports.default = ActionSwapVert;

/***/ },

/***/ 537:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(5);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(4);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AlertError = function AlertError(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' })
	  );
	};
	AlertError = (0, _pure2.default)(AlertError);
	AlertError.displayName = 'AlertError';
	AlertError.muiName = 'SvgIcon';

	exports.default = AlertError;

/***/ },

/***/ 538:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(5);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(4);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AvLoop = function AvLoop(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z' })
	  );
	};
	AvLoop = (0, _pure2.default)(AvLoop);
	AvLoop.displayName = 'AvLoop';
	AvLoop.muiName = 'SvgIcon';

	exports.default = AvLoop;

/***/ },

/***/ 539:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(5);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(4);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AvMovie = function AvMovie(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z' })
	  );
	};
	AvMovie = (0, _pure2.default)(AvMovie);
	AvMovie.displayName = 'AvMovie';
	AvMovie.muiName = 'SvgIcon';

	exports.default = AvMovie;

/***/ },

/***/ 540:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(5);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(4);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AvPause = function AvPause(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M6 19h4V5H6v14zm8-14v14h4V5h-4z' })
	  );
	};
	AvPause = (0, _pure2.default)(AvPause);
	AvPause.displayName = 'AvPause';
	AvPause.muiName = 'SvgIcon';

	exports.default = AvPause;

/***/ },

/***/ 541:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(5);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(4);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AvPlayArrow = function AvPlayArrow(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M8 5v14l11-7z' })
	  );
	};
	AvPlayArrow = (0, _pure2.default)(AvPlayArrow);
	AvPlayArrow.displayName = 'AvPlayArrow';
	AvPlayArrow.muiName = 'SvgIcon';

	exports.default = AvPlayArrow;

/***/ },

/***/ 542:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(5);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(4);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AvReplay = function AvReplay(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z' })
	  );
	};
	AvReplay = (0, _pure2.default)(AvReplay);
	AvReplay.displayName = 'AvReplay';
	AvReplay.muiName = 'SvgIcon';

	exports.default = AvReplay;

/***/ },

/***/ 543:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(5);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(4);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AvSkipNext = function AvSkipNext(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z' })
	  );
	};
	AvSkipNext = (0, _pure2.default)(AvSkipNext);
	AvSkipNext.displayName = 'AvSkipNext';
	AvSkipNext.muiName = 'SvgIcon';

	exports.default = AvSkipNext;

/***/ },

/***/ 544:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(5);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(4);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AvSkipPrevious = function AvSkipPrevious(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M6 6h2v12H6zm3.5 6l8.5 6V6z' })
	  );
	};
	AvSkipPrevious = (0, _pure2.default)(AvSkipPrevious);
	AvSkipPrevious.displayName = 'AvSkipPrevious';
	AvSkipPrevious.muiName = 'SvgIcon';

	exports.default = AvSkipPrevious;

/***/ },

/***/ 545:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(5);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(4);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AvStop = function AvStop(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M6 6h12v12H6z' })
	  );
	};
	AvStop = (0, _pure2.default)(AvStop);
	AvStop.displayName = 'AvStop';
	AvStop.muiName = 'SvgIcon';

	exports.default = AvStop;

/***/ },

/***/ 546:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(5);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(4);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AvVolumeDown = function AvVolumeDown(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z' })
	  );
	};
	AvVolumeDown = (0, _pure2.default)(AvVolumeDown);
	AvVolumeDown.displayName = 'AvVolumeDown';
	AvVolumeDown.muiName = 'SvgIcon';

	exports.default = AvVolumeDown;

/***/ },

/***/ 547:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(5);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(4);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AvVolumeMute = function AvVolumeMute(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M7 9v6h4l5 5V4l-5 5H7z' })
	  );
	};
	AvVolumeMute = (0, _pure2.default)(AvVolumeMute);
	AvVolumeMute.displayName = 'AvVolumeMute';
	AvVolumeMute.muiName = 'SvgIcon';

	exports.default = AvVolumeMute;

/***/ },

/***/ 548:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(5);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(4);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AvVolumeUp = function AvVolumeUp(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z' })
	  );
	};
	AvVolumeUp = (0, _pure2.default)(AvVolumeUp);
	AvVolumeUp.displayName = 'AvVolumeUp';
	AvVolumeUp.muiName = 'SvgIcon';

	exports.default = AvVolumeUp;

/***/ },

/***/ 549:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(5);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(4);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CommunicationPhonelinkSetup = function CommunicationPhonelinkSetup(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M11.8 12.5v-1l1.1-.8c.1-.1.1-.2.1-.3l-1-1.7c-.1-.1-.2-.2-.3-.1l-1.3.4c-.3-.2-.6-.4-.9-.5l-.2-1.3c0-.1-.1-.2-.3-.2H7c-.1 0-.2.1-.3.2l-.2 1.3c-.3.1-.6.3-.9.5l-1.3-.5c-.1 0-.2 0-.3.1l-1 1.7c-.1.1 0 .2.1.3l1.1.8v1l-1.1.8c-.1.2-.1.3-.1.4l1 1.7c.1.1.2.2.3.1l1.4-.4c.3.2.6.4.9.5l.2 1.3c-.1.1.1.2.2.2h2c.1 0 .2-.1.3-.2l.2-1.3c.3-.1.6-.3.9-.5l1.3.5c.1 0 .2 0 .3-.1l1-1.7c.1-.1 0-.2-.1-.3l-1.1-.9zM8 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM19 1H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z' })
	  );
	};
	CommunicationPhonelinkSetup = (0, _pure2.default)(CommunicationPhonelinkSetup);
	CommunicationPhonelinkSetup.displayName = 'CommunicationPhonelinkSetup';
	CommunicationPhonelinkSetup.muiName = 'SvgIcon';

	exports.default = CommunicationPhonelinkSetup;

/***/ },

/***/ 550:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(5);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(4);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var FileFileDownload = function FileFileDownload(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z' })
	  );
	};
	FileFileDownload = (0, _pure2.default)(FileFileDownload);
	FileFileDownload.displayName = 'FileFileDownload';
	FileFileDownload.muiName = 'SvgIcon';

	exports.default = FileFileDownload;

/***/ },

/***/ 551:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(5);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(4);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var FileFolder = function FileFolder(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z' })
	  );
	};
	FileFolder = (0, _pure2.default)(FileFolder);
	FileFolder.displayName = 'FileFolder';
	FileFolder.muiName = 'SvgIcon';

	exports.default = FileFolder;

/***/ },

/***/ 552:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(5);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(4);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var HardwareComputer = function HardwareComputer(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z' })
	  );
	};
	HardwareComputer = (0, _pure2.default)(HardwareComputer);
	HardwareComputer.displayName = 'HardwareComputer';
	HardwareComputer.muiName = 'SvgIcon';

	exports.default = HardwareComputer;

/***/ },

/***/ 553:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(5);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(4);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var HardwareDesktopWindows = function HardwareDesktopWindows(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z' })
	  );
	};
	HardwareDesktopWindows = (0, _pure2.default)(HardwareDesktopWindows);
	HardwareDesktopWindows.displayName = 'HardwareDesktopWindows';
	HardwareDesktopWindows.muiName = 'SvgIcon';

	exports.default = HardwareDesktopWindows;

/***/ },

/***/ 554:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(5);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(4);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var HardwareGamepad = function HardwareGamepad(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z' })
	  );
	};
	HardwareGamepad = (0, _pure2.default)(HardwareGamepad);
	HardwareGamepad.displayName = 'HardwareGamepad';
	HardwareGamepad.muiName = 'SvgIcon';

	exports.default = HardwareGamepad;

/***/ },

/***/ 557:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(5);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(4);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var HardwareMemory = function HardwareMemory(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M15 9H9v6h6V9zm-2 4h-2v-2h2v2zm8-2V9h-2V7c0-1.1-.9-2-2-2h-2V3h-2v2h-2V3H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2zm-4 6H7V7h10v10z' })
	  );
	};
	HardwareMemory = (0, _pure2.default)(HardwareMemory);
	HardwareMemory.displayName = 'HardwareMemory';
	HardwareMemory.muiName = 'SvgIcon';

	exports.default = HardwareMemory;

/***/ },

/***/ 558:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(5);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(4);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var HardwareMouse = function HardwareMouse(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M13 1.07V9h7c0-4.08-3.05-7.44-7-7.93zM4 15c0 4.42 3.58 8 8 8s8-3.58 8-8v-4H4v4zm7-13.93C7.05 1.56 4 4.92 4 9h7V1.07z' })
	  );
	};
	HardwareMouse = (0, _pure2.default)(HardwareMouse);
	HardwareMouse.displayName = 'HardwareMouse';
	HardwareMouse.muiName = 'SvgIcon';

	exports.default = HardwareMouse;

/***/ },

/***/ 559:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(5);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(4);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var HardwareSecurity = function HardwareSecurity(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z' })
	  );
	};
	HardwareSecurity = (0, _pure2.default)(HardwareSecurity);
	HardwareSecurity.displayName = 'HardwareSecurity';
	HardwareSecurity.muiName = 'SvgIcon';

	exports.default = HardwareSecurity;

/***/ },

/***/ 560:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(5);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(4);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var HardwareToys = function HardwareToys(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M12 12c0-3 2.5-5.5 5.5-5.5S23 9 23 12H12zm0 0c0 3-2.5 5.5-5.5 5.5S1 15 1 12h11zm0 0c-3 0-5.5-2.5-5.5-5.5S9 1 12 1v11zm0 0c3 0 5.5 2.5 5.5 5.5S15 23 12 23V12z' })
	  );
	};
	HardwareToys = (0, _pure2.default)(HardwareToys);
	HardwareToys.displayName = 'HardwareToys';
	HardwareToys.muiName = 'SvgIcon';

	exports.default = HardwareToys;

/***/ },

/***/ 561:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(5);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(4);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var NavigationArrowBack = function NavigationArrowBack(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z' })
	  );
	};
	NavigationArrowBack = (0, _pure2.default)(NavigationArrowBack);
	NavigationArrowBack.displayName = 'NavigationArrowBack';
	NavigationArrowBack.muiName = 'SvgIcon';

	exports.default = NavigationArrowBack;

/***/ },

/***/ 608:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(11);

	var _reactMotion = __webpack_require__(239);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable flowtype/require-valid-file-annotation */

	var styles = {
	  root: {
	    overflowX: 'hidden'
	  },
	  container: {
	    display: 'flex',
	    willChange: 'transform'
	  },
	  slide: {
	    width: '100%',
	    flexShrink: 0,
	    overflow: 'auto'
	  }
	};

	var RESISTANCE_COEF = 0.7;
	var UNCERTAINTY_THRESHOLD = 3; // px

	var SwipeableViews = function (_Component) {
	  _inherits(SwipeableViews, _Component);

	  function SwipeableViews() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, SwipeableViews);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(SwipeableViews)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {}, _this.startWidth = 0, _this.startX = 0, _this.lastX = 0, _this.vx = 0, _this.startY = 0, _this.isSwiping = undefined, _this.started = false, _this.handleTouchStart = function (event) {
	      if (_this.props.onTouchStart) {
	        _this.props.onTouchStart(event);
	      }

	      var touch = event.touches[0];

	      _this.startWidth = (0, _reactDom.findDOMNode)(_this).getBoundingClientRect().width;
	      _this.startX = touch.pageX;
	      _this.lastX = touch.pageX;
	      _this.vx = 0;
	      _this.startY = touch.pageY;
	      _this.isSwiping = undefined;
	      _this.started = true;
	    }, _this.handleTouchMove = function (event) {
	      // The touch start event can be cancel.
	      // Makes sure we set a starting point.
	      if (!_this.started) {
	        _this.handleTouchStart(event);
	        return;
	      }

	      var touch = event.touches[0];

	      // We don't know yet.
	      if (_this.isSwiping === undefined) {
	        if (event.defaultPrevented) {
	          _this.isSwiping = false;
	        } else {
	          var dx = Math.abs(_this.startX - touch.pageX);
	          var dy = Math.abs(_this.startY - touch.pageY);

	          var isSwiping = dx > dy && dx > UNCERTAINTY_THRESHOLD;

	          if (isSwiping === true || dx > UNCERTAINTY_THRESHOLD || dy > UNCERTAINTY_THRESHOLD) {
	            _this.isSwiping = isSwiping;
	            _this.startX = touch.pageX; // Shift the starting point.
	          }
	        }
	      }

	      if (_this.isSwiping !== true) {
	        return;
	      }

	      // Prevent native scrolling
	      event.preventDefault();

	      _this.vx = _this.vx * 0.5 + (touch.pageX - _this.lastX) * 0.5;
	      _this.lastX = touch.pageX;

	      var indexMax = _react.Children.count(_this.props.children) - 1;

	      var index = _this.state.indexLatest + (_this.startX - touch.pageX) / _this.startWidth;

	      if (!_this.props.resistance) {
	        // Reset the starting point
	        if (index < 0) {
	          index = 0;
	          _this.startX = touch.pageX;
	        } else if (index > indexMax) {
	          index = indexMax;
	          _this.startX = touch.pageX;
	        }
	      } else {
	        if (index < 0) {
	          index = Math.exp(index * RESISTANCE_COEF) - 1;
	        } else if (index > indexMax) {
	          index = indexMax + 1 - Math.exp((indexMax - index) * RESISTANCE_COEF);
	        }
	      }

	      _this.setState({
	        isDragging: true,
	        indexCurrent: index
	      }, function () {
	        if (_this.props.onSwitching) {
	          _this.props.onSwitching(index, 'move');
	        }
	      });
	    }, _this.handleTouchEnd = function (event) {
	      if (_this.props.onTouchEnd) {
	        _this.props.onTouchEnd(event);
	      }

	      // The touch start event can be cancel.
	      // Makes sure that a starting point is set.
	      if (!_this.started) {
	        return;
	      }

	      _this.started = false;

	      if (_this.isSwiping !== true) {
	        return;
	      }

	      var indexLatest = _this.state.indexLatest;
	      var indexCurrent = _this.state.indexCurrent;

	      var indexNew = void 0;

	      // Quick movement
	      if (Math.abs(_this.vx) > _this.props.threshold) {
	        if (_this.vx > 0) {
	          indexNew = Math.floor(indexCurrent);
	        } else {
	          indexNew = Math.ceil(indexCurrent);
	        }
	      } else {
	        // Some hysteresis with indexLatest
	        if (Math.abs(indexLatest - indexCurrent) > 0.6) {
	          indexNew = Math.round(indexCurrent);
	        } else {
	          indexNew = indexLatest;
	        }
	      }

	      var indexMax = _react.Children.count(_this.props.children) - 1;

	      if (indexNew < 0) {
	        indexNew = 0;
	      } else if (indexNew > indexMax) {
	        indexNew = indexMax;
	      }

	      _this.setState({
	        indexCurrent: indexNew,
	        indexLatest: indexNew,
	        isDragging: false
	      }, function () {
	        if (_this.props.onSwitching) {
	          _this.props.onSwitching(indexNew, 'end');
	        }

	        if (_this.props.onChangeIndex && indexNew !== indexLatest) {
	          _this.props.onChangeIndex(indexNew, indexLatest);
	        }
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(SwipeableViews, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.setState({
	        indexCurrent: this.props.index,
	        indexLatest: this.props.index,
	        isDragging: false,
	        isFirstRender: true,
	        heightLatest: 0
	      });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      /* eslint-disable react/no-did-mount-set-state */
	      this.setState({
	        isFirstRender: false
	      });
	      /* eslint-enable react/no-did-mount-set-state */
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var index = nextProps.index;


	      if (typeof index === 'number' && index !== this.props.index) {
	        this.setState({
	          indexCurrent: index,
	          indexLatest: index
	        });
	      }
	    }
	  }, {
	    key: 'updateHeight',
	    value: function updateHeight(node, index) {
	      if (node !== null && index === this.state.indexLatest) {
	        var child = node.children[0];
	        if (child !== undefined && child.offsetHeight !== undefined && this.state.heightLatest !== child.offsetHeight) {
	          this.setState({
	            heightLatest: child.offsetHeight
	          });
	        }
	      }
	    }
	  }, {
	    key: 'renderContainer',
	    value: function renderContainer(interpolatedStyle, updateHeight, childrenToRender) {
	      var containerStyle = this.props.containerStyle;


	      var translate = -interpolatedStyle.translate;

	      var styleNew = {
	        WebkitTransform: 'translate3d(' + translate + '%, 0, 0)',
	        transform: 'translate3d(' + translate + '%, 0, 0)',
	        height: null
	      };

	      if (updateHeight) {
	        styleNew.height = interpolatedStyle.height;
	      }

	      return _react2.default.createElement(
	        'div',
	        { style: _extends({}, styleNew, styles.container, containerStyle) },
	        childrenToRender
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props;
	      var index = _props.index;
	      var onChangeIndex = _props.onChangeIndex;
	      var onSwitching = _props.onSwitching;
	      var resistance = _props.resistance;
	      var threshold = _props.threshold;
	      var animateTransitions = _props.animateTransitions;
	      var children = _props.children;
	      var containerStyle = _props.containerStyle;
	      var slideStyle = _props.slideStyle;
	      var disabled = _props.disabled;
	      var springConfig = _props.springConfig;
	      var style = _props.style;

	      var other = _objectWithoutProperties(_props, ['index', 'onChangeIndex', 'onSwitching', 'resistance', 'threshold', 'animateTransitions', 'children', 'containerStyle', 'slideStyle', 'disabled', 'springConfig', 'style']);

	      var _state = this.state;
	      var indexCurrent = _state.indexCurrent;
	      var isDragging = _state.isDragging;
	      var isFirstRender = _state.isFirstRender;
	      var heightLatest = _state.heightLatest;


	      var translate = indexCurrent * 100;
	      var height = heightLatest;

	      var motionStyle = isDragging || !animateTransitions ? {
	        translate: translate,
	        height: height
	      } : {
	        translate: (0, _reactMotion.spring)(translate, springConfig),
	        height: height !== 0 ? (0, _reactMotion.spring)(height, springConfig) : 0
	      };

	      var touchEvents = disabled ? {} : {
	        onTouchStart: this.handleTouchStart,
	        onTouchMove: this.handleTouchMove,
	        onTouchEnd: this.handleTouchEnd
	      };

	      var updateHeight = true;
	      // There is no point to animate if we already provide a height
	      if (containerStyle && (containerStyle.height || containerStyle.maxHeight || containerStyle.minHeight)) {
	        updateHeight = false;
	      }

	      var slideStyleObj = _extends({}, styles.slide, slideStyle);

	      var childrenToRender = _react.Children.map(children, function (child, index2) {
	        if (isFirstRender && index2 > 0) {
	          return null;
	        }

	        var ref = void 0;

	        if (updateHeight) {
	          ref = function ref(node) {
	            return _this2.updateHeight(node, index2);
	          };
	        }

	        return _react2.default.createElement(
	          'div',
	          { ref: ref, style: slideStyleObj },
	          child
	        );
	      });

	      return _react2.default.createElement(
	        'div',
	        _extends({}, other, {
	          style: _extends({}, styles.root, style)
	        }, touchEvents),
	        _react2.default.createElement(
	          _reactMotion.Motion,
	          { style: motionStyle },
	          function (interpolatedStyle) {
	            return _this2.renderContainer(interpolatedStyle, updateHeight, childrenToRender);
	          }
	        )
	      );
	    }
	  }]);

	  return SwipeableViews;
	}(_react.Component);

	SwipeableViews.defaultProps = {
	  animateTransitions: true,
	  index: 0,
	  threshold: 5,
	  resistance: false,
	  disabled: false,
	  springConfig: {
	    stiffness: 300,
	    damping: 30
	  }
	};
	process.env.NODE_ENV !== "production" ? SwipeableViews.propTypes = {
	  /**
	   * If `false`, changes to the index prop will not cause an animated transition.
	   */
	  animateTransitions: _react.PropTypes.bool,
	  /**
	   * Use this property to provide your slides.
	   */
	  children: _react.PropTypes.node.isRequired,
	  /**
	   * This is the inlined style that will be applied
	   * to each slide container.
	   */
	  containerStyle: _react.PropTypes.object,
	  /**
	   * If `true`, it will disable touch events.
	   * This is useful when you want to prohibit the user from changing slides.
	   */
	  disabled: _react.PropTypes.bool,
	  /**
	   * This is the index of the slide to show.
	   * This is useful when you want to change the default slide shown.
	   * Or when you have tabs linked to each slide.
	   */
	  index: _react.PropTypes.number,
	  /**
	   * This is callback prop. It's call by the
	   * component when the shown slide change after a swipe made by the user.
	   * This is useful when you have tabs linked to each slide.
	   *
	   * @param {integer} index This is the current index of the slide.
	   * @param {integer} fromIndex This is the oldest index of the slide.
	   */
	  onChangeIndex: _react.PropTypes.func,
	  /**
	   * This is callback prop. It's called by the
	   * component when the slide switching.
	   * This is useful when you want to implement something corresponding to the current slide position.
	   *
	   * @param {integer} index This is the current index of the slide.
	   * @param {string} type Can be either `move` or `end`.
	   */
	  onSwitching: _react.PropTypes.func,
	  /**
	   * @ignore
	   */
	  onTouchEnd: _react.PropTypes.func,
	  /**
	   * @ignore
	   */
	  onTouchStart: _react.PropTypes.func,
	  /**
	   * If `true`, it will add bounds effect on the edges.
	   */
	  resistance: _react.PropTypes.bool,
	  /**
	   * This is the inlined style that will be applied
	   * on the slide component.
	   */
	  slideStyle: _react.PropTypes.object,
	  /**
	   * This is the config given to react-motion for the spring.
	   * This is useful to change the dynamic of the transition.
	   */
	  springConfig: _react.PropTypes.object,
	  /**
	   * This is the inlined style that will be applied
	   * on the root component.
	   */
	  style: _react.PropTypes.object,
	  /**
	   * This is the threshold used for detecting a quick swipe.
	   * If the computed speed is above this value, the index change.
	   */
	  threshold: _react.PropTypes.number
	} : void 0;
	exports.default = SwipeableViews;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },

/***/ 609:
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

	var EventConstants = __webpack_require__(39);
	var EventPluginUtils = __webpack_require__(101);
	var EventPropagators = __webpack_require__(69);
	var SyntheticUIEvent = __webpack_require__(72);
	var TouchEventUtils = __webpack_require__(610);
	var ViewportMetrics = __webpack_require__(155);

	var keyOf = __webpack_require__(323);
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

/***/ 610:
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

/***/ 611:
/***/ function(module, exports) {

	module.exports = function(lastTouchEvent, clickTimestamp) {
	  if (lastTouchEvent && (clickTimestamp - lastTouchEvent) < 750) {
	    return true;
	  }
	};


/***/ },

/***/ 612:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var invariant = __webpack_require__(322);
	var defaultClickRejectionStrategy = __webpack_require__(611);

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

	  __webpack_require__(68).injection.injectEventPluginsByName({
	    'TapEventPlugin':       __webpack_require__(609)(shouldRejectClick)
	  });
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },

/***/ 706:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _flatInput = __webpack_require__(110);

	var _flatInput2 = _interopRequireDefault(_flatInput);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;

	var Upload = function (_Component) {
	  _inherits(Upload, _Component);

	  function Upload(props) {
	    _classCallCheck(this, Upload);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Upload).call(this));

	    _this.state = {};
	    return _this;
	  }

	  _createClass(Upload, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'save',
	    value: function save() {}
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_flatInput2.default, {
	          raised: true,
	          primary: true,
	          label: 'upload window package',
	          onChange: this.save.bind(this),
	          accept: '*.html' })
	      );
	    }
	  }]);

	  return Upload;
	}(Component);

	exports.default = Upload;

/***/ }

});