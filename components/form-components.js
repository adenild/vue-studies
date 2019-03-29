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
    props: ['object', 'error', 'copy_object', 'save_form', 'delete_item'],
    template:
        `
    <div>
      <button @click="copy_object(object)" type="button" class="btn btn-sm btn-primary">Editar</button>
      <button @click="save_form(object)" type="button" class="btn btn-sm btn-primary">Incluir</button>
      <button @click="delete_item" type="button" class="btn btn-sm btn-primary">Excluir</button>
    </div>
    `
});

Vue.component('users-form',{
    props: ['object','errors','choices','copy_object','save_form','delete_item','add_user'],
    template:
    `
    <form>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div class="row">  
          <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <name :object="object" :error="errors"></name>
          </div>
          <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <type :object="object" :error="errors" :choices="choices"></type>
          </div>     
        </div>   
        <div class="row">
          <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <user :object="object" :error="errors"></user>
          </div>
          <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <password :object="object" :error="errors"></password>
          </div>
          <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <cpf :object="object" :error="errors"></cpf>       
            <cnpj :object="object" :error="errors"></cnpj>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
            <email :object="object" :error="errors"></email>
          </div>
          <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <phone :object="object" :error="errors"></phone>
          </div>
          <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            <date :object="object" :error="errors"></date><br>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <zip-code :object="object" :error="errors"></zip-code>
          </div>
          <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
            <street :object="object" :error="errors"></street>
          </div>
          <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1">
            <number :object="object" :error="errors"></number>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <neighbourhood :object="object" :error="errors"></neighbourhood>
          </div>
          <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <city :object="object" :error="errors"></city>
          </div>
          <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            <state :object="object" :error="errors"></state>
          </div>
          <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            <country :object="object" :error="errors"></country>
          </div>
        </div>
        <buttons-panel :object="object" :error="errors" :copy_object="copy_object" :save_form="save_form" :delete_item="delete_item" style="margin-top: 10px;margin-left: 5px;"></buttons-panel>
      </div>             
    </form>
    `
});



