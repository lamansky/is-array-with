'use strict'

module.exports = require('sbo')((arr, ...elems) => Array.isArray(arr) && arr.length === elems.length && arr.every((x, i) => x === elems[i]))
