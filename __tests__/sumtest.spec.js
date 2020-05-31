const sum = require("../index")

// describe is used to group a bunch of test cases
describe("test sum function", () => {
    // each test case can get its own call to the test function
    test("empty array", () => {
        let result = sum([])
        // this is a basic assertion, if an assertion fails the whole
        // test fails
        expect(result).toEqual(0);
    })

    // more ideas for test cases
    // also test with some positive numbers
    test("positive numbers", () => { //first parameter is the name of the test, second parameter is the function
        let result = sum([1, 3, 4]);
        expect(result).toEqual(8);
    });
    // test with one number
    // test with some negative numbers
});