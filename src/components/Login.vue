<template>
  <div class="Container">
    <div class="content">
      <div class="cta">
        <img
          class="cta-logo-one"
          src="@/assets/images/cta-logo-one.svg"
          alt="CTA Logo One"
        />
        <a href="#" class="sign-up" @click="signIn">GET ALL THERE</a>
        <p class="description">
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </p>
        <img
          class="cta-logo-two"
          src="@/assets/images/cta-logo-two.png"
          alt="CTA Logo Two"
        />
      </div>
      <div class="BgImage">
        <img src="@/assets/images/login-background.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { useAuth } from "@/firebase";
import { useStore } from "vuex";
export default {
  name: "Login",
  setup(){
 const store = useStore();
    const {  signIn } = useAuth();

     return {
     
      signIn,
     
      store,
    };
  }
};
</script>

<style lang="scss" scoped>
.Container {
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;

  .content {
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;

    .cta {
      max-width: 650px;
      width: 100%;
      display: flex;
      flex-direction: column;

      .cta-logo-one {
        margin-bottom: 12px;
        max-width: 600px;
        min-height: 1px;
        display: block;
        width: 100%;
      }

      .sign-up {
        font-weight: bold;
        color: $text-primary;
        background-color: $login-sign-up-btn;
        margin-bottom: 12px;
        width: 100%;
        letter-spacing: 1.5px;
        font-size: 18px;
        padding: 16.5px 0;
        border: 1px solid transparent;
        border-radius: 4px;
        &:hover {
          background-color: $login-sign-up-btn-hover;
        }
      }

      .description {
        color: hsla(0, 0%, 95.3%, 1);
        font-size: 11px;
        margin: 0 0 24px;
        line-height: 1.5;
        letter-spacing: 1.5px;
      }

      .cta-logo-two {
        max-width: 600px;
        margin-bottom: 20px;
        display: inline-block;
        vertical-align: bottom;
        width: 100%;
      }
    }

    .BgImage {
      height: 100%;
      width: 100%;
      background-position: top;
      background-size: cover;
      background-repeat: no-repeat;

      z-index: -1;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
    }
  }
}
</style>
