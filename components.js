
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

Vue.component('users-form',{
    template:
    `
    <form>
      <input class="" v-model="name">
      <button type="submit" class="btn enviar">Enviar</button>
    </form>
    `
})

Vue.component('users-table-header',{
    template:
        `
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th colspan="2">Avaliação</th>
        </tr>
        `
})

Vue.component('users-table-body', {
  props:['id', 'name'],
  template:
    `
    <tr>
      <td>{{ id }}</td>
      <td>{{ name }}</td>
      <td class="like-cell"><a role="button" class="fas fa-thumbs-up"></a></td>
      <td class="like-cell"><a role="button" class="fas fa-thumbs-down"></a></td>
  	</tr>
  	`
})

Vue.component('users-table',{
    props:['users'],
    template:
        `
        <table class="table-bordered">
            <thead>
                <users-table-header></users-table-header>
            </thead>
            <tbody>
                <users-table-body v-for="user in users" :id="user.id" :name="user.name"></users-table-body>
            </tbody>
        </table>
        `
})


