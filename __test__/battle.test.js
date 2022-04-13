import { Character } from "../src/character";
import { Battle } from "../src/battle";

describe ('Battle', () => {

  test('Should roll a d20', () => {
    const newEncounter = new Battle;
    const total = newEncounter.attack();
    expect(total).toBeGreaterThanOrEqual(1);
    expect(total).toBeLessThan(21);
  })
  test('Should return a d20 roll plus getattack', () => {
    const newEncounter = new Battle;
    const info = new Character("wizard"); 
    console.log(info)
    const total = info.attack
    console.log(total)
    let roll = newEncounter.attack();
    console.log(roll)
    let attack = total + roll
    console.log(attack)
    expect(attack).toBeGreaterThanOrEqual(16);
    expect(attack).toBeLessThan(36);
    console.log(total)
  })
})