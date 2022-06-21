function calculadora() {
    const operacao =  Number(prompt('Escolha qual operação você quer fazer:\n1- Soma (+)\n2- Subtração (-) \n3- Multiplicação (*)\n4- Divisão real (/) \n5- Divisão inteira (%)\n6- Potenciação (**)'));

    if(!operacao || operacao >= 7){
        alert('Erro - Operação inválida, digite um número entre 1 e 6!\n Tente novamente.');
        calculadora();
    } else {

    let numero1 = Number(prompt('Insira o primeiro valor:'));
    let numero2 =  Number(prompt('Insira o segundo valor:'));
    let resultado;

    if(!numero1 || !numero2) {
        alert('Erro - Parâmetros inválidos');
        calculadora();
    } else {    

    function soma(){
        resultado = numero1 + numero2;
        alert(`Essa é uma operação de soma o resultado é:\n${numero1} + ${numero2} = ${resultado} `);
        novaOperacao();
    }
    function subtracao(){
        resultado = numero1 - numero2;
        alert(`Essa é uma operação de subtração o resultado é:\n${numero1} - ${numero2} = ${resultado} `);
        novaOperacao();
    }
    function multiplicacao(){
        resultado = numero1 * numero2;
        alert(`Essa é uma operação de multiplicação o resultado é:\n${numero1} * ${numero2} = ${resultado} `);
        novaOperacao();
    }
    function divReal(){
        resultado = numero1 / numero2;
        alert(`Essa é uma operação que mostra a divisão entre:\n${numero1} / ${numero2} = ${resultado} `);
        novaOperacao();
    }
    function divInteira(){
        resultado = numero1 % numero2;
        alert(`Essa é uma operação que mostra o resto entre:\n${numero1} % ${numero2} que tem como resto ${resultado} `);
        novaOperacao();
    }
    function potenciacao(){
        resultado = numero1 ** numero2;
        alert(`Essa é uma operação de elevar o número ${numero1} a ${numero2}ª\n O resultado foi ${resultado} `);
        novaOperacao();
    }

    function novaOperacao(){
        let opcao = prompt('Deseja fazer outra operação ?\n1- Sim\n2- Não');
        if(opcao ==1){
            calculadora();
        } else if (opcao == 2){
            alert('Até mais! ♥');
            return;
        } else {
            alert('Digite uma opção válida');
            novaOperacao();
        }
      }
    }
    

    if(operacao == 1){
        soma(); 
    } else if (operacao == 2){
        subtracao();
    } else if (operacao == 3){
        multiplicacao();
    } else if (operacao == 4){
        divReal();
    } else if (operacao == 5){
        divInteira();
    } else if (operacao == 6){
        potenciacao();
    } 

   }

}
calculadora();