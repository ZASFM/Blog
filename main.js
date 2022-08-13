//VARIABLES:
let messageContainer=document.querySelector('#welcomeContainer');
let closeMessage=document.querySelector('#closeMessage');
//EVENTS:
window.addEventListener('click',function(c){
   if(c.target===messageContainer){
      messageContainer.style.display='none';
   }
});

closeMessage.addEventListener('click',function(){
   messageContainer.style.display='none';
})