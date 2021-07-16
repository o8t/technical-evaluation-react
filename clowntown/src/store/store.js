import { createStore } from "vuex" 

var clowns = [
    {'stageName':'bubbo the clown','realName':'Jack Nicholson','isActiveClown':true,'homeAddress':[50,0],'biography':"testing testing testing","eyes":"YES","hair":"RED",'avatar':''}
    ];

const store = createStore({
   state:{
      clowns: clowns
   },

    mutations: {
    addClown (state,clown) {
        console.log(state.clowns.length);
      state.clowns.push(clown);
        console.log(state.clowns.length);   
            },
    removeClown (state,clown) {
            for(var c=0;c<state.clowns.length;c++){
               if(state.clowns[c]==clown){
                    state.clowns.splice(c--,1);
        
    }
    
  }}}})

export default store