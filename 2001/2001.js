//EVENTO DE CLICK NO BOTÃO INICIAR
$("#iniciar").on("click", function () {
    //MODO ATIVO OU NÃO (TOOGLE)
    $("#iniciar").toggleClass("active");
    $("#menuIniciar").toggleClass("active");
  });
  
  //LIGAR O RELÓGIO PRIMEIRA VEZ
  setTimeout(() => {
    var hora = new Date().toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit"
    });
  
    $("#relogio").html(hora);
  }, 100);
  
  //CONTAR RELOGIO CADA SEGUNDO
  setInterval(() => {
    var hora = new Date().toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit"
    });
  
    $("#relogio").html(hora);
  }, 1000);
  
  //DUPLO CLIQUE NO ÍCONE DA LIXEIRA
  $("#lixeira").dblclick(function () {
    $("#lixeira").removeClass("selected");
    $("#lixeira").addClass("selected");
    $(".janela").css("display", "flex");
    $(".prog").addClass("active");
    $(".prog").css("display", "flex");
  });
  
  //DUPLO CLIQUE NO ICONE DO INTERNET EXPLORER
  $("#ie").dblclick(function () {
    const audio = new Audio("https://www.myinstants.com/media/sounds/erro.mp3");
    audio.play();
    $(".error").show();
  });
  
  //CLICOU NO BOTAO "OK" DO DIALOG DE ERRO
  $(".ok").click(function () {
    $(".error").hide();
  });
  
  //JANELA DE ERRO SER MÓVEL
  $(".error").draggable();
  
  //CLICOU NO BOTÃO DE FECHAR DO DIALOG DE ERRO
  $("#erroFecha").click(function () {
    $(".error").hide();
  });
  
  //CLICOU NO INTERNET EXPLORER DO MENU INICIAR
  $("#ie-iniciar").click(function () {
    const audio = new Audio("https://www.myinstants.com/media/sounds/erro.mp3");
    audio.play();
    $(".error").show();
  });
  
  //TORNAR JANELA DA LIXEIRA ARRASTÁVEL NA ÁREA DE TRABALHO
  $(".janela").draggable({
    containment: ".area-de-trabalho"
  });
  
  //ICONES DA ÁREA DE TRABALHO ARRASTÁVEIS
  $(".desktop-icon").draggable({
    containment: ".area-de-trabalho",
    stop: function () {
      $(this).removeClass("selected");
      $(this).addClass("selected");
    }
  });
  
  //CLICOU UMA VEZ SELECIONA / DESELECIONA
  $(".desktop-icon").click(function () {
    if ($(this).hasClass("selected")) {
      $(this).removeClass("selected");
    } else {
      $(this).addClass("selected");
    }
  });
  
  //CLICOU EM ALGUMA PARTE DA ÁREA DE TRABALHO
  $(".area-de-trabalho").click(function () {
    $("#botaoDireito").hide();
    $("#menuIniciar").removeClass("active");
    $(".desktop-icon").each(function (index) {
      if ($(this).hasClass("selected")) {
        $(this).removeClass("selected");
      }
    });
  });
  
  //CLICOU NO SEGREDO
  $("#segredo").dblclick(function () {
    window.open("https://curso.programacaoweb.com.br/black/");
  });
  
  //CLICOU COM BOTÃO DIREITO NA AREA DE TRABALHO
  //MENU ESPECIAL
  $(".area-de-trabalho").contextmenu(function (e) {
    var top = e.pageY;
    var left = e.pageX;
  
    var relY = top - $(this).offset().top;
    var relX = left - $(this).offset().left;
  
    console.log(`Top: ${relY}`);
    console.log(`Left: ${relX}`);
  
    $("#botaoDireito").css("top", relY);
    $("#botaoDireito").css("left", relX);
  
    $("#botaoDireito").show();
  });
  
  //SE ESTIVER COM MOUSE SOBRE SUB-MENU
  $(".sub-menu").hover(function () {
    // console.log("Sobre sub menu!");
    $(".menuExtra").css("display", "block");
  });
  
  //SE O MOUSE ESTIVER SOBRE UM ITEM NORMAL
  $(".item-menu").hover(function () {
    // console.log("Sobre sub menu!");
    $(".menuExtra").css("display", "none");
  });
  
  //SE O MOUSE SAIR DO SUBMENU
  $(".menuExtra").mouseleave(function () {
    // console.log("Saiu do sub menu!");
    $(".menuExtra").css("display", "none");
  });
  
  //PREVINIR QUE ABRA O MENU PADRÃO DO NAVEGADOR (BOTÃO DIREITO)
  $(document).contextmenu(function () {
    return false;
  });
  
  //CLICOU NO BOTÃO DE FECHAR DA JANELA
  $("button[aria-label=Close]").click(function () {
    $(".janela").hide();
    $(".prog").hide();
  });
  
  //CLICOU EM MINIMIZAR
  $("button[aria-label=Minimize]").click(function () {
    $(".janela").animate(
      {
        height: 0,
        width: "20px",
        top: $(window).height(),
        left: "140px"
      },
      200,
      function () {
        $(this).hide();
        $(".prog").removeClass("active");
      }
    );
  });
  
  //CLICOU EM MAXIMIZAR
  $("button[aria-label=Maximize]").click(function () {
    if ($(".janela").attr("data-status") == "restaurado") {
      $(".janela").animate(
        {
          height: "100%",
          width: "100%",
          top: 0,
          left: 0
        },
        200,
        function () {
          console.log("Maximizado");
          $(".janela").attr("data-status", "maximizado");
        }
      );
    } else {
      $(".janela").animate(
        {
          height: "400px",
          width: "600px",
          top: "25%",
          left: "27%"
        },
        200,
        function () {
          $(".prog").addClass("active");
          $(".janela").attr("data-status", "restaurado");
        }
      );
    }
  });
  
  //TORNAR JANELA REDIMENCIONAVEL
  $(".janela").resizable({
    minWidth: 200,
    minHeight: 50
  });
  
  //CLICOU NO PROGRAMA NA BARRA DE TAREFAS
  $(".prog").click(function () {
    if ($(this).hasClass("active")) {
      $(".janela").animate(
        {
          height: 0,
          width: "20px",
          top: $(window).height(),
          left: "140px"
        },
        200,
        function () {
          $(this).hide();
          $(".prog").removeClass("active");
        }
      );
    } else {
      $(".janela").show();
      if ($(".janela").attr("data-status") == "restaurado") {
        $(".janela").animate(
          {
            height: "400px",
            width: "600px",
            top: "25%",
            left: "27%"
          },
          200,
          function () {
            $(".prog").addClass("active");
          }
        );
      } else {
        $(".janela").animate(
          {
            height: "100%",
            width: "100%",
            top: 0,
            left: 0
          },
          200,
          function () {
            $(".prog").addClass("active");
          }
        );
      }
    }
  });
  