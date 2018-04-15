var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";
var pacientes = document.querySelectorAll(".paciente");
for(var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector('.info-peso');
    var tdAltura = paciente.querySelector('.info-altura');
    var altura = tdAltura.textContent;
    var peso = tdPeso.textContent;
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);
    var tdImc = paciente.querySelector('.info-imc');
    if(!pesoEhValido){
        tdImc.textContent = "Peso inválido";
        paciente.classList.add('paciente-invalido');
    }
    else if(!alturaEhValida){
        tdImc.textContent = "Altura inválida";
        paciente.classList.add('paciente-invalido');
    }
    else{
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso){
    return peso > 0.0 && peso < 1000.0;
}

function validaAltura(altura){
    return altura > 0.0 && altura < 3.0;
}

function validaGordura(gordura){
    return gordura != "" && !isNaN(gordura);
}

function calculaImc(peso, altura){
    return (peso / (altura * altura)).toFixed(2);
}

function validaNome(nome){
    return nome != null && nome.length > 0;
}