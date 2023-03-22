class InterceptorManage {
  constructor() {
    this.handlers = []
  }

  use(fullfield, rejected) {
    this.handlers.push({
      fullfield,
      rejected,
    })
  }
}

export default InterceptorManage
