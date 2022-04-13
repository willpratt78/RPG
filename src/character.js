export function Character(type, weapon, shield) {
this.weapon = weapon;
this.shield = shield;
this.type = type;
this.getDefense();
this.getAttack();
  }
  
  
  // Character.prototype.addWeapon = function(weapon) {
  //   this.attack.push(weapon);
  // }
//   Character.prototype.addShield = function(shield) {
//     this.shield.push(shield);

   Character.prototype.getDefense = function() {
      this.defense = 0;

      if (this.type === "wizard") {
         return this.defense = 5 ;
      } else if (this.type === "warrior") {
        this.defense = 10;
      } else { 
      this.defense= 15;
      }
//  this.defense += this.shield;
      }
     Character.prototype.getAttack = function() {
       this.attack = 0;
    
        if (this.type === "wizard") {
          this.attack = 15 ;
        } else if (this.type === "warrior") {
          this.attack = 10;
        } else { 
        this.attack = 5;
        }
//     this.attack += this.weapon;
//   };
};