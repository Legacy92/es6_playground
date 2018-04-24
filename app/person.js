class Person {
    constructor(name){
        this.name = name;
    }
    sleep(hours){
        return `<h1>Im going to sleep for ${hours} hours.</h1>`;
    }
    drinks(cups){
        return `<h1>Im going to drink ${cups} cups of water.</h1>`;
    }
    speak(message){
        return `<h1>${this.name} said: ${message}</h1>`;
    }
}

class SuperPerson extends Person {
    constructor(name, heroName){
        super(name);
        this.heroName = heroName;
    }

    sayHeroName(){
        return this.speak(`Im ${this.heroName}`);
    }

    xRay(){
        return this.speak('I can see your junk bob...');
    }
}

export default SuperPerson;