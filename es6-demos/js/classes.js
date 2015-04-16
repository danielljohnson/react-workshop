class Greeter {
    constructor(options) {
        this.message = options.message;
        this.person = options.person;
    }
    
    sayhello(person) {
        return `${this.message} ${this.person.name}`;
    }
}

class Person {
    constructor(options) {
        this.name = options.name;
    }
}

var person = new Person({ name: 'Dan' });
var greeter = new Greeter({ message: 'Hello', person: person });

console.log(greeter.sayhello());