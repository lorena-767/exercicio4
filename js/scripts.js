/*!
    * Start Bootstrap - Freelancer v6.0.5 (https://startbootstrap.com/theme/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
    */
    (function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });
  
  })(jQuery); // End of use strict
  var pacientes = [];       // declara vetor global

function adicionarPaciente() {
  // cria refer??ncia aos elementos de entrada e sa??da de dados da p??gina
  var inPaciente = document.getElementById("inPaciente");
  var outLista = document.getElementById("outLista");
  
  var nome = inPaciente.value;           // obt??m nome do paciente

  // verifica preenchimento do nome do paciente
  if (nome == "") {
    alert("Informe o nome do paciente");
    inPaciente.focus();
    return;
  }

  pacientes.push(nome);    // adiciona o nome no final do vetor

  var lista = "";          // string para concatenar pacientes

  // percorre os elementos do vetor 
  for (i = 0; i < pacientes.length; i++) {
    lista += (i + 1) + ". " + pacientes[i] + "\n";
  }

  // altera o conte??do da tag outLista
  outLista.textContent = lista;

  // limpa campo e posiciona cursor em inPaciente
  inPaciente.value = "";
  inPaciente.focus();
}
// cria refer??ncia ao btAdicionar e associa function ao evento click
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarPaciente);


function adicionarUrgencia() {
  // cria refer??ncia aos elementos de entrada e sa??da de dados da p??gina
  var inPaciente = document.getElementById("inPaciente");
  var outLista = document.getElementById("outLista");
  
  var nome = inPaciente.value;           // obt??m nome do paciente

//Exercicio um atendimento m??dico
  // verifica preenchimento do nome do paciente
  if (nome == "") {
    alert("Informe o nome do paciente");
    inPaciente.focus();
    return;
  }

  // adiciona paciente no in??cio do vetor
  pacientes.unshift(nome);

  // string para concatenar pacientes
  var lista = "";

  // percorre os elementos do vetor 
  for (i = 0; i < pacientes.length; i++) {
    lista += (i + 1) + ". " + pacientes[i] + "\n";
  }

  // altera o conte??do da tag outLista
  outLista.textContent = lista;

  // limpa campo e posiciona cursor em inPaciente
  inPaciente.value = "";
  inPaciente.focus();
}
var btUrgencia = document.getElementById("btUrgencia");
btUrgencia.addEventListener("click", adicionarUrgencia);


function atenderPaciente() {
  // verifica se vetor pacientes est?? vazio 
  if (pacientes.length == 0) {
    alert("N??o h?? pacientes na lista de espera");
    inPaciente.focus();
    return;
  }

  // cria refer??ncia aos elementos de sa??da de dados
  var outAtendimento = document.getElementById("outAtendimento");
  var outLista = document.getElementById("outLista");

  // remove paciente do in??cio da fila (e obt??m nome)
  var atender = pacientes.shift();

  // exibe nome do paciente em atendimento
  outAtendimento.textContent = atender;

  // string para concatenar pacientes
  var lista = "";

  // percorre os elementos do vetor 
  for (i = 0; i < pacientes.length; i++) {
    lista += (i + 1) + ". " + pacientes[i] + "\n";
  }

  // altera o conte??do da tag outLista
  outLista.textContent = lista;
}
var btAtender = document.getElementById("btAtender");
btAtender.addEventListener("click", atenderPaciente);

//exercicio 2 venda de carros
var carros = [];      // declara vetor global

function adicionarCarros() {
  // Cria refer??ncia aos elementos contendo os dados de entrada
  var inModelo = document.getElementById("inModelo");
  var inPreco = document.getElementById("inPreco");

  var modelo = inModelo.value;          // obt??m conte??do dos campos
  var preco = Number(inPreco.value);

  // verifica preenchimento dos campos
  if (modelo == "" || preco == 0 || isNaN(preco)) {
    alert("Informe corretamente os dados");
    inModelo.focus();
    return;
  }

  // adiciona dados ao vetor de objetos
  carros.push({ modelo: modelo, preco: preco });

  // limpa campos e posiciona cursor em inModelo
  inModelo.value = "";
  inPreco.value = "";
  inModelo.focus();

  listarCarros();     // chama function que lista os carros
}
// cria refer??ncia ao btAdicionar e associa function ao evento click deste bot??o
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarCarros);


function listarCarros() {
  // verifica se vetor est?? vazio
  if (carros.length == 0) {
    alert("N??o h?? carros na lista");
    return;
  }

  var lista = "";     // para concatenar lista de carros

  // percorre os elementos do vetor
  for (var i = 0; i < carros.length; i++) {
    // adiciona ?? lista, cada objeto do vetor
    lista += carros[i].modelo + " - R$: " + carros[i].preco.toFixed(2) + "\n";
  }

  // referencia elemento e altera conte??do exibido
  document.getElementById("outLista").textContent = lista;
}
var btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarCarros);


function filtrarCarros() {
  // faz a leitura do valor m??ximo a partir do m??todo prompt
  var maximo = Number(prompt("Qual o valor m??ximo que o cliente deseja pagar?"));

  // se n??o preencheu ou conte??do inv??lido ...    
  if (maximo == 0 || isNaN(maximo)) {
    return;                                // ... retorna
  }

  // para concatenar lista de carros que obedecem ao crit??rio de pesquisa / filtro
  var lista = "";

  // percorre todos os elementos do vetor
  for (var i = 0; i < carros.length; i++) {
    // verifica se o pre??o ?? inferior (ou igual) ao m??ximo
    if (carros[i].preco <= maximo) {
      lista += carros[i].modelo + " - R$: " + carros[i].preco.toFixed(2) + "\n";
    }
  }

  var outLista = document.getElementById("outLista"); // cria refer??ncia a outLista

  // se a lista esta vazia, significa que nenhum ve??culo foi encontrado (no for) 
  if (lista == "") {
    outLista.textContent = "N??o h?? carros com pre??o at?? R$ " + maximo.toFixed(2);
  } else {
    // sen??o, mostra os ve??culos obtidos
    outLista.textContent = "Carros at?? R$ " + maximo.toFixed(2) +
                           "\n------------------------\n" + lista;
  }
}
var btFiltrar = document.getElementById("btFiltrar");
btFiltrar.addEventListener("click", filtrarCarros);

//Exercicio 3 n??meros primos
function verificarPrimo() {
  // cria refer??ncia aos elementos da p??gina
  var inNumero = document.getElementById("inNumero");
  var outResposta = document.getElementById("outResposta")

  var num = Number(inNumero.value);    // obt??m o n??mero informado

  // verifica se preencheu corretamente o campo inNumero
  if (num == 0 || isNaN(num)) {
    alert("N??mero Inv??lido...");
    inNumero.focus();
    return;
  }

  // declara e inicializa a vari??vel tipo flag
  var temDivisor = 0;

  // percorre os poss??veis divisores do num
  for (var i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
      temDivisor = 1; // muda o flag
      break; // sai da repeti????o
    }
  }

  // se num > 1 e n??o possui divisor
  if (num > 1 && !temDivisor) {
    outResposta.textContent = num + " ?? primo";
  } else {
    outResposta.textContent = num + " N??o ?? primo";
  }
}
// referencia elemento e ap??s associa function ao evento click
var btVerificarPrimo = document.getElementById("btVerificarPrimo");
btVerificarPrimo.addEventListener("click", verificarPrimo);
