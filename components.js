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

