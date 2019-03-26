Vue.component('search-input', {
  props: ['label','users'],
  template: `
    <label>
      {{ label }}
      <input type="text" list="lista">

      <datalist id="lista">
        <option v-for="user in users" :value="user.name">{{ user.name }}</option>
      </datalist>
    </label>

  `
});

Vue.component('name-input',{
  props: ['form'],
  template:
  `
  <div>
    <sub>Nome:</sub><br>
    <input type="text" v-model="form.name">
  </div>
  `
})