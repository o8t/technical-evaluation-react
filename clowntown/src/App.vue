<template>
  <div id="header">
     <img id="logo" src="./assets/imgs/appleville.svg"/><br>
     <span id="subhead">🤡CLOWN INCIDENT TRACKER🤡</span>
  </div>
    <div id="license-list"> 
      <clownLicense v-for="c in clowns" :key="c._id" :clown="c"/>
    </div> 
   <clown-map :clowns="clowns"/>
</template>

<script>

import clownMap from './components/clownMap.vue';
import clownLicense from './components/clownLicense.vue';

export default {
  name: 'App',
  components: {
    clownMap,
    clownLicense
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
