Vue.component('buttons-panel', {
    props: ['object', 'error', 'copy_object', 'save_form', 'delete_item'],
    template:
        `
    <div>
      <button @click="copy_object(object)" type="button" class="btn btn-lg btn-primary">Editar</button>
      <button @click="save_form(object)" type="button" class="btn btn-lg btn-primary">Incluir</button>
      <button @click="delete_item" type="button" class="btn btn-lg btn-primary">Excluir</button>
    </div>
    `
});

//Falta fazer um concensso entre submit e button, pq quando você usa type="button" ele só chama a função, e quando usa o type="submit" ele passa a validação, mas atualiza a página e não dá pra testar a função.