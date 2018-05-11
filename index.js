/**
 * kill null if needed
 * @param  {Object|Array} raw
 * @param  {Object} types
 * @return {Object|Array}
 */
const killer = (raw, types) => {
  if (types === undefined) return raw
  const copy = JSON.parse(JSON.stringify(raw))
  walk(copy, types)
  return copy
}

// dictionary for default value of types
const typeDict = {
  number: 0,
  array: [],
  object: {},
  string: ""
}

const walk = (raw, types) => {
  if (raw instanceof Array) {
    for (let i = 0; i < raw.length; i++) {
      doWalk(raw[i], types)
    }
  } else if (typeof raw === object) {
    doWalk(raw, types)
  }
}
/**
 * walk types and check if raw data is as expected
 * @param  {Object|Array} raw
 * @param  {Object} types
 */
const doWalk = (raw, types) => {
  const keys = Object.keys(types)
  let l = keys.length
  let key, value, type, config
  while (l--) {
    key = keys[l]
    value = raw[key]
    type = types[key]

    config = typeof type === object ? type : { type }
    const { type: requiredType, default: defaultValue, data } = config

    if (value === null) {
      raw[key] = defaultValue ? defaultValue : typeDict[requiredType]
    } else if (data !== undefined) {
      walk(value, data)
    }
  }
}

// export types
export const array = "array"
export const object = "object"
export const string = "string"
export const number = "number"

export default killer
