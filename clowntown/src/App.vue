<template>

  <div id="header">
     <img id="logo" src="./assets/imgs/appleville.svg"/><br>
     <span id="subhead">CLOWN INCIDENT TRACKER</span>
  </div>
   <clown-map :clowns="clowns"/>
</template>

<script>

import clownMap from './components/clownMap.vue';

export default {
  name: 'App',
  components: {
    clownMap,
  },
  data(){
    return{
      clowns: this.$store.state.clowns,
    }
  },
}
</script>

<style>

#logo{
  width:25%;
}
#subhead{
  font-weight:bold;
  font-size:35px;
}

</style>
