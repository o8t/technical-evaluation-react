<template>
  <div id="header">
     <img id="logo" src="./assets/imgs/appleville.svg"/><br>
     <span id="subhead">🤡CLOWN INCIDENT TRACKER🤡</span>
  </div>

 <div id="addNewClown">
    <add-clown/>
  </div>

  <div id="display-root">
    <div id="license-list"> 
      <clownLicense v-for="c in clowns" :key="c._id" :clown="c"/>
    </div> 
   <clown-map :clowns="clowns"/>
   </div>
</template>

<script>

import clownMap from './components/clownMap.vue';
import clownLicense from './components/clownLicense.vue';
import addClown from './components/addClown.vue';

export default {
  name: 'App',
  components: {
    clownMap,
    clownLicense,
    addClown
  },
  data(){
    return{
      clowns: this.$store.state.clowns,
    }
  },
}
</script>

<style>
#header{
  text-align: center;
}
#logo{
  width:25%;
}
#subhead{
  font-weight:bold;
  font-size:35px;
}

#display-root{
  display: flex;
  flex-direction:row;
}
#leafmap{
  width:70%;
}
#license-list{
  align-items: center;
  width:30%;
  overflow-y:scroll;
  display: flex;
  flex-direction:column;
  height:80vh;
  background: #eeeeee;
  border: 2px solid black;
  box-shadow: inset -10px 10px 8px #888888;}
</style>
