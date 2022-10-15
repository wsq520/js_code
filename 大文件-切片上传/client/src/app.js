import {
  UPLOAD_MSG,
  ALLOW_TYPE,
  CHUNK_SIZE,
  API
} from './config.js'

(() => {
  const uploadProgress = document.querySelector('#uploadProgress')
  const fileUploader = document.querySelector('#fileUploader')
  const msgEl = document.querySelector('#msg')
  const btnEl = document.querySelector('#btn')

  let uploadedSize = 0
  let uploadedRes = null

  const init = () => {
    bindEvent()
  }

  function bindEvent() {
    btnEl.addEventListener('click', uploadFile, false)
  }

  async function uploadFile() {
    console.log(fileUploader.files)
    const file = fileUploader.files[0]

    // 判断是否选择了要上传的文件
    if (!file) {
      msgEl.innerHTML = UPLOAD_MSG['NO_FILE']
      return
    }
    // 判断该文件类型是否被支持
    if (!ALLOW_TYPE[file.type]) {
      msgEl.innerHTML = UPLOAD_MSG['INVALID_TYPE']
    }

    // 解构出文件名字 类型 大小
    const { name, type, size } = file
    // 创建一个新的文件名
    const filename = new Date().getTime() + '_' + name
    uploadProgress.max = size
    msgEl.innerHTML = ''

    while (uploadedSize < size) {
      console.log('已经上传的数据:', uploadedSize)
      const fileChunk = file.slice(uploadedSize, uploadedSize + CHUNK_SIZE)
      const formData = createFormData({ name, type, size, filename, uploadedSize, file: fileChunk })

      try {
        uploadedRes = await axios.post(API.UPLOAD_FILE, formData)
        console.log(uploadedRes)
      } catch (e) {
        console.log(e)
        msgEl.innerHTML = UPLOAD_MSG['UPLAOD_FAILED'] + e.message
        return
      }

      uploadedSize += fileChunk.size
      uploadProgress.value = uploadedSize
    }

    msgEl.innerHTML = UPLOAD_MSG['UPLOAD_SUCCESS']
    // fileUploader.value = null
  }

  function createFormData({
    name, type, size, filename, uploadedSize, file
  }) {
    const fd = new FormData()
    fd.append('name', name)
    fd.append('type', type)
    fd.append('size', size)
    fd.append('filename', filename)
    fd.append('uploadedSize', uploadedSize)
    fd.append('file', file)
    return fd
  }

  init()
})()