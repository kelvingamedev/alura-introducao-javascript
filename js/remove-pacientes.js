var tabelaPacientes = document.querySelector('#tabela-pacientes');
tabelaPacientes.addEventListener('dblclick', function(e){
    e.target.parentNode.classList.add('fade-out');
    setTimeout(function(){
        e.target.parentNode.remove();
    }, 500);
});