/**
 * Created by cooper on 2023/2/26.
 */

const p = new Promise((resolve, reject) => {
  let a = 2
  if (a > 0) {
    resolve(true)
  } else {
    reject(false)
  }
})

p.then((val) => {
  console.log("[then]: ", val)
})
  .catch((err) => {
    console.log("[catch]: ", err)
  })
  .finally(() => {
    console.log("[finally]: excuted")
  })

const p1 = new Promise((resolve) => {
  resolve(1)
})
const p2 = new Promise((resolve, reject) => {
  reject(2)
})
const p3 = new Promise((resolve) => {
  resolve(3)
})
const promises = [p1, p2, p3]

Promise.all(promises)
  .then((res) => {
    console.log("[all]:  ", res)
  })
  .catch((err) => {
    console.log("[all]:  ", err)
  })

Promise.race(promises).then((res) => {
  console.log("[race]: ", res)
})

Promise.allSettled(promises).then((res) => {
  console.log("[allSettled]: ", res)
})

Promise.resolve(1).then((res) => {
  console.log("[resolve]: ", res)
})

Promise.reject("reason").catch((err) => {
  console.log("[reject]: ", err)
})
