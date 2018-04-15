var btnAdicionarPaciente = document.querySelector('#adicionar-paciente');
btnAdicionarPaciente.addEventListener('click', function(e){
    e.preventDefault();
    var form = document.querySelector('#form-adiciona');
    var paciente = obtemPacienteDoFormulario(form);
    var erros = validaPaciente(paciente);
    var mensagensDeErro = document.querySelector('#mensagens-de-erro');
    if(erros.length > 0){
        exibeMensagensDeErro(mensagensDeErro, erros);
        return;
    }
    var tabelaPacientes = document.querySelector('#tabela-pacientes');
    tabelaPacientes.appendChild(montaPacienteTr(paciente));
    form.reset();
    mensagensDeErro.innerHTML = "";
})

function obtemPacienteDoFormulario(form){
    var paciente = {};
    paciente.nome = form.nome.value;
    paciente.peso = form.peso.value.replace(',','.');
    paciente.altura = form.altura.value.replace(',','.');
    paciente.gordura = form.gordura.value;
    paciente.imc = calculaImc(paciente.peso, paciente.altura);
    return paciente;
}

function montaPacienteTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add('paciente');
    pacienteTr.appendChild(montaPacienteTd('nome', paciente.nome));
    pacienteTr.appendChild( montaPacienteTd('peso', paciente.peso));
    pacienteTr.appendChild(montaPacienteTd('altura', paciente.altura));
    pacienteTr.appendChild(montaPacienteTd('gordura', paciente.gordura));
    pacienteTr.appendChild(montaPacienteTd('imc', paciente.imc));
    return pacienteTr;
}

function montaPacienteTd(chave, valor){
    var td = document.createElement("td");
    td.textContent = valor;
    td.classList.add('info-' + chave);
    return td;
}

function validaPaciente(paciente){
    var erros = [];
    if(!validaNome(paciente.nome)){
        erros.push('Nome inválido');
    }
    if(!validaPeso(paciente.peso)){
        erros.push('Peso inválido');
    }
    if(!validaAltura(paciente.altura)){
        erros.push('Altura inválida');
    }
    if(!validaGordura(paciente.gordura)){
        erros.push('Gordura inválida');
    }
    return erros;
}

function exibeMensagensDeErro(mensagensDeErro,
                             erros){
    mensagensDeErro.innerHTML = "";
    erros.forEach(function(erro){
        var li = document.createElement('li');
        li.textContent = erro;
        li.classList.add('mensagens-de-erro');
        mensagensDeErro.appendChild(li);
    })
}

function adicionaPacienteNaTabela(paciente){
    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(montaPacienteTr(paciente));
}