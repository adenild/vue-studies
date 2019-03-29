var app = new Vue({
  el: '#app',
  data: {
    columns: [
      {'title':'ID',},
      {'title':'Nome',},
      {'title':'e-Mail',},
      {'title':'Senha',},
      {'title':'Tipo',},
    ],

    choices: [
      {"value":"pf", "title":"Pessoa Física", "selected":"selected",},
      {"value":"pj", "title":"Pessoa Jurídica", "selected":null,},
    ],

    forms: {
      clients:{
        index:null,
        object:{},
        errors:null,
      },
    },

    clients :[
      {id:1, name:"DIEGO", email:"diegopasti@gmail.com", password:"123", type:"pf"},
      {id:2, name:"BRUNO", email:"brunopasti@gmail.com", password:"123", type:"pj"},
      {id:3, name:"JOÃO", email:"joapsouzar@gmail.com", password:"123", type:"pf"},
    ],

    client_copy : null,
  },
  methods: {
    add_user: function(){
      var item = {id: 1, name: form.name};
      users.push(item)
      form.id = '';
      form.name = '';
    },
    copy_object: function(object, index){
      this.client_copy = JSON.parse(JSON.stringify(object));
      this.forms.client.object = this.client_copy;
      this.forms.client.index = index;
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