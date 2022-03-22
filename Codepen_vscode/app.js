function Converter() {
    var elementoNumeroPlantas = document.getElementById("numero-plantas");
    var elementoEntreLinhas = document.getElementById("entre-linhas");
    var elementoEntrePlantas = document.getElementById("entre-plantas");
    var valorElementoNumeroPlantas = parseFloat(elementoNumeroPlantas.value);
    var valorElementoEntreLinhas = parseFloat(elementoEntreLinhas.value);
    var valorElementoEntrePlantas = parseFloat(elementoEntrePlantas.value);
  
    var resultadoCalculado =
      (valorElementoNumeroPlantas *
        (valorElementoEntreLinhas / 100) *
        (valorElementoEntrePlantas / 100)) /
      10000;
    var resultadoCalculadoArredondado = resultadoCalculado.toFixed(4);
  
    var elementoValorCalculado = document.getElementById("valorCalculado");
    var valorCalculado =
      "A área desse talhão é: " + resultadoCalculadoArredondado + " hectares.";
    elementoValorCalculado.innerHTML = valorCalculado;
  }
  
  //   var elementoValorConvertido = document.getElementById("valorConvertido");
  //   var valorConvertido = "O resultado em real é R$ " + valorEmReal;
  //   elementoValorConvertido.innerHTML = valorConvertido;
  