<template>
  <v-content color="prof_background_3">
    <div id="core-view">
      <v-fade-transition >
        <router-view />
      </v-fade-transition>
    </div>
  </v-content>
</template>

<script>
  export default {
    name: 'CoreView',

    metaInfo () {
      return {
        title: 'MIT Afiliacion Portal'
      }
    }
  }
</script>
