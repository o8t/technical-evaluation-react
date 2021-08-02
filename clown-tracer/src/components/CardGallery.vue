<template>
  <v-container fluid fill-height>
    <v-row>
      <v-col cols="12" class="text-center">
        <v-card>
          <v-img
            max-height="150"
            max-width="250"
            :src="require('../static/img/clowns.jpg')">
          </v-img>
        </v-card>
      </v-col>

      <v-col class="mb-4">
        <h1>
          This Clown's name is {{name}}
        </h1>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h1> He has a {{color}} nose, {{hairColor}} hair. </h1>
        <h1> He wares a {{cloth}} clown cloth.</h1>
      </v-col>

      <v-col
        class="mb-5"
        cols="12">

        <h1> He's {{personality}}. </h1>

      </v-col>

      <v-col class="text-center mb-5">
        <v-pagination
          v-model="itemIndex"
          :length="listLength"
          :total-visible="7"
          @input="indexChange"
          >

        </v-pagination>
      </v-col>



    </v-row>


  </v-container>
</template>

<script>

const img = '../static/img/clowns.jpg';

export default {

  props: {
    clownItem: Object,
    listLength: Number,
    index: Number,
  },

  computed: {

    imgPath: {
      get() {
        return img;
      }
    },

    name: {
      get() {
        return this.clownItem.name;
      }  
    },

    color: {
      get() {
        return this.clownItem.attributes.appearance.nose;
      }
    },

    hairColor: {
      get() {
        return this.clownItem.attributes.appearance.hair;
      }
    },

    cloth: {
      get() {
        return this.clownItem.attributes.appearance.cloth;
      }
    },
    
    personality: {
      get() {
        return this.clownItem.attributes.personality;
      }
    },
  },

  data() {
    return {
      itemIndex: this.index,
      itemLength: this.listLength
    }
  },

  methods: {
    indexChange(value) {
      this.itemIndex = value;
      this.$emit('indexChanged', value-1);
    }
  }
};
</script>

<style>
</style>