<template>
      <v-row align="center" justify="center">
        <h1  class="display-2 font-weight-thin mb-4 inicio-txt" color="darkish-blue" >{{ mensaje }}</h1>
        <h4 class="subheading inicio-txt">{{ system }}</h4>
      </v-row>
</template>

<script>
export default {
  data: () => ({
    mensaje: "Bienvenido",
    system : 'MIT Afiliacion'
  })
};
</script>

<style>
.inicio-txt{

  color: #0181c4 !important ;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif !important;

}
</style>
