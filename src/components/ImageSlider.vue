<template>
  <Carousel class="CarouselContainer" :autoplay="5000" :wrap-around="true">
    <Slide v-for="(image , index) in images" :key="index">
      <div class="carousel__item">
          <a href="#">
              <img :src="require('@/assets/images/'+ image.img +'.jpg')" alt="">
          </a>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "ImageSlider",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  setup() {
    const images = [
      {
        img:  "sliderImg1",
      },
      {
        img: "sliderImg2",
      },
      {
        img: "sliderImg3",
      },
      {
        img: "sliderImg4",
      },
    ];

    return { images };
  },
});
</script>

<style lang="scss">
.CarouselContainer {
  margin-top: 20px;
  position: relative;
  & > button {
    opacity: 0;
    height: 100%;
    max-height: 30px;
    border-radius: 50%;
    // width: 5vw;
    width: 30px;
    z-index: 1;
  }

  &:hover > button {
    opacity: 1;
    transition: opacity 0.5s ease 0s;
  }
}


.carousel__item {
   
    width:100%;
  border-radius: 4px;
  cursor: pointer;

  position: relative;

     a {
    border-radius: 4px;
   box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;
    img {
      width: 100%;
      height: 100%;
    }
    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }

     }


}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  background: transparent;
  border: 3px solid white;

  @media (max-width: 1250px){
    display:none;
  }
}
.carousel__prev {
  position: absolute;
  top: 250px;
  left: -30px;
}
.carousel__next {
  position: absolute;
  top: 250px;
  right: -25px;
}

.carousel__pagination li button {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgb(150, 158, 171);
}
.carousel__pagination li button.carousel__pagination-button--active {
  background-color: #ffffff;
}
</style>
