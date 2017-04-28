const botaoConsulta = document.getElementById('btnconsultar');


botaoConsulta.addEventListener('click', function(e) {

  const tabela = document.getElementById('tabelaResultado');
  const sem = document.getElementById('semResultado');
        console.log(tabela.style.display);
        if (tabela.style.display === 'none') {
            tabela.style.display = 'block';
            sem.style.display = 'none';
        } else {
            tabela.style.display = 'none';
            sem.style.display = 'block';
        }
});
