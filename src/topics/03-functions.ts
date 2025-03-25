// funcion basica con parametros y un retorno
function addNumbers(a: number, b: number){

    return a + b;
}

// funcion flecha que suma dos numeros y devuelve string
const addNumberArrow = (a:number, b:number):string => {
    // esto permite hacer una inyeccion de js
    return `${a + b}`;
}

// funcion que tiene 3 parametros, uno obligatorio, uno opcional y otro ya definido.
// Realiza multiplicacion dependiendo de los parametros
function multiply(firstNumber: number, secondNumber?: number, base: number = 2){

    if(secondNumber != null){
        return firstNumber * secondNumber;
    }else{
        return firstNumber * base;
    }
}

// le declaramos como valor de result, lo que retorna la funcion
const result: number = addNumbers(2, 2);
// llamamos a la funcion flecha
const result2: string = addNumberArrow(2, 2);
// llamamos a la funcion multiply
const multiplyReuslt: number = multiply(5, 5);

// devolvemos le resultado com objeto
console.log({result, result2, multiplyReuslt});

// definimos una interface para un objeto Character
interface Character {
    name: string,
    hp: number;
    // manera de definir una funcion dentro de una interface
    showHp: () => void;
}

// funcion que le cura hp al Character
const healCharacter = (character: Character, amount:number) => {
    console.log('curando...')
    character.hp += amount;
}

// objeto strider en base a la interface
const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`);
    }
}

// mostramos la vida, curamos con la funcion y volvemos a mostrar
strider.showHp();
healCharacter(strider, 50);
strider.showHp(); 

export{};