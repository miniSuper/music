import { commonParams, ERR_OK } from 'api/config'
import axios from 'axios'
export function getLyric(mid) {
  const url = '/api/lyric'
  const data = Object.assign({}, commonParams, {
    songmid: mid,
    platform: 'yqq',
    loginUin: 0,
    hostUin: 0,
    pcachetime: +new Date(),
    format: 'json'
  })
  return axios
    .get(url, {
      params: data
    })
    .then(res => {
      return Promise.resolve(res.data)
    })
}

export function getSongUrl(mid) {
  // 注意  这里的url本身就带有  C400
  let url = 'http://dl.stream.qqmusic.qq.com/C400'
  let guid = 684251952
  let uin = 0
  let fromtag = 66
  // console.log('getSongUrl')
  return new Promise(function(resolve, reject) {
    getVkey(mid).then(res => {
      if (res.code === ERR_OK) {
        let vkey = res.data.items[0].vkey
        resolve({
          code: 0,
          url: `${url}${mid}.m4a?vkey=${vkey}&guid=${guid}&uin=${uin}&fromtag=${fromtag}`
        })
      } else {
        resolve({
          code: 1,
          error: "can't not get vKey"
        })
      }
    })
  })
}

function getVkey(mid) {
  const url = '/api/getCurrentVkey'
  const filename = `C400${mid}.m4a`
  const data = Object.assign({}, commonParams, {
    loginUin: 0,
    hostUin: 0,
    uin: 0,
    needNewCode: 0,
    platform: 'yqq',
    guid: 684251952,
    cid: 205361747,
    format: 'json',
    songmid: mid,
    filename: filename
  })

  return axios
    .get(url, {
      params: data
    })
    .then(res => {
      return Promise.resolve(res.data)
    })
}
