const Pet = require("../src/virtual-pet");

describe("constructor", () => {
    let kitty;
    beforeEach(() => {
        kitty = new Pet("Tako");
    });

    it("returns an object", () => {
      expect(new Pet("Tako")).toBeInstanceOf(Object);
    });

    it("gives the pet a name", () => {
        expect(kitty.name).toBe("Tako");
    });

    it("has a initial age of 0", () => {
        expect(kitty.age).toBe(0);
    });

    it("has a initial hunger of 0", () => {
        expect(kitty.hunger).toBe(0);
    });

    it("has a initial fitness of 10", () => {
        expect(kitty.fitness).toBe(10);
    });
  });

  describe('growUp', () => {
    const kitty = new Pet("Tako");
    kitty.growUp();

    it("increments the age by 1", () => {
        expect(kitty.age).toBe(1);
    });

    it("increases hunger by 5 when age increments by 1", () => {
        expect(kitty.hunger).toBe(5);
    });

    it("decreases fitness by 3 when age increments by 1", () => {
        expect(kitty.fitness).toBe(7);
    });
  });

  describe("play", () => {
    const kitty = new Pet("Tako");
    it('increases fitness by 4', () => {
      kitty.fitness = 4;
      kitty.play();
      
      expect(kitty.fitness).toEqual(8);
    });

    it('increases fitness by to a maximum of 10', () => {
        kitty.fitness = 8;
        kitty.play();
        
        expect(kitty.fitness).toEqual(10);
      });
  });
  