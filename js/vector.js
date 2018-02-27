"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) {if (window.CP.shouldStopExecution(1)){break;} var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); }
window.CP.exitedLoop(1);
 } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vector = function () {
  function Vector(x, y) {
    _classCallCheck(this, Vector);

    this.x = x;
    this.y = y;
  }

  _createClass(Vector, [{
    key: "add",
    value: function add(v) {
      return new Vector(this.x + v.x, this.y + v.y);
    }
  }, {
    key: "addTo",
    value: function addTo(v) {
      this.x += v.x;
      this.y += v.y;
    }
  }, {
    key: "sub",
    value: function sub(v) {
      return new Vector(this.x - v.x, this.y - v.y);
    }
  }, {
    key: "subFrom",
    value: function subFrom(v) {
      this.x -= v.x;
      this.y -= v.y;
    }
  }, {
    key: "mult",
    value: function mult(n) {
      return new Vector(this.x * n, this.y * n);
    }
  }, {
    key: "div",
    value: function div(n) {
      return new Vector(this.x / n, this.y / n);
    }
  }, {
    key: "setAngle",
    value: function setAngle(angle) {
      var length = this.getLength();
      this.x = Math.cos(angle) * length;
      this.y = Math.sin(angle) * length;
    }
  }, {
    key: "setLength",
    value: function setLength(length) {
      var angle = this.getAngle();
      this.x = Math.cos(angle) * length;
      this.y = Math.sin(angle) * length;
    }
  }, {
    key: "getAngle",
    value: function getAngle() {
      return Math.atan2(this.y, this.x);
    }
  }, {
    key: "getLength",
    value: function getLength() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
  }, {
    key: "getLengthSq",
    value: function getLengthSq() {
      return this.x * this.x + this.y * this.y;
    }
  }, {
    key: "distanceTo",
    value: function distanceTo(v) {
      return this.sub(v).getLength();
    }
  }]);

  return Vector;
}();
