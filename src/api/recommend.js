import jsonp from 'common/js/jsonp'
import { commonParams, options } from './config'
import axios from 'axios'
export function getRecommend() {
  const url =
    'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uni: 0,
    needNewCode: 1
  })
  return jsonp(url, data, options)
}
export function getDiscList() {
  const url = '/api/getDiscList'

  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
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

export function getSongList(disstid) {
  // let url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'
  let url = '/api/songlist'
  const data = Object.assign({}, commonParams, {
    disstid,
    type: 1,
    json: 1,
    utf8: 1,
    onlysong: 0,
    format: 'json',
    g_tk: 5381,
    loginUin: 0,
    hostUin: 0,
    notice: 0,
    platform: 'yqq',
    needNewCode: 0
  })
  // return jsonp(url, data, options)
  return axios
    .get(url, {
      params: data
    })
    .then(res => {
      return Promise.resolve(res.data)
    })
}

// export function getAllList() {
//   const url = '/api/getAllList'
//   const data = Object.assign({}, commonParams, {
//     platform: 'yqq',
//     loginUin: 0,
//     hostUin: 0,
//     needNewCode: 0,
//     rnd: Math.random(),
//     format: 'jsonp',
//     data: {
//       comm: { ct: 24 },
//       category: {
//         method: 'get_hot_category',
//         param: { qq: '' },
//         module: 'music.web_category_svr'
//       },
//       recomPlaylist: {
//         method: 'get_hot_recommend',
//         param: { async: 1, cmd: 2 },
//         module: 'playlist.HotRecommendServer'
//       },
//       playlist: {
//         method: 'get_playlist_by_category',
//         param: { id: 8, curPage: 1, size: 40, order: 5, titleid: 8 },
//         module: 'playlist.PlayListPlazaServer'
//       },
//       new_song: {
//         module: 'QQMusic.MusichallServer',
//         method: 'GetNewSong',
//         param: { type: 0 }
//       },
//       new_album: {
//         module: 'music.web_album_library',
//         method: 'get_album_by_tags',
//         param: {
//           area: 1,
//           company: -1,
//           genre: -1,
//           type: -1,
//           year: -1,
//           sort: 2,
//           get_tags: 1,
//           sin: 0,
//           num: 40,
//           click_albumid: 0
//         }
//       },
//       toplist: {
//         module: 'music.web_toplist_svr',
//         method: 'get_toplist_index',
//         param: {}
//       },
//       focus: {
//         module: 'QQMusic.MusichallServer',
//         method: 'GetFocus',
//         param: {}
//       }
//     }
//   })
//   return axios
//     .get(url, {
//       params: data
//     })
//     .then(res => {
//       return Promise.resolve(res.data)
//     })
// }
