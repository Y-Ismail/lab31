import { createWriteStream, createReadStream } from "node:fs";
import { createInterface } from "node:readline";

const totals = {
    NG: 0,
    GH: 0,
    KE: 0,
    ZA: 0,
    MA: 0,
}

const input = createReadStream('./sales.csv')

const rl = createInterface({
  input,
  crlfDelay: Infinity,
});



for await (const line of rl) {
  

  const [country, product,quantity,price] = line.split(",");

  const revenue = Number(quantity) * Number(price)

  if (totals[country] !== undefined) {
    totals[country] += revenue;
  }
}

const out = createWriteStream('summary.csv')
out.write('country,total_revenue\n');
for(const [country,total] of Object.entries(totals)){
    out.write(`${country},${total.toFixed(2)}\n`)
}
out.end()

console.log(`Summary written to summary.csv`)