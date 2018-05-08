# ⚔ kill-null [![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest) [![Build Status](https://travis-ci.org/RyanLiu0235/kill-null.svg?branch=master)](https://travis-ci.org/RyanLiu0235/kill-null) [![codecov](https://codecov.io/gh/RyanLiu0235/kill-null/branch/master/graph/badge.svg)](https://codecov.io/gh/RyanLiu0235/kill-null)

We just kill it!

## Usage

``` js
import killer, { array, string, object, number } from 'kill-null'

const raw = {
  price: null,
  goods: null,
  stats: null,
  name: null
}
const types = {
  price: number,
  goods: array,
  stats: object,
  name: string
}

console.log(killer(raw, types))
// {
//   price: 0,
//   goods: [],
//   stats: {},
//   name: ''
// }
```