'use strict';

'45. Функции-конструкторы';

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
}

User.prototype.exit = function() {
    console.log(`Пользователь ${this.name} ушел`);
};

const Artem = new User('Artem', 31);
const alex = new User('Alex', 21);

Artem.exit();

Artem.hello();
alex.hello();

console.log(Artem);
console.log(alex);