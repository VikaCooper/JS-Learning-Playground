/**
 * Created by cooper on 2023/2/26.
 */
var a = 3
const varDemo = () => {
  // 声明前使用不会报错 变量提升
  console.log(a)
  var a = 1
  console.log(a)
  // 重复声明
  var a = 2
  console.log(a)
}

const letDemo = () => {
  let b = 1
  console.log(b)
  b = 2
  console.log(b)
}

const constDemo = () => {
  try {
    const c = 2
    c = 3
    const d = { x: 1 }
    console.log(d)
    d.x = 2
    console.log(d)
  } catch (e) {
    console.error(e)
  }
}

varDemo()
console.log(a)
letDemo()
constDemo()
