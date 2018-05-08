/**
 * kill null if needed
 * @param  {Object|Array} raw
 * @param  {Object} types
 * @return {Object|Array}
 */
const killer = (raw, types) => {
  if (types === undefined) return raw
  const copy = JSON.parse(JSON.stringify(raw))
  if (copy instanceof Array) {
    for (let i = 0; i < copy.length; i++) {
      walk(copy[i], types)
    }
  } else if (typeof copy === "object") {
    walk(copy, types)
  }
  return copy
}

// dictionary for default value of types
const typeDict = {
  number: 0,
  array: [],
  object: {},
  string: ""
}
/**
 * walk types and check if raw data is as expected
 * @param  {Object|Array} raw
 * @param  {Object} types
 */
const walk = (raw, types) => {
  const keys = Object.keys(types)
  let l = keys.length
  let key, type
  while (l--) {
    key = keys[l]
    type = types[key]
    if (
      raw[key] === null || type === "array"
        ? !(raw[key] instanceof Array)
        : typeof raw[key] !== type
    ) {
      raw[key] = typeDict[type]
    }
  }
}

// export types
export const array = "array"
export const object = "object"
export const string = "string"
export const number = "number"

export default killer
