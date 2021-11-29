# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @meteora277/lotide`

**Require it:**

`const _ = require('@meteora277/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:
 
 `assertArraysEqual(arr, arr)`: Accepts 2 arrays and asserts if they are equal or not.

 `assertEqual(value, value)`: Accepts 2 primitive values and asserts if they are equal.

 `assertObjectEqual({obj},{obj})`: Accepts 2 objects and asserts if they are equal.

`countLetters(string)`: Accepts a string and returns an object counting how many times a character appears inside the string.

`countOnly([arr], {obj})`: Accepts an array and an object, countOnly() will only count items in the array that are true within the onject.

`eqArrays(arr, arr)` Accepts 2 arrays and compares all items to be equal. Returns true or false.

`eqObjects({obj}, {obj})` Accepts 2 objects and compared all keys and values. Returns true or false.

`findKey({object}, callback)`: Accepts an Object and a callback, returns the key of the first value of the object passed through the callback that returns true.

`findKeyByValue({obj}, value)` : Accepts an Object and a value. findKey() will then return the first key that is equal to the value.

`flatten([arr])` Accepts an array, if there is nested arrays, it will remove the nesting.

`head(arr)` Accepts and array, will return index[0] or the the "head" of the array.

`letterPositions()`: Accepts a string and returns an object. object keys are the characters in the string, and it's values are the index of where it appears in the string.

`map(arr, callback)`: Accepts an array and a callback, calls the callback on al lthe values of the array and returns a new array.

`middle(arr)`: Accepts an array and return 2 middle items if arr.length is even, if odd just the single most middle item.

`tail(arr)`: Accepts an array and returns everything besides index[0].

`takeUntil(arr, callback)`: Accepts an array and returns items until callback is fulfilled.

`without(arr, arr)` Accepts 2 arrays, will remove from the first array, items that appear in the second.

