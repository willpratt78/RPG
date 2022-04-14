export class Character{
constructor (type, weapon) {
this.weapon = weapon;
this.type = type;
this.getDefense();
this.getAttack();
this.addWeapon();
  }

addWeapon() {
    this.weaponAttack = 0;
      if (this.weapon === "stick") {
        return this.weaponAttack = 5 ;
      } else if (this.weapon === "sword") {
        this.weaponAttack = 10;
      } else { 
      this.weaponAttack = 15;
      }
    }

  getDefense() {
      this.defense = 0;
      if (this.type === "wizard") {
        return this.defense = 50 ;
      } else if (this.type === "warrior") {
        this.defense = 100;
      } else { 
      this.defense= 150;
      }
      }

  getAttack() {
      this.attack = 0;
        if (this.type === "wizard") {
          this.attack = 15 ;
        } else if (this.type === "warrior") {
          this.attack = 10;
        } else { 
        this.attack = 5;
        }
  }
}

export class NonPlayerCharacter{
  constructor (type, weapon) {
  this.weapon = weapon;
  this.type = type;
  this.attack = 23;
  this.defense = 50;
  }
}