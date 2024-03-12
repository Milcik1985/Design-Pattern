// 1. Implement a Logger class using the Singleton pattern. Logger should have acessible id. // check if after 2 logs id still the same; zr. Singleton.ts

import { Logger } from "./Singleton.ts";
const logger1 = Logger.getInstance();
logger1.logMessage();
logger1.logMessage();

// 2. Create a GameCharacter factory class. Based on a given text input to the  GameCharacter class it should return a following classes "HUMAN", "ANIMAL", 'WIZZARD'; zr Factory.ts

import { GameCharacterFactory } from "./Factory.ts";

const character1 = GameCharacterFactory.createCharacter("HUMAN");
console.log(character1.getInfo());
const character2 = GameCharacterFactory.createCharacter("ANIMAL");
console.log(character2.getInfo());
const character3 = GameCharacterFactory.createCharacter("WIZZARD");
console.log(character3.getInfo());

// 3. Create a SmartHomeFacade class that simplifies the interface for controlling various smart home devices (lights, thermostat, security system) with unified methods like morningRoutine() leaveHome(), and nightMode(). zr Facade.ts

import {
  SmartHomeFacade,
  BasicLight,
  BasicThermostat,
  BasicSecuritySystem,
} from "./Facade.ts";

const basicLight = new BasicLight();
const basicThermostat = new BasicThermostat();
const securitySystem = new BasicSecuritySystem();

const smartHome = new SmartHomeFacade(
  basicLight,
  basicThermostat,
  securitySystem
);

smartHome.morningRoutine();
smartHome.leaveHome();
smartHome.nightMode();

// 4. Create a Tesla builder class. Car should have "wheels", "seatType", "color", "soundSystem". All of those properties should have default values. With TeslaBuilderClass you should be able to modify it's properties. zr Builder.ts

import { Tesla, TeslaBuilder } from "./Builder.ts";

const myTesla = new TeslaBuilder()
  .setWheels(4)
  .setSeatType("Leather")
  .setColor("red")
  .setSoundSystem("Premium")
  .build();

console.log(myTesla.getInfo());
