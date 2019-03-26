var app = new Vue({
  el: '#app',
  data: function() {
    return {
       errors: [],
       name: ' ',
       users: [
            {id:1, name:'Adenildo'},
            {id:2, name:'Cesar'},
            {id:3, name:'Cleiton'},
            {id:4, name:'Diego'},
            {id:5, name:'João'},
            {id:6, name:'Helder'},
        ]
     }
  },
  methods: {
    checkForm: function (e) {
      this.errors = [];

      if (!this.name) {
        this.errors.push('O nome é obrigatório.');
      }

      if (!this.errors.length) {
        return true;
      }

      e.preventDefault();
    }

  }

})