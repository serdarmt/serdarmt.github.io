<template>
    <v-container>
        <v-row>
            <v-col>
                <!-- Section: Introduction -->
                <section class="mb-8">
                    <v-subheader class="text-h5 font-weight-medium">Serdar's homepage</v-subheader>
                    <div class="d-flex align-center my-1">
                        <v-icon class="mr-2">mdi-calendar</v-icon>
                        <span>Mar 23, 2024</span>
                    </div>
                </section>
                
                <section class="mb-8">
                    <v-subheader class="text-h4 py-2 font-weight-medium">Hey There!</v-subheader>
                <p class="mt-3">
                    My name is Serdar and I am a software engineer based out of NYC. I currently work at Hoolii as a Full Stack Software Engineer.
                </p>
                <p class="mt-3">
                    I previously attended Columbia University where I completed by bachelor's in 2023 and currently working towards my master's at UT Austin, both in computer science.
                </p>
                <p class="mt-3">
                        You can reach me at <a class="text-decoration-none" href="mailto:sm5038@columbia.edu" >sm5038@columbia.edu</a>
                    </p>
                </section>

                <!-- Section: Education -->
                <section class="my-5">
                    <v-subheader class="text-h5 py-2 font-weight-medium">Education
                    </v-subheader>
                    <div>
                        <div class="education-entry my-2">
                            <span>Columbia University, GS '23 – </span>
                            <span>BA in Computer Science</span>
                        </div>
                        <div class="education-entry my-2">
                            <span>University of Texas at Austin, NS '25 – </span>
                            <span>MS in Computer Science</span>
                        </div>
                    </div>
                </section>

                
                <!-- Section: Experience -->
                <section class="my-7 d-flex-inline">
                    <v-subheader class="text-h5 font-weight-medium py-2"> Recent Experience</v-subheader>
          
                    <!-- Entry: Software Engineer at Hoolii -->
                    <div class="experience-entry my-2">
                        <div class="role-company">
                        Software Engineer @ Hoolii
                            <a :href="`https://hooliitracker.com`" target="_blank" class="company-logo-link ml-2">
                                <img :src="require('@/assets/hoolii-logo.png')" alt="Company Logo" class="company-logo">
                            </a>
                        </div>
                        <div class="date-location">Clearwater FL, 08/2023 – Present</div>
                        <ul>
                        <li>Develop CRM software using Vue.js, Node.js, Firebase backend, OAuth, Google Cloud Functions, and NoSQL database.</li>
                        <li>Integrate RESTful APIs, maintain and enhance product functionalities.</li>
                        </ul>
                    </div>

                    <!-- Entry: Competitive Programming Intern at ICPC -->
                    <div class="experience-entry my-7">
                        <div class="role-company">
                            Competitive Programming Intern @ ICPC
                            <a :href="`https://icpc.global`" target="_blank" class="company-logo-link ml-2">
                                <img :src="require('@/assets/icpc-logo.png')" alt="Company Logo" class="company-logo">
                            </a>
                        </div>
                        <div class="date-location">New York NY, 01/2024 – Present</div>
                        <ul>
                        <li>Develop advanced algorithms and collaborate in Agile team settings.</li>
                        <li>Enhance problem-solving efficiency and coding proficiency in Python and C++.</li>
                        </ul>
                    </div>

                    <!-- Entry: Full Stack Engineer Intern at Pelican Invests -->
                    <div class="experience-entry my-7">
                        <div class="role-company">
                        Full Stack Engineer Intern @ Pelican Invests
                            <a :href="`https://pelicaninvests.com`" target="_blank" class="company-logo-link ml-2">
                                <img :src="require('@/assets/pelican-logo.png')" alt="Company Logo" class="company-logo">
                            </a>
                        </div>
                        <div class="date-location">New York NY, 09/2023 – 11/2023</div>
                        <ul>
                            <li>Handled full-stack development: integrated Stripe for payments, Google OAuth, PostgreSQL, Bubble.io.</li>
                            <li>Used FullStory and Google analytics for optimizations.</li>
                        </ul>
                    </div>

                    <!-- Entry: Software Engineer Intern at Pelican Invests -->
                    <div class="experience-entry my-7">
                        <div class="role-company">
                        Software Engineer Intern @ Pelican Invests
                            <a :href="`https://pelicaninvests.com`" target="_blank" class="company-logo-link ml-2">
                                <img :src="require('@/assets/pelican-logo.png')" alt="Company Logo" class="company-logo">
                            </a>
                        </div>
                        <div class="date-location">New York NY, 09/2023 – 11/2023</div>
                        <ul>
                            <li>Led front-end development.</li>
                        </ul>
                    </div>
                </section>
                
                <!-- Section: Projects -->
                <section class="my-4">
                    <v-subheader class="text-h5 py-2 font-weight-medium">Projects</v-subheader>
                    <p>
                        Columbia University, GS'23 - Bachelor's in Computer Science
                    </p>
                    <p>
                        University of Texas at Austin, NS'25 - Master's in Computer Science
                    </p>

                </section>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'MainContent',
    data: () => ({
        lastModifiedDate: document.lastModifiedDate,
    }),
};
</script>

<style scoped>

.role-company {
  font-weight: 500; /* Adjust based on preference */
  font-size: 1.1em; /* Slightly larger font size for the role and company */
  margin-bottom: 4px; /* Space between role-company and date-location */
  text-align: left;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
}

.date-location {
  font-size: 0.9em; /* Smaller font size for date and location */
  color: #666; /* Subdued color for less emphasis */
  margin-bottom: 16px; /* Space between date-location and the list of responsibilities */
}

.experience-entry ul {
  list-style-type: disc;
  padding-left: 20px;
  margin-top: 8px;
}

.experience-entry li {
  text-align: left;
  margin-bottom: 8px;
  font-size: 0.95em; /* Adjust the font size for list items if needed */
}

.company-logo-link {
    display: inline-flex;
    align-items: center;
}

.company-logo {
    height: 20px;
    width: auto;
    border-radius: 10%;
}


@media (max-width: 768px) {
    .company-logo {
    height: 24px;
    width: auto;
    border-radius: 10%;
}
}


</style>