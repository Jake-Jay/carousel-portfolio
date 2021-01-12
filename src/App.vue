<template>
  <v-app>
    <v-app-bar flat color='black'>
      <v-img
        :src="require('./assets/TMS_Logo.png')"
        contain
        height="40"
        />
    </v-app-bar>
    <v-main>
      <v-container >
        <Carousel/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Carousel from './components/Carousel.vue';

export default {
  name: 'App',

  components: {
    Carousel,
  },

  data: () => ({
    //
  }),
};
</script>
