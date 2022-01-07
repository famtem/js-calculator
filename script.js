var inputNum = document.getElementById('userinput');
var inputNum2 = document.getElementById('userinput2');
var inputNum3 = document.getElementById('userinput3');
var inputNum4 = document.getElementById('userinput4');
var inputNum5 = document.getElementById('userinput5');
var inputNum6 = document.getElementById('userinput6');
var inputNum7 = document.getElementById('userinput7');
var inputNum8 = document.getElementById('userinput8');
var inputNum9 = document.getElementById('userinput9');
var inputNum0 = document.getElementById('userinput0');
var displayer = document.getElementById('display');
var addbtn = document.getElementById('addbtn');
var subtractbtn = document.getElementById('subbtn');
var rootbtn = document.getElementById('rootbtn');
var squarebtn = document.getElementById('sqaurebtn');
var solvebtn = document.getElementById('solve');
var operatorBtn ='';

var arrayOfNum = [];
var fn='';
// for disabling buttons

 function disableBtn(){
    inputNum.disabled=true
    inputNum2.disabled=true
    inputNum3.disabled=true
    inputNum4.disabled=true
    inputNum5.disabled=true
    inputNum6.disabled=true
    inputNum7.disabled=true
    inputNum8.disabled=true
    inputNum9.disabled=true
    inputNum0.disabled=true
    addbtn.disabled=true
    subbtn.disabled=true
    rootbtn.disabled=true
    solvebtn.disabled=true
 }

//for enable button
function enableBtn(){
    inputNum.disabled=false
    inputNum2.disabled=false
    inputNum3.disabled= false
    inputNum4.disabled=false
    inputNum5.disabled=false
    inputNum6.disabled= false
    inputNum7.disabled=false
    inputNum8.disabled=false
    inputNum9.disabled=false
    inputNum0.disabled= false
    addbtn.disabled=false
    subbtn.disabled=false
    rootbtn.disabled=false
}
//

function addNums(val){
    // disable the equals buttons
   
    if(arrayOfNum.length<2){
        fn= displayer.value += val;              
     }else if(arrayOfNum.length=2){
        fn= displayer.value += val;
        displayer.value;
        addbtn.disabled=true;
        subbtn.disabled=true;
     } 
}


//

function addBtn(){
      operatorBtn= '+'
      subbtn.disabled=true;
      rootbtn.disabled=true;
      if(arrayOfNum.length<2){
        arrayOfNum.push(fn);
        console.log(arrayOfNum)
        displayer.value='';
        fn="";
        
     }else if(arrayOfNum.length=2){
        displayer.value
        arrayOfNum.push(fn);
        addbtn.disabled=true;
        console.log(arrayOfNum)
        inputNum.disabled=true
        inputNum2.disabled=true
        inputNum3.disabled=true

        inputNum9.disabled=true
     }else{
         console.log('')
     }
}
//subtract function

function minusBtn(){
    operatorBtn= '-'
    addbtn.disabled=true;
    rootbtn.disabled=true;
    if(arrayOfNum.length<2){
      arrayOfNum.push(fn);
      console.log(arrayOfNum)
      displayer.value='';
      fn="";
      
   }else if(arrayOfNum.length=2){
      subbtn.disabled=true;
      displayer.value
      arrayOfNum.push(fn);
      console.log(arrayOfNum)
      inputNum.disabled=true
      inputNum2.disabled=true
      inputNum3.disabled=true

      inputNum9.disabled=true
   }else{
       console.log('')
   }
}

//divide button

function divideBtn(){
    operatorBtn= '/'
    subbtn.disabled=true;
    rootbtn.disabled=true;
    addbtn.disabled=true
   // squarebtn.disabled=true
    if(arrayOfNum.length<2){
      arrayOfNum.push(fn);
      console.log(arrayOfNum)
      displayer.value='';
      fn="";
      
   }else if(arrayOfNum.length=2){
      displayer.value
      arrayOfNum.push(fn);
      addbtn.disabled=true;
      console.log(arrayOfNum)
      inputNum.disabled=true
      inputNum2.disabled=true
      inputNum3.disabled=true

      inputNum9.disabled=true
   }else{
       console.log('')
   }
}

//

function solveMath(){
    if (operatorBtn=="+") {
         disableBtn();
        arrayOfNum.push(fn);
        console.log(arrayOfNum)
        var total = 0;
        for (var i = 0; i < arrayOfNum.length; i++, arrayOfNum[i]) {
            total +=parseInt(arrayOfNum[i])
        }
        displayer.value=arrayOfNum.join(' + ')+ "="+ total;
        console.log(total);
    } else if (operatorBtn=="-") {
        disableBtn();
        arrayOfNum.push(fn);
        console.log(arrayOfNum)
        var total =arrayOfNum[0];
        for (var i = 1, length = arrayOfNum.length; i < length; i++) {
            total -=(arrayOfNum[i])
        }
        displayer.value=arrayOfNum.join(' - ')+ "="+ total;
        console.log(total);
    }else if (operatorBtn=="/") {
        //disableBtn();
        arrayOfNum.push(fn);
        console.log(arrayOfNum)
        var total =arrayOfNum[0];
        for (var i = 0; i < arrayOfNum.length; i++, arrayOfNum[i]) {
            total =(arrayOfNum[0]/arrayOfNum[1]);
        }
        displayer.value=arrayOfNum.join(' / ')+ "="+ total;
        console.log(total);
        disableBtn();
    } else {
        
    }
   
}

//

function squarerootBtn(val){  
   // disableBtn();
console.log(val)
   displayer.value = val
   root= Math.sqrt(fn);
   displayer.value = root;
}

//

function squareBtn(){  
    disableBtn();
    solvebtn.disabled = true;
    rootbtn.disabled = true
   square= fn*fn; 
   displayer.value = square;
}

// this function resets the calculation

function resetCalculator(){
    arrayOfNum =[];
    fn ="";
    val='';
    displayer.value='';
    enableBtn();
    solvebtn.disabled=false;
    console.log(arrayOfNum+'reset done')
}

