<template>
  <v-container id="main" tag="main" style="padding-top: 2.5em;">
    <v-row>
      <v-col style="margin-bottom: 2.5em;">
        <h1>
          {{ about.title }}
        </h1>
        <br />
        <p>
          {{ about.content }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['about']),
  },
}
</script>
