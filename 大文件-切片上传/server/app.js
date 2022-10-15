const express = require('express')
const bodyParser = require('body-parser')
const uploader = require('express-fileupload')
const { extname, resolve } = require('path')
const { existsSync, appendFileSync, writeFileSync } = require('fs')

const ALLOW_TYPE = {
  'video/mp4': 'mp4',
  'audio/x-m4a': 'x-m4a',
  'image/jpeg': 'jpeg',
  'image/jpg': 'jpg'
}

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(uploader())

// 解决跨域
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-origin', '*')
  res.header('Access-Control-Allow-Methods', 'POST, GET')
  next()
})

app.post('/upload_file', (req, res) => {
  const { name, type, size, filename, uploadedSize } = req.body

  const { file } = req.files

  if (!file) {
    res.send({
      code: 999,
      msg: 'No file uploaded'
    })
    return
  }

  if (!ALLOW_TYPE[type]) {
    res.send({
      code: 996,
      msg: 'The type is not allowed for upload'
    })
    return
  }

  const fileName = filename + extname(name)
  const filePath = resolve(__dirname, './uploaded_temp/' + fileName)

  if(uploadedSize !== '0') {
    if(!existsSync(filePath)) {
      res.send({
        code: 1000,
        msg: 'No file exists'
      })
    }
    appendFileSync(filePath, file.data)

    res.send({
      code: 0,
      msg: 'Appended'
    })
    return
  }
  
  writeFileSync(filePath, file.data)

  res.send({
    code: 0,
    msg: 'File is created'
  })
})

const PORT = 8000
app.listen(PORT, (req, res) => {
  console.log('服务器8000端口启动成功')
})