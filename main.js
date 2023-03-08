$(document).ready(function() {
    $('#cadastro').click(function(e){
        
        e.preventDefault();

        const elementoLista = $('#nome-tarefa').val();
        const novoItem = $('<li></li>');

        $(`
        <div id="nova-tarefa">
            ${elementoLista}
        <div/>
        `).appendTo(novoItem);

        $(novoItem).appendTo('ul');

        $('li').click(function() {
            $(this).addClass("riscado")
        })

        $('#nome-tarefa').val('')
    })


})