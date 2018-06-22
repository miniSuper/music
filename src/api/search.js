// import jsonp from 'common/js/jsonp'
import { commonParams } from './config'
import axios from 'axios'

export function getHotKey() {
  let url = '/api/hotkey'
  let data = Object.assign({}, commonParams, {
    g_tk: 5381,
    uin: 0,
    format: 'json',
    notice: 0,
    platform: 'h5',
    needNewCode: 1
  })
  return axios
    .get(url, {
      params: data
    })
    .then(res => {
      return Promise.resolve(res.data)
    })
}

export function search(query, page, zhida, perpage) {
  let url = 'api/search'
  let data = Object.assign({}, commonParams, {
    w: query,
    p: page,
    n: perpage,
    perpage: perpage,
    catZhida: zhida ? 1 : 0,
    g_tk: 5381,
    uin: 0,
    format: 'json',
    notice: 0,
    platform: 'h5',
    needNewCode: 1,
    zhidaqu: 1,
    t: 0,
    flag: 1,
    ie: 'utf-8',
    sem: 1,
    aggr: 0,
    remoteplace: 'txt.mqq.all'
  })
  return axios
    .get(url, {
      params: data
    })
    .then(res => {
      return Promise.resolve(res.data)
    })
}
