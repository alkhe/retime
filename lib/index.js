"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var defer = function defer() {
	for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
		args[_key - 2] = arguments[_key];
	}

	var fn = arguments[0] === undefined ? function () {} : arguments[0];
	var time = arguments[1] === undefined ? 0 : arguments[1];
	return new Promise(function (res, rej) {
		setTimeout(function () {
			try {
				return res(fn.apply(undefined, args));
			} catch (e) {
				return rej(e);
			}
		}, time);
	});
};

var sleep = function sleep() {
	var time = arguments[0] === undefined ? 0 : arguments[0];
	return new Promise(function (res) {
		setTimeout(res, time);
	});
};

exports["default"] = {
	defer: defer,
	sleep: sleep
};
module.exports = exports["default"];