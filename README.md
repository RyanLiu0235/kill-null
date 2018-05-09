# ⚔ kill-null [![Build Status](https://travis-ci.org/RyanLiu0235/kill-null.svg?branch=master)](https://travis-ci.org/RyanLiu0235/kill-null) [![codecov](https://codecov.io/gh/RyanLiu0235/kill-null/branch/master/graph/badge.svg)](https://codecov.io/gh/RyanLiu0235/kill-null) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier) [![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

I am so tired of `null` in RESTful APIs, so define your types first and make your data free of `null`.

## Usage

``` js
import kn, { array, string, object, number } from 'kill-null'

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

console.log(kn(raw, types))
// {
//   price: 0,
//   goods: [],
//   stats: {},
//   name: ''
// }
```

> Note that kill-null uses `JSON.parse(JSON.stringify(raw))` to deep-copy raw data, so functions will not work as expected. Anyway, we only handle data from APIS.

You can also pass types with a detailed configuration

``` js
import kn, { array, string, object, number } from 'kill-null'

const raw = {
  price: null,
  tags: null,
  stats: null,
  name: null
}
const types = {
  price: {
    type: number,
    default: 1
  },
  tags: {
    type: array,
    default: ['foo', 'boo']
  },
  stats: object,
  name: string
}

console.log(kn(raw, types))
// {
//   price: 1,
//   tags: ['foo', 'boo'],
//   stats: {},
//   name: ''
// }
```