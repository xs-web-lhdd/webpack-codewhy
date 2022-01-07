import mul from './js/mul.js'
import sum from './js/sum.js'

// ES6 导入
import { dateFormate } from './js/formate.js' 

// common.js 导入
const priceFormate = require('./js/formate.js')

console.log(sum(10, 20));
console.log(mul(10, 20));
console.log(dateFormate());
console.log(priceFormate());