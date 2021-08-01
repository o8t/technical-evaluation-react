<template>
  <v-container fill-height fluid>
      <v-navigation-drawer 
        v-model="drawer" 
        width="400" 
        fixed
        temporary
        style="overflow-y: auto"
        >
          <v-list-item class="px-2">
            <v-autocomplete
              v-model="value"
              :items="clownProps"
              chips
              label="Filled"
            >
            </v-autocomplete>
          </v-list-item>
          <v-list>
            <v-list-item-group v-model="model">
              <v-list-item v-for="(item, i) in clownitems" :key="i">
                <v-list-item-icon> </v-list-item-icon>
                <v-list-item-content v-text="item.name"> </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
      </v-navigation-drawer>

      <v-container>
        <card-gallery> </card-gallery>
      </v-container>
      
  </v-container>

</template>

<script>
import CardGallery from "./CardGallery.vue";
import { getClowns, getClownsProps } from "../api/clownInfo.js";

export default {
  components: {
    CardGallery,
  },

  props: {
    navDrawer: Boolean,
  },

  computed: {

    drawer: {
      get() {
        return this.navDrawer;
      },

      set(value) {
        this.$emit('drawerChange', value);
      }
    },

    clownitems: {
      get() {
        const clowns = getClowns();
        console.log("clowns is: ", clowns);
        return clowns;
      },
    },

    clownProps: {
      get() {
        const res = getClownsProps();
        console.log("clown pros is: ", res);
        return res;
      },
    },
  },

  data() {
    return {
      value: null,
      model: 1,
    };
  },

  methods: {
  }
};
</script>

<style>
.navigation-com {
  height: 100%;
}
</style>