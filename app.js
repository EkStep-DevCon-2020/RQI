
let score =0;
let k=0;
let timer=60;
let scene = document.querySelector('a-scene');
let camera = document.querySelector('a-camera');
let scoreEl = document.querySelector('#score-element');
let spokeEl = document.querySelector('#spoke-element');
let levelEl = document.querySelector('#level-element');
//let phraseEl = document.querySelector('#phrase-element');
let phrases = [
  'I love to sing because it\'s fun',
  'where are you going',
  'can I call you tomorrow',
  'why did you talk while I was talking',
  'she enjoys reading books and playing games',
  'Devcon',
];

let phrases_hindi = [
"मेरे पापा का घर है।",
"आज स्वतंत्रता दिवस है।"
];
let recognition;
var masterData = ['love' , 'to' ,'sing' ,'because' ,'it\s' ,'fun','where' ,'are' ,'you' ,'going', 'can' ,'call' ,'tomorrow','why' ,'did' ,'talk','while','i' ,'was' ,'talking','she','enjoys' ,'reading' ,'books' ,'and' ,'playing' ,'games','where','devcon'];
var masterData_Hindi = ['आज', 'स्वतंत्रता', 'दिवस','मेरे', 'पापा', 'का' , 'घर', 'है।']

function getRandomNumber(x, y) {
  return Math.floor(Math.random() * x + y);
}

function randomPhrase() {
  var number = Math.floor(Math.random() * phrases.length);
  return number;
}


// get random hex color
function getRandomColor() {
  let letters = '0123456789abcdef';
  let randomColor = '';
  for (let i = 0; i < 6; i++) {
    randomColor += letters[Math.floor(Math.random() * 16)];
  }
  return randomColor;
}




let zh_position = -5
let zh_offset_speed = 4500
let timer_hindi = 20;
 function generateAllElementsHindi() {
  executehindi(function(cbh){
    timer_hindi = (timer_hindi - 5);
   k = Math.floor(Math.random() * phrases_hindi.length);
   testSpeechHindi();
   //z_offset_speed = z_offset_speed ;
   //z_position = z_position - 5;
   })
   
   console.log("before" + k);
 if (timer_hindi < 0) {
   setTimeout(function(){
   recognition.stop();
   scene.remove(spokeEl)
   let scoreRate  = (score/masterData_Hindi.length) * 100;
   console.log("the score rate" + scoreRate)
   let scoreElement = document.createElement('a-entity');
   scoreElement.setAttribute('position', `1.5 3.5 -4`);
  scoreElement.setAttribute('text', `value: Score: ${scoreRate.toFixed(2)} ; color: #000000 ; width:20`);
  scene.append(scoreElement);
     
     let accurarcyEl = document.createElement('a-entity');
     accurarcyEl.setAttribute('position', `7.5 3.5 -4`);
     accurarcyEl.setAttribute('text', `value: Accuracy : ${score} wpm ; color: #000000 ;width:20`);
       scene.append(accurarcyEl);
   },6000)
   
 }
 else {
   setTimeout(generateAllElementsHindi, 5000);
   }
  
 }

 function executehindi(cbh)
 {
   let phraseEl = document.createElement('a-entity');
   phraseEl.setAttribute('position', `${getRandomNumber(-5,5)} 2 ${zh_position}`);
   phraseEl.setAttribute('text', `anchor:center; width:4; font:Akshar Unicode-msdf.json; color: #000000 ;value: ${phrases_hindi[k]}`);
   phraseEl.setAttribute('animation__position', `property: object3D.position.z; to: 2.2; dir: alternate; dur: ${zh_offset_speed}; loop: false`);
   phraseEl.setAttribute('negate',`false`)
   scene.append(phraseEl);
   cbh & cbh();
 }

 
 function testSpeechHindi() {
   var spokeText ="";
   recognition =new webkitSpeechRecognition
   recognition.lang = 'hi-IN';
   recognition.interimResults = true;
   recognition.continuous = true;
   recognition.start();  
   console.log(recognition.lang);
   recognition.onresult = function(event) {
     
    for (var m = event.resultIndex; m < event.results.length; ++m) {
     if (event.results[m].isFinal) { 
       var speechResult = event.results[m][0].transcript.toLowerCase();
       console.log('the speech is ' , speechResult)
       spokeText = "You Spoke :" + speechResult;
     var res = speechResult.split(" ");
     
 res.forEach(element => {
   if (masterData_Hindi.indexOf(element) >= 0) {
     score = score+1   
     }
 });
}
   }
     console.log('the score is ' , score)
     spokeEl.setAttribute('position', `2 3.5 -4`);
     spokeEl.setAttribute('text', `anchor:center;value:${spokeText}; width:10`);

   }
 }
 
/////////////////////english ////////////////////////////////////


 let l=0;
 let z_position = -5
 let z_offset_speed = 4500
 let f = 20;
  function generateAllElementsEnglish() {
    execute(function(cb){
      f = (f - 5);
    l = Math.floor(Math.random() * phrases.length);
    testSpeechEnglish();
    //z_offset_speed = z_offset_speed ;
    //z_position = z_position - 5;
    })
    
    console.log("before" + l);
  if (f < 0) {
    setTimeout(function(){
    recognition.stop();
    scene.remove(spokeEl)
    let scoreRate  = (score/masterData.length) * 100;
    console.log("the score rate" + scoreRate)
    let scoreElement = document.createElement('a-entity');
    scoreElement.setAttribute('position', `1.5 3.5 -4`);
      scoreElement.setAttribute('text', `value: Score: ${scoreRate.toFixed(2)} ; color: #000000 ; width:10`);
      scene.append(scoreElement);
      
      let accurarcyEl = document.createElement('a-entity');
      accurarcyEl.setAttribute('position', `7.5 3.5 -4`);
      accurarcyEl.setAttribute('text', `value: Accuracy : ${score} wpm ; color: #000000 ;width:10`);
        scene.append(accurarcyEl);
    },6000)
    
  }
  else {
    setTimeout(generateAllElementsEnglish, 5000);
    }
   
  }

  function execute(cb)
  {
    let phraseEl = document.createElement('a-entity');
    phraseEl.setAttribute('position', `${getRandomNumber(-5,5)} 2 ${z_position}`);
    phraseEl.setAttribute('text', `anchor:center; width:4; color: #000000 ;value: ${phrases[l]}`);
    phraseEl.setAttribute('animation__position', `property: object3D.position.z; to: 2.2; dir: alternate; dur: ${z_offset_speed}; loop: false`);
    phraseEl.setAttribute('negate',`false`)
    scene.append(phraseEl);
    cb & cb();
  }

  
  function testSpeechEnglish() {
    var spokeText ="";
    recognition =new webkitSpeechRecognition
    recognition.lang = 'en-US';
    recognition.interimResults = true;
    recognition.continuous = true;
    recognition.start();  
    console.log(recognition.lang);
    recognition.onresult = function(event) {
      
     for (var m = event.resultIndex; m < event.results.length; ++m) {
      if (event.results[m].isFinal) { 
        var speechResult = event.results[m][0].transcript.toLowerCase();
        console.log('the speech is ' , speechResult)
        spokeText = "You Spoke :" + speechResult;
      var res = speechResult.split(" ");
      
  res.forEach(element => {
    if (masterData.indexOf(element) >= 0) {
      score = score+1   
      }
  });
}
    }
      console.log('the score is ' , score)
      spokeEl.setAttribute('position', `2 3.5 -4`);
      spokeEl.setAttribute('text', `anchor:center;value:${spokeText}; width:10`);

    }
  }
  

  console.log("the lang" + localStorage.getItem("language"))

if(localStorage.getItem("language") === "hi-IN")
{
  console.log("in hindi")
generateAllElementsHindi();
}
else {
  console.log("in english")
generateAllElementsEnglish();
}

