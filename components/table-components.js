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
                <users-table-body v-for="(user,index) in users" :id="index" :name="user.name"></users-table-body>
            </tbody>
        </table>
        `
})
