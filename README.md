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
jsType.isBoolean(false); // true
jsType.isBoolean(0); // true
jsType.isBoolean("false"); // true

jsType.isNumber(false); // true
jsType.isNumber(0); // true
jsType.isNumber("0"); // true
jsType.isNumber(new Date()); // true

jsType.isString(false); // true
jsType.isString(0); // true
jsType.isString("text"); // true
jsType.isString(/ff/); // true
jsType.isString(new Date(0)); // true

jsType.isObject('{\"g\": 1}'); // true
jsType.isObject({g: 1}); // true

jsType.isArray('[0, 1]'); // true
jsType.isArray([0, 1]); // true

jsType.isNull("null"); // true
jsType.isNull(null); // true

jsType.isUndefined("undefined"); // true
jsType.isUndefined(undefined); // true

jsType.isFunction(function(){}); // true

jsType.isRegExp("/google/gi"); // true
jsType.isRegExp(/google/gi); // true

jsType.isDate(0); // true
jsType.isDate("Thu Jan 01 1970 00:00:00"); // true
jsType.isDate(new Date()); // true
```

- Convert

```js
jsType.toBoolean(false); // false
jsType.toBoolean(0); // false
jsType.toBoolean("false"); // false

jsType.toNumber(false); // 0
jsType.toNumber(0); // 0
jsType.toNumber("0"); // 0
jsType.toNumber(new Date(0)); // 0

jsType.toString(false); // "false"
jsType.toString(0); // "0"
jsType.toString("text"); // "text"
jsType.toString(/google/gi); // "/google/gi"
jsType.toString(new Date(0)); // "Thu Jan 01 1970 00:00:00"

jsType.toObject('{\"g\": 1}'); // {g: 1}
jsType.toObject({g: 1}); // {g: 1}

jsType.toArray('[0, 1]'); // [0, 1]
jsType.toArray([0, 1]); // [0, 1]

jsType.toNull("null"); // null
jsType.toNull(null); // null

jsType.toUndefined("undefined"); // undefined
jsType.toUndefined(undefined); // undefined

jsType.toFunction(function(){}); // function(){}

jsType.toRegExp("/google/gi"); // /google/gi
jsType.toRegExp(/google/gi); // /google/gi

jsType.toDate(0); // Date()
jsType.toDate("Thu Jan 01 1970 00:00:00"); // Date()
jsType.toDate(new Date(0)); // Date()
```