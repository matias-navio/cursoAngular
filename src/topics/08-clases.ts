
// creamos una clase para crear intancias de Personas y la exportamos
export class Person{

    constructor(
        public firstname?: string,
        public lastname?: string, 
        public address: string = 'No address'
    ){}
}

// clase Hero extiende datos y metodos de Person
// export class Hero extends Person{
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string
//     ){
//         super(realName, 'New York ');
//     }
// }

// clase Hero que tiena como atributo los datos de Person
export class Hero{

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ){
        // this.person = new Person(realName, 'New York');
    }
}

// instancia de Person que se usa en Hero
const tony = new Person('Tony', 'Stark', 'New York')
// instancia de la clase Hero
const ironman = new Hero('Ironman', 41, 'Tony', tony);

console.log(ironman)