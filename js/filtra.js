var campoFiltro = document.querySelector('#filtrar-tabela');
campoFiltro.addEventListener('input', function (e) {
    var self = this;
    var regExp = new RegExp(self.value, 'i');
    var pacientes = document.querySelectorAll('.paciente');
    pacientes.forEach(function (paciente) {
        var nome = paciente.querySelector('.info-nome').textContent;
        if (self.value != '' && !regExp.test(nome)) {
            paciente.classList.add('oculta');
        } else {
            paciente.classList.remove('oculta');
        }
    })
})