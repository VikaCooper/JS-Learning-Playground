import { printAnything } from './util.js'

/**
 * Created by cooper on 2023/2/27.
 */
let s = 'abcdefg'
let s1 = ' 12345 2'
let s2 = '1,2,3,4,5'


printAnything(
  s.slice(1, 5),
  s.substring(1, 5),
  s.substr(1, 5),
  s1.trim(),
  s1.repeat(2),
  s.padEnd(10, 'hijk'),
  s.charAt(100),
  s[2],
  s.startsWith('ab'),
  s.endsWith('fg'),
  s.includes('de'),
  s2.split(',').map(item => +item),
  s.match(/11|ab/),
  s.replace('ab', '12'),
  s
)
