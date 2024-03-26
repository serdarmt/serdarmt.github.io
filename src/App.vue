<template>
  <v-app>
    <v-main>
      <v-container fluid class="fill-height pa-0">
        <v-row no-gutters>
          <v-col cols="12" md="3" class="pa-5">
            <ProfileSide/>
          </v-col>
          <v-col cols="12" md="9" class="pa-2 pl-5">
            <v-container class="main-content" style="max-height: 100vh;">
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

.main-content {
  overflow-y: auto;
}


@media (max-width: 768px){
  .main-content {
    overflow-y: visible;
    padding-left: 0;
  }
}

::-webkit-scrollbar {
  display: none;
}
</style>