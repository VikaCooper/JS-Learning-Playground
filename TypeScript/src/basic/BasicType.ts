/**
 * 数据类型
 */

namespace basicType {
  // 基本类型
  let str: string = 'str'
  let bool: boolean = false
  let num: number = 1
  let nul: null = null
  let und: undefined = undefined
  let bool1: boolean = Boolean(1)
  let bool2: Boolean = new Boolean(1)



// 元组
  let tuple: [number, string, boolean] = [1, 'a', false]
  let tuple2: [number, string][] = [[1, 'a']]

// 枚举值 Enum
  enum Status {
    SUCCESS = 1,
    FAIL = 2,
    WARN = 3,
  }

  const currentStatus: number = Status.SUCCESS

// Union 联合类型
  let flexibleVar: number | string = 2
  flexibleVar = '2'

// Type
  type A = number | string
  let a: A
  a = 1
  a = '2'






// 泛型
  function print<T> (data: T) {
    console.log(data)
  }

  print<number>(123)
  print<string>('hello')

  class Print<T> {
    data: T
    constructor(d: T) {
      this.data = d
    }
  }

  const p1 = new Print<number>(1)
  const p2 = new Print<string>('abc')

// 自带utils

//- Record

  interface CatInfo {
    age: number;
    breed: string;
  }

  type CatName = "miffy" | "boris" | "mordred";

  const cats: Record<CatName, CatInfo> = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
  };

//- Pick
  interface Todo {
    title: string;
    description: string;
    completed: boolean;
  }

  type TodoPreview = Pick<Todo, "title" | "completed">;

  const todo: TodoPreview = {
    title: "Clean room",
    completed: false,
  };

//-Omit

  interface TodoOmit {
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
  }

  type TodoOmitPreview = Omit<TodoOmit, "description">;

  const todoOmit: TodoOmitPreview = {
    title: "Clean room",
    completed: false,
    createdAt: 1,
  };

}

