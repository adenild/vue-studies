Vue.component('app-table-header',{
  props:["columns"],
  template:
    `
    <thead>
      <tr >
        <th v-for='item in columns' >{{ item.title }}</th>       
      </tr>
    </thead>
    `
});

Vue.component('app-table-body', {
  props:['clients'],
  template:
    `
    <tbody>  
      <tr v-for='item in clients'>
        <td>{{ item.id }}</td>   
        <td>{{ item.name }}</td> 
        <td>{{ item.email }}</td>     
        <td>{{ item.password }}</td>      
        <td>{{ item.type }}</td>
      </tr>
    </tbody>
  	`
});

Vue.component('raw-table',{
  props:['columns','clients'],
  template:
    `
    <table class="table-bordered" style="margin-left: 10px;">
      <app-table-header :columns="columns"></app-table-header>
      <app-table-body :clients="clients"></app-table-body>  
    </table>
    `
});
