// code without Interface Segregation Principle
console.warn('code without Interface Segregation Principle');

class Entity {
    constructor(name, attackDamage, health) {
        this.name = name;
        this.attackDamage = attackDamage;
        this.health = health;
    }

    move() {
        console.log(`${this.name} moved!`);
    }

    attack(targetEntity) {
        console.log(`${this.name} attacked ${targetEntity.name} for ${this.attackDamage} damage!`);
        targetEntity.takeDamage(this.attackDamage);
    }

    takeDamage(amount) {
        this.health -= amount;
        console.log(`${this.name} has ${this.health} health remaining!`);
    }
}

class Character extends Entity {
    
}

class Wall extends Entity {
    constructor(name, health) {
        super(name, 0, health);
    }

    move() {
        return null;
    }
    
    attact() {
        return null;
    }
}

class Turret extends Entity {
    constructor(name, attackDamage) {
        super(name, attackDamage, -1);
    }

    move() {
        return null;
    }

    attact() {
        return null;
    }
}

const turret = new Turret('Turret', 5);
const character = new Character('Character', 3, 100);
const wall = new Wall('Wall', 200);

turret.attack(character);
character.move();
character.attack(wall);


console.log('=========================================');
// code with Interface Segregation Principle
console.warn('code with Interface Segregation Principle');

class Entity2 {
    constructor(name) {
        this.name = name;
    }
}

const mover = {
    move() {
        console.log(`${this.name} moved!`);
    }
}

const attacker = {
    attack(targetEntity) {
        console.log(`${this.name} attacked ${targetEntity.name} for ${this.attackDamage} damage!`);
        targetEntity.takeDamage(this.attackDamage);
    }
}

const hasHealth = {
    takeDamage(amount) {
        this.health -= amount;
        console.log(`${this.name} has ${this.health} health remaining!`);
    }
}

class Character2 extends Entity2 {
    constructor(name, attackDamage, health) {
        super(name);
        this.attackDamage = attackDamage;
        this.health = health;
    }
}

Object.assign(Character2.prototype, mover);
Object.assign(Character2.prototype, attacker);
Object.assign(Character2.prototype, hasHealth);

class Wall2 extends Entity2 {
    constructor(name, health) {
        super(name);
        this.health = health;
    }
}

Object.assign(Wall2.prototype, hasHealth);

class Turret2 extends Entity2 {
    constructor(name, attackDamage) {
        super(name);
        this.attackDamage = attackDamage;
    }
}

Object.assign(Turret2.prototype, attacker);

const turret2 = new Turret2('Turret2', 5);
const character2 = new Character2('Character2', 3, 100);
const wall2 = new Wall2('Wall2', 200);

turret2.attack(character2);
character2.move();
character2.attack(wall2);