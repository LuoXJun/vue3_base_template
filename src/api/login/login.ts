import request from '@/utils/request/index'

// 异常行为预警和监管信息提示列表
export const codeIndex = () => {
  return request.get(`/credit/outerApi/bizMoHealthEnt/codeIndex`)
}
// 获取标签列表
export const loginApi = (data: any) => {
  return request.post(`/marketServer/sys/marketLogin`, data)
}
