<template>
  <div id="app">
    <div class="container">
      <ProfileSide class="profile-side"/>
      <MainContent class="main-content"/>
    </div>
  </div>

</template>

<script>
import ProfileSide from './components/views/ProfileSide.vue'
import MainContent from './components/views/MainContent.vue'

export default {
  name: 'App',
  components: {
    ProfileSide,
    MainContent,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.container {
  display: flex;
  min-height: 100vh;
}

.profile-side {
  width: 35%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}

.main-content {
  flex-grow: 1;
  margin-left: 35%;
  overflow-y: auto;
  height: 100vh;
}

.dark-mode {
  background-color: #242424;
  color: #fff;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
  .profile-side {
    position: relative;
    width: auto;
  }
  .main-content {
    margin-left: 0%;
  }
}
</style>