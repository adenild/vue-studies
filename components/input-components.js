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
      <input class="form-control" type="text" required="required" name="user" v-model="object.user" maxlength="10">
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
  props: ['phone'],
  template:
      `
    <div>
      <sub>Celular:</sub><br>
      <input class="form-control" type="tel" required="required" maxlength="15" name="phone" pattern="\\[0-9]{2}\\ [0-9]{4,6}[0-9]{3,4}$" >
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
         	<option v-for="item in choices" :value="item.value">{{ item.title }}</option>
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
			<input class="form-control" type="text" required="required" name="cpf" maxlength="20">
    </div>
    `
});

Vue.component('cnpj', {
  props: ['object','cnpj'],
  template:
      `
    <div v-if="object.type == 'pj'">
			<sub>CNPJ:</sub><br>
			<input class="form-control" type="text" required="required" name="cnpj" maxlength="20">
    </div>
    `
});

Vue.component('zip-code', {
  props: ['zip-code'],
  template:
      `
		<div>
		  <sub>CEP:</sub><br>
			<input class="form-control" type="tel" required="required" maxlength="10" name="zip-code"  pattern="[0-9]{2}.[0-9]{3}-[0-9]{3}$" >
		</div>
		`
});

Vue.component('street', {
  props: ['street'],
  template:
      `
		<div>
		  <sub>Rua:</sub><br>
			<input class="form-control" type="text" required="required" name="neighborhood" maxlength="100">
		</div>
			`
});

Vue.component('number', {
  props: ['number'],
  template:
      `
		<div>
		  <sub>Número</sub><br>
			<input class="form-control" type="text" required="required" name="number" maxlength="10">
		</div>
		`
});

Vue.component('neighbourhood', {
  props: ['neighborhood'],
  template:
      `
		<div>
		  <sub>Bairro:</sub><br>
			<input class="form-control" type="text" required="required" name="neighbourhood" maxlength="50">
		</div>
			`
});

Vue.component('city', {
  props: ['city'],
  template:
      `
		<div>
		  <sub>Cidade</sub><br>
			<input class="form-control" type="text" required="required" name="city" maxlength="50">
		</div>
`
});

Vue.component('state', {
  props: ['state'],
  template:
      `
		<div>
		  <sub>UF:</sub><br>
			<input class="form-control" type="text" required="required" name="state" maxlength="50">
		</div>
    `
});

Vue.component('country', {
  props: ['country'],
  template:
      `
		<div>
		  <sub>País</sub><br>
			<input class="form-control" type="text" required="required" name="country" maxlength="50">
		</div>
		`
});

Vue.component('date', {
  props: ['date'],
  template:
      `
		<div>
		  <sub>Data:</sub><br>
    	<input class="form-control" type="date" required="required" maxlength="10" name="date" pattern="[0-9]{2}\\/[0-9]{2}\\/[0-9]{4}$" min="2000-01-01" max="2019-03-29">
		</div>    
		`
});

