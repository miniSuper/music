// import jsonp from 'common/js/jsonp'
import { commonParams } from './config'
import axios from 'axios'

export function getToplist() {
  let url = '/api/toplist'
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

export function getMusicList(topid) {
  let url = '/api/musiclist'
  let data = Object.assign({}, commonParams, {
    topid,
    g_tk: 5381,
    uin: 0,
    format: 'json',
    notice: 0,
    platform: 'h5',
    needNewCode: 1,
    tpl: 3,
    page: 'detail',
    type: 'top'
  })
  return axios
    .get(url, {
      params: data
    })
    .then(res => Promise.resolve(res.data))
}
