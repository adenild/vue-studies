Vue.component('name', {
  props: ['object', 'error'],
  template:
      `
    <div>
      <sub>Nome:</sub><br>
      <label v-if="error" class="label_error">{{ error }}</label>
      <input class="form-control" type="text" required="required" name="user" v-model="object.name" maxlength="100">
    </div>
    `
});

Vue.component('user', {
  props: ['object', 'error'],
  template:
      `
    <div>
      <sub>Usuário:</sub><br>
      <label v-if="error" class="label_error">{{ error }}</label>
      <input class="form-control" type="text" required="required" name="user" v-model="object.username" maxlength="10">
    </div>
    `
});

Vue.component('password', {
  props: ['object', 'error'],
  template:
      `
		<div>
      <sub>Senha:</sub><br>
      <input class="form-control" type="password" required="required" v-model="object.password" pattern="[0-9]+$" maxlength="12">
		</div>                
		`
});

Vue.component('email', {
  props: ['object', 'error'],
  template:
      `
		<div>
      <sub>E-mail:</sub><br>
			<input class="form-control" type="email" required="required" v-model="object.email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$" >
		</div>
		`
});

Vue.component('phone', {
  props: ['phone','object'],
  template:
      `
    <div>
      <sub>Celular:</sub><br>
      <input class="form-control" type="tel" required="required" maxlength="15" name="phone" pattern="\\[0-9]{2}\\ [0-9]{4,6}[0-9]{3,4}$" v-model="object.phone">
	 	</div> 
		`
});

Vue.component('type', {
  props: ['object', 'choices' ,'error'],
  template:
      `
      <div>
        <sub>Tipo:</sub><br>
        <select class="form-control" v-model="object.type" required="required">
         	<option v-for="item in choices" :value="item.value" :selected="item.selected">{{ item.title }}</option>
        </select>
      </div>
      `
});

Vue.component('cpf', {
  props: ['object','cpf'],
  template:
      `
    <div v-if="object.type == 'pf'">
			<sub>CPF:</sub><br>
			<input class="form-control" type="text" required="required" name="cpf" maxlength="20" v-model="object.cpf">
    </div>
    `
});

Vue.component('cnpj', {
  props: ['object','cnpj'],
  template:
      `
    <div v-if="object.type == 'pj'">
			<sub>CNPJ:</sub><br>
			<input class="form-control" type="text" required="required" name="cnpj" maxlength="20" v-model="object.cnpj">
    </div>
    `
});

Vue.component('zip-code', {
  props: ['object','zip-code'],
  template:
      `
		<div>
		  <sub>CEP:</sub><br>
			<input class="form-control" type="tel" required="required" maxlength="10" name="zip-code"  pattern="[0-9]{2}.[0-9]{3}-[0-9]{3}$" v-model="object.zip_code">
		</div>
		`
});

Vue.component('street', {
  props: ['object','street'],
  template:
      `
		<div>
		  <sub>Rua:</sub><br>
			<input class="form-control" type="text" required="required" name="neighborhood" maxlength="100" v-model="object.street">
		</div>
			`
});

Vue.component('number', {
  props: ['object','number'],
  template:
      `
		<div>
		  <sub>Número</sub><br>
			<input class="form-control" type="text" required="required" name="number" maxlength="10" v-model="object.street_code">
		</div>
		`
});

Vue.component('neighbourhood', {
  props: ['object','neighborhood'],
  template:
      `
		<div>
		  <sub>Bairro:</sub><br>
			<input class="form-control" type="text" required="required" name="neighbourhood" maxlength="50" v-model="object.neighbourhood">
		</div>
			`
});

Vue.component('city', {
  props: ['object','city'],
  template:
      `
		<div>
		  <sub>Cidade</sub><br>
			<input class="form-control" type="text" required="required" name="city" maxlength="50" v-model="object.city">
		</div>
`
});

Vue.component('state', {
  props: ['object','state'],
  template:
      `
		<div>
		  <sub>UF:</sub><br>
			<input class="form-control" type="text" required="required" name="state" maxlength="50" v-model="object.state">
		</div>
    `
});

Vue.component('country', {
  props: ['object','country'],
  template:
      `
		<div>
		  <sub>País</sub><br>
			<input class="form-control" type="text" required="required" name="country" maxlength="50" v-model="object.country">
		</div>
		`
});

Vue.component('date', {
  props: ['object','date'],
  template:
      `
		<div>
		  <sub>Data:</sub><br>
    	<input class="form-control" type="date" required="required" maxlength="10" name="date" pattern="[0-9]{2}\\/[0-9]{2}\\/[0-9]{4}$" min="2000-01-01" max="2019-03-29"  v-model="object.date">
		</div>    
		`
});

