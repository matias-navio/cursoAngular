
// creamos una clase para crear intancias de Personas y la exportamos
export class Person{

    constructor(
        public name: string, 
        public address: string = 'No address'
    ){}
}

// clase Hero extiende datos y metodos de Person
export class Hero extends Person{
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string
    ){
        super(realName, 'New York ');
    }
}

// instancia de la clase Person
const ironman = new Hero('Ironman', 41, 'Tony');

console.log(ironman)