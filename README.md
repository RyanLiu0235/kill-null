# ⚔ kill-null [![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

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