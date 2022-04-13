import { Character } from "../src/character";

export class Battle {
  attack(type, weapon)  { 
    let roll = Math.floor(Math.random() * 20) + 1
    return roll; 
  }
}

