<template>
  <div>
    <v-carousel
      hide-delimiters 
      :show-arrows="false" 
      v-model="model"
    >
      <v-carousel-item v-for="(item, i) in items" :key="i">
        <v-row 
          class="fill-height"
          align="center"
          justify="center"
          >
          <v-col align='center' cols="12" sm="4">
            <v-card
              rounded='xl'
              height="300"
              width="300"
              :color='item.color'
              elevation='5'
              :src='item.src'
            >
                <v-row class="pa-8 fill-height" align="center" justify='center' >
                  <div v-if="item.src !== '' " rounded='circle'>
                    <v-img
                      v-bind:src="require(`@/assets/${item.src}`)"
                      class="rounded-img mb-2"
                      max-height="200"
                      max-width="200"
                    >
                    </v-img>
                  </div>
                  <h1 v-if="item.heading !== '' ">{{item.heading}}</h1>

                  <span class="overline" v-if="item.message !== '' ">{{item.msg}}</span>

                </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-carousel-item>
    </v-carousel>
    <v-row justify="center">
      <code @click="model++">Press Enter...</code>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: 0,
      count: 0,
      items: [
        {
          heading: "Hello!",
          msg: "",
          color: "green",
          // src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          src: '',
        },
        {
          heading: "How are you?",
          msg: "",
          color: "blue",
          src: '',
        },
        {
          heading: "I'm Jake",
          msg: "",
          color: "blue",
          src: 'me.jpeg',
        },
        {
          heading: "",
          msg: "And I would really like to be on your team for Think.Make.Start 2021!",
          color: "blue",
          src: '',
        },
        {
          heading: "My Background",
          msg: "I am an electrical and computer engineer currently studying Neuroengineering.",
          color: "blue",
          src: '',
        },
        {
          heading: "My Approach",
          msg: "Generally, I aim for deep understanding and careful planning. However, I know that there are times when you just need to get the darn thing working! ",
          color: "blue",
          src: '',
        },
        {
          heading: "My Expertise",
          msg: "Strong programming background, embedded system design, signal processing, deep learning, Neuroscience and (of course) problem solving.",
          color: "blue",
          src: '',
        },
        {
          heading: "My toolset",
          msg: "",
          color: "blue",
          src: 'logos.png',
        },
      ],
      display: true,
    };
  },
  methods: {
    next() {
      this.model++;
    }
  },
  mounted() {
    this._keyListener = function(e) {
      if (e.key === "Enter" ) {
        e.preventDefault(); // present "Save Page" from getting triggered.

        this.next();
      }
    };

    document.addEventListener('keydown', this._keyListener.bind(this));
  },
};
</script>
<style scoped>

.rounded-img {
  border-radius: 100%;
}
</style>