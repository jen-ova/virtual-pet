const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;
const MAXIMUM_AGE = 30;
const HUNGRY = 5;
const UNFIT = 3;

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = MAXIMUM_FITNESS;
    this.children = [];
};

Pet.prototype = {
    get isAlive() {
      return this.age < MAXIMUM_AGE && this.hunger < 10 && this.fitness > 0;
    },

    growUp() {
        if (!this.isAlive) {
            throw new Error("Your pet is no longer alive :(");
        } else { this.age += 1;
        this.hunger += HUNGRY;
        this.fitness -= UNFIT;
        };
    },

    play() {
        if (!this.isAlive) {
            throw new Error("Your pet is no longer alive :(");
        } if ((this.fitness + 4) <= MAXIMUM_FITNESS ) {
          this.fitness += 4;
        } else {
          this.fitness = MAXIMUM_FITNESS;
        }
    },

    feed() {
        if (!this.isAlive) {
            throw new Error("Your pet is no longer alive :(");
        } if ((this.hunger - 3) > MINIMUM_HUNGER ) {
          this.hunger -= 3;
        } else {
          this.hunger = MINIMUM_HUNGER;
        }
    },

    checkUp() {
        if (!this.isAlive) {
            throw new Error("Your pet is no longer alive :(");
        } if(this.fitness <= UNFIT && this.hunger >= HUNGRY) {
            return "I want to play AND I'm hungry!"
        } if(this.fitness <= UNFIT) {
            return "I want to play!"
        } if(this.hunger >= HUNGRY) {
            return "I'm hungry!"
        } else {
            return "I feel great!"
        }
    },

    adoptChild(pet) {
        this.children.push(pet);
    }
};

module.exports = Pet;