<template>
  <v-app>
    <v-container fluid class="pa-0">
      <v-row id="header" tag="header">
        <v-col class="text-center pa-0" style="height: 200px;">
          <v-btn class="logo pa-0" width="200px" height="200px" text to="/">
            <v-col class="pa-0">
              <v-img
                width="200px"
                height="130px"
                :src="`${baseUrl}${globals.header.logo.path}`"
              />
              <v-img
                width="200px"
                height="70px"
                :src="`${baseUrl}${globals.header.bbb.path}`"
              />
            </v-col>
          </v-btn>
          <app-nav-bar @toggle-nav-drawer="toggleDrawer = !toggleDrawer" />
          <app-nav-drawer
            :globals="globals"
            :toggle-drawer="toggleDrawer"
            @close-nav-drawer="toggleDrawer = false"
          />
        </v-col>
      </v-row>
      <v-row>
        <nuxt />
      </v-row>
      <app-footer />
    </v-container>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import AppNavBar from '~/components/AppNavBar.vue'
import AppNavDrawer from '~/components/AppNavDrawer.vue'
import AppFooter from '~/components/AppFooter.vue'

export default {
  components: {
    AppNavBar,
    AppNavDrawer,
    AppFooter,
  },
  data() {
    return {
      toggleDrawer: false,
    }
  },
  computed: {
    ...mapGetters(['globals']),
    baseUrl() {
      return process.env.BASE_URL
    },
  },
  mounted() {
    this.$store.dispatch('getGlobals', 'globals')
    this.$store.dispatch('getNav', 'nav')
    this.$store.dispatch('getPages', 'page')
  },
}
</script>

<style>
.clearfix:before,
.clearfix:after,
.dl-horizontal dd:before,
.dl-horizontal dd:after,
.container:before,
.container:after,
.container-fluid:before,
.container-fluid:after,
.row:before,
.row:after,
.form-horizontal .form-group:before,
.form-horizontal .form-group:after,
.btn-toolbar:before,
.btn-toolbar:after,
.btn-group-vertical > .btn-group:before,
.btn-group-vertical > .btn-group:after,
.nav:before,
.nav:after,
.navbar:before,
.navbar:after,
.navbar-header:before,
.navbar-header:after,
.navbar-collapse:before,
.navbar-collapse:after,
.pager:before,
.pager:after,
.panel-body:before,
.panel-body:after,
.modal-header:before,
.modal-header:after,
.modal-footer:before,
.modal-footer:after {
  content: '';
  display: table;
}
.clearfix:after,
.dl-horizontal dd:after,
.container:after,
.container-fluid:after,
.row:after,
.form-horizontal .form-group:after,
.btn-toolbar:after,
.btn-group-vertical > .btn-group:after,
.nav:after,
.navbar:after,
.navbar-header:after,
.navbar-collapse:after,
.pager:after,
.panel-body:after,
.modal-header:after,
.modal-footer:after {
  clear: both;
}
.center-block {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.img-circle {
  border-radius: 50%;
}
</style>
