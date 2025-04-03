// no se recomienda usar anu}y porque se puede perder el segumiento del tipo de dato
// ademas de que TypesCript no te da ninguna ayuda con respecto a lo que puede hacer

// funcion generica para manejar distintos tipos
export function whatsMyType<T>(argument: T): T {

    return argument;
}

// generico string
let amIString = whatsMyType<string>('Hola mundo');
// generico number
let amINumber = whatsMyType<number>(100);
// generico array
let amIArray = whatsMyType<number[]>([1,2,3,4,5]);

console.log(amIString)
console.log(amINumber)
console.log(amIArray.join('-'))