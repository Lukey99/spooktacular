<template>
  <div class="clues-container">
    <button class="back-button" v-on:click="backButton()">←</button>
    <span class="title">Mes indices</span>
    <div class="grid-clues">
      <div
        v-for="(clue, index) in cluesContainer"
        :key="index"
        v-on:click="onClick(clue)"
      >
        <span>{{ clue.title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Clues",
  data() {
    return {
      cluesContainer: [
        { title: "Alibi" },
        { title: "Lieu" },
        { title: "Mobile" },
        { title: "Preuve" },
      ],
    };
  },
  methods: {
    onClick(clue) {
      this.$router.push(`/cluesDetails/${clue.title}`);
    },
    backButton() {
      this.$router.push("/menu");
    },
  },
};
</script>

<style scoped lang="scss">
.back-button {
  position: absolute;
  left: 2rem;
  top: 1.75rem;
  font-size: 1.5rem;
  border-radius: 0.75rem;
  border: none;
  padding: 0.25rem 0.75rem;
}
.clues-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    font-size: 1.5rem;
    font-family: "Jeepers", sans-serif;
    margin: 2rem;
  }
  .grid-clues {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 10rem;
      height: 16rem;
      background: white;
      color: black;
      font-family: "Jeepers", sans-serif;
      font-size: 2rem;
      border-radius: 0.75rem;
    }
  }
}
</style>
