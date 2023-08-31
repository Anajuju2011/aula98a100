var SpeechRecognition = window.webkitSpeechRecognition; /* Explicação: a variável SpeechRecognition contém a API webkitSpeechRecognition (API Web Speech) que é usado para reconhecer o que estamos falando e converter o que foi dito em texto. */

var recognition = new SpeechRecognition();


var Textbox = document.getElementById("textbox");

function start()
{
    Textbox.innerHTML = ""; /* Explicação: sempre que o botão iniciar é pressionado, queremos que a área de texto fique vazia. */
   recognition.start();

}  

recognition.onresult = function(event) 
{

    console.log(event); 
   
   var Content = event.results[0][0].transcript; 
   
       Textbox.innerHTML = Content ; 
       console.log(Content);

       speak();  
}  /* Fim da aula 98 */ 

function speak()
{
var synth = window.speechSynthesis;
speakData = "Tirando sua selfie em 2 segundos";
var utterThis =  new SpeechSynthesisUtterance(speakData);
synth.speak(utterThis);
Webcam.attach(camera);
}

camera = document.getElementById("camera");
 Webcam.set
(
{
width:360,
height:250,
image_format:'jpeg',
jpeg_quality:90
}
);
