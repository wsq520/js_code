const BASE_URL = 'http://localhost:8000/'

export const UPLOAD_MSG = {
  'NO_FILE': '请选择文件',
  'INVALID_TYPE': '不支持该类型文件的上传',
  'UPLAOD_FAILED': '上传失败',
  'UPLOAD_SUCCESS': '上传成功'
}

export const ALLOW_TYPE = {
  'video/mp4': 'mp4',
  'audio/x-m4a': 'x-m4a',
  'image/jpeg': 'jpeg',
  'image/jpg': 'jpg'
}

export const CHUNK_SIZE = 64 * 1024

export const API  = {
  UPLOAD_FILE: BASE_URL + 'upload_file'
}