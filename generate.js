import {writeFileSync} from 'fs'

const ROWS  = 1_000_000;
const countries = ['NG','GH','KE','ZA','MA']
const rows = ['countries, product, quantity, price'];

console.log(rows)

for(let i = 0; i< ROWS ; i++){
    // const country = countries[Math.floor(Math.random()* countries.length)];
    const country = countries[i % countries.length]
    const product = `Product-${i}`
    const quantity = Math.floor(Math.random() * 1000)
    const price = (Math.random()*100).toFixed(2)
    rows.push(`${country},${product},${quantity},${price}`)
}

// console.log(rows)

writeFileSync('sales.csv', rows.join('\n'));

console.log(`Generated sales.csv with ${ROWS} rows.`)