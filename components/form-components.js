Vue.component('users-button',{
    props:['users','form'],
    methods: {
      add_user: function(){
        var item = {id: 1, name: form.name};
        users.push(item)
        form.id = '';
        form.name = '';
      },
    },
    template:
    `
    <div class="row">
      <button type="submit" class="btn btn-info" @click="add_user()">Enviar</button>
    </div>

    `
})

Vue.component('users-form',{
    props: ['form','methods'],
    template:
    `
    <div>
      <name-input :form="form"></name-input>
      <users-button class="clean-row"></users-button>
    </div>
    `
})
