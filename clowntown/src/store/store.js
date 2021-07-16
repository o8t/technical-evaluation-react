import { createStore } from "vuex" 

var clowns = [
    {'stageName':'bubbo the clown','realName':'Jack Nicholson','isActiveClown':true,'homeAddress':[50,0],'biography':"testing testing testing","eyes":"YES","hair":"RED",'avatar':''},
    {'stageName':'bobo the fool','realName':'Jeff Bridges','isActiveClown':true,'homeAddress':[50,100],'biography':"testing testing testing","eyes":"NO","hair":"BLU",'avatar':''},
    {'stageName':'baba the magnificient','realName':'J. J. Abrams','isActiveClown':true,'homeAddress':[69,100],'biography':"testing testing testing","eyes":"NO","hair":"BLU",'avatar':''},
    {'stageName':'booboo the mighty','realName':'John Oliver','isActiveClown':true,'homeAddress':[50,200],'biography':"testing testing testing","eyes":"NO","hair":"BLU",'avatar':''},
    {'stageName':'beebee the boisterous','realName':'Jessica Simpson','isActiveClown':true,'homeAddress':[50,50],'biography':"testing testing testing","eyes":"NO","hair":"BLU",'avatar':''},
    {'stageName':'bubu the slothful','realName':'John Mulaney','isActiveClown':true,'homeAddress':[10,100],'biography':"testing testing testing","eyes":"NO","hair":"BLU",'avatar':''},
    
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