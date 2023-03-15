const { createApp } = Vue

createApp({
  data() {
    return {
      message: "Clicca sull'immagine per modificarla",
      immagine: "https://picsum.photos/600/",
      classiH1: "m-5 p-5 fw-bold",
      classiDivApp: "py-5 text-center"
    }
  },
  methods: {
    reload() {location.reload();},
    generaColoreRandom(proprieta) {
      let characters = "0123456789abcdef"
      let str = `${proprieta}: #`
      for(let i = 0; i < 6; i++){
          str += characters[Math.floor(Math.random() * 16)]
      }
      return str;
    }
  }
}).mount('#app')

