<template>
  <div>
    <v-container>
      <v-card class="mx-auto">
        <v-app-bar light color="prof_background_3">
          <v-toolbar-title class="prof_txt_1--text"></v-toolbar-title>
        </v-app-bar>

        <v-container class="pa-2">
          <v-row>
            <v-col cols="8" md="4">
              <v-file-input
                name="archivo"
                label="Selecciona Archivo."
                outlined
                @change="onFileChange"
                accept=".csv"
              />
            </v-col>
            <v-col cols="4" md="2">
              <v-btn color="primary" @click="cargaArchivo">
                <v-icon>mdi-upload-outline</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-container>

    <v-container></v-container>
  </div>
</template>

<script>
// import { ApiFactory } from '../../../../services/api-factory'
//const CargaArchivoAperturaRepository = ApiFactory.get('cargaArchivoApertura')

//import uploadFile from '../../../../services/uploadFile';
import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',
   "Accept": "*/*",
   'Access-Control-Allow-Origin': '*',
}


export default {
  data: () => ({
    archivo: {},
    base64String: "",
    objRequest:{}
  }),
  methods: {
    async cargaArchivo() {

    

       axios.post('http://172.16.48.199:7080/mb/rest/aforemovil/archivoapertura/', this.objRequest, {
              headers: headers,
              mode: 'no-cors',
    }).then((response) => {
            console.log(response)
    })
    .catch((error) => {
            console.log(error)
        })
    },

    onFileChange(e) {
      if (e != null) {
        var nombreArchivo = e.name;
        var file = e;
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function() {
          console.log("success: ", reader.result);

          this.base64String = reader.result
            .replace("data:", "")
            .replace(/^.+,/, "");

          var request = {
            rqt: {
              nombreArchivo: this.base64String,
              archivoBase64: nombreArchivo
            }
          };


          this.objRequest = request;

          console.log("request: ", request);
        };
        reader.onerror = function(error) {
          console.log("Error: ", error);
          this.$s;
        };
      }
    }
  }
};
</script>

<style>
.bottom-padding {
  padding-bottom: 5%;
}
</style>