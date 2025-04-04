// interface de pasajero
export interface Passenger {
    name:string;
    children?: string[];
}

// pasajero 1
const passenger1: Passenger = {
    name: 'Juan',
}

// pasajero 2
const passenger2: Passenger = {
    name: 'Matias',
    children: ['Paulo', 'Olivia'],
}

// funcion flecha para imprimir cantidad de hijos
const printChildren = (passanger: Passenger) => {

    // desestructuracion
    const {name, children} = passanger;
    // optional chaninig, si tiene hijos mostrar la catidad y si no que muestre 0
    const howManyChildren = children?.length || 0; 

    console.log(name, ' tiene ', howManyChildren, ' hijos')
}

printChildren(passenger1);
printChildren(passenger2);