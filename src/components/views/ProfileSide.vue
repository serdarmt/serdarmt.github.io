<template>
    <v-container class="profile-side d-flex flex-column align-center my-5">
        <!-- Profile Avatar/Image -->
        <v-avatar :image="require('@/assets/profilepic.jpg')" size="150" class="my-3">
        </v-avatar>

        <!-- Full Name -->
        <div class="text-h5 font-weight-regular my-2 mb-2 text-no-wrap">Serdar Mamadzhanov</div>

        <!-- Position -->
        <div class="text-h6 text-grey font-weight-regular mb-5">SWE @ Hoolii</div>
        
        <!-- Social Links -->
        <v-row justify="center" class="my-3 ga-3">
            <v-btn icon :href="linkedinLink" target="_blank">
                <v-icon size="24">mdi-linkedin</v-icon>
            </v-btn>
            <v-btn icon :href="githubLink" target="_blank">
                <v-icon size="24">mdi-github</v-icon>
            </v-btn>
        </v-row>

        <!-- CV Link -->
        <v-btn text :href="cvLink" target="_blank" class="my-5 mb-14">
        CV
        </v-btn>

        <p> <v-icon size="18px">mdi-copyright</v-icon> 2024</p>

        <!-- Dark Mode Toggle -->
        <v-switch 
            label="Dark Mode" 
            @change="toggleTheme"
            color="indigo-darken-3"
            class="my-1"
        ></v-switch>
        <!-- <v-btn @click="toggleTheme">toggle theme</v-btn> -->
    </v-container>
</template>

<script>
import { useTheme } from 'vuetify';

export default {
  name: 'ProfileSide',
  setup() {
    const theme = useTheme();
    
    function toggleTheme() {
        theme.global.name.value = theme.global.current.value.dark ? 'light': 'dark';
    }

    return {
      // Your existing data properties
      linkedinLink: "https://www.linkedin.com/in/serdarmt/",
      githubLink: "https://github.com/serdarmt",
      cvLink: '/serdar_resume_022824.pdf',
      toggleTheme,
    };
  },
};
</script>

<style scoped>
.profile-side {
    /* max-width: 320px; */
    min-width: 300px;
}
</style>
