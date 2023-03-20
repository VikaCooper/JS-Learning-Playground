/**
 * Created by cooper on 2023/2/27.
 */
import { printAnything } from './util'

let a

printAnything(
  Number('1'),
  Number('ab'),
  Number(undefined),
  Number(null),
  Number({ x: 1 }),
  Number([1]),
  // Number(Symbol(1))
  Infinity > 0,
  Boolean(-Infinity),
  Boolean(-1),
  !{} == [],
  +0 === -0,
  NaN == NaN,
  '5' + 4,
  5 + '4',
  5 - '1',
  '52' - '2',
  null == undefined,
  a == null,
  typeof []
)
