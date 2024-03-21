<template>
    <div class="profile-side">
        <img src="@/assets/portfolio.jpg" alt="Profile Picture" class="profile-pic">
        <h2>Serdar Mamadzhanov</h2>
        <h2 class="position">SWE @ hoolii</h2>
        <div class="social-links">
            <a href="" target="_blank"><i class="ci ci-linkedin ci-2xl"></i></a>
            <a href="" target="_blank"><i class="ci ci-github ci-2xl"></i></a>
        </div>
        <a href="" target="_blank" class="cv-link">CV</a>
        <p>Dark Mode</p>
        <ToggleSwitch :value="isDarkMode" @update:value="toggleDarkMode" />
    </div>
</template>

<script>
import ToggleSwitch from '../ui/buttons/ToggleSwitch.vue'

export default {
    name: 'ProfileSide',
    components: {
        ToggleSwitch // Registering the ToggleSwitch component for use
    },
    data() {
        return {
            isDarkMode: false
        };
    },
    methods: {
        toggleDarkMode(newValue) {
            this.isDarkMode = newValue;
            document.body.classList.toggle('dark-mode', this.isDarkMode);
        }
    }
}
</script>

<style scoped>
h2 {
    font-weight: normal;
    margin: 5px;
}

h2.position {
    color: #a2a2a2;
}

.profile-side {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    justify-content: center;
}

.profile-pic {
    border-radius: 50%;
    width: 150px;
    margin-bottom: 10px;
}

.social-links {
    margin: 10px 0;
    color: inherit;
    padding: 10px;
    display: flex;
    flex-direction: row;
    column-gap: 15px;
}

.cv-link {
    display: block;
    margin: 15px;
    text-decoration: none;
    font-size: large;
}

@media (max-width: 768px) {
    .profile-side {
        justify-content: flex-start;
        margin-top: 5%;
    }
}
</style>