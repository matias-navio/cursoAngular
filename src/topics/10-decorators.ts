// funcion que funciona como decorador
function classDecorator(
    constructor: any
) {

    return class extends constructor{
        newProperty = 'New property';
        hello = 'override';
    }
}

// decorador creado arriba
@classDecorator
export class SuperClass{

    public myProperty: string = 'Abc123';

    print(){
        console.log('Hola mundo');
    }
}

console.log(SuperClass);

const myClass = new SuperClass();

console.log(myClass);