"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require('./databaseinit'),
    handleDatabase = _require.handleDatabase; //处理数据库


var db =
/*#__PURE__*/
function () {
  function db() {
    _classCallCheck(this, db);
  }

  _createClass(db, [{
    key: "add",
    //增
    value: function add() {} //删

  }, {
    key: "remove",
    value: function remove() {} //改

  }, {
    key: "updata",
    value: function updata() {} //查

  }, {
    key: "checkdata",
    value: function checkdata(table, where) {
      var fun;
      return regeneratorRuntime.async(function checkdata$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              fun = function fun() {
                var _ref, _ref2, rows;

                return regeneratorRuntime.async(function fun$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return regeneratorRuntime.awrap(connection.execute("SELECT * FROM ".concat(table, " WHERE ").concat(where)));

                      case 2:
                        _ref = _context.sent;
                        _ref2 = _slicedToArray(_ref, 1);
                        rows = _ref2[0];
                        return _context.abrupt("return", rows);

                      case 6:
                      case "end":
                        return _context.stop();
                    }
                  }
                });
              };

              _context2.prev = 1;
              _context2.next = 4;
              return regeneratorRuntime.awrap(handleDatabase(fun));

            case 4:
              return _context2.abrupt("return", _context2.sent);

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](1);
              console.log(_context2.t0);
              return _context2.abrupt("return", _context2.t0);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[1, 7]]);
    }
  }]);

  return db;
}();

module.exports = {
  db: db
};