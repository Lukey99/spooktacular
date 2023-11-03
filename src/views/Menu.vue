<template>
  <div class="menu-page">
    <div class="title">
      <span>Par Anh&Em</span>
    </div>
    <div class="subtitle">
      <span>Mes fichiers</span>
    </div>
    <div v-for="(item, index) in items" :key="index" class="sections">
      <button class="button-section" v-on:click="onClick(item)">
        <img v-if="index = 0" :src="getCharacterPic" alt="image" />
        <img v-else :src="item.img" alt="image" />
        <span>{{ item.title }}</span>
      </button>
    </div>
    <div v-if="getShowCharacter" class="backdrop" v-on:click="hide">
      <img :src="getCharacterFolder" alt="characters" />
    </div>
  </div>
</template>

<script>
import { USER } from "../constants";

export default {
  name: "Menu",
  computed: {
    getShowCharacter() {
      return this.showCharacter;
    },
    getCharacterPic() {
        return new URL(`../assets/pics/${this.currentUser}.jpg`, import.meta.url)
    },
    getCharacterFolder() {
        return new URL(`../assets/characters/${this.currentUser}.png`, import.meta.url)
    }
  },
  data() {
    return {
      userContainer: USER,
      currentUser: "",
      items: [
        {
          title: "Mon personnage",
          action: () => {
            this.show();
          },
        },
        {
          title: "Dossier d'enquête",
          img: new URL("../assets/home/1.png", import.meta.url),
          path: "/folder",
        },
        {
          title: "Dossiers publiques",
          img: new URL("../assets/home/2.png", import.meta.url),
          path: "/public",
        },
        {
          title: "Mes indices",
          img: new URL("../assets/home/3.png", import.meta.url),
          path: "/clues",
        },
      ],
      showCharacter: false,
    };
  },
  methods: {
    show() {
      this.showCharacter = true;
    },
    hide() {
        this.showCharacter = false;
    },
    onClick(item) {
      if (!!item?.action) item.action();
      else this.$router.push(item.path);
    },
  },
  mounted() {
    this.currentUser = document.cookie.split("=")[1];
    const checkUser = this.userContainer.find((user) => {
      return user.name === this.currentUser;
    });
    if (checkUser) return null;
    else return this.$router.push("/");
  },
};
</script>

<style scoped lang="scss">
.backdrop {
  position: absolute;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    margin-bottom: 8rem;
    width: 100%;
    height: auto;
  }
}
.menu-page {
  width: 100vw;
  height: 100vh;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
  gap: 1.25rem;
  overflow: hidden;
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
  .subtitle {
    width: 80%;
    font-family: "Jeepers", sans-serif;
    text-transform: uppercase;
    font-size: 2rem;
    text-align: start;
    display: flex;
    justify-content: flex-start;
  }
  .sections {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 1rem;
    button {
      width: 85%;
      height: 8rem;
      border-radius: 1.5rem;
      border: none;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 4rem;
      img {
        width: 6.25rem !important;
        height: 6.25rem !important;
        border-radius: 1.5rem;
      }
      span {
        width: 10rem;
        font-size: 1.75rem;
        text-align: start;
      }
    }
  }
}
</style>