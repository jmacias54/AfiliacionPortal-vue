<template>
  <v-content color="prof_background_3">
    <v-container>
      <v-card class="mx-auto">
        <v-app-bar light color="prof_background_3">
          <v-toolbar-title class="prof_txt_1--text">Login</v-toolbar-title>
        </v-app-bar>

        <v-container class="pa-2">
          <v-row>
            <v-col cols="8" md="4">
              <v-text-field label="Usuario" outlined />
            </v-col>
            <v-col cols="8" md="4">
              <v-text-field label="Password" outlined />
            </v-col>
            
          </v-row>
           <v-row>
            <v-col cols="4" md="2">
              <v-btn color="primary">
                <v-icon>mdi-magnify</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-container>
  </v-content>
</template>

<script>
  export default {
    name: 'Login',

    metaInfo () {
      return {
        title: 'Login'
      }
    }
  }
</script>
