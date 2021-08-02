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
              label="Find the clown"
              @change="changeFilters"
            >
            </v-autocomplete>
          </v-list-item>
          <v-list>
            <v-list-item-group v-model="model" >
              <v-list-item v-for="(item, i) in allItems" :key="i">
                <v-list-item-icon> </v-list-item-icon>
                <v-list-item-content v-text="item.name" @click="itemClicked(i)"> </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
      </v-navigation-drawer>

      <v-container>
        <card-gallery 
          v-if="!welcome" 
          :clownItem="clownInfo" 
          :index="itemIndex" 
          :listLength="itemlength"
          @indexChanged=itemClicked
          > 
        </card-gallery>
        <welcome-com v-if="welcome"></welcome-com>
      </v-container>
      
  </v-container>

</template>

<script>
import CardGallery from "./CardGallery.vue";
import welcomeCom from './welcomeCom.vue';
import { getClownsProps } from "../api/clownInfo.js";
import { filterItems } from '../lib/util.js';

export default {
  components: {
    CardGallery,
    welcomeCom
  },

  props: {
    navDrawer: Boolean,
    clownitems: Array,
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

    clownProps: {
      get() {
        const res = getClownsProps();
        return res;
      },
    },
  },

  data() {
    return {
      value: null,
      model: 1,
      welcome: true,
      clownInfo: null,
      allItems: this.clownitems,
      itemIndex: 0,
      itemlength: this.clownitems.length,
    };
  },

  methods: {
    itemClicked(idx) {
      this.itemIndex = idx+1;
      this.itemlength = this.allItems.length;
      this.clownInfo = this.allItems[idx];
      this.drawer = false;
      this.welcome = false;
    },

    changeFilters(value) {
      if (value) {
        this.allItems = filterItems(this.clownitems, value);
        this.itemlength = this.allItems.length;
      } else {
        this.allItems = this.clownitems;
      }

    }
  }
};
</script>

<style>
.navigation-com {
  height: 100%;
}
</style>