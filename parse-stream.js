import { createReadStream } from "node:fs";
import { createInterface } from "node:readline";
const start = performance.now()
let totalRevenue = 0
let isFirst = true
const rl = createInterface({
    input:createReadStream('sales.csv'),
    crlfDelay: Infinity,
});

for await (const line of rl){
    if(isFirst){isFirst= false; continue}

    const [, , quantity, amount] = line.split(',');
    totalRevenue += Number(quantity) * Number(amount)

}
console.log(`Total Revenue: ${totalRevenue.toFixed(2)}`)
console.log(`Took ${(performance.now() - start).toFixed(2)} ms`)