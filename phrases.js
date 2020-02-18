let phrases_level1 = [
    'where are you going',
    'can I call him tomorrow',
    'she enjoys reading books and playing games',
    'Devcon',
  ];

let phrases_level2 = [
    'I like three fruits: apple, banana, and lemon',
    'i want write, read, and speak English perfectly',
    'Study english Pronounciation'
 ] 


 let phrases_level3 = [
    'A peck of pickled peppers Peter Piper picked',
    'These sheep shouldn\'t sleep in a shack',
    'Zebras zig'
 ] 

  let phrases_hindi_level1 = [
  "मेरे पापा का घर है।",
  "आज स्वतंत्रता दिवस है।"
  ];

  let phrases_hindi_level2 = [
    "मेरे पापा का घर है।",
    "आज स्वतंत्रता दिवस है।"
    ];
    
    let phrases_hindi_level3 = [
        "मेरे पापा का घर है।",
        "आज स्वतंत्रता दिवस है।"
        ];


  let masterData_english = [];
  let masterData_hindi = [];

  phrases_level1.forEach(element  => {
    var data = element.split(" ");
    data.forEach(element => {
    masterData_english.push(element);
}); 
  });

  phrases_level2.forEach(element  =>{
    var data = element.split(" ");
    data.forEach(element => {
    masterData_english.push(element);
}); 
   })

   phrases_level3.forEach(element  =>{
    var data = element.split(" ");
    data.forEach(element => {
    masterData_english.push(element);
}); 
   })
   phrases_hindi_level1.forEach(element  => {
    var data = element.split(" ");
    data.forEach(element => {
        masterData_hindi.push(element);
}); 
  });

  phrases_hindi_level2.forEach(element  =>{
    var data = element.split(" ");
    data.forEach(element => {
        masterData_hindi.push(element);
}); 
   })

   phrases_hindi_level3.forEach(element  =>{
    var data = element.split(" ");
    data.forEach(element => {
    masterData_hindi.push(element);
}); 
   })


   console.log(masterData_english);