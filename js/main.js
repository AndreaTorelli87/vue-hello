const { createApp } = Vue

createApp({
  data() {
    return {
      message: "Clicca sull'immagine per modificarla",
      immagine: "https://picsum.photos/600/",
      classiH1: "m-5 fw-bold",
      classiDivApp: "container my-5 text-center"
    }
  },
  methods: {
    reload() {location.reload();},
    generaColoreRandom() {
      let characters = "0123456789abcdef"
      let str = "color: #"
      for(let i = 0; i < 6; i++){
          str += characters[Math.floor(Math.random() * 16)]
      }
      return str;
    }
  }
}).mount('#app')

