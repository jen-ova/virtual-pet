const Pet = require("../src/virtual-pet");

describe('constructor', () => {
    it("returns an object", () => {
      expect(new Pet("Tako")).toBeInstanceOf(Object);
    });

    const kitty = new Pet("Tako");
    it("gives the pet a name", () => {
        expect(kitty.name).toBe("Tako");
    });

    it('has a initial age of 0', () => {
        const kitty = new Pet("Tako");
    
        expect(kitty.age).toEqual(0);
      });
  });

  describe('growUp', () => {
    it('increments the age by 1', () => {
      const kitty = new Pet("Tako");
  
      kitty.growUp();
  
      expect(kitty.age).toEqual(1);
    });
  });
  