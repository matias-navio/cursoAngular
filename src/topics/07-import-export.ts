// importamos de 06
import {Product, TaxCalculationOptions, taxCalculation} from './06-function-destricturing';

// creamos la lista de productos con la interface importada
const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'iPad',
        price: 200
    }
];

// inyectamos las opciones para calcular con lo que importamos
const options: TaxCalculationOptions = {
    tax: 0.21,
    products: shoppingCart
}

// llamamos a la funcion importada
const [total, tax] = taxCalculation(options);

console.log('Total: ', total);
console.log('Tax: ', tax);




