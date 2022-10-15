// 打开数据(和数据库建立连接)
const dbRequest = indexedDB.open("why", 3)
dbRequest.onerror = function (err) {
  console.log("打开数据库失败~")
}
let db = null
dbRequest.onsuccess = function (event) {
  db = event.target.result
}
// 第一次打开/或者版本发生升级才会调用函数onupgradeneeded
dbRequest.onupgradeneeded = function (event) {
  const db = event.target.result

  console.log(db)

  // 创建一些存储对象
  // keyPath类似于表的主键  users为表名
  db.createObjectStore("users", { keyPath: "id" })
}

class User {
  constructor(id, name, age) {
    this.id = id
    this.name = name
    this.age = age
  }
}

const users = [
  new User(100, "why", 18),
  new User(101, "kobe", 40),
  new User(102, "james", 30),
]

// 获取btns, 监听点击
const btns = document.querySelectorAll("button")
for (let i = 0; i < btns.length; i++) {
  btns[i].onclick = function () {
    //transaction是一个事务 该事务操作users表 对users表进行读写
    const transaction = db.transaction("users", "readwrite")
    console.log(transaction)
    //获取store对象
    const store = transaction.objectStore("users")

    switch (i) {
      case 0:
        console.log("点击了新增")
        for (const user of users) {
          //每次调用add方法会返回一个对象 这里使用request接收 
          const request = store.add(user)
          request.onsuccess = function () {
            console.log(`${user.name}插入成功`)
          }
        }
        transaction.oncomplete = function () {
          console.log("添加操作全部完成")
        }
        break
      case 1:
        console.log("点击了查询")

        // 1.查询方式一(知道主键, 根据主键查询)
        // const request = store.get(102)
        // request.onsuccess = function(event) {
        //   console.log(event.target.result)
        // }

        // 2.查询方式二:
        // openCursor()获取一个游标 类似于指针 初始状态指向第一条数据 
        const request = store.openCursor()
        request.onsuccess = function (event) {
          //在event里面获取游标
          const cursor = event.target.result
          if (cursor) {
            if (cursor.key === 101) {
              console.log(cursor.key, cursor.value)
            } else {
              //调用continue使得游标指向下一条数据
              cursor.continue()
            }
          } else {
            console.log("查询完成")
          }
        }
        break
      case 2:
        console.log("点击了删除")
        const deleteRequest = store.openCursor()
        deleteRequest.onsuccess = function (event) {
          const cursor = event.target.result
          if (cursor) {
            if (cursor.key === 101) {
              //delete方法删除当前游标指向的数据
              cursor.delete()
            } else {
              cursor.continue()
            }
          } else {
            console.log("查询完成")
          }
        }
        break
      case 3:
        console.log("点击了修改")
        const updateRequest = store.openCursor()
        updateRequest.onsuccess = function (event) {
          const cursor = event.target.result
          if (cursor) {
            if (cursor.key === 101) {
              const value = cursor.value;
              value.name = "curry"
              cursor.update(value)
            } else {
              cursor.continue()
            }
          } else {
            console.log("查询完成")
          }
        }
        break
    }
  }
}