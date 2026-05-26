// VARIÁVEIS GLOBAIS
  let sessaoAtual = null;
  let metodoSelecionado = null;

// MUDAR DE ABA
  function mudarTab(tab, btn) {
    document.querySelectorAll('.conteudo').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.tab-botao').forEach(b => b.classList.remove('active'));
    document.getElementById('tab-' + tab).classList.add('active');
    if (btn) btn.classList.add('active');
    if (tab === 'pagamento') preencherResumoPagamento();
}

// FORMULÁRIO
  let form = document.getElementById("formRecarga");
  form.addEventListener("submit", function(e) {
    e.preventDefault();

  // INPUTS
    let selects = document.querySelectorAll("select");
    let inputs = document.querySelectorAll("input");

    let tipoUsuario = selects[0].value;
    let horario = selects[1].value;

    let tempo = Number(inputs[0].value);
    let potencia = Number(inputs[1].value);

  // VALIDAÇÃO
    if (tempo <= 0 || potencia <= 0) {
      alert("Preencha os valores corretamente!");
      return;
    }

  // CÁLCULOS
    // Energia
      let energia = (potencia * tempo) / 60;

    // Tarifa base
      let tarifa = 0;

    // Cálculo tarifa
      if (potencia <= 7) {
          tarifa = 2.00;
      } else if (potencia <= 22) {
          tarifa = 2.50;
      } else {
          tarifa = 3.00;}

    // Adicional de pico
      let adicional = 0;
      if (horario === "Pico (Acréscimo de 30%)") {
      adicional = 0.3;
      }

    // Desconto
      let desconto = 0;
      if (tipoUsuario === "Premium (20% de Desconto)") {
      desconto = 0.2;
      }

    // Valor base
      let valorBase = energia * tarifa;

    // Valor adicional (pico)
      let valorTarifa = energia * adicional;

    // Soma tudo
      let valorComTarifa = valorBase + valorTarifa;

    // Desconto
      let valorDesconto = valorComTarifa * desconto;

    // Valor final
      let valorTotal = valorComTarifa - valorDesconto;

  // MOSTRAR RESULTADOS NA SESSÃO
    document.getElementById('energia').textContent = energia.toFixed(2) + ' kWh';
    document.getElementById('tempo').textContent = tempo + ' min';
    document.getElementById('valorTarifa').textContent = 'R$ ' + valorTarifa.toFixed(2);
    document.getElementById('valorTotal').textContent = 'R$ ' + valorTotal.toFixed(2);
    document.getElementById('valorDesconto').textContent = 'R$ ' + valorDesconto.toFixed(2);

  // SALVAR SESSÃO
    sessaoAtual = {
      energia,
      tempo,
      valorTarifa,
      valorTotal,
      valorDesconto
    };
});

// IR PARA PAGAMENTO
  function irParaPagamento() {
      // SE NÃO EXISTIR SESSÃO
      if (!sessaoAtual) {
          alert("Inicie uma sessão primeiro!");
          return;
      }
      preencherResumoPagamento();
      // ESCONDE ABAS
      document.querySelectorAll('.conteudo').forEach(tab => tab.classList.remove('active'));

      // REMOVE ACTIVE DOS BOTÕES
      document.querySelectorAll('.tab-botao').forEach(btn => btn.classList.remove('active'));

      // MOSTRA PAGAMENTO
      document.getElementById('tab-pagamento').classList.add('active');

      // ATIVA BOTÃO PAGAMENTO
      document.querySelectorAll('.tab-botao')[2].classList.add('active');
  }

// PREENCHER PAGAMENTO
  function preencherResumoPagamento() {
    if (!sessaoAtual) return;
    document.getElementById('energiaPagamento').textContent = sessaoAtual.energia.toFixed(2) + ' kWh';
    document.getElementById('tempoPagamento').textContent = sessaoAtual.tempo + ' min';
    document.getElementById('valorTarifaPagamento').textContent = 'R$ ' + sessaoAtual.valorTarifa.toFixed(2) + '/kWh';
    document.getElementById('valorDescontoPagamento').textContent =
      sessaoAtual.valorDesconto > 0
        ? '-R$ ' + sessaoAtual.valorDesconto.toFixed(2)
        : 'R$ 0,00';
    document.getElementById('valorTotalPagamento').textContent = 'R$ ' + sessaoAtual.valorTotal.toFixed(2);
}

// SELECIONAR MÉTODO
  function selecionarMetodo(m) {
    metodoSelecionado = m;
    // BOTÕES
    document.querySelectorAll('.metodo-botao').forEach(b => b.classList.remove('selected'));
    document.getElementById('botao-' + m).classList.add('selected');
    // PAINÉIS
    document.querySelectorAll('.pix-aba, .cartao-aba, .boleto-aba').forEach(p => p.classList.remove('show'));
    document.getElementById(m + '-aba').classList.add('show');
    // LIBERAR BOTÃO
    document.getElementById('botaoPagar').disabled = false;
}

// CONFIRMAR PAGAMENTO
  function confirmarPagamento() {
    document.getElementById('pagamento-form').style.display = 'none';
    document.getElementById('resumoPagamento').style.display = 'none';
    document.getElementById('confirmacao').classList.add('show');
}

// NOVA SESSÃO
  function novaSessao() {
    sessaoAtual = null;
    metodoSelecionado = null;
    document.getElementById('tempoInput').value = '';
    document.getElementById('potenciaInput').value = '';
    document.getElementById('energia').textContent = '-- kWh';
    document.getElementById('tempo').textContent = '-- min';
    document.getElementById('valorTarifa').textContent = 'R$ --';
    document.getElementById('valorTotal').textContent = 'R$ --';
    document.getElementById('valorDesconto').textContent = 'R$ --';
    document.getElementById('energiaPagamento').textContent = '-- kWh';
    document.getElementById('tempoPagamento').textContent = '-- min';
    document.getElementById('valorTarifaPagamento').textContent = 'R$ --/kWh';
    document.getElementById('valorDescontoPagamento').textContent = 'R$ 0,00';
    document.getElementById('valorTotalPagamento').textContent = 'R$ --';
    document.getElementById('pagamento-form').style.display = '';
    document.getElementById('resumoPagamento').style.display = '';
    document.getElementById('confirmacao').classList.remove('show');
    document.querySelectorAll('.metodo-botao').forEach(b => b.classList.remove('selected'));
    document.querySelectorAll('.pix-aba, .cartao-aba, .boleto-aba').forEach(p => p.classList.remove('show'));
    document.getElementById('botaoPagar').disabled = true;
    mudarTab('sessao', document.querySelector('.tab-botao:nth-child(1)'));
}