'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _redboxReact2 = require('redbox-react');

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformCatchErrors3 = require('react-transform-catch-errors');

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _reactBootstrap = require('react-bootstrap');

var _reduxForm = require('redux-form');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  Complex: {
    displayName: 'Complex'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/types/Complex.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

var Complex = _wrapComponent('Complex')(function (_React$Component) {
  (0, _inherits3.default)(Complex, _React$Component);

  function Complex() {
    (0, _classCallCheck3.default)(this, Complex);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Complex.__proto__ || (0, _getPrototypeOf2.default)(Complex)).call(this));

    _this.state = {
      children: [],
      collapsed: false
    };
    return _this;
  }

  (0, _createClass3.default)(Complex, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.props.field && this.props.field.collapsed) {
        var state = false;
        if (this.props.field.collapsed === true) {
          state = true;
        }
        this.setState({ 'collapsed': state });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var labelSize = function labelSize() {
        if (_lodash2.default.has(_this2.props.field, 'labelSize')) {
          return _this2.props.field.labelSize;
        }

        return { sm: 2 };
      };

      var fieldSize = function fieldSize() {
        if (_lodash2.default.has(_this2.props.field, 'fieldSize')) {
          return _this2.props.field.fieldSize;
        }
        return { sm: 10 };
      };

      var toggle = function toggle() {
        var state = false;
        if (_this2.state.collapsed === false) {
          state = true;
        }
        var complexName = _this2.props.field.name.replace('[]', '') + '_collapsed';
        if (_lodash2.default.has(_this2.props, 'formKey')) {
          _this2.props.dispatch((0, _reduxForm.changeWithKey)(_this2.props.formName, _this2.props.formKey, complexName, state));
        } else {
          _this2.props.dispatch((0, _reduxForm.change)(_this2.props.formName, complexName, state));
        }

        _this2.setState({ 'collapsed': state });
      };

      if (this.state.collapsed === true) {
        return _react3.default.createElement(
          _reactBootstrap.Row,
          null,
          _react3.default.createElement(
            _reactBootstrap.Col,
            (0, _extends3.default)({ componentClass: _reactBootstrap.ControlLabel }, labelSize()),
            _react3.default.createElement(
              'button',
              { type: 'button', onClick: toggle, className: 'btn btn-link' },
              '+'
            ),
            this.props.field.label
          )
        );
      }

      return _react3.default.createElement(
        _reactBootstrap.Row,
        null,
        _react3.default.createElement(
          _reactBootstrap.Col,
          (0, _extends3.default)({ componentClass: _reactBootstrap.ControlLabel }, labelSize()),
          _react3.default.createElement(
            'button',
            { type: 'button', onClick: toggle, className: 'btn btn-link' },
            '-'
          ),
          this.props.field.label
        ),
        _react3.default.createElement(
          _reactBootstrap.Col,
          fieldSize(),
          this.props.properties.length > 0 && this.props.properties.map(function (child, index) {
            return _react3.default.createElement(
              'div',
              { key: index, className: 'redux-form-complex' },
              _this2.props.field.fields.length > 0 && _this2.props.field.fields.map(function (field, fieldIndex) {
                var re = new RegExp(RegExp.quote(_this2.props.field.name + '.'), 'g');
                return _react3.default.createElement(
                  'div',
                  { key: fieldIndex },
                  _this2.props.addComplexField(field, _this2.props.size, child[field.name.replace(re, '')])
                );
              }),
              _react3.default.createElement(
                'div',
                { className: _lodash2.default.get(_this2.props.field.removeBtn, 'wrapperClassName') },
                _react3.default.createElement(
                  'button',
                  { type: 'button', className: 'btn btn-danger ' + _lodash2.default.get(_this2.props.field.removeBtn, 'className'), onClick: function onClick() {
                      _this2.props.properties.removeField(index);
                    } },
                  _react3.default.createElement('i', null),
                  ' ',
                  _this2.props.field.removeBtn.label
                )
              )
            );
          }),
          _react3.default.createElement(
            'div',
            { className: 'redux-form-complex redux-form-complex-btn-add' },
            _react3.default.createElement(
              'button',
              {
                type: 'button',
                onClick: function onClick() {
                  return _this2.props.properties.addField();
                },
                className: 'btn btn-default ' + _lodash2.default.get(this.props.field.addBtn, 'className') },
              this.props.field.addBtn.label
            )
          )
        )
      );
    }
  }]);
  return Complex;
}(_react3.default.Component));

Complex.propTypes = {
  properties: _react3.default.PropTypes.array,
  addComplexField: _react3.default.PropTypes.func,
  dispatch: _react3.default.PropTypes.func,
  formName: _react3.default.PropTypes.string,
  formKey: _react3.default.PropTypes.string,
  size: _react3.default.PropTypes.string,
  field: _react3.default.PropTypes.object
};
Complex.defaultProps = {};

exports.default = Complex;
module.exports = exports['default'];