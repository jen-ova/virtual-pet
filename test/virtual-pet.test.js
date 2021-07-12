const Pet = require("../src/virtual-pet");

describe('constructor', () => {
    // let newPet;
    // beforeEach(() => {
    //     newPet = new Pet("Tako");
    // });

    it("returns an object", () => {
      expect(new Pet("Tako")).toBeInstanceOf(Object);
    });
    const kitty = new Pet("Tako");
    it("gives the pet a name", () => {
        expect(kitty.name).toBe("Tako");
    });
  });
  