import killer, { array, string, object, number } from "../"

const raw = {
  price: null,
  tags: null,
  stats: null,
  name: null
}
const types = {
  price: number,
  tags: array,
  stats: object,
  name: string
}
const filtered = {
  price: 0,
  tags: [],
  stats: {},
  name: ""
}

describe("kill null", () => {
  it("should kill null", () => {
    expect(killer(raw, types)).toEqual(filtered)
  })

  it("should kill null in array", () => {
    expect(killer([raw, raw], types)).toEqual([filtered, filtered])
  })

  it("should return raw data when types are undefined", () => {
    expect(killer(raw)).toEqual(raw)
  })

  it("should accept an object as configurations", () => {
    const defaultTags = [
      {
        tagName: "foo"
      },
      {
        tagName: "boo"
      }
    ]
    const complexTypes = {
      price: {
        type: number,
        default: 0
      },
      tags: {
        type: array,
        default: defaultTags
      },
      stats: object,
      name: string
    }
    expect(killer(raw, complexTypes)).toEqual({
      price: 0,
      tags: defaultTags,
      stats: {},
      name: ""
    })
  })

  it("should ignore which has no config in types", () => {
    expect(killer(Object.assign({}, raw, { time: null }), types)).toEqual(
      Object.assign({}, filtered, { time: null })
    )
  })
})
