import { Character } from "../src/character.js";

describe ('Character', () => {

  test('should return Character object', () => {
    const info = new Character("wizard"); 
    expect(info.type).toEqual("wizard");
  });

  test('should return the defense of the wizard', () => {
    const info = new Character("wizard"); 
    info.getDefense();
    expect(info.defense).toEqual(5);
  });
  test('should return the defense of the warrior', () => {
  const info = new Character("warrior"); 
  info.getDefense();
  expect(info.defense).toEqual(10);
  });
  test('should return the defense of the other', () => {
    const info = new Character("rogue"); 
    info.getDefense();
    expect(info.defense).toEqual(15);
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

// Describe ('Constructor name', () => {

//   test('should accuratly describe what the test will be doing once passing', () => {
    
//   })
// })
