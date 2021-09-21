<template>
  <Header/>
 
 <router-view></router-view>

</template>

<script>
import Header from '@/components/Header.vue'
export default {
  
  components:{
    Header
  }
};
</script>

<style lang="scss">
html{
    scroll-behavior: smooth;
}

*{
    box-sizing: border-box;
}

body{
    font-family:$primary-font;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  margin:0;
  padding: 0;
  background-color: $bg-color;
  color:$text-primary;
}



a{
  color:$text-primary;
  text-decoration: none;
}

@media only screen and (min-width: 768px) {
  body {
    font-size: 16px;
  }
}
@media only screen and (min-width: 480px) and (max-width: 768px) {
  body {
    font-size: 15px;
  }
}
@media only screen and (max-width: 479px) {
  body {
      font-size: 14px;
  }
}

</style>
