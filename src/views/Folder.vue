<template>
  <div class="folder">
    <button class="back-menu" v-on:click="onBack()">← Menu</button>
    <div
      v-for="(image, index) in imageContainer"
      :key="index"
      class="caroussel"
    >
      <img v-if="index === nbPhoto" :src="image" alt="image" />
    </div>
    <div class="button-container">
        <button :disabled="nbPhoto === 0" v-on:click="previousPic()">Précédent</button>
        <button :disabled="nbPhoto === 5" v-on:click="nextPic()">Suivant</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Folder",
  data() {
    return {
      imageContainer: [
        new URL("../assets/folder/1.png", import.meta.url),
        new URL("../assets/folder/2.png", import.meta.url),
        new URL("../assets/folder/3.png", import.meta.url),
        new URL("../assets/folder/4.png", import.meta.url),
        new URL("../assets/folder/5.png", import.meta.url),
        new URL("../assets/folder/6.png", import.meta.url),
      ],
      nbPhoto: 0,
    };
  },
  methods: {
    onBack(){
        this.$router.push("/menu")
    },
    previousPic(){
        this.nbPhoto--;
    },
    nextPic(){
        this.nbPhoto++;
    }
  }
};
</script>

<style scoped lang="scss">
.folder {
    width: 100vw;
    height: 100vh;
  .caroussel {
    position: relative;
    img {
      top: 2rem;
      width: 100vw;
      height: auto;
      position: absolute;
    }
  }
}
.back-menu{
    border: none;
    margin-left: 1rem;
    margin-top: 2rem;
    font-size: 1.5rem;
    border-radius: 1.5rem;
    padding: 0.5rem 1.25rem;
}
.button-container{
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    bottom: 4rem;
    button{
        width: 10rem;
        padding: 0.75rem 0;
        border-radius: 1rem;
        border: none;
        font-family: "Montserrat", sans-serif;
        font-size: 1rem;
    }
}
</style>