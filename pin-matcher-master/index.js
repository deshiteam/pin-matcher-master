// Random Code Genarator Section

const generatePin = document.getElementById("generatePin");
generatePin.addEventListener("click", function(){
const pin = Math.floor(1000+(Math.random()*9000));
const pinScreen = document.getElementById("pinScreen").value = pin;

// Input For Varification Section

})
let screen = document.getElementById('screen');
buttons = document.getElementsByClassName('button');
result = []
for(item of buttons){
    item.addEventListener('click', (e)=>{
    buttonText = e.target.innerText;
    if (buttonText == 'C'){
        screenValue = "";
        screen.value = screenValue;
    }else if(buttonText == '<'){
        screenValue = screen.value.slice (0,-1);
        screen.value = screenValue;
    }else{
        screenValue = document.getElementById('screen').value += buttonText;

        // screen.value = screenValue;
    }
    
   

    })
}

// Varification Result Section

let submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', function(){
    if(pinScreen.value == screen.value && (pinScreen.value != '' && screen.value !='')){
     const notifyMatch = document.getElementById('notify-match');
     notifyMatch.style.display = "block";

    }else{
        const notifyNotMatch = document.getElementById('notify-notmatch');
        notifyNotMatch.style.display = "block";
        const limit = document.getElementById('limit').innerText;
        const newLimit = limit.innerText = limit -1;
        document.getElementById('limit').innerText = newLimit;
        if(newLimit == 0){
            submitButton = document.getElementById('submitButton');
            submitButton.style.display = "none";
        }
    }


})
