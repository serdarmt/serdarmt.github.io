<template>
<v-container class="d-flex flex-inline">
    <v-row >
        <v-col cols="12" sm="6" md="4" lg="3" v-for="project in projects" :key="project.title">
            <v-card>
                <v-img v-if="project.imageUrl" :src="project.imageUrl" height="200px"></v-img>
                <v-card-title>{{ project.title }}</v-card-title>
                <v-card-text v-if="project.description">{{ project.description }}</v-card-text>
                <v-card-actions>
                    <v-btn text v-if="project.demoUrl" :href="project.demoUrl" target="_blank">Link</v-btn>
                    <v-btn text v-if="project.sourceUrl" :href="project.sourceUrl" target="_blank">Source</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
    name: 'ProjectsSection',
    data() {
        return {
            projects: [
                {
                    title: "Pelican Invests",
                    description: "Full Stack Development, React, PostreSQL, Stripe API",
                    imageUrl: '/pelicanwebsite.png',
                    demoUrl: 'https://pelicaninvests.com',
                    sourceUrl: '',
                },
                {
                    title: "Hoolii Tracker",
                    description: "Full Stack Development, Vue.js, NoSQL, Node.js",
                    imageUrl: '/hooliiwebsite.png',
                    demoUrl: 'https://hooliitracker.com',
                    sourceUrl: '',
                },
                {
                    title: "OptiStaff API",
                    description: "Backend Development, Express.js, MongoDB, Node.js",
                    imageUrl: '',
                    demoUrl: '',
                    sourceUrl: 'https://github.com/serdarmt/optistaff',
                },
                {
                    title: "Multi-Server in C",
                    description: "Backend Development, C, Linux, Apache, Multithreaded",
                    imageUrl: '',
                    demoUrl: '',
                    sourceUrl: 'https://github.com/serdarmt/cs4118-sp23-hw3-tt',
                },
                {
                    title: "More Projects",
                    description: '',
                    imageUrl: '',
                    demoUrl: 'https://github.com/serdarmt/',
                    sourceUrl: '',
                },
                // more projs here.
            ],
        };
    },
};

</script>

<style scoped>
/* as needed */
</style>