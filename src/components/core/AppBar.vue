<template>
  <v-app-bar id="core-app-bar" absolute app color="transparent" flat height="88">
    <v-toolbar-title class="tertiary--text font-weight-light align-self-center" id="header-bar">
      <v-btn color="prof_txt_1" v-if="responsive"  icon @click.stop="onClick">
        <v-icon>mdi-view-list</v-icon>
      </v-btn>
      <span class="sn-fco-font">{{ title }}</span>
    </v-toolbar-title>

    <v-spacer />

    <v-toolbar-items>
      <v-row align="center" class="mx-0">
        <v-btn icon to="/">
          <v-icon color="prof_txt_1">mdi-view-dashboard</v-icon>
        </v-btn>
      </v-row>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
// Utilities
import { mapMutations } from "vuex";

export default {
  data: () => ({
    notifications: [
      "Mike, John responded to your email",
      "You have 5 new tasks",
      "You're now a friend with Andrew",
      "Another Notification",
      "Another One"
    ],
    title: null,
    responsive: false
  }),

  watch: {
    $route(val) {
      this.title = val.name;
    }
  },

  mounted() {
    this.onResponsiveInverted();
    window.addEventListener("resize", this.onResponsiveInverted);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResponsiveInverted);
  },

  methods: {
    ...mapMutations("app", ["setDrawer", "toggleDrawer"]),
    onClick() {
      this.setDrawer(!this.$store.state.app.drawer);
    },
    onResponsiveInverted() {
      if (window.innerWidth < 991) {
        this.responsive = true;
      } else {
        this.responsive = false;
      }
    }
  }
};
</script>

<style>
/* Fix coming in v2.0.8 */
#core-app-bar {
  width: auto;
}

#core-app-bar a {
  text-decoration: none;
}
.sn-fco-font {
  font-family: -apple-system, BlinkMacSystemFont, sans-serif !important;
  color: #0181c4 ;
}

</style>
