<template>
  <nav>
    <router-link to="/home" class="logo"
      ><img src="@/assets/images/logo.svg" alt="Disney+"
    /></router-link>
    <div class="Container">
      <div class="login-btn" v-if="!isLogin" @click="signIn">Login</div>
      
      <div v-else class="nav-menu-container">
        <div class="nav-menu">
          <router-link class="anchor" to="/home">
            <img src="@/assets/images/home-icon.svg" alt="HOME" />
            <span>HOME</span>
          </router-link>
          <a>
            <img src="@/assets/images/search-icon.svg" alt="SEARCH" />
            <span>SEARCH</span>
          </a>
          <a>
            <img src="@/assets/images/watchlist-icon.svg" alt="WATCHLIST" />
            <span>WATCHLIST</span>
          </a>
          <a>
            <img src="@/assets/images/original-icon.svg" alt="ORIGINALS" />
            <span>ORIGINALS</span>
          </a>
          <a>
            <img src="@/assets/images/movie-icon.svg" alt="MOVIES" />
            <span>MOVIES</span>
          </a>
          <a>
            <img src="@/assets/images/series-icon.svg" alt="SERIES" />
            <span>SERIES</span>
          </a>
        </div>
        <div v-if="isLogin" class="sign-out">
          <img
            class="UserImg"
            :src="store.state.user.photoURL"
            alt="User Image"
          />
          <div class="dropdown">
            <span @click="signOut">Log Out</span>
          </div>
        </div>
      </div>

        <div class="openMenu" v-if="isLogin"><i class="fa fa-bars"></i>
        
          <div class="dropdown">
          <router-link class="anchor" to="/home">
            
            <span>HOME</span>
          </router-link>
           <a>
           
            <span>SEARCH</span>
          </a>
          <a>
           
            <span>WATCHLIST</span>
          </a>
          <a>
           
            <span>ORIGINALS</span>
          </a>
          <a>
          
            <span>MOVIES</span>
          </a>
          <a>
           
            <span>SERIES</span>
          </a>

            <span class="logout-span" @click="signOut">Log Out</span>
        </div>
        </div>
      <!-- <div class="hamburger">
        <img
          class="hamburgerImg"
          :src="store.state.user.photoURL"
          alt="User Image"
        />
        <div class="dropdown">
          <router-link class="anchor" to="/home">
            <img src="@/assets/images/home-icon.svg" alt="HOME" />
            <span>HOME</span>
          </router-link>
        </div>
      </div> -->
    </div>
  </nav>
</template>

<script>
// import {  computed } from 'vue'
import { useAuth } from "@/firebase";
import { useStore } from "vuex";

export default {
  name: "Header",

  setup() {
    const store = useStore();
    const { user, signIn, signOut, isLogin } = useAuth();
    // const isLoggedIn = computed(() => user.value !== null)

    return {
      user,
      signOut,
      signIn,
      isLogin,
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: $nav-bg;
  display: flex;
  // justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;

  .logo {
    padding: 0;
    width: 80px;
    margin-top: 0px;
    max-height: 70px;
    font-size: 0;
    display: inline-block;

    img {
      display: block;
      width: 100%;
    }
  }

  .Container {
    display: flex;
    flex: 1;
    align-items: center;
    height: 100%;


    .openMenu{
      
      width:100%;
      display: flex;
      position: relative;
      justify-content: end;

      &:hover {
      cursor: pointer;
      .dropdown {
        opacity: 1;
        transition-duration: 1s;
      }
    }

      .dropdown {
      position: absolute;
      top: 48px;
      right: 5px;
      background: rgb(19, 19, 19);
      border: 1px solid rgba(151, 151, 151, 0.34);
      border-radius: 4px;
      box-shadow: RGB(0 0 0 / 50%) 0px 0px 18px 0px;
      padding: 10px;
      font-size: 14px;
      letter-spacing: 3px;
      width: 150px;
      
      opacity: 0;
      display:flex;
      flex-direction: column;

      .logout-span{
        text-transform: uppercase;
      }

      a{
        margin-bottom: 20px ;
      }
      span {
        cursor: pointer;
        text-transform: capitalize;
        
      }
    }

     @media (min-width: 968px) {
      display: none;
    }

    }
  }

  .login-btn {
    background-color: rgba(0, 0, 0, 0.6);
    padding: 8px 16px;
    display: flex;
    margin-left: auto;
    align-items: center;
    height: 40px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    cursor: pointer;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    transition: all 0.2s ease 0s;
    &:hover {
      background-color: #f9f9f9;
      color: #000;
      border-color: transparent;
    }
  }

  // .hamburger {
  //   position: relative;

  //   &:hover {
  //     cursor: pointer;
  //     .dropdown {
  //       opacity: 1;
  //       transition-duration: 1s;
  //     }
  //   }

  //   .dropdown {
  //     position: absolute;
  //     top: 68px;
  //     right: 10px;
  //     background: rgb(19, 19, 19);
  //     border: 1px solid rgba(151, 151, 151, 0.34);
  //     border-radius: 4px;
  //     // box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  //     padding: 10px;
  //     font-size: 14px;
  //     letter-spacing: 3px;
  //     width: 100px;
  //     opacity: 0;

  //     span {
  //       cursor: pointer;
  //     }
  //   }
  //   // display:none;
  //   @media (min-width: 968px) {
  //     display: none;
  //   }
  // }

  .nav-menu-container {
    display: flex;

    height: 100%;
    width: 100%;

    @media (max-width: 968px) {
      display: none;
    }
  }

  .nav-menu {
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin-top: 1px;
    padding: 0px;
    position: relative;
    margin-right: auto;
    margin-left: 25px;

    a,
    .anchor {
      display: flex;
      align-items: center;
      padding: 0 12px;

      img {
        height: 20px;
        min-width: 20px;
        width: 20px;
        margin-right: 4px;
        z-index: auto;
      }

      span {
        color: rgb(249, 249, 249);
        font-size: 13px;
        letter-spacing: 1.42px;
        line-height: 1.08;
        padding: 2px 0px;
        white-space: nowrap;
        position: relative;
        &:before {
          background-color: rgb(249, 249, 249);
          border-radius: 0px 0px 4px 4px;
          bottom: -6px;
          content: "";
          height: 2px;
          left: 0px;
          opacity: 0;
          position: absolute;
          right: 0px;
          transform-origin: left center;
          transform: scaleX(0);
          transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
          visibility: hidden;
          width: auto;
        }
      }

      &:hover {
        cursor: pointer;
        span:before {
          transform: scaleX(1);
          visibility: visible;
          opacity: 1 !important;
        }
      }
    }
  }

  .sign-out {
    .UserImg {
      border-radius: 50%;
      width: 100%;
      height: 85%;
      margin-top: 4px;
    }

    &:hover {
      cursor: pointer;
      .dropdown {
        opacity: 1;
        transition-duration: 1s;
      }
    }
  }

  .dropdown {
    position: absolute;
    top: 68px;
    right: 10px;
    background: rgb(19, 19, 19);
    border: 1px solid rgba(151, 151, 151, 0.34);
    border-radius: 4px;
    // box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
    padding: 10px;
    font-size: 14px;
    letter-spacing: 3px;
    width: 100px;
    opacity: 0;

    span {
      cursor: pointer;
    }
  }
}
</style>
