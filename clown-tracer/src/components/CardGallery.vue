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

      <v-col
        class="mb-5"
        cols="12">

        <h1> He belongs to {{group}}. </h1>
        <h1> He loves {{hobby}}. </h1>
      </v-col>

      <v-col class="text-center mb-5">
        <v-pagination
          v-model="page"
          :length="length"
          :total-visible="7"
          >

        </v-pagination>
      </v-col>



    </v-row>


  </v-container>
</template>

<script>

const img = '../static/img/clowns.jpg';

export default {
  computed: {
    imgPath: {
      get() {
        return img;
      }
    },

    name: {
      get() {
        return 'clown Name';
      }  
    },

    color: {
      get() {
        return 'red';
      }
    },

    hairColor: {
      get() {
        return 'red';
      }
    },

    cloth: {
      get() {
        return 'tradational';
      }
    },
    
    personality: {
      get() {
        return 'dangerous';
      }
    },

    group: {
      get() {
        return 'circls';
      }
    },

    hobby: {
      get() {
        return 'baseball';
      }
    }
  },

  data() {
    return {
      length: 15,
      page: 1,
    }
  }
};
</script>

<style>
</style>