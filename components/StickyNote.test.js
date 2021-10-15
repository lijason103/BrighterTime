const rewire = require("rewire")
const StickyNote = rewire("./StickyNote")
const getRandomNumber = StickyNote.__get__("getRandomNumber")
// @ponicode
describe("getRandomNumber", () => {
    test("0", () => {
        let callFunction = () => {
            getRandomNumber(1, -10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            getRandomNumber(0.0, -1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            getRandomNumber(0, -10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            getRandomNumber(-1, -1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            getRandomNumber(-1, 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            getRandomNumber(NaN, NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})
