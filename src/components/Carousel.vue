<template>
  <div>
    <v-carousel
      hide-delimiters 
      :show-arrows="false" 
      v-model="model"
      height="400"
    >
      <v-carousel-item v-for="(item, i) in items" :key="i">
        <v-row 
          class="fill-height"
          align="center"
          justify="center"
          eager
          >
          <v-col align='center' cols="12" sm="4">
            <v-card
              rounded='xl'
              height="300"
              width="300"
              elevation='5'
              @click="model++"
              :color='item.color'
            >
                <v-row class="pa-8 fill-height" align="center" justify='center' >
                  <div v-if="item.src !== '' " rounded='circle'>
                    <v-img
                      v-bind:src="require(`@/assets/${item.src}`)"
                      class="rounded-img mb-2"
                      max-height="200"
                      max-width="200"
                      eager
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
      <code class="d-none d-md-block">Press Enter...</code>
      <code class="d-md-none" @click="model++">Tap or Swipe...</code>
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
          src: 'me-compressed.jpeg',
        },
        {
          heading: "",
          msg: "And I would really like to be a Product Expert on your team for Think.Make.Start 2021!",
          color: "blue",
          src: '',
        },
        {
          heading: "Background",
          msg: "I am an electrical and computer engineer currently studying Neuroengineering.",
          color: "blue",
          src: '',
        },
        {
          heading: "Experience",
          msg: "One year of working experience as a software developer at an AI startup in South Africa",
          color: "blue",
          src: '',
        },
        {
          heading: "Approach",
          msg: "Generally, I aim for deep understanding and careful planning. However, I know that sometimes you just need to get the darn thing working! ",
          color: "blue",
          src: '',
        },
        {
          heading: "Expertise",
          msg: "Strong programming background, embedded system design, signal processing, deep learning, Neuroscience and (of course) problem solving.",
          color: "blue",
          src: '',
        },
        {
          heading: "Toolset",
          msg: "",
          color: "blue",
          src: 'logos.png',
        },
        {
          heading: "Plan",
          msg: "To leverage my technical knowledge, experience, and design thinking principles to iteratively map out and refine my team's brilliant idea.",
          color: "blue",
          src: '',
        },
        {
          heading: "Idea",
          msg: "You are going to have to wait and see ;)",
          color: "blue",
          src: '',
        },
        {
          heading: "That Is All",
          msg: "I hope that you enjoyed this sliding presentation I made. See you in March!",
          color: "green",
          src: '',
        },
        {
          heading: "",
          msg: "",
          color: "black",
          src: '',
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