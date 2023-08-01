window.onload = () => {
  class DemoComponent extends HTMLElement {
    constructor() {
      super()
      this.init()
    }

    private init() {
      // 创建shadow dom
      let dom = this.attachShadow({ mode: "open" })
      let template = this.querySelector('#demo-template') as HTMLTemplateElement
      dom.appendChild(template.content.cloneNode(true))
      // 获取属性
      console.log(this.getAttribute('age'))
    }
  }

  window.customElements.define("demo-component", DemoComponent)
}
