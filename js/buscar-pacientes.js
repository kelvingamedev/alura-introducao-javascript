var btnBuscarPacientes = document.querySelector('#buscar-pacientes');
var buscou = false;
btnBuscarPacientes.addEventListener('click', function(){
    if(buscou){
        return;
    }
    console.log('Irei buscar os pacientes');
    buscou = true;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://api-pacientes.herokuapp.com/pacientes');
    xhr.addEventListener('load', function(){
        if(xhr.status == 200){
            var resposta = this.responseText;
            var pacientes = JSON.parse(resposta);
            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente);
            })
        } else{
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    })
    xhr.send();
});