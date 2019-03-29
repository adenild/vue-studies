Vue.component('app-table-header',{
  mixins: [],
  props:["columns"],
    // [
    //   {'id':'0','title':'produto','class':'clickable selectable', 'onclick':''},
    //   {'id':'1','title':'produto','class':'clickable selectable', 'onclick':''},
    // ]

  template:
    `
    <thead>
      <tr>
        <th v-for='item in columns' :class="item.class" @click="onclick">{{ item }}</th>
      </tr>
    <thead>
    `
});

Vue.component('app-product-table-header',{
  props:[],

  data: function(){
      return {
        columns: [
          {"id":0, "title":"Nome do Produto", 'onclick':this.somar},
          {"id":1, "title":"Categoria", 'onclick':this.subtrair},
        ],
      }
    }
  },

  methods:{
    somar: function(){
    },

    subtrair: function(){
    },
  },
  template:
    `
    <app-table-header :columns='columns'></app-table-header>
    `
});


Vue.component('users-table-header',{
  props:["columns"]
  template:
    `
    <tr>
      <th>ID</th>
      <th>Nome</th>
      <th colspan="2">Avaliação</th>
    </tr>
    `
});

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
});

Vue.component('users-table',{
    props:['users'],
    template:
    `
    <table class="table table-bordered table-striped" style='width:100%;'>
        <thead>
            <users-table-header></users-table-header>
        </thead>
        <tbody>
            <users-table-body v-for="(user,index) in users" :id="user.id" :name="user.name"></users-table-body>
        </tbody>
    </table>
    `
});