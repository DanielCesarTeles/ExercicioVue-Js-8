var vue = new Vue({
  el:"#app",
  data : {
    nome: ""
  },
  computed: {}
  ,
  methods: {
    cadastrar() {
        alert("Seu nome é " + this.nome);
      }
    }
  }
);
