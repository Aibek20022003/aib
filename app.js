const input=document.querySelector('input')
const h1=document.querySelector('h1')

const userName=['anna','aziza','cilic','nan',]

input.onchange=()=>{
   if (userName[0] === input.value) {
    h1.innerHTML=input.value + ' туура'
   }else if(userName[1] === input.value){
    h1.innerHTML=input.value + ' туура'

   }else if(userName[2] === input.value){
    h1.innerHTML=input.value + ' туура'

   }else if(userName[3] === input.value){
    h1.innerHTML=input.value + ' туура'

   }
    else {
    h1.innerHTML=input.value+' туура эмес'
   } 
}