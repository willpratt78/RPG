import { Character } from "../src/character";
import { Battle } from "../src/battle";

describe ('Battle', () => {

  test('Should roll a d20', () => {
    const newEncounter = new Battle;
    const total = newEncounter.attack();
    expect(total).toBeGreaterThanOrEqual(1);
    expect(total).toBeLessThan(21);
  })
  test('Should return a d20 roll plus wizard attack', () => {
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
  test('Should return a d20 roll plus warrior attack', () => {
    const newEncounter = new Battle;
    const info = new Character("warrior"); 
    console.log(info)
    const total = info.attack
    console.log(total)
    let roll = newEncounter.attack();
    console.log(roll)
    let attack = total + roll
    console.log(attack)
    expect(attack).toBeGreaterThanOrEqual(11);
    expect(attack).toBeLessThan(31);
    console.log(total)
  })
  test('Should return a d20 roll plus other attack', () => {
    const newEncounter = new Battle;
    const info = new Character("rogue"); 
    console.log(info)
    const total = info.attack
    console.log(total)
    let roll = newEncounter.attack();
    console.log(roll)
    let attack = total + roll
    console.log(attack)
    expect(attack).toBeGreaterThanOrEqual(6);
    expect(attack).toBeLessThan(26);
    console.log(total)
  })
  test('Should return a d20 roll plus wizard attack plus weaponAttack', () => {
    const newEncounter = new Battle;
    const info = new Character("wizard", "stick"); 
    const charAtt = info.attack
    const wepAtt = info.weaponAttack
    const total = charAtt + wepAtt
    let roll = newEncounter.attack();
    let attack = total + roll
    expect(attack).toBeGreaterThanOrEqual(21);
    expect(attack).toBeLessThan(41);
    console.log(total)
  })
//   test('Should return a d20 roll plus wizard attack', () => {
//     const newEncounter = new Battle;
//     const info = new Character("wizard"); 
//     console.log(info)
//     const total = info.attack
//     console.log(total)
//     let roll = newEncounter.attack();
//     console.log(roll)
//     let attack = total + roll
//     console.log(attack)
//     expect(attack).toBeGreaterThanOrEqual(16);
//     expect(attack).toBeLessThan(36);
//     console.log(total)
//   })
//   test('Should return a d20 roll plus wizard attack', () => {
//     const newEncounter = new Battle;
//     const info = new Character("wizard"); 
//     console.log(info)
//     const total = info.attack
//     console.log(total)
//     let roll = newEncounter.attack();
//     console.log(roll)
//     let attack = total + roll
//     console.log(attack)
//     expect(attack).toBeGreaterThanOrEqual(16);
//     expect(attack).toBeLessThan(36);
//     console.log(total)
//   })
})