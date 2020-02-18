import reqService from '@/services/index';


export default {
     upload(data) {
        return new Promise((resolve) => {
          reqService({ path: '/rest/aforemovil/archivoapertura', method: 'POST', data })
            .then((response) => {
              resolve(response);
            });
        });
      }
}

