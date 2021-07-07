const Pet = require("../src/virtual-pet");

describe("virtual-pet", () => {
    let newPet;
    beforeEach(() => {
        newPet = new Pet("Tako");
    });

    test('create a new object', () => {
        expect(new Pet("Tako")).toBeInstanceOf(Object);
    });
});