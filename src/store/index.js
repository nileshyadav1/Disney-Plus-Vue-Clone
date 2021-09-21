import { createStore } from 'vuex'

export default createStore({
  state: {
    user:null,
    recommend:null,
    newDisney:null,
    original:null,
    trending:null,

  },
  mutations: {
    USER_LOGGEDIN(state,_user){
      if(_user){
        state.user = _user;
        // console.log()
        console.log("USer name:", state.user.displayName)
        
      }
    },

    Recommend(state, recommend){
      if(recommend){
        state.recommend = recommend;

        console.log("State Recommend", state.recommend);
       
      }
    },
    NewDisney(state , newDisney){
      if(newDisney){
        state.newDisney = newDisney;
        console.log("State newDisney", state.newDisney);
       
      }
    },
    Original(state , original){
      if(original){
        state.original = original;
        console.log("State original", state.original);
       
      }
    },
    Trending(state,trending){
      if(trending){
        state.trending = trending;
        console.log("State trending ", state.trending);
       
      }
    },
    USER_LOGGED_OUT(state){
      state.user = null;
      state.recommend = null;
      state.newDisney = null;
      state.original = null;
      state.trending = null;

      console.log("Data cleared")
    
    }
  },
  actions: {
  },
  getters:{
    GetUserInfo(state){
        return state.user
    }
  },
  modules: {
  }
})
