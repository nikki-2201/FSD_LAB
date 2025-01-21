const product = {id: 101, name: 'Laptop', price: 1000, category: 'Electronics'} 
function updateProductInfo(product){
    const {id,name}=product;
    return {
        ...{id,name},
        discount:10,
        instock:true
    };
}
const a=updateProductInfo(product)
console.log(a)