//VARIABLES:
let messageContainer=document.querySelector('#welcomeContainer');
let closeMessage=document.querySelector('#closeMessage');
//EVENTS:
window.addEventListener('click',function(e){
   let target=e.target;
   if(target===messageContainer){
      messageContainer.style.display='none';
   }
});

closeMessage.addEventListener('click',function(){
   messageContainer.style.display='none';
})