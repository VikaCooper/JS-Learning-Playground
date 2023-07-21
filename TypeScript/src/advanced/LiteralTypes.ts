/**
 * 字面量类型
 *
 * 类型别名与字符串字面量类型都是使用 type 进行定义
 *
 * 可以是任意基础类型
 */
import exp from "constants"

type EventNames = 'click' | 'scroll' | 'mousemove'

type CounterNumber = 1 | 2 | 3

type Status = false | true

declare enum EventEnum {
  Click = 'click',
  Scroll = 'scroll',
  MouseMove = 'mousemove'
}

function handleEvent(eventName: EventNames): void {
  // do something...
}

handleEvent(EventEnum.Click)
handleEvent(EventEnum.Scroll)
handleEvent(EventEnum.MouseMove)


exports = EventEnum
