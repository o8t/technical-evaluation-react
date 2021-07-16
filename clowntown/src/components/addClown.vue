<template>
<div id="formdiv">

<input type='file' name="image" accept="image/*"/><br>

Stage Name:<input v-model="form.stageName"/><br>
Real Name:<input v-model="form.realName"/><br>
Active?:<input type="checkbox" v-model="form.isActiveClown"/><br>
Home Address:<br>[<input v-model="form.homeAddress[0]" style="width:30%"/>, <input v-model="form.homeAddress[1]" style="width:30%"/>]<br>
Biography:<input v-model="form.biography"/><br>
Eyes:<select v-model="form.eyes">
    <option value="Yes">Yes</option>
    <option value="No">No</option>
</select><br>
Hair:<select v-model="form.hair">
    <option value="RED">Red</option>
    <option value="BLU">Blue</option>
    <option value="GRE">Green</option>
</select><br>

<button v-on:click="newClown">🤡SUBMIT CLOWN🤡</button>

</div>
</template>

<script>
 
export default{ 
name:'addClown',
components: {
  },
     methods: {
        newClown(){
        
        this.$store.commit('addClown',this.form)},

        async testfn(val){ 
        return new Promise((resolve, reject) => {

            var files = val.target.files;
            

            if (!files.length){
            return;}
            const reader = new FileReader();
            reader.readAsDataURL(files[0]);  
            reader.onload = () => resolve(this.$data.form['avatar']=reader.result);
    reader.onerror = error => reject(error);

             this.$data.form['avatar']=val.target.value;
                 })}
                },
                data(){
                   return{
                       form:{
                       'stageName':'',
                       'realName':'',
                       'isActiveClown':'',
                       'homeAddress':[0,0],
                       'biography':'',
                       'eyes':'',
                       'hair':'',
                       'avatar':''}
                }
             }
}
</script>


<style>
#formdiv{   

  display:grid;
  justify:center;
  background:#aaaaaa;
    width: 70vh;
    border-radius:10px;
    margin:5px;
    padding:5px;

}
</style>