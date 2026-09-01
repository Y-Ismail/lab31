const start = performance.now()
const text = await Bun.file('sales.csv').text()
let totalRevenue = 0
for(const line of text.split('\n').slice(1)){
    const [, , quantity, price] = line.split(',');
    totalRevenue += Number(quantity) * Number(price)
}

console.log(`Total revenue: ${totalRevenue.toFixed(2)}`)
console.log(`Bun took ${(performance.now()- start).toFixed(2)} ms`)