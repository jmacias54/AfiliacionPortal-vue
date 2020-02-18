<template>
  <div>
    <v-container>
      <v-card class="mx-auto">
        <v-app-bar light color="prof_background_3">
          <v-toolbar-title class="prof_txt_1--text">Busqueda</v-toolbar-title>
        </v-app-bar>

        <v-container class="pa-2">
          <v-row>
            <v-col cols="8" md="4">
              <v-text-field label="CURP" outlined />
            </v-col>
            <v-col cols="4" md="2">
              <v-btn color="primary">
                <v-icon>mdi-magnify</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-container>
    <v-container class="bottom-padding">
      <v-divider />
      <v-card>
        <v-app-bar light color="prof_background_3">
          <v-toolbar-title class="prof_txt_1--text">Bit&aacute;cora</v-toolbar-title>
        </v-app-bar>

        <v-container class="pa-2">
          <v-row justify="center">
            <v-col cols="12">
              <v-card>
                <v-data-table :items="lista" :items-per-page="5" light fixed-header :headers="headers">
                  
                </v-data-table>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-container>
    <v-container>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    headers: [
      {
        sortable: true,
        text: "#",
        value: "numItem"
      },
      {
        sortable: false,
        text: "Asesor",
        value: "asesor"
      },
      {
        sortable: true,
        text: "Fecha",
        value: "fecha"
      },
      {
        sortable: false,
        text: "CURP",
        value: "curp"
      },
      {
        sortable: false,
        text: "Medio Autenticaci&oacute;n",
        value: "medio_autenticacion"
      }
    ],
    lista: [
      {
        numItem: "22",
        asesor: "Giselle Lopez",
        fecha: "02/09/2019",
        curp: "pmomdoimodp",
        medio_autenticacion: "Login"
      },
      {
        numItem: "30",
        asesor: "Key Lopez",
        fecha: "02/09/2019",
        curp: "pmomdoimodp",
        medio_autenticacion: "Login"
      },
      {
        numItem: "29",
        asesor: "JA Macias",
        fecha: "02/09/2019",
        curp: "pmomdoimodp",
        medio_autenticacion: "Login"
      },
      {
        numItem: "4",
        asesor: "Lukas Macias",
        fecha: "01/04/2015",
        curp: "pmomdoimodp",
        medio_autenticacion: "Login"
      },
      {
        numItem: "12",
        asesor: "Tomas E. Brady Jr.",
        fecha: "16/12/2018",
        curp: "pmomdoimodp",
        medio_autenticacion: "Login"
      },
      {
        numItem: "75",
        asesor: "Vince Wilfork",
        fecha: "02/09/2019",
        curp: "pmomdoimodp",
        medio_autenticacion: "Login"
      }
    ]
  })
};
</script>

<style>
th {
  color: #ea7403 !important;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif !important;

}

td{
  color: #98a0a8 !important;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif !important;

}



</style>