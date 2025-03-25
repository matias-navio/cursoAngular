// funcion basica con parametros y un retorno
function addNumbers(a: number, b: number){

    return a + b;
}

// funcion flecha que suma dos numeros y devuelve string
const addNumberArrow = (a:number, b:number):string => {
    // esto permite hacer una inyeccion de js
    return `${a + b}`;
}

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

const multiplyReuslt: number = multiply(5, 5);

// devolvemos le resultado com objeto
console.log({result, result2, multiplyReuslt});

export{};