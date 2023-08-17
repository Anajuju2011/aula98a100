var SpeechRecognition = window.webkitSpeechRecognition; /* Explicação: a variável SpeechRecognition contém a API webkitSpeechRecognition (API Web Speech) que é usado para reconhecer o que estamos falando e converter o que foi dito em texto. */

/* Da mesma forma que criamos um humano, crie um novo API */


var Textbox = document.getElementById("textbox");

function () /* Chamar a função start */
{
    Textbox.innerHTML = ""; /* Explicação: sempre que o botão iniciar é pressionado, queremos que a área de texto fique vazia. */
    /* Chamar abaixo a função start() para API Web Speech que criamos */

}  

recognition. = function(event) /* Chamar a função onresult. A função onresult contém todos os valores da fala convertidos em texto. */
{

    console.log(event); 
   
   var Content = event.results[0][0].transcript; /* Explicação: event.results[0][0].transcript é o local no console que tem nossa saída de voz para
   texto, portanto, vamos armazená-la dentro de uma variável e daremos o nome de Content */
   
       Textbox.innerHTML = ; /* Chamar a variável Content */
       console.log(); /* Chamar a variável Content */

        
}  /* Fim da aula 98 */ 
