'use strict'

const assert = require('assert')
const isArrayWith = require('.')

describe('isArrayWith()', function () {
  it('should return false for a non-array', function () {
    assert.strictEqual(isArrayWith(123), false)
    assert.strictEqual(isArrayWith('not an array'), false)
    assert.strictEqual(isArrayWith(null, 123), false)
    assert.strictEqual(isArrayWith(), false)
  })

  it('should return true for an empty array', function () {
    assert.strictEqual(isArrayWith([]), true)
  })

  it('should return true if array elements match arguments', function () {
    assert.strictEqual(isArrayWith([1, 2, 3], 1, 2, 3), true)
  })

  it('should return false if array elements do not match arguments', function () {
    assert.strictEqual(isArrayWith([1, 2, 3], 3, 4, 5), false) // Wrong elements
    assert.strictEqual(isArrayWith([1, 2, 3], 1, 2), false) // Too many
    assert.strictEqual(isArrayWith([1, 2, 3], 1, 2, 3, 4), false) // Too few
    assert.strictEqual(isArrayWith([1, 2, 3], 2, 1, 3), false) // Wrong order

    assert.strictEqual(isArrayWith([1, 2, 3]), false)
    assert.strictEqual(isArrayWith([], 1), false)
  })

  it('should support the bind operator', function () {
    assert.strictEqual(isArrayWith.call([1, 2, 3], 1, 2, 3), true)
  })
})
