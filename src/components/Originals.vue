<template>
  <div class="container">
    <h4>Originals</h4>
    <div class="content">
     <div class="wrap" v-for="(movie) in OriginalsMovies" :key="movie.id">
        <router-link :to="'/detail/' + movie.id">
          <img
           :src="movie.cardImg"
            alt=""
          />
         
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity';

import { useStore } from 'vuex';
export default {
  name: "Originals",
   setup(){
    const store = useStore();

    const OriginalsMovies = computed(() => store.state.original);
  

    return{
      OriginalsMovies
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding: 0 0 26px;

  .content {
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));

    @media (max-width: 768px) {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }

    .wrap{
         padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: RGB(0 0 0 / 69%) 0px 26px 30px -10px,
    RGB(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);


  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

    &:hover {
    box-shadow: RGB(0 0 0 / 80%) 0px 40px 58px -16px,
     RGB(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
    }
  }
}
</style>
