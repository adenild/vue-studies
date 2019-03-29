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
    props: ['object','errors','choices','copy_object','save_form','delete_item'],
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
          <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <email :object="object" :error="errors"></email>
          </div>
          <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <phone :object="object" :error="errors"></phone>
          </div>
        </div>
        <div class="row">
          <div class="col-xs- col-sm- col-md- col-lg-">
            
          </div>
          <div class="col-xs- col-sm- col-md- col-lg-">
            
          </div>
        </div>
        <div class="row">
          <div class="col-xs- col-sm- col-md- col-lg-">
            
          </div>
          <div class="col-xs- col-sm- col-md- col-lg-">
            
          </div>
        </div>
        
      </div>
        
            
        
                   
              
               
        <date :object="object" :error="errors"></date><br>       
                
        <zip-code :object="object" :error="errors"></zip-code><br>       
        <street :object="object" :error="errors"></street><br>      
        <number :object="object" :error="errors"></number><br>         
        <neighbourhood :object="object" :error="errors"></neighbourhood><br>      
        <city :object="object" :error="errors"></city><br>       
        <state :object="object" :error="errors"></state><br>      
        <country :object="object" :error="errors"></country><br>
        <buttons-panel :object="object" :error="errors" :copy_object="copy_object" :save_form="save_form" :delete_item="delete_item"></buttons-panel>
      </div>
    </form>
    `
})



