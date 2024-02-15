"use strict";

var _dotenv = require("dotenv");
var _app = _interopRequireDefault(require("./app"));
require("./database");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
(0, _dotenv.config)();
var PORT = process.env.PORT;
_app["default"].listen(PORT);
console.log("running on port: ".concat(PORT));