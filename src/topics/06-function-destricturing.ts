// interface para crear objetos
interface Product {
    description: string;
    price: number;
}

// objeto celular de tipo producto
const phone: Product = {
    description: 'iPhone 16 Pro Max',
    price: 1000
}

// objeto tablet de tipo producto
const tablet: Product = {
    description: 'iPad Air',
    price: 1850
}

// interface que se usa para calcular el impuesto
interface TaxCalculationOptions{
    tax: number;
    products: Product[];
}



// funcion para calcular el impuesto sobre el producto
function taxCalculation(options: TaxCalculationOptions): number[]{

    let total = 0;

    const {tax, products} = options;

    products.forEach(product => {
        total += product.price;
    });

    return[total, total * tax];
}
 
// lista de productos e impuesto
const[prod1, prod2]: Product[] = [phone, tablet];
const tax = 0.21;

// llamamos a la funcion para calcular el impuesto 
const [total, totalTax] = taxCalculation({
    products: [prod1, prod2],
    tax
})

console.log('Toal: ', total);
console.log('Tax: ', totalTax);

export{};