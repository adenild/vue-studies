var app = new Vue({
  el: '#app',
  data: {
    choices: [
      {"value":"pf", "title":"Pessoa Física"},
      {"value":"pj", "title":"Pessoa Jurídica"},
    ],

    forms: {
      clients:{
        index:null,
        object:{},
        errors:null,
      },
    },

    clients :[
      {name:"DIEGO", email:"diegopasti@gmail.com", password:"123", type:"pf"},
      {name:"BRUNO", email:"brunopasti@gmail.com", password:"123", type:"pj"},
      {name:"JOÃO", email:"joapsouzar@gmail.com", password:"123", type:"pf"},
    ],

    client_copy : null,
  },
  methods: {
    copy_object: function(object, index){
      //this.forms.client.object = object;
      //alert("object" + object);
      this.client_copy = JSON.parse(JSON.stringify(object));
      //alert("this.client_copy" + this.client_copy);
      this.forms.client.object = this.client_copy;
      this.forms.client.index = index;
      //alert("this.forms.client."+this.forms.client.object);
      //alert("DEU CERTO!: " + this.forms.client.object );
    },
    save_form: function(object){
      this.clients[this.forms.client.index] = JSON.parse(JSON.stringify(this.forms.client.object));
      alert("SALVO NO BANCO DE DADOS")
    },
    delete_item: function(object){
      this.clients.splice(this.forms.client.index, 1);
      alert("SALVO NO BANCO DE DADOS");
    }
  },
})