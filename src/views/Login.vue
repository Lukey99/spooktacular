<template>
  <div class="login-page">
    <div class="title">
      <span>Par Anh&Em</span>
    </div>
    <div class="description">
      <span style="font-family: 'Jeepers', sans-serif"
        >Prêt.e à mener l'enquête ?</span
      >
      <span style="font-family: 'Montserrat', sans-serif">
        Connecte toi pour commencer</span
      >
    </div>
    <div class="login-wrapper">
      <div>
        <label for="name">Prénom</label>
        <input v-model="form.name" id="name" />
      </div>
      <div>
        <label for="password">Mot de passe</label>
        <input v-model="form.password" type="password" id="password" />
      </div>
      <div>
        <button class="log-in" v-on:click="onClick()">se connecter</button>
      </div>
    </div>
    <img src="../assets/StickersLogin.png" alt="decoration" />
  </div>
</template>

<script>
import { USER } from "../constants";

export default{
    data(){
        return {
            form: {
                name: "",
                password: ""
            },
            userContainer: USER
        }
    },
    methods:{
        onClick(){
            const checkUser = this.userContainer.find((user) => {
                return user.name === this.form.name && user.password === this.form.password
            })
            if(checkUser){
                document.cookie = `user=${this.form.name}`
                this.$router.push(`/menu?id=${this.form.name}`)
            } else {
                alert("Honte à vous, vous vous êtes trompé !")
            }
        }
    }
}
</script>

<style scoped lang="scss">
.login-page {
  width: 100vw;
  height: 100vh;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
  .title {
    position: absolute;
    top: 3.5rem;
    span {
      background: #105fb8;
      width: auto;
      text-align: center;
      border-radius: 2rem;
      font-size: 1.5rem;
      text-transform: uppercase;
      font-weight: 700;
      padding: 0.5rem 2.5rem;
    }
  }
  .description {
    font-family: "Jeepers", sans-serif;
    text-transform: uppercase;
    font-size: 3rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 20rem; 
    span:last-child {
      font-size: 1.5rem;
    }
  }
  .login-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
    div {
      display: flex;
      flex-direction: column;
      label{
        text-transform: uppercase;
        margin-left: 1.25rem;
        font-size: 1.25rem;
        font-weight: 700;
      }
      input {
        box-sizing: border-box;
        width: 70vw;
        border-radius: 4rem;
        border: none !important;
        padding: 1rem 1.5rem;
        font-size: 1.5rem;
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
      }
      .log-in{
        all: unset;
        background-color: #E6E7FF;
        text-transform: uppercase;
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        color: #105FB8;
        border-radius: 2rem;
        font-size: 1.25rem;
        padding: 0.75rem 1.5rem;
        margin-top: 1rem;
        box-sizing: border-box;
      }
    }
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: auto;
    z-index: -1;
  }
}
</style>