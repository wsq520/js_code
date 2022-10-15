const s1 = Symbol()
const s2 = Symbol()
console.log(s1, s2);//Symbol() Symbol()

const obj = {
  [s1]: "我是s1",
  [s2]: "我是s2"
}
console.log(obj);//{ [Symbol()]: '我是s1', [Symbol()]: '我是s2' }
console.log(obj[s1]);

const s3 = Symbol("hhh")
console.log(s3);//Symbol(hhh)
console.log(s3.description);//hhh
console.log(s3.toString());//Symbol(hhh)

// 使用for方法创建相同的Symbol类型变量
const sa = Symbol.for("aaa")
const sb = Symbol.for("aaa")
console.log(sa, sb);//Symbol(aaa) Symbol(aaa)
console.log(sa === sb);//true