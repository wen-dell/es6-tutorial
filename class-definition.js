class Person {

    constructor(name, age, profession) {
        this.name = name;
        this.age = age;
        this.profession = profession;
    }

    introduceMyself() {
        console.log(`Hi, my name's ${this.name} and i'm ${this.age} years old. And i'm a ${this.profession}.`);
    }

}

person = new Person('Albert', 22, 'History teacher');
person.introduceMyself();