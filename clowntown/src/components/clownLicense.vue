<template>
<div class="license">
    <div class="lic-head"> 🤡CLOWNING LICENSE🤡 </div>
    <div class="lic-id"> Clown License ID #: 1234567890 </div>
    <div class="lic-exp"> Clown License Exp: Never </div>
    <div class="lic-avi"> Profile Img <img v-if="clown.avatar!=''" style="width:100px; height:100px;" :src="clown.avatar"/></div>
    <div class="lic-pname"> Performance Name: {{clown.stageName}}</div>
    <div class="lic-rname"> Real Name: {{clown.realName}}</div>
    <div class="lic-bio"> Bio: {{clown.biography}}</div>
    <div class="lic-addr"> Home Address: {{clown.homeAddress}}</div>
    <div class="lic-eye"> EYE {{clown.eyes}}</div>
    <div class="lic-hair"> HAIR {{clown.hair}}</div>
    <div class="lic-inc"> Num Incidents: </div>
    <div class="lic-active"> Is Active: </div>
    <div class="lic-class"> Class C </div><!-- C stands for clown, unchangeable-->
    <button v-on:click="deleteLicense">X</button>
</div>
</template>

<script>
export default {
  name: 'clownLicense',
  props: {
    clown: Object
  },
  methods: {    
  deleteLicense(){this.$store.commit('removeClown',this.$props.clown)}}
  
  }

</script>

<style scoped>
    .license{
    padding: 15px;
    display: grid;
    background: lightgray;
    border: 4px solid black;
    width: 80%;
    border-radius: 30px;
    margin: 10px;

    }
    .lic-head{
    font-size: 20px;
    font-weight: bold;
    }
</style>
