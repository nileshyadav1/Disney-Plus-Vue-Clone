<template>
<div class="Detail">
 <div class="background">
        <img :src="selectedMovie.backgroundImg" alt="Movie Image">
 </div>

 <div class="imgTitle">
     <img :src="selectedMovie.titleImg" alt="Title Image">
 </div>

 <!-- Controls Section -->
 <div class="contentMeta">
     <div class="controls">
       <button class="player">
           <img src="@/assets/images/play-icon-black.png" alt="" />
            <span>Play</span>
       </button>
       <button class="trailer">
          <img src="@/assets/images/play-icon-white.png" alt="" />
            <span>Trailer</span>
       </button>
       <div class="addList">
         <span></span>
         <span></span>
       </div>
       <div class="groupWatch">
         <div>
           <img src="@/assets/images/group-icon.png" alt="">
         </div>
       </div>
     </div>
     
 </div>

<!-- Subtitles & Description -->
<div class="subtitle">
 {{selectedMovie.subTitle}}
</div>
<div class="description">
  {{selectedMovie.description}}
</div>
</div>
 
</template>

<script>
import { useFireStore } from "@/firebase";
import { useRoute } from 'vue-router'
import {  onUnmounted,ref } from 'vue'
export default {
name:"Detail",
setup(){
    const route = useRoute()
    const { db } = useFireStore();
    const selectedMovie = ref([])
    const id = ref(route.params.id)

    console.log("SelectedID", id.value)

     const getMovies = db.collection("movies")
      .doc(id.value)
      .get()
      .then((doc)=>{
        if(doc){
            selectedMovie.value = doc.data();
            console.log("Selected Movie", selectedMovie.value)
        }
        else{
            console.log("no such document in firebase 🔥");
        }
      })
       .catch((error) => {
        console.log("Error getting document:", error);
      });

        onUnmounted(getMovies);
    return{
            selectedMovie
    }
}
}
</script>

<style lang="scss" scoped>

.Detail {
  position: relative;
  min-height: calc(100vh - 250px);

  overflow-x: hidden;
  display: block;
  padding: 0 calc(3.5vw + 5px);
  top: 72px;

  .background{
       left: 0px;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;

  img{
        width: 100%;
        height:100%;

        @media (max-width: 768px) {
      width: initial;
    }
  }
  }

  .imgTitle{
     
       align-items: flex-end;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0px auto;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;

  img{
      max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
  }

  .contentMeta{
    max-width:874px;
    
  }
  .controls{
     align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;

  .player , .trailer{
     font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb (249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);

    img {
    width: 32px;
  }
  &:hover {
    background: rgb(198, 198, 198);
  }

   @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;
    img {
      width: 25px;
    }
  }
  }

  .trailer{
    background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
   &:hover {
   background: rgb(0, 0, 0);
  }
  }


  .addList{
    margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;

  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;
    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }
    &:nth-child(2) {
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
      width: 2px;
    }
  }
  }

  .groupWatch{
      height: 44px;
  width: 44px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: white;

    div {
    height: 40px;
    width: 40px;
    background: rgb(0, 0, 0);
    border-radius: 50%;
    img {
      width: 100%;
    }
  }
  }
  }

  .subtitle{
     color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
  }

  .description{
     line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);
  @media (max-width: 768px) {
    font-size: 14px;
  }
  }
}
</style>