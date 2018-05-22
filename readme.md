# is-array-with

Checks if a value is an array containing exactly the specified elements.

## Installation

Requires [Node.js](https://nodejs.org/) 6.0.0 or above.

```bash
npm i is-array-with
```

## API

The module exports a single function.

### Parameters

1. Bindable: `arr` (any): The value that should be an array.
2. Variadic: `...elems`: The values that should be in the array.

### Return Value

Returns `true` if `arr` is an array and if its elements exactly equal the `elems` arguments. Otherwise `false`.

## Example

```javascript
const isArrayWith = require('is-array-with')

const arr = [1, 2, 3]

isArrayWith(arr, 1, 2, 3) // true

isArrayWith('not an array') // false
isArrayWith(arr, 1, 2) // false
isArrayWith(arr, 1, 2, 3, 4) // false
isArrayWith(arr, 2, 1, 3) // false

// Supports the bind operator
arr::isArrayWith(1, 2, 3) // true
```

## Related

* [is-array-of-length](https://github.com/lamansky/is-array-of-length)
