// interface para definir superheroes
interface SuperHero {
    name: string;
    age: number;
    address: Address;
    showAddress: () => string;
}

// interface para definir direcciones
interface Address {
    street: string;
    city: string;
    ciudad: string;
}

// definicion de un superheroe con una direccion dentro
// y un metodo para mostrar datos
const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        city: 'USA',
        ciudad: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.ciudad + ', ' + this.address.city;
    }
}

// llamamos al metodo ver direccion y se lo asignamos a una constante
const address = superHeroe.showAddress();
console.log( address );


export {};