<template>
  <div class="container">
      <div class="wrap" v-for="(image , index) in images_videos" :key="index">
       <img :src="require('@/assets/images/'+ image.img +'.png')" alt="">
       <video autoplay="true" loop="true" playsInline="true">
           <source :src="require('@/assets/videos/'+ image.vid +'.mp4')" type="video/mp4">
       </video>
      </div>
      
  </div>
</template>

<script>
export default {
name:"Viewers",
setup(){
   const images_videos = [
      {
        img:  "viewers-disney",
        vid:"1564674844-disney"
      },
      {
        img: "viewers-pixar",
         vid:"1564676714-pixar"
      },
      {
        img: "viewers-marvel",
         vid:"1564676115-marvel"
      },
      {
        img: "viewers-starwars",
         vid:"1608229455-star-wars"
      },
      {
        img: "viewers-national",
         vid:"1564676296-national-geographic"
      },
    ];

    
    return{
        images_videos
    }
}
}
</script>

<style lang="scss" scoped>
.container{
    padding:30px 0 26px;
    display: grid;
    grid-gap:25px;
    gap: 25px;
  
    grid-template-columns: repeat(5, minmax(0, 1fr));

     @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  .wrap{
       padding-top: 56.25%;
  border-radius: 10px;
   cursor: pointer;
  overflow: hidden;
  box-shadow: RGB(0 0 0 / 69%) 0px 26px 30px -10px,
RGB(0 0 0 / 73%) 0px 16px 10px -10px;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img{
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

  video{
        width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
  }

  &:hover{
       box-shadow: RGB(0 0 0 / 80%) 0px 40px 58px -16px,
      RGB(0 0 0 / 72%) 0px 30px 22px -10px;
      transform: scale(1.05);
      border-color: rgba(249, 249, 249, 0.8);
      
      video{
          opacity: 1;
      }
  }
  }
}
</style>