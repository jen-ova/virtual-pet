const Pet = require("../src/virtual-pet");

describe("constructor", () => {
    let pet;
    beforeEach(() => {
        pet = new Pet("Tako");
    });

    it("returns an object", () => {
      expect(new Pet("Tako")).toBeInstanceOf(Object);
    });

    it("gives the pet a name", () => {
        expect(pet.name).toBe("Tako");
    });

    it("has a initial age of 0", () => {
        expect(pet.age).toBe(0);
    });

    it("has a initial hunger of 0", () => {
        expect(pet.hunger).toBe(0);
    });

    it("has a initial fitness of 10", () => {
        expect(pet.fitness).toBe(10);
    });
  });

describe('growUp', () => {
    const pet = new Pet("Tako");
    pet.growUp();

    it("increments the age by 1", () => {
        expect(pet.age).toBe(1);
    });

    it("increases hunger by 5 when age increments by 1", () => {
        expect(pet.hunger).toBe(5);
    });

    it("decreases fitness by 3 when age increments by 1", () => {
        expect(pet.fitness).toBe(7);
    });
  });

describe("play", () => {
    const pet = new Pet("Tako");
    it("increases fitness by 4", () => {
      pet.fitness = 4;
      pet.play();
      
      expect(pet.fitness).toBe(8);
    });

    it("increases fitness to a maximum of 10", () => {
        pet.fitness = 8;
        pet.play();
        
        expect(pet.fitness).toBe(10);
      });
  });

describe("feed", () => {
    const pet = new Pet("Tako");
    it("decreases hunger by 3", () => {
      pet.hunger = 4;
      pet.feed();
      
      expect(pet.hunger).toBe(1);
    });

    it("doesn't allow hunger to go below 0", () => {
        pet.hunger = 2;
        pet.feed();
        
        expect(pet.hunger).toBe(0);
      });
  });
  
describe("checkUp", () => {
    const pet = new Pet("Tako");

    it("checks if the pet is unfit", () => {
        pet.fitness = 2;
        pet.hunger = 3;
        
        expect(pet.checkUp()).toBe("I want to play!");
    });
  
    it("checks if the pet is hungry", () => {
        pet.fitness = 5;
        pet.hunger = 6;
          
        expect(pet.checkUp()).toBe("I'm hungry!");
    });

    it("checks if the pet is unfit and hungry", () => {
        pet.fitness = 3;
        pet.hunger = 7;
        
        expect(pet.checkUp()).toBe("I want to play AND I'm hungry!");
    });

    it("checks if the pet is fit and full", () => {
        pet.fitness = 6;
        pet.hunger = 2;
        
        expect(pet.checkUp()).toBe("I feel great!");
    });
  });


  describe("isAlive", () => {
    const pet = new Pet("Tako");

    it("tells us if the pet is alive", () => {
        pet.fitness = 6;
        pet.hunger = 2;
        pet.age = 3;
        expect(pet.isAlive).toBe(true);
    });

    it("tells us if the pet has died from being unfit", () => {
        pet.fitness = 0; 
        expect(pet.isAlive).toBe(false);
    });

    it("tells us if the pet has died from hunger", () => {
        pet.hunger = 10;
        expect(pet.isAlive).toBe(false);
    });

    it("tells us if the pet has died from old age", () => {
        pet.age = 30;
        expect(pet.isAlive).toBe(false);
    });

  });

  describe("feed", () => {
    const pet = new Pet("Tako");

    it("checks for a growUp error", () => {
        pet.age = 30;
        expect(() => pet.growUp()).toThrow("Your pet is no longer alive :(");
    });

    it("checks for a play error", () => {
        pet.age = 30;
        expect(() => pet.play()).toThrow("Your pet is no longer alive :(");
    });
  
    it("checks for a feed error", () => {
        pet.age = 30;
        expect(() => pet.feed()).toThrow("Your pet is no longer alive :(");
    });

    it("checks for a checkup error", () => {
        pet.age = 30;
        expect(() => pet.checkUp()).toThrow("Your pet is no longer alive :(");
    });
});

describe("adoptChild", () => {
    const parent = new Pet("Pen");
    const child = new Pet("Tako");

    parent.adoptChild(child);

    it("checks the child has been added to the children array", () => {
        expect(parent.children).toHaveLength(1);
    })
    it("checks the name of the child has been added to the children array", () => {
        expect(parent.children[0].name).toEqual("Tako");
    })
});