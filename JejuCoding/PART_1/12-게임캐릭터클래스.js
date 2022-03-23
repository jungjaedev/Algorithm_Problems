const Wizard = class Wizard {
  constructor(health, mana, armor) {
    this.health = health;
    this.mana = mana;
    this.armor = armor;
  }
  attack() {
    console.log('파이어볼');
  }
};

const char = new Wizard(545, 210, 10);
console.log(char.health, char.mana, char.armor);
char.attack();
