<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-menu bottom left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            dark
            icon
            v-bind="attrs"
            v-on="on"
            @click="menuBtClick"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>        
      </v-menu>

      <v-card-title class="white--text">
        <span class="text-h5">Clown Tracer</span>
      </v-card-title>

      <v-spacer></v-spacer>

      <v-btn
        target="_blank"
        text
        @click="clownRegister"
      >
        <span class="mr-2">I'm a Clown</span>
      </v-btn>
    </v-app-bar>

    <v-container fluid>
      <v-main>
        <navigation-com v-if="!register"
          :navDrawer=drawer
          :clownitems="clowns"
          @drawerChange=changed>
        </navigation-com> 

        <register v-if="register" @registerCancel=cancelled @dataChanged=dataChanged>
        </register>
      </v-main>
    </v-container>


  </v-app>
</template>

<script>
import { getClowns } from './api/clownInfo';


import NavigationCom from './components/NavigationCom.vue';
import Register from './components/Register.vue';

export default {
  name: 'App',

  components: {
    NavigationCom,
    Register,
  },

  data: () => ({
    drawer: false,
    register: false,
    clowns: getClowns(),
  }),

  methods: {
    menuBtClick() {
      this.drawer = true;
      this.register = false;
    },

    changed(value) {
      this.drawer = value;
    },

    clownRegister() {
      this.register = true;
    },

    cancelled() {
      this.register = false;
    },

    dataChanged() {
      this.clowns = getClowns();
    },
  }
};
</script>

