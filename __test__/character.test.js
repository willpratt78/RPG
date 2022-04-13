import { Character } from "../src/character.js";
import { NonPlayerCharacter } from "../src/character.js";

describe ('Character', () => {

  test('should return Character object', () => {
    const info = new Character("wizard"); 
    expect(info.type).toEqual("wizard");
  });

  test('should return the defense of the wizard', () => {
    const info = new Character("wizard"); 
    info.getDefense();
    expect(info.defense).toEqual(50);
  });
  test('should return the defense of the warrior', () => {
  const info = new Character("warrior"); 
  info.getDefense();
  expect(info.defense).toEqual(100);
  });
  test('should return the defense of the other', () => {
    const info = new Character("rogue"); 
    info.getDefense();
    expect(info.defense).toEqual(150);
  });

  test('should return the attack of the wizard', () => {
    const info = new Character("wizard"); 
    info.getAttack();
    expect(info.attack).toEqual(15);
  });
  test('should return the attack of the warrior', () => {
    const info = new Character("warrior"); 
    info.getAttack();
    expect(info.attack).toEqual(10);
  });
  test('should return the attack of the other', () => {
    const info = new Character("rogue"); 
    info.getAttack();
    expect(info.attack).toEqual(5);
  });
  test('should return the attack value of the stick', () => {
    const info = new Character("wizard", "stick"); 
    info.getAttack();
    info.addWeapon();
    expect(info.weaponAttack).toEqual(5);
  });
  test('should return the attack value of the sword', () => {
    const info = new Character("wizard", "sword"); 
    info.getAttack();
    info.addWeapon();
    expect(info.weaponAttack).toEqual(10);
  });
  test('should return the attack value of the weapon', () => {
    const info = new Character("wizard", "greatsword"); 
    info.getAttack();
    info.addWeapon();
    expect(info.weaponAttack).toEqual(15);
  });

});

describe ('NonPlayerCharacter', () => {

  test('should return type and weapon from inputted argument', () => {
    const info = new NonPlayerCharacter("wizard", "stick"); 
    expect(info.type).toEqual("wizard", "stick");
  });
});

// Describe ('Constructor name', () => {

//   test('should accuratly describe what the test will be doing once passing', () => {
    
//   })
// })

// Describe ('Constructor name', () => {

//   test('should accuratly describe what the test will be doing once passing', () => {
    
//   })
// })

// Describe ('Constructor name', () => {

//   test('should accuratly describe what the test will be doing once passing', () => {
    
//   })
// })

// Describe ('Constructor name', () => {

//   test('should accuratly describe what the test will be doing once passing', () => {
    
//   })
// })

// Describe ('Constructor name', () => {

//   test('should accuratly describe what the test will be doing once passing', () => {
    
//   })
// })

// Describe ('Constructor name', () => {

//   test('should accuratly describe what the test will be doing once passing', () => {
    
//   })
// })

// Describe ('Constructor name', () => {

//   test('should accuratly describe what the test will be doing once passing', () => {
    
//   })
// })

// Describe ('Constructor name', () => {

//   test('should accuratly describe what the test will be doing once passing', () => {
    
//   })
// })

// Describe ('Constructor name', () => {

//   test('should accuratly describe what the test will be doing once passing', () => {
    
//   })
// })

// Describe ('Constructor name', () => {

//   test('should accuratly describe what the test will be doing once passing', () => {
    
//   })
// })

// Describe ('Constructor name', () => {

//   test('should accuratly describe what the test will be doing once passing', () => {
    
//   })
// })
