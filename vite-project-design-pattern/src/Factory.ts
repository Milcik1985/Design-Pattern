// 2. Create a GameCharacter factory class. Based on a given text input to the  GameCharacter class it should return a following classes "HUMAN", "ANIMAL", 'WIZZARD';

export class GameCharacterFactory {
  static createCharacter(type: string): GameCharacter {
    switch (type.toUpperCase()) {
      case "HUMAN":
        return new Human();
      case "ANIMAL":
        return new Animal();
      case "WIZZARD":
        return new Wizzard();
      default:
        throw new Error(`Unknown character type: ${type}`);
    }
  }
}

abstract class GameCharacter {
  abstract getInfo(): string;
}

class Human extends GameCharacter {
  getInfo(): string {
    return "This is a human character";
  }
}

class Animal extends GameCharacter {
  getInfo(): string {
    return "This is a animal character";
  }
}

class Wizzard extends GameCharacter {
  getInfo(): string {
    return "This is a wizzard character";
  }
}
