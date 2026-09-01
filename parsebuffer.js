import { readFileSync } from "node:fs";

const start = performance.now();
const data = readFileSync('./sales.csv','utf-8')
// const end = performance.now()
const lines = data.split('\n').slice(1)
let totalRevenue = 0;

for(const line of lines){
    const [country,product,quantity,price] = line.split(',')
    totalRevenue += parseFloat(quantity) * parseFloat(price);
}

console.log(`Total Revenue: ₦${totalRevenue.toFixed(2)}`);

console.log(`Time taken: ${(performance.now() - start).toFixed(2)} ms`)
console.log(`Approach A (buffer read) completed`)