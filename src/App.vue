<template>
  <v-app>
    <v-main>
      <v-container fluid class="fill-height pa-0">
        <v-row no-gutters>
          <v-col cols="12" md="4" class="pa-2">
            <ProfileSide/>
          </v-col>
          <v-col cols="12" md="8" class="pa-1">
            <v-container class="overflow-y-auto" style="max-height: 100vh;">
              <MainContent/>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import ProfileSide from './components/views/ProfileSide.vue'
import MainContent from './components/views/MainContent.vue'

export default {
  name: 'App',
  components: {
    ProfileSide,
    MainContent,
  },

  data: () => ({
    //
  }),
}
</script>

<style>
/* Global styles can go here. Scoped styles should be used within individual components. */

/* body {
  font-family: 'Merriweather', serif;
  font-style: normal;
  font-size: medium;
  font-size: 14pt;
  color:lightslategrey;
} */

/* Set Raleway for headings */
/* h1, h2, h3, h4, h5, h6 {
  font-family: 'Raleway', sans-serif;
} */

::-webkit-scrollbar {
  display: none;
}
</style>