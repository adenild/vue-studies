var app = new Vue({
  el: '#app',
  data: {
    NextIndex: 1,

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
      users:{
        id:             '',
        name:           '',
        username:       '',
        password:       '',
        type:           '',
        cpf:            '',
        cnpj:           '',
        email:          '',
        phone:          '',
        date:           '',
        zip_code:       '',
        street:         '',
        street_code:    '',
        neighbourhood:  '',
        city:           '',
        state:          '',
        country:        '',
      },
    },

    clients :[
      {name:"DIEGO", email:"diegopasti@gmail.com", password:"123", type:"pf"},
      {name:"BRUNO", email:"brunopasti@gmail.com", password:"123", type:"pj"},
      {name:"JOÃO", email:"joapsouzar@gmail.com", password:"123", type:"pf"},
    ],

    users : [],
  },
  methods: {
    add_user: function(){
      var item = {
        id: this.NextIndex,
        name:this.forms.users.name,
        username: this.forms.users.username,
        password:this.forms.users.password,
        type:this.forms.users.type,
        cpf: this.forms.users.cpf,
        cnpj: this.forms.users.cnpj,
        email: this.forms.users.email,
        phone: this.forms.users.phone,
        date: this.forms.users.date,
        zip_code: this.forms.users.zip_code,
        street: this.forms.users.street,
        street_code: this.forms.users.street_code,
        neighbourhood: this.forms.users.neighbourhood,
        city: this.forms.users.city,
        state: this.forms.users.state,
        country: this.forms.users.country
      };
      this.users.push(item);
      this.NextIndex++;
      this.forms.users.id = '';
      this.forms.users.name = '';
      this.forms.users.username = '';
      this.forms.users.password = '';
      this.forms.users.type = '';
      this.forms.users.cpf = '';
      this.forms.users.cnpj = '';
      this.forms.users.email = '';
      this.forms.users.phone = '';
      this.forms.users.date = '';
      this.forms.users.zip_code = '';
      this.forms.users.street = '';
      this.forms.users.street_code = '';
      this.forms.users.neighbourhood = '';
      this.forms.users.city = '';
      this.forms.users.state = '';
      this.forms.users.country = '';
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
});