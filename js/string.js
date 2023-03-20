/**
 * Created by cooper on 2023/2/27.
 */
let s = 'abcdefg'

console.log(s.slice(1,5))
console.log(s.substring(1,5))
console.log(s.substr(1,5))

let s1 = ' 12345 2'
console.log(s1.trim())
console.log(s1.repeat(2))

console.log(s.padEnd(10, 'hijk'))

console.log(s.charAt(100))
console.log(s[2])

console.log(s.startsWith('ab'))
console.log(s.endsWith('fg'))
console.log(s.includes('de'))
