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
    it("increases fitness by 4", () => {
      kitty.fitness = 4;
      kitty.play();
      
      expect(kitty.fitness).toBe(8);
    });

    it("increases fitness to a maximum of 10", () => {
        kitty.fitness = 8;
        kitty.play();
        
        expect(kitty.fitness).toBe(10);
      });
  });

describe("feed", () => {
    const kitty = new Pet("Tako");
    it("decreases hunger by 3", () => {
      kitty.hunger = 4;
      kitty.feed();
      
      expect(kitty.hunger).toBe(1);
    });

    it("doesn't allow hunger to go below 0", () => {
        kitty.hunger = 2;
        kitty.feed();
        
        expect(kitty.hunger).toBe(0);
      });
  });
  
describe("checkUp", () => {
    const kitty = new Pet("Tako");

    it("checks if the pet is unfit", () => {
        kitty.fitness = 2;
        kitty.hunger = 3;
        
        expect(kitty.checkUp()).toBe("I want to play!");
    });
  
    it("checks if the pet is hungry", () => {
        kitty.fitness = 5;
        kitty.hunger = 6;
          
        expect(kitty.checkUp()).toBe("I'm hungry!");
    });

    it("checks if the pet is unfit and hungry", () => {
        kitty.fitness = 3;
        kitty.hunger = 7;
        
        expect(kitty.checkUp()).toBe("I want to play AND I'm hungry!");
    });

    it("checks if the pet is fit and full", () => {
        kitty.fitness = 6;
        kitty.hunger = 2;
        
        expect(kitty.checkUp()).toBe("I feel great!");
    });
  });


  describe("isAlive", () => {
    const kitty = new Pet("Tako");

    it("tells us if the pet is alive", () => {
        kitty.fitness = 6;
        kitty.hunger = 2;
        kitty.age = 3;
        expect(kitty.isAlive).toBe(true);
    });

    it("tells us if the pet has died from being unfit", () => {
        kitty.fitness = 0; 
        expect(kitty.isAlive).toBe(false);
    });

    it("tells us if the pet has died from hunger", () => {
        kitty.hunger = 10;
        expect(kitty.isAlive).toBe(false);
    });

    it("tells us if the pet has died from old age", () => {
        kitty.age = 30;
        expect(kitty.isAlive).toBe(false);
    });

  });

  describe("feed", () => {
    const kitty = new Pet("Tako");

    it("checks for a growUp error", () => {
        kitty.age = 30;
        expect(() => kitty.growUp()).toThrow("Your pet is no longer alive :(");
    });

    it("checks for a play error", () => {
        kitty.age = 30;
        expect(() => kitty.play()).toThrow("Your pet is no longer alive :(");
    });
  
    it("checks for a feed error", () => {
        kitty.age = 30;
        expect(() => kitty.feed()).toThrow("Your pet is no longer alive :(");
    });

    it("checks for a checkup error", () => {
        kitty.age = 30;
        expect(() => kitty.checkUp()).toThrow("Your pet is no longer alive :(");
    });
    });