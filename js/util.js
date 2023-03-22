/**
 * Created by cooper on 2023/3/10.
 */
const printAnything = (...args) => {
  if (args && args.length) {
    for (let i = 0; i < args.length; i++) {
      console.log(args[i])
    }
  }
}
export { printAnything }
