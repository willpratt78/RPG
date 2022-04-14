import { Character } from "../src/character";
import { Battle } from "../src/battle";
import { NonPlayerCharacter } from "../src/character.js";


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
    const total = info.attack
    let roll = newEncounter.attack();
    let attack = total + roll
    expect(attack).toBeGreaterThanOrEqual(16);
    expect(attack).toBeLessThan(36);
  })
  test('Should return a d20 roll plus warrior attack', () => {
    const newEncounter = new Battle;
    const info = new Character("warrior"); 
    const total = info.attack
    let roll = newEncounter.attack();
    let attack = total + roll
    expect(attack).toBeGreaterThanOrEqual(11);
    expect(attack).toBeLessThan(31);
  })
  test('Should return a d20 roll plus other attack', () => {
    const newEncounter = new Battle;
    const info = new Character("rogue"); 
    const total = info.attack
    let roll = newEncounter.attack();
    let attack = total + roll
    expect(attack).toBeGreaterThanOrEqual(6);
    expect(attack).toBeLessThan(26);
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
  })
  test('Should return a d20 roll plus warrior attack', () => {
    const newEncounter = new Battle;
    const info = new Character("warrior", "stick"); 
    const charAtt = info.attack
    const wepAtt = info.weaponAttack
    const total = charAtt + wepAtt
    let roll = newEncounter.attack();
    let attack = total + roll
    expect(attack).toBeGreaterThanOrEqual(16);
    expect(attack).toBeLessThan(36);
  })
  test('Should return a d20 roll plus rogue attack', () => {
    const newEncounter = new Battle;
    const info = new Character("rogue", "stick");    
    const charAtt = info.attack
    const wepAtt = info.weaponAttack
    const total = charAtt + wepAtt
    let roll = newEncounter.attack();
    let attack = total + roll 
    expect(attack).toBeGreaterThanOrEqual(11);
    expect(attack).toBeLessThan(31);   
  })
  test('Should return a d20 roll plus NonPlayerCharacter attack', () => {
    const newEncounter = new Battle;
    const info = new NonPlayerCharacter("warrior", "stick"); 
    const total = info.attack
    let roll = newEncounter.attack();
    let attack = total + roll
    expect(attack).toBeGreaterThanOrEqual(24);
    expect(attack).toBeLessThan(44);
  })
  test('Should subtract the character attack from NPC defense', () => {
    const newEncounter = new Battle;
    const info = new Character("wizard", "stick"); 
    const charAtt = info.attack
    const wepAtt = info.weaponAttack
    const total = charAtt + wepAtt
    let roll = newEncounter.attack();
    let attack = total + roll
    const NPC = new NonPlayerCharacter("warrior", "stick"); 
    let remainingDef = NPC.defense-attack
    NPC.defense = remainingDef
    expect(remainingDef).toBeLessThan(50)
  })
  test('Should subtract the character attack from PC defense', () => {
    const newEncounter = new Battle;
    const info = new Character("wizard", "stick"); 
    const NPC = new NonPlayerCharacter("warrior", "stick"); 
    let roll = newEncounter.attack();
    let attack = NPC.attack + roll
    let remainingDef = info.defense-attack
    info.defense = remainingDef
    console.log(attack)
    console.log(info.defense)
    expect(remainingDef).toBeLessThan(50)
  })
});