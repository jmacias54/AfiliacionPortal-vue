<template>
  <v-navigation-drawer
    id="app-drawer"
    :mini-variant.sync="mini"
    v-model="inputValue"
    light
    app
    floating
    mobile-break-point="991"
    persistent
    width="260"
  >
    <template v-slot:img="attrs">
      <v-img v-bind="attrs" gradient="to top, rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)" />
    </template>

    <v-list-item two-line>
      <v-list-item-avatar color="white">
        <v-img
          src="../../assets/prof-ico.png"
          height="34"
          contain
          @click.stop="mini = !mini"
        />
      </v-list-item-avatar>

      <v-list-item-title class="title">
        <v-img src="../../assets/profuturo.png" height="34" @click.stop="mini = !mini" />
      </v-list-item-title>
    </v-list-item>

    <v-divider class="mx-3 mb-3" />

    <!-- inicio traspasos -->
    <v-list>
      <v-list-group>
        <template v-slot:activator>
          <v-list-item class="item sn-fco-font">
            <v-list-item-icon>
              <v-icon color="prof_txt_1">mdi-transfer</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Traspaso</v-list-item-title>
          </v-list-item>
        </template>

        <v-list-group no-action sub-group>
          <template v-slot:activator>
            <v-list-item-content class="item display-2 font-weight-thin sn-fco-font">
              <v-list-item-title>Produce Traspaso</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item class="item display-2 font-weight-thin">
            <v-list-item-title>Sub-menu</v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-list-group no-action sub-group>
          <template v-slot:activator>
            <v-list-item class="item display-2 font-weight-thin">
              <v-list-item-title>Traspasos Pro</v-list-item-title>
            </v-list-item>
          </template>

          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content class="item display-2 font-weight-thin">
                <v-list-item-title>
                  Autenticaci&oacute;n
                  <v-icon color="prof_txt_1"></v-icon>
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item to="/traspaso-pro/autenticacion/inhabilitacion" class="item display-2 font-weight-thin">
              <v-list-item-title>
                inhabilitaci&oacute;n 
                <v-icon color="prof_txt_1">mdi-account-off-outline</v-icon> 
              </v-list-item-title>  
            </v-list-item>
          </v-list-group>
        </v-list-group>
      </v-list-group>
    </v-list>
      <v-divider class="mx-3 mb-3" />
    <v-list>
      <v-list-group>
        <template v-slot:activator>
          <v-list-item class="item sn-fco-font">
            <v-list-item-icon>
              <v-icon color="prof_txt_1">mdi-file-settings-variant-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Registro</v-list-item-title>
          </v-list-item>
        </template>

        <v-list-group no-action sub-group>
          <template v-slot:activator>
            <v-list-item-content class="item display-2 font-weight-thin sn-fco-font">
              <v-list-item-title>Produce Registro</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item class="item display-2 font-weight-thin">
            <v-list-item-title>Sub-menu</v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-list-group no-action sub-group>
          <template v-slot:activator>
            <v-list-item class="item display-2 font-weight-thin">
              <v-list-item-title>Afore M&oacute;vil</v-list-item-title>
            </v-list-item>
          </template>

          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content class="item display-2 font-weight-thin">
                <v-list-item-title>
                   Apertura de Cuentas 
                  <v-icon color="prof_txt_1"></v-icon>
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item to="/afore-movil/apertura-cuentas/carga-archivo" class="item display-2 font-weight-thin">
              <v-list-item-title>Carga de Archivo <v-icon color="prof_txt_1">mdi-file-upload-outline</v-icon> </v-list-item-title>

              
            </v-list-item>
          </v-list-group>
        </v-list-group>
      </v-list-group>
    </v-list>
    <!-- fin traspasos -->
  </v-navigation-drawer>
</template>

<script>
// Utilities
import { mapMutations, mapState } from "vuex";

export default {
  props: {
    opened: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    mini: true
  }),

  computed: {
    ...mapState("app", ["image", "color"]),
    inputValue: {
      get() {
        return this.$store.state.app.drawer;
      },
      set(val) {
        this.setDrawer(val);
      }
    }
  },

  methods: {
    ...mapMutations("app", ["setDrawer", "toggleDrawer"])
  }
};
</script>

<style lang="css" scoped>
.icon {
  color: #0181c4 !important;
}
.item {
  color: #0181c4 !important;
  caret-color: #004b8d !important;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif !important;
}

.item :selection {
  color: #0181c4 !important;
  background-color: white !important;
  text-shadow: none;
}

.item:not(.item--active):not(.item--disabled) {
  color: #0181c4 !important;
}


</style>