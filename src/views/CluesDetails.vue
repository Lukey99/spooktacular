<template>
  <div class="clues-container">
    <button class="back-button" v-on:click="backButton()">←</button>
    <span class="title">{{ clue.title }}</span>
    <div class="grid-clues">
      <div
        v-for="(item, index) in clue.clues"
        :key="index"
        v-on:click="toShowClue(item)"
      >
        <img
          style="z-index: 0"
          :class="item.unlocked ? '' : 'blur'"
          :src="item.img"
          alt="image"
          :id="item.password"
        />
        <span v-if="!item.unlocked" style="z-index: 5">{{ clue.title}} N°{{ item.numero }}</span>
      </div>
    </div>
    <div v-if="showClue" class="clue-zoom">
      <img
        :src="clueToShow.img"
        alt="clueToShow"
        :class="clueToShow.unlocked ? '' : 'blur'"
      />
      <input type="text" v-model="password" />
      <button v-on:click="hideClue()">Retour</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CluesDetails",
  data() {
    return {
      showClue: false,
      password: "",
      clueToShow: {
        img: null,
        unlocked: false,
      },
      clue: [],
      cluesContainer: [
        {
          title: "Alibi",
          clues: [
            {
              unlocked: false,
              img: new URL(`../assets/alibi/enclume.png`, import.meta.url),
              password: "enclume",
              numero: 3
            },
            {
              unlocked: false,
              img: new URL(
                `../assets/alibi/falsification.png`,
                import.meta.url
              ),
              password: "falsification",
              numero: 5
            },
            {
              unlocked: false,
              img: new URL(`../assets/alibi/nouvelles.png`, import.meta.url),
              password: "nouvelles",
              numero: 6
            },
            {
              unlocked: false,
              img: new URL(`../assets/alibi/pourcentage.png`, import.meta.url),
              password: "pourcentage",
              numero: 2
            },
            {
              unlocked: false,
              img: new URL(`../assets/alibi/ski.png`, import.meta.url),
              password: "ski",
              numero: 7
            },
          ],
        },
        {
          title: "Lieu",
          clues: [
            {
              unlocked: false,
              img: new URL(`../assets/lieu/chatpotte.png`, import.meta.url),
              password: "chatpotte",
              numero: 5
            },
            {
              unlocked: false,
              img: new URL(`../assets/lieu/fabriquant.png`, import.meta.url),
              password: "fabriquant",
              numero: 7
            },
            {
              unlocked: false,
              img: new URL(`../assets/lieu/fleur.png`, import.meta.url),
              password: "fleur",
              numero: 8
            },
            {
              unlocked: false,
              img: new URL(`../assets/lieu/grand.png`, import.meta.url),
              password: "grand",
              numero: 6
            },
            {
              unlocked: false,
              img: new URL(`../assets/lieu/grimoire.png`, import.meta.url),
              password: "grimoire",
              numero: 9
            },
            {
              unlocked: false,
              img: new URL(`../assets/lieu/incendi.png`, import.meta.url),
              password: "incendi",
              numero: 4
            },
            {
              unlocked: false,
              img: new URL(`../assets/lieu/lundi.png`, import.meta.url),
              password: "lundi",
              numero: 1
            },
            {
              unlocked: false,
              img: new URL(`../assets/lieu/lune.png`, import.meta.url),
              password: "lune",
              numero: 2
            },
            {
              unlocked: false,
              img: new URL(`../assets/lieu/sacados.png`, import.meta.url),
              password: "sacados",
              numero: 10
            },
            {
              unlocked: false,
              img: new URL(`../assets/lieu/sanrio.png`, import.meta.url),
              password: "sanrio",
              numero: 3
            },
          ],
        },
        {
          title: "Mobile",
          clues: [
            {
              unlocked: false,
              img: new URL(`../assets/mobile/amyestbelle.png`, import.meta.url),
              password: "amyestbelle",
              numero: 3
            },
            {
              unlocked: false,
              img: new URL(`../assets/mobile/angeidol.png`, import.meta.url),
              password: "angeidol",
              numero: 1
            },
            {
              unlocked: false,
              img: new URL(
                `../assets/mobile/evaepousemoi.png`,
                import.meta.url
              ),
              password: "evaepousemoi",
              numero: 4
            },
            {
              unlocked: false,
              img: new URL(`../assets/mobile/gwenpied.png`, import.meta.url),
              password: "gwenpied",
              numero: 6
            },
            {
              unlocked: false,
              img: new URL(`../assets/mobile/jeremybg.png`, import.meta.url),
              password: "jeremybg",
              numero: 7
            },
            {
              unlocked: false,
              img: new URL(`../assets/mobile/K1000jtm.png`, import.meta.url),
              password: "K1000jtm",
              numero: 8
            },
            {
              unlocked: false,
              img: new URL(
                `../assets/mobile/mercidavoircodemoncoeur.png`,
                import.meta.url
              ),
              password: "mercidavoircodemoncoeur",
              numero: 9
            },
            {
              unlocked: false,
              img: new URL(`../assets/mobile/mylestbelle.png`, import.meta.url),
              password: "mylestbelle",
              numero: 2
            },
            {
              unlocked: false,
              img: new URL(
                `../assets/mobile/sorcelleries.png`,
                import.meta.url
              ),
              password: "sorcelleries",
              numero: 10
            },
            {
              unlocked: false,
              img: new URL(
                `../assets/mobile/spooktacular.png`,
                import.meta.url
              ),
              password: "spooktacular",
              numero: 5
            },
          ],
        },
        {
          title: "Preuve",
          clues: [
            {
              unlocked: false,
              img: new URL(`../assets/preuve/12.png`, import.meta.url),
              password: "12",
              numero: 4
            },
            {
              unlocked: false,
              img: new URL(`../assets/preuve/100.png`, import.meta.url),
              password: "100",
              numero: 9
            },
            {
              unlocked: false,
              img: new URL(`../assets/preuve/astrologie.png`, import.meta.url),
              password: "astrologie",
              numero: 1
            },
            {
              unlocked: false,
              img: new URL(`../assets/preuve/banane.png`, import.meta.url),
              password: "banane",
              numero: 2
            },
            {
              unlocked: false,
              img: new URL(`../assets/preuve/cible.png`, import.meta.url),
              password: "cible",
              numero: 7
            },
            {
              unlocked: false,
              img: new URL(`../assets/preuve/estomac.png`, import.meta.url),
              password: "estomac",
              numero: 3
            },
            {
              unlocked: false,
              img: new URL(`../assets/preuve/internet.png`, import.meta.url),
              password: "internet",
              numero: 5
            },
            {
              unlocked: false,
              img: new URL(
                `../assets/preuve/lapinvampire.png`,
                import.meta.url
              ),
              password: "lapinvampire",
              numero: 6
            },
            {
              unlocked: false,
              img: new URL(`../assets/preuve/palourde.png`, import.meta.url),
              password: "palourde",
              numero: 8
            },
            {
              unlocked: false,
              img: new URL(`../assets/preuve/voix.png`, import.meta.url),
              password: "voix",
              numero: 10
            },
          ],
        },
      ],
    };
  },
  watch: {
    password(val){
        if(val === this.clueToShow.password){
            this.clueToShow.unlocked = true
            this.clue.clues.find((item) => {
                return item.password === this.clueToShow.password
            }).unlocked = true
        }
    }
  },
  methods: {
    backButton() {
      this.$router.push("/clues");
    },
    toShowClue(item) {
      this.password = "";
      this.showClue = true;
      this.clueToShow.unlocked = item.unlocked;
      this.clueToShow.password = item.password;
      this.clueToShow.img = item.img;
    },
    hideClue(){
        this.showClue = false;
    }
  },
  mounted() {
    this.clue = this.cluesContainer.find((clue) => {
      return clue.title === this.$route.params.clue;
    });
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
      position: relative;
      overflow: hidden;
      img {
        position: absolute;
        object-fit: contain;
        width: 100%;
        height: auto;
      }
    }
  }
}
.blur {
  filter: blur(1rem);
}

.clue-zoom{
    position: absolute;
    top: 0;
    width: 100%;
    height: 150vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10;
    img{
        margin-top: 2rem;
        width: auto;
        height: 40%;
    }
    input{
        text-align: center;
        margin-top: 1rem;
        font-size: 1.5rem;
        border: none;
        border-radius: 1.5rem;
        padding: 0.75rem 2rem;
        box-sizing: border-box;
        z-index: 100;
    }
    button{
        border: none;
        margin-top: 1rem;
        font-family: "Montserrat", sans-serif;
        font-size: 1.25rem;
        padding: 0.75rem 2rem;
        border-radius: 1.25rem;
    }
}
</style>
