<template>
  <main class="Home-main">
    <ImageSlider />
    <Viewers />
    <Recommended />
    <NewToDisney />
    <Originals />
    <Trending />


  </main>
</template>

<script>
import ImageSlider from "@/components/ImageSlider.vue";
import Viewers from "@/components/Viewers.vue";
import Recommended from "@/components/Recommended.vue";
import NewToDisney from "@/components/NewToDisney.vue";
import Originals from "@/components/Originals.vue";
import Trending from "@/components/Trending.vue";
import { useFireStore } from "@/firebase";
import {useStore} from 'vuex'

import { onUnmounted, ref } from "vue";

export default {
  name: "Home",
  components: {
    ImageSlider,
    Viewers,
    Recommended,
    NewToDisney,
    Originals,
    Trending,
  },
  setup() {
    const { db } = useFireStore();
    const store = useStore();
    console.log("db", db);
    const movies = ref([]);
    const recommend = ref([]);
    const newDisney = ref([]);
    const Original = ref([]);
    const trending = ref([]);

  

    const getMovies = db.collection("movies").onSnapshot((snapshot) => {
      movies.value = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommend.value.push({ id: doc.id, ...doc.data() });
          
            break;

          case "new":
            newDisney.value.push({ id: doc.id, ...doc.data() });
           
            break;

          case "trending":
            trending.value.push({ id: doc.id, ...doc.data() });
           
            break;

          case "original":
            Original.value.push({ id: doc.id, ...doc.data() });
           
            break;
        }
      });
    });

    onUnmounted(getMovies);

    store.commit("Recommend", recommend.value)
    store.commit("NewDisney", newDisney.value)
    store.commit("Original", trending.value)
    store.commit("Trending", Original.value)

    console.log("Recommend Array", recommend.value);
    console.log(" New Disney Array", newDisney.value);
    console.log("Trending Array", trending.value);
    console.log("Original Array", Original.value);
   

    return { db, movies };
  },
};
</script>

<style lang="scss" scoped>
.Home-main {
  position: relative;
  min-height: calc(100vh - 250px);

  overflow-x: hidden;
  display: block;
  padding: 0 calc(3.5vw + 5px);
  top: 72px;

  &::after {
    background: url("~@/assets/images/home-background.png") center center /
      cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
}
</style>
