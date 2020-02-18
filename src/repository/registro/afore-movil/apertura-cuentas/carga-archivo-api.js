import ApiWS from '../../../../services/api-ws'

const resource = '/rest/aforemovil/archivoapertura'
export default {
  uploadFile(request) {
    return ApiWS.post(`${resource}`, request)
  },
}
