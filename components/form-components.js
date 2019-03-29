Vue.component('users-button',{
    props:['users','form', 'add_user'],
    template:
    `
    <div class="row">
      <button type="submit" class="btn btn-info" @click="add_user()">Enviar</button>
    </div>
    `
})

Vue.component('buttons-panel', {
    props: ['object', 'error', 'copy_object', 'save_form', 'delete_item','add_user'],
    template:
        `
    <div>
      <button @click="add_user" type="button" class="btn btn-sm btn-primary">Editar</button>
      <button @click="save_form(object)" type="button" class="btn btn-sm btn-primary">Incluir</button>
      <button @click="delete_item" type="button" class="btn btn-sm btn-primary">Excluir</button>
    </div>
    `
});

Vue.component('users-form',{
    props: ['object','errors','choices','copy_object','save_form','delete_item','add_user', 'users'],
    template:
    `
    <form>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div class="row">  
          <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <name :object="users" :error="errors"></name>
          </div>
          <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <type :object="users" :error="errors" :choices="choices"></type>
          </div>     
        </div>   
        <div class="row">
          <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <user :object="users" :error="errors"></user>
          </div>
          <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <password :object="users" :error="errors"></password>
          </div>
          <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <cpf :object="users" :error="errors"></cpf>       
            <cnpj :object="users" :error="errors"></cnpj>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
            <email :object="users" :error="errors"></email>
          </div>
          <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <phone :object="users" :error="errors"></phone>
          </div>
          <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            <date :object="users" :error="errors"></date>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <zip-code :object="users" :error="errors"></zip-code>
          </div>
          <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
            <street :object="users" :error="errors"></street>
          </div>
          <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1">
            <number :object="users" :error="errors"></number>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <neighbourhood :object="users" :error="errors"></neighbourhood>
          </div>
          <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <city :object="users" :error="errors"></city>
          </div>
          <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            <state :object="users" :error="errors"></state>
          </div>
          <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            <country :object="users" :error="errors"></country>
          </div>
        </div>
        <buttons-panel :object="users" :error="errors" :copy_object="copy_object" :save_form="save_form" :delete_item="delete_item" :add_user="add_user" style="margin-top: 10px;margin-left: 5px;"></buttons-panel>
      </div>             
    </form>
    `
});



