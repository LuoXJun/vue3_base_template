import { ElMessage } from 'element-plus'
import BaseRequest from './base_request'
import { TIME_OUT, BASE_URL } from './config/index'
const scCode = ['0', '200', '000000']

const request = new BaseRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  isLoading: true,
  interceptors: {
    requestIntercepter: (config) => {
      return config
    },

    requestIntercepterCatch: (err) => {
      if (err.request) {
        ElMessage.error(err.request)
      }
      return Promise.reject(err)
    },

    responseIntercepter: (res) => {
      if (res.request.responseType == 'blob') return res
      if (scCode.includes(String(res.data.code))) {
        // ElMessage.success(res.data.message ?? res.data.msg)
      } else {
        ElMessage.warning(res.data.message ?? res.data.msg)
        throw new Error()
      }
      return res
    },

    responseIntercepterCatch: (err) => {
      switch (err.status) {
        case 404:
          ElMessage.error('404 notFound')
          break
        default:
          ElMessage.error(err.data?.message ?? err.data?.msg)
      }
      throw new Error()
    }
  }
})

export default request
