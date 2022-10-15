function requestData(url, successCB, failterCB) {
  setTimeout(() => {
    if(url === "hhh") {
      let data = "请求成功"
      successCB(data)
    } else {
      let err = "请求失败"
      failterCB(err)
    }
  }, 2000)
}

function successCB(res) {
  console.log(res);
}

function failterCB(err) {
  console.log(err);
}

// requestData("123", successCB, failterCB)
requestData("hhh", successCB, failterCB)