/**
 * kill-null v0.0.1
 * (c) 2018 Ryan Liu
 * @license MIT
 */
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * kill null if needed
 * @param  {Object|Array} raw
 * @param  {Object} types
 * @return {Object|Array}
 */
var killer = function killer(raw, types) {
  if (types === undefined) return raw;
  var copy = JSON.parse(JSON.stringify(raw));
  walk(copy, types);
  return copy;
};

// dictionary for default value of types
var typeDict = {
  number: 0,
  array: [],
  object: {},
  string: ""
};

var walk = function walk(raw, types) {
  if (raw instanceof Array) {
    for (var i = 0; i < raw.length; i++) {
      doWalk(raw[i], types);
    }
  } else if ((typeof raw === "undefined" ? "undefined" : _typeof(raw)) === object) {
    doWalk(raw, types);
  }
};
/**
 * walk types and check if raw data is as expected
 * @param  {Object|Array} raw
 * @param  {Object} types
 */
var doWalk = function doWalk(raw, types) {
  var keys = Object.keys(types);
  var l = keys.length;
  var key = void 0,
      value = void 0,
      type = void 0,
      config = void 0;
  while (l--) {
    key = keys[l];
    value = raw[key];
    type = types[key];

    config = (typeof type === "undefined" ? "undefined" : _typeof(type)) === object ? type : { type: type };
    var _config = config,
        requiredType = _config.type,
        defaultValue = _config.default,
        data = _config.data;


    if (value === null) {
      raw[key] = defaultValue ? defaultValue : typeDict[requiredType];
    } else if (data !== undefined) {
      walk(value, data);
    }
  }
};

// export types
var array = "array";
var object = "object";
var string = "string";
var number = "number";

export default killer;
export { array, object, string, number };
