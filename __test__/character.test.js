import { Character } from "../src/character.js";

describe ('Character', () => {

  test('should return Character object', () => {
    const info = new Character("wizard"); 
    expect(info.type).toEqual("wizard");
  });

  test('should return the defense of the character', () => {
    const info = new Character("wizard"); 
    info.getDefense();
    expect(info.defense).toEqual(5);
  });
test('should return the defense of the character', () => {
  const info = new Character("warrior"); 
  info.getDefense();
  expect(info.defense).toEqual(10);
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
