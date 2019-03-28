//pronto
Vue.component('user', {
  props: ['object', 'error'],
  template:
    `
    <div>
      <label v-if="error" class="label_error">{{ error }}</label>
      <input type="text" required="required" name="user" v-model="object.name" maxlength="10"/>
    </div>
    `
});

//pronto
Vue.component('password', {
  props: ['object', 'error'],
  template: '<input type="password" required="required" v-model="object.password" pattern="[0-9]+$" maxlength="12"/>'
});

//pronto
Vue.component('email', {
  props: ['object', 'error'],
  template: '<input type="email" required="required" class="input-text" v-model="object.email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$" />'
});

//pronto
Vue.component('phone', {
  props: ['phone'],
  template: '<input type="tel" required="required" maxlength="15" name="phone" ' +
    'pattern="\\([0-9]{2}\\) [0-9]{4,6}-[0-9]{3,4}$" />'
});

Vue.component('type', {
  props: ['object', 'choices' ,'error'],
  template:
    `
    <div>
      <label for="title">Tipo: </label>
      <select v-model="object.type">
       <option v-for="item in choices"  :value="item.value">{{ item.title }}</option>
      </select>
    </div>
    `
});

//pronto
Vue.component('cpf', {
  props: ['cpf'],
  template: '<div><label>Cpf:</label><br><input type="text" required="required" name="cpf" maxlength="20"/></div>'
});

//pronto
Vue.component('cnpj', {
  props: ['cnpj'],
  template: '<div><label>Cnpj:</label><br><input type="text" required="required" name="cnpj" maxlength="20"/></div>'
});

//pronto
Vue.component('zip-code', {
  props: ['zip-code'],
  template: '<input type="tel" required="required" maxlength="10" name="zip-code" ' +
    'pattern="[0-9]{2}.[0-9]{3}-[0-9]{3}$" />'
});

//pronto
Vue.component('street', {
  props: ['street'],
  template: '<input type="text" required="required" name="neighborhood" maxlength="100"/>'
});

//pronto
Vue.component('number', {
  props: ['number'],
  template: '<input type="text" required="required" name="number" maxlength="10"/>'
});

//pronto
Vue.component('neighborhood', {
  props: ['neighborhood'],
  template: '<input type="text" required="required" name="neighborhood" maxlength="50"/>'
});

//pronto
Vue.component('city', {
  props: ['city'],
  template: '<input type="text" required="required" name="city" maxlength="50"/>'
});

//pronto
Vue.component('state', {
  props: ['state'],
  template: '<input type="text" required="required" name="state" maxlength="50"/>'
});

//pronto
Vue.component('country', {
  props: ['country'],
  template: '<input type="text" required="required" name="country" maxlength="50"/>'
});

//pronto
Vue.component('date', {
  props: ['date'],
  template: '<input type="date" required="required" maxlength="10" name="date" ' +
    'pattern="[0-9]{2}\\/[0-9]{2}\\/[0-9]{4}$" min="2012-01-01" max="2014-02-18" />'
});

Vue.component('buttons-panel', {
  props: ['object', 'error', 'copy_object', 'save_form', 'delete_item'],
    template:
    `
    <div>
      <button v-on:click="copy_object(object)" type="button" class="btn btn-lg btn-primary">Editar</button>
      <button v-on:click="save_form(object)" type="button" class="btn btn-lg btn-primary">Incluir</button>
      <button v-on:click="delete_item" type="button" class="btn btn-lg btn-primary">Excluir</button>
    </div>
    `
});

var app = new Vue({
  el: '#app',
  data: {
    choices: [
      {"value":"pf", "title":"Pessoa Física"},
      {"value":"pj", "title":"Pessoa Jurídica"},
    ],

    forms: {
      client:{
        index:null,
        object:{},
        error:null,
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