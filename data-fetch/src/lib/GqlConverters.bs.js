// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var BnJs = require("bn.js");
var Js_json = require("rescript/lib/js/js_json.js");

function parse(json) {
  var str = Js_json.decodeString(json);
  if (str !== undefined) {
    return new BnJs(str);
  } else {
    console.log("CRITICAL - should never happen!");
    return new BnJs(0);
  }
}

function serialize(bn) {
  return bn.toString();
}

var $$BigInt = {
  parse: parse,
  serialize: serialize
};

function parse$1(json) {
  var str = Js_json.decodeString(json);
  if (str !== undefined) {
    return str;
  } else {
    console.log("CRITICAL - should never happen!");
    return "couldn't decode bytes";
  }
}

function serialize$1(bytesString) {
  return bytesString;
}

var Bytes = {
  parse: parse$1,
  serialize: serialize$1
};

exports.$$BigInt = $$BigInt;
exports.Bytes = Bytes;
/* bn.js Not a pure module */
