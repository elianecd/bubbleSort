document.addEventListener('DOMContentLoaded', function () {
  let numberArray = [] //criando arrays vazias
  let letterArray = []

  const numberInput = document.getElementById('numberInput') //está buscando o elemento HTML que tem o ID 'numberInput' e armazenando-o na constante numberInput.
  const letterInput = document.getElementById('letterInput') //são selecionados os elementos HTML que serão manipulados, como os campos de entrada.
  const numberAddBtn = document.getElementById('numberAddBtn')
  const letterAddBtn = document.getElementById('letterAddBtn')
  const increasingBtn = document.getElementById('increasingBtn')
  const decreasingBtn = document.getElementById('decreasingBtn')
  const alphabeticBtn = document.getElementById('alphabeticBtn')
  const reverseAlphabeticBtn = document.getElementById('reverseAlphabeticBtn')
  const numbersResultBox = document.getElementById('numbersResultBox')
  const lettersResultBox = document.getElementById('lettersResultBox')
  const numberDelete = document.getElementById('numberDelete')
  const letterDelete = document.getElementById('letterDelete')
  const numberDeleteBtn = document.getElementById('numberDeleteBtn')
  const letterDeleteBtn = document.getElementById('letterDeleteBtn')

  numberAddBtn.addEventListener('click', function () {
    const number = parseInt(numberInput.value) //parseInt converte uma string em um número inteiro //O valor é acessado usando a propriedade value do objeto JavaScript que representa o elemento numberInput.
    if (!isNaN(number)) { //NaN (Not-a-Number).
      numberArray.push(number); //push adiciona um ou mais elementos ao final de uma matriz e retorna o novo comprimento da matriz.
      updateOutput('numbers')
      numberInput.value = ''; //limpa o campo de entrada e permite que o usuário insira um novo número.
      //console.log('Number Array:', numberArray);
    }
  });

  letterAddBtn.addEventListener('click', function () {
    const letter = letterInput.value.trim() //trim remove quaisquer espaços em branco no início ou no final da string. Ele retorna uma nova string que é uma cópia da string original sem os espaços em branco no início ou no final.
    if (letter.length === 1) { //uma verificação para garantir que a string contenha apenas um caractere
      letterArray.push(letter);
      updateOutput('letters');
      letterInput.value = ''; // Limpar input
    }
  });

  increasingBtn.addEventListener('click', function () { //o increasingBtn nao eh o nome da funcao e sim uma referencia a um elemento HTML, entao oq esta dentro desses {} eh o corpo da funcao anonima e 'function ()' eh a declaracao dessa funcao anonima que eh declarada e chamada ao clicar nesse botao.
    numberArray.sort((a, b) => a - b); //=>: É o operador de função flecha, que é usado para definir uma função anônima em uma única linha.
    updateOutput('numbers');
  });

  decreasingBtn.addEventListener('click', function () {
    numberArray.sort((a, b) => b - a);
    updateOutput('numbers')
  });

  alphabeticBtn.addEventListener('click', function () {
    letterArray.sort(); //está classificando a matriz letterArray em ordem alfabética usando o método sort sem nenhuma função de comparação.
    updateOutput('letters');
  });

  reverseAlphabeticBtn.addEventListener('click', function () {
    letterArray.sort().reverse()
    updateOutput('letters')
  });

  numberDeleteBtn.addEventListener('click', function() {
    const numberDel = parseInt(numberDelete.value);
    const indexToDeleteNumber = numberArray.indexOf(numberDel); // Find the index of the number to delete
    //O método indexOf retorna -1 quando o elemento não é encontrado na array.
    if (indexToDeleteNumber === -1) { // Check if the number was found in the array
      alert('Número não encontrado na lista.');
      return;
    }

    numberArray.splice(indexToDeleteNumber, 1); // Delete the number from the array
    numberDelete.value = ''; // Clear the input field
    updateOutput('numbers');
  })

  letterDeleteBtn.addEventListener('click', function() {
    const letterDel = letterDelete.value.trim().toLowerCase(); //Obtém a letra a ser deletada do valor do input, remove espaços em branco e converte para minúsculas
    const indexToDeleteLetter = letterArray.indexOf(letterDel); // Encontra o índice da letra na array de letras

    if (indexToDeleteLetter === -1) { // Verifica se a letra foi encontrada na array
      alert('Letra não encontrada na lista.');
      return;
    }

    letterArray.splice(indexToDeleteLetter, 1); // Remove a letra da array. 1: Este é o número de elementos a serem removidos a partir do índice especificado.
    letterDelete.value = ''; // Limpa o valor do input
    updateOutput('letters'); // Atualiza a saída na tela para refletir as mudanças na array de letras
  });

  function updateOutput(type) {
    const resultBox = type === 'numbers' ? numbersResultBox : lettersResultBox //printa as listas dos numeros e letras que estao sendo adicionados
    const dataArray = type === 'numbers' ? numberArray : letterArray //printa as listas ordenadas

    // O `innerHTML` é uma propriedade do objeto `Element` em JavaScript que permite que você obtenha ou defina o conteúdo HTML de um elemento.
    // A string entre crases ( ) é um template literal, que permite que você inserir expressões dentro de uma string usando ${} e concatenar strings usando +.
    //aqui o resultBox define 
    resultBox.innerHTML = ` 
          <p>${type === 'numbers' ? 'Números' : 'Letras'}: ${dataArray.join(
      ', '
    )}</p>
        `
  }
});

