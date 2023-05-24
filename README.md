## Usage

```js
import jsType from 'js-type';
```

- Get type

```js
jsType.get(undefined); // "undefined"
jsType.get(null); // "null"
jsType.get(false); // "boolean"
jsType.get(0); // "number"
jsType.get("0"); // "string"
jsType.get([1,2,3]); // "array"
jsType.get({G: 1}); // "object"
jsType.get(new Date()); // "date"
jsType.get(new RegExp()); // "regexp"
jsType.get(function(){}); // "function"
```

- Validate

```js
var strict = false;

jsType.isBoolean(false, strict); // true
jsType.isBoolean(0, strict); // true
jsType.isBoolean("false", strict); // true

jsType.isNumber(false, strict); // true
jsType.isNumber(0, strict); // true
jsType.isNumber("0", strict); // true
jsType.isNumber(new Date(), strict); // true

jsType.isString(false, strict); // true
jsType.isString(0, strict); // true
jsType.isString("text", strict); // true
jsType.isString(/ff/, strict); // true
jsType.isString(new Date(0), strict); // true

jsType.isObject('{\"g\": 1}', strict); // true
jsType.isObject({g: 1}, strict); // true

jsType.isArray('[0, 1]', strict); // true
jsType.isArray([0, 1], strict); // true

jsType.isNull("null", strict); // true
jsType.isNull(null, strict); // true

jsType.isUndefined("undefined", strict); // true
jsType.isUndefined(undefined, strict); // true

jsType.isFunction(function(){}, strict); // true

jsType.isRegExp("/google/gi", strict); // true
jsType.isRegExp(/google/gi, strict); // true

jsType.isDate(0, strict); // true
jsType.isDate("Thu Jan 01 1970 00:00:00", strict); // true
jsType.isDate(new Date(), strict); // true
```

```js
var strict = true;

jsType.isBoolean(false, strict); // true
jsType.isBoolean(0, strict); // false
jsType.isBoolean("false", strict); // false

jsType.isNumber(false, strict); // false
jsType.isNumber(0, strict); // true
jsType.isNumber("0", strict); // false
jsType.isNumber(new Date(), strict); // false

jsType.isString(false, strict); // false
jsType.isString(0, strict); // false
jsType.isString("text", strict); // true
jsType.isString(/ff/, strict); // false
jsType.isString(new Date(0), strict); // false

jsType.isObject('{\"g\": 1}', strict); // false
jsType.isObject({g: 1}, strict); // true

jsType.isArray('[0, 1]', strict); // false
jsType.isArray([0, 1], strict); // true

jsType.isNull("null", strict); // false
jsType.isNull(null, strict); // true

jsType.isUndefined("undefined", strict); // false
jsType.isUndefined(undefined, strict); // true

jsType.isFunction(function(){}, strict); // true

jsType.isRegExp("/google/gi", strict); // false
jsType.isRegExp(/google/gi, strict); // true

jsType.isDate(0, strict); // false
jsType.isDate("Thu Jan 01 1970 00:00:00", strict); // false
jsType.isDate(new Date(), strict); // true
```

- Convert

```js
var strict = false;

jsType.toBoolean(false, strict); // false
jsType.toBoolean(0, strict); // false
jsType.toBoolean("false", strict); // false

jsType.toNumber(false, strict); // 0
jsType.toNumber(0, strict); // 0
jsType.toNumber("0", strict); // 0
jsType.toNumber(new Date(0), strict); // 0

jsType.toString(false, strict); // "false"
jsType.toString(0, strict); // "0"
jsType.toString("text", strict); // "text"
jsType.toString(/google/gi, strict); // "/google/gi"
jsType.toString(new Date(0), strict); // "Thu Jan 01 1970 00:00:00"

jsType.toObject('{\"g\": 1}', strict); // {g: 1}
jsType.toObject({g: 1}, strict); // {g: 1}

jsType.toArray('[0, 1]', strict); // [0, 1]
jsType.toArray([0, 1], strict); // [0, 1]

jsType.toNull("null", strict); // null
jsType.toNull(null, strict); // null

jsType.toUndefined("undefined", strict); // undefined
jsType.toUndefined(undefined, strict); // undefined

jsType.toFunction(function(){}, strict); // function(){}

jsType.toRegExp("/google/gi", strict); // /google/gi
jsType.toRegExp(/google/gi, strict); // /google/gi

jsType.toDate(0, strict); // Date()
jsType.toDate("Thu Jan 01 1970 00:00:00", strict); // Date()
jsType.toDate(new Date(0), strict); // Date()
```

```js
var strict = true;

jsType.toBoolean(false, strict); // error
jsType.toBoolean(0, strict); // error
jsType.toBoolean("false", strict); // false

jsType.toNumber(false, strict); // error
jsType.toNumber(0, strict); // 0
jsType.toNumber("0", strict); // error
jsType.toNumber(new Date(0), strict); // error

jsType.toString(false, strict); // error
jsType.toString(0, strict); // error
jsType.toString("text", strict); // "text"
jsType.toString(/google/gi, strict); // error
jsType.toString(new Date(0), strict); // error

jsType.toObject('{\"g\": 1}', strict); // error
jsType.toObject({g: 1}, strict); // {g: 1}

jsType.toArray('[0, 1]', strict); // error
jsType.toArray([0, 1], strict); // [0, 1]

jsType.toNull("null", strict); // error
jsType.toNull(null, strict); // null

jsType.toUndefined("undefined", strict); // error
jsType.toUndefined(undefined, strict); // undefined

jsType.toFunction(function(){}, strict); // function(){}

jsType.toRegExp("/google/gi", strict); // error
jsType.toRegExp(/google/gi, strict); // /google/gi

jsType.toDate(0, strict); // error
jsType.toDate("Thu Jan 01 1970 00:00:00", strict); // error
jsType.toDate(new Date(0), strict); // Date()
```