import killer, { array, string, object, number } from '../'

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

describe('kill null', () => {
  it('should kill null', () => {
    expect(killer(raw, types)).toEqual({
      price: 0,
      goods: [],
      stats: {},
      name: ''
    })
  })

  it('should kill null in array', () => {
    expect(killer([raw, raw], types)).toEqual([{
      price: 0,
      goods: [],
      stats: {},
      name: ''
    }, {
      price: 0,
      goods: [],
      stats: {},
      name: ''
    }])
  })

  it('should return raw data when types are undefined', () => {
    expect(killer(raw)).toEqual(raw)
  })
})
