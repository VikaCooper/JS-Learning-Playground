var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
window.onload = function () {
    var DemoComponent = /** @class */ (function (_super) {
        __extends(DemoComponent, _super);
        function DemoComponent() {
            var _this = _super.call(this) || this;
            _this.init();
            return _this;
        }
        DemoComponent.prototype.init = function () {
            // 创建shadow dom
            var dom = this.attachShadow({ mode: "open" });
            var template = this.querySelector('#demo-template');
            dom.appendChild(template.content.cloneNode(true));
        };
        return DemoComponent;
    }(HTMLElement));
    window.customElements.define("demo-component", DemoComponent);
};
