import { createStore } from "vuex" 

var clowns = [
    {'stageName':'bubbo the clown','realName':'Jack Nicholson','isActiveClown':true,'homeAddress':[50,0],'biography':"testing testing testing","eyes":"YES","hair":"RED",'avatar':''}
    ];

const store = createStore({
   state:{
      clowns: clowns
   }})

export default store