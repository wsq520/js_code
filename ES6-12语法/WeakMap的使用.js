function name1() {
  console.log("name1被执行");
}

function name2() {
  console.log("name2被执行");
}

const obj = {
  name: "obj"
}

const weakmap = new WeakMap()
const map = new Map()

map.set('name', [name1, name2])
console.log(map);

weakmap.set(obj, map)
console.log(weakmap);

const fns = weakmap.get(obj).get("name")
console.log(fns);
fns.forEach(item => {
  item()
})
