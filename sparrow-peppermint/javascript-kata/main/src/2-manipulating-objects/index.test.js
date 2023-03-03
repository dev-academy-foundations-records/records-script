const { terah, adam } = require('./index')

describe('adam', () => {
  it('should be an object', () => {
    expect(adam).not.toBeNull()
    expect(typeof adam).toBe('object')
  })

  it("should have a name key with the value 'Adam'", () => {
    expect(adam.name).toBe('Adam')
  })

  it('should have the spouse key with the value terah', () => {
    expect(adam.spouse).toBe(terah)
  })
})

describe('terah', () => {
  it('should have a spouse key with the value of the adam object', () => {
    expect(terah.spouse).toBe(adam)
  })

  it('should have an age key with the value 33', () => {
    expect(terah.age).toBe(33)
  })

  it('should not have a eyeColor property any more', () => {
    expect(terah).not.toHaveProperty('eyeColor')
  })

  it('should have a children property with an object value', () => {
    expect(terah.children).not.toBeNull()
    expect(typeof terah.children).toBe('object')
  })
})

describe('ben', () => {
  it("should be one of terah's children", () => {
    expect(terah.children).toHaveProperty('ben', expect.any(Object))
  })

  it("should be an object have a property `name` with the value 'Ben'", () => {
    expect(terah.children.ben).toHaveProperty('name', 'Ben')
  })
})

describe('wilson', () => {
  it("should be one of terah's children", () => {
    expect(terah.children).toHaveProperty('wilson', expect.any(Object))
  })

  it("should be an object have a property `name` with the value 'Wilson'", () => {
    expect(terah.children.wilson).toHaveProperty('name', 'Wilson')
  })
})

describe('felicia', () => {
  it("should be one of terah's children", () => {
    expect(terah.children).toHaveProperty('felicia', expect.any(Object))
  })

  it("should be an object have a property `name` with the value 'Wilson'", () => {
    expect(terah.children.felicia).toHaveProperty('name', 'Felicia')
  })
})

describe("terah's children", () => {
  it('should be the same as adam.children', () => {
    expect(terah.children).toBe(adam.children)
  })
})
