class Pet {
    constructor(name, age) {
        console.log("In Pet Constructor!!")
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating!!`;
    }
}

class Cat extends Pet {
    constructor(name, age, livesleft = 9) {
        console.log("In Cat contructor!!")
        super(name, age)
        this.livesleft = livesleft;
    }
    meoww() {
        return 'meoww!!';
    }
}

class Dog extends Pet {
    bark() {
        return 'Wooooofff!!';
    }
    eat() {
        return `${this.name} scarfs his food!!`;
    }
}