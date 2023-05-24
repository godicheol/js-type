// Universal module definition
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS
    module.exports = factory();
  } else {
    // Browser
    root.jsType = factory();
  }
})(this, function() {
  'use strict';

  var getType = function(a) {
    return Object.prototype.toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
  }
  var isBoolean = function(a, strict) {
    switch (getType(a)) {
      case "boolean":
        return true;
      case "number":
        return !strict && (a === 0 || a === 1);
      case "string":
        return !strict && (a === "0" || a === "1" || a === "false" || a === "true");
      default:
        return false;
    }
  }
  var toBoolean = function(a, strict) {
    switch (getType(a)) {
      case "boolean":
        return a;
      case "number":
        if (strict) {
          throw new Error("Invalid argument type");
        }
        return a === 1;
      case "string":
        if (strict) {
          throw new Error("Invalid argument type");
        }
        return a === "1" || a === "true";
      default:
        throw new Error("Invalid argument type");
    }
  }
  var isNumber = function(a, strict) {
    switch (getType(a)) {
      case "boolean":
        return !strict;
      case "number":
        return !Number.isNaN(a) && Number.isFinite(a);
      case "string":
        return !strict && (!Number.isNaN(parseFloat(a)) && Number.isFinite(parseFloat(a)));
      case "date":
        return !strict && !Number.isNaN(a.valueOf());
      default:
        return false;
    }
  }
  var toNumber = function(a, strict) {
    switch (getType(a)) {
      case "boolean":
        if (strict) {
          throw new Error("Invalid argument type");
        }
        return a ? 1 : 0;
      case "number":
        return a;
      case "string":
        if (strict) {
          throw new Error("Invalid argument type");
        }
        return parseFloat(a);
      case "date":
        if (strict) {
          throw new Error("Invalid argument type");
        }
        return a.valueOf();
      default:
        throw new Error("Invalid argument type");
    }
  }
  var isString = function(a, strict) {
    switch (getType(a)) {
      case "boolean":
        return !strict;
      case "number":
        return !strict && (!Number.isNaN(a) && Number.isFinite(a));
      case "string":
        return true;
      case "regexp":
        return !strict;
      case "date":
        return !strict && !Number.isNaN(a.valueOf());
      default:
        return false;
    }
  }
  var toString = function(a, strict) {
    switch (getType(a)) {
      case "boolean":
        if (strict) {
          throw new Error("Invalid argument type");
        }
        return a ? "true" : "false";
      case "number":
        if (strict) {
          throw new Error("Invalid argument type");
        }
        return a.toString(10)
      case "string":
        return a;
      case "regexp":
        if (strict) {
          throw new Error("Invalid argument type");
        }
        return a.toString();
      case "date":
        if (strict) {
          throw new Error("Invalid argument type");
        }
        return a.toISOString();
      default:
        throw new Error("Invalid argument type");
    }
  }
  var isObject = function(a, strict) {
    var isJsonObject = function(str) {
      try {
        return getType(JSON.parse(str)) === "object";
      } catch (err) {
        return false;
      }
    }
    switch (getType(a)) {
      case "string":
        return !strict && isJsonObject(a);
      case "object":
        return true;
      default:
        return false;
    }
  }
  var toObject = function(a, strict) {
    switch (getType(a)) {
      case "string":
        if (strict) {
          throw new Error("Invalid argument type");
        }
        return JSON.parse(a);
      case "object":
        return a;
      default:
        throw new Error("Invalid argument type");
    }
  }
  var isArray = function(a, strict) {
    var isJsonArray = function(str) {
      try {
        return getType(JSON.parse(str)) === "array";
      } catch (err) {
        return false;
      }
    }
    switch (getType(a)) {
      case "string":
        return !strict && isJsonArray(a);
      case "array":
        return true;
      default:
        return false;
    }
  }
  var toArray = function(a, strict) {
    switch (getType(a)) {
      case "string":
        if (strict) {
          throw new Error("Invalid argument type");
        }
        return JSON.parse(a);
      case "array":
        return a;
      default:
        throw new Error("Invalid argument type");
    }
  }
  var isFunction = function(a, strict) {
    switch (getType(a)) {
      case "function":
        return true;
      default:
        return false;
    }
  }
  var toFunction = function(a, strict) {
    switch (getType(a)) {
      case "function":
        return a;
      default:
        throw new Error("Invalid argument type");
    }
  }
  var isNull = function(a, strict) {
    switch (getType(a)) {
      case "string":
        return !strict && a === "null";
      case "null":
        return true;
      default:
        return false;
    }
  }
  var toNull = function(a, strict) {
    switch (getType(a)) {
      case "string":
        if (strict) {
          throw new Error("Invalid argument type");
        }
        return null;
      case "null":
        return a;
      default:
        throw new Error("Invalid argument type");
    }
  }
  var isUndefined = function(a, strict) {
    switch (getType(a)) {
      case "string":
        return !strict && a === "undefined";
      case "undefined":
        return true;
      default:
        return false;
    }
  }
  var toUndefined = function(a, strict) {
    switch (getType(a)) {
      case "string":
        if (strict) {
          throw new Error("Invalid argument type");
        }
        return undefined;
      case "undefined":
        return a;
      default:
        throw new Error("Invalid argument type");
    }
  }
  var isDate = function(a, strict) {
    switch (getType(a)) {
      case "number":
        return !strict && !Number.isNaN(new Date(a).valueOf());
      case "string":
        return !strict && !Number.isNaN(new Date(a).valueOf());
      case "date":
        return !Number.isNaN(a.valueOf());
      default:
        return false;
    }
  }
  var toDate = function(a, strict) {
    switch (getType(a)) {
      case "number": {
        if (strict) {
          throw new Error("Invalid argument type");
        }
        return new Date(a);
      }
      case "string": {
        if (strict) {
          throw new Error("Invalid argument type");
        }
        return new Date(a);
      }
      case "date":
        return a;
      default:
        throw new Error("Invalid argument type");
    }
  }
  var isRegExp = function(a, strict) {
    var isValidRegExpString = function(str) {
      if (!/^\/.*\/[dgimsuy]{0,7}$/.test(str)) {
        return false;
      }
      str = str.split("\/").pop();
      var seen = {},
        item;
      for (item of str.split("")) {
        if (seen[item]) {
          return false;
        }
        seen[item] = true;
      }
      return true;
    }
    switch (getType(a)) {
      case "string":
        return !strict && isValidRegExpString(a);
      case "regexp":
        return true;
      default:
        return false;
    }
  }
  var toRegExp = function(a, strict) {
    var stringToRegExp = function(str) {
      var flags = str.split("\/").pop(),
        source = str.replace(/^\/|\/[dgimsuy]{0,7}$/g, "");
      return new RegExp(source, flags);
    }
    switch (getType(a)) {
      case "string":
        if (strict) {
          throw new Error("Invalid argument type");
        }
        return stringToRegExp(a);
      case "regexp":
        return a;
      default:
        throw new Error("Invalid argument type");
    }
  }
  return {
    get: getType,
    isBoolean: isBoolean,
    toBoolean: toBoolean,
    isNumber: isNumber,
    toNumber: toNumber,
    isString: isString,
    toString: toString,
    isObject: isObject,
    toObject: toObject,
    isArray: isArray,
    toArray: toArray,
    isFunction: isFunction,
    toFunction: toFunction,
    isNull: isNull,
    toNull: toNull,
    isUndefined: isUndefined,
    toUndefined: toUndefined,
    isDate: isDate,
    toDate: toDate,
    isRegExp: isRegExp,
    toRegExp: toRegExp,
  }
});