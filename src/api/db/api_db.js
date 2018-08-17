import request from '@/utils/request';

/**
 * 获取数据库文本检索列表
 * @param params
 * @returns {Promise<AxiosResponse<any>>}
 */
export function getDBTextSearchList(param) {
  return request({
    url: '/getDBTextSearchList',
    method: 'get',
    params: param
  })
}
/**
 * 获取数据库树
 * @param params
 * @returns {Promise<AxiosResponse<any>>}
 */
export function getDBTree(param) {
  return request({
    url: '/getDBTree',
    method: 'get',
    params: param
  })
}