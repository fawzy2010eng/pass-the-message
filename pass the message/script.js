var button = document.getElementsByTagName('button')[0];
var alertmessage = document.getElementsByTagName('span')[0];
var deliverdmessage = document.getElementsByTagName('h3')[0];
var input = document.getElementsByTagName('input')[0];

button.addEventListener('click',function(){
    if(input.value == ''){
        alertmessage.textContent = 'PLEASE ENTER YOUR MESSAGE';
        deliverdmessage.textContent = ''
    }else{
        deliverdmessage.textContent = input.value;
        alertmessage.textContent = ''
    }
    
})