[![Build Status](https://travis-ci.org/andrefarzat/get.svg?branch=master)](https://travis-ci.org/andrefarzat/get)

# get
Simple js function to get a nested value from an object

## Usage
```js
var obj = {'a': {'b': {'c': 'The Value'}}};
var value = get(obj, 'a.b.c');
console.log(value); // prints The Value
```
